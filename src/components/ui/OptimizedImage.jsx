import { useState } from "react";

function normalizeImageSource(value) {
  if (value && typeof value === "object" && "src" in value) {
    return {
      src: value.src ?? "",
      fallbackSrc: value.fallbackSrc ?? "",
    };
  }

  return {
    src: value ?? "",
    fallbackSrc: "",
  };
}

function normalizePictureSource(source, useFallback) {
  const candidate = normalizeImageSource(source.srcSet);
  const srcSet = useFallback
    ? candidate.fallbackSrc || candidate.src
    : candidate.src;

  if (!srcSet) {
    return null;
  }

  return {
    ...source,
    srcSet,
  };
}

function getFallbackSrc(currentSrc, primaryImage, sources) {
  const matchedSource = sources
    .map((source) => normalizeImageSource(source.srcSet))
    .find((candidate) => candidate.src && candidate.src === currentSrc);

  return matchedSource?.fallbackSrc || primaryImage.fallbackSrc || "";
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  skeletonClassName = "",
  backgroundClassName = "",
  backgroundFill,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  fit,
  sizes,
  style,
  width,
  height,
  onLoad,
  onError,
  sources = [],
  ...props
}) {
  const primaryImage = normalizeImageSource(src);
  const [imageState, setImageState] = useState(() => ({
    src: primaryImage.src,
    primarySrc: primaryImage.src,
    status: primaryImage.src ? "loading" : "error",
    usingFallback: false,
  }));

  const hasCurrentImage = imageState.primarySrc === primaryImage.src;
  const activeSrc = hasCurrentImage ? imageState.src : primaryImage.src;
  const status = hasCurrentImage
    ? imageState.status
    : primaryImage.src
      ? "loading"
      : "error";
  const usingFallback = hasCurrentImage ? imageState.usingFallback : false;
  const activeSources = sources
    .map((source) => normalizePictureSource(source, usingFallback))
    .filter(Boolean);
  const isLoaded = status === "loaded";
  const isErrored = status === "error";
  const shouldFillBackground =
    backgroundFill ?? (fit === "contain" && Boolean(activeSrc));
  const imageStyle = fit
    ? {
        ...style,
        objectFit: fit,
        ...(fit === "contain" ? { transform: "none" } : {}),
      }
    : style;

  return (
    <span
      className={`optimized-image relative block overflow-hidden bg-[var(--color-image-base)] ${wrapperClassName}`.trim()}
      data-loaded={isLoaded}
      data-error={isErrored}
    >
      {shouldFillBackground && !isErrored ? (
        <picture aria-hidden="true">
          {activeSources.map((source) => (
            <source
              key={`background-${source.media ?? "default"}-${source.srcSet}`}
              media={source.media}
              sizes={source.sizes ?? sizes}
              srcSet={source.srcSet}
              type={source.type}
            />
          ))}
          <img
            src={activeSrc}
            alt=""
            loading={loading}
            decoding={decoding}
            fetchPriority={fetchPriority}
            sizes={sizes}
            className={`absolute inset-0 h-full w-full scale-110 object-cover opacity-55 blur-2xl saturate-110 ${backgroundClassName}`.trim()}
          />
        </picture>
      ) : null}
      <span
        aria-hidden
        className={`optimized-image__skeleton absolute inset-0 transition-opacity duration-500 ${
          isLoaded || isErrored ? "opacity-0" : "opacity-100"
        } ${skeletonClassName}`.trim()}
      />
      {!isErrored ? (
        <picture>
          {activeSources.map((source) => (
            <source
              key={`${source.media ?? "default"}-${source.srcSet}`}
              media={source.media}
              sizes={source.sizes ?? sizes}
              srcSet={source.srcSet}
              type={source.type}
            />
          ))}
          <img
            key={activeSrc}
            src={activeSrc}
            alt={alt}
            loading={loading}
            decoding={decoding}
            fetchPriority={fetchPriority}
            sizes={sizes}
            width={width}
            height={height}
            style={imageStyle}
            className={`relative z-[1] transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${className}`.trim()}
            onLoad={(event) => {
              setImageState({
                src: activeSrc,
                primarySrc: primaryImage.src,
                status: "loaded",
                usingFallback,
              });
              onLoad?.(event);
            }}
            onError={(event) => {
              const fallbackSrc = usingFallback
                ? ""
                : getFallbackSrc(
                    event.currentTarget.currentSrc || activeSrc,
                    primaryImage,
                    sources,
                  );

              if (fallbackSrc && fallbackSrc !== activeSrc) {
                setImageState({
                  src: fallbackSrc,
                  primarySrc: primaryImage.src,
                  status: "loading",
                  usingFallback: true,
                });
                return;
              }

              setImageState({
                src: activeSrc,
                primarySrc: primaryImage.src,
                status: "error",
                usingFallback,
              });
              onError?.(event);
            }}
            {...props}
          />
        </picture>
      ) : null}
    </span>
  );
}
