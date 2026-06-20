import OptimizedImage from "@/components/ui/OptimizedImage";

export default function RelatedServiceCard({ title, image }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-[rgba(0,0,0,0.06)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <OptimizedImage
          src={image}
          alt={title}
          wrapperClassName="h-[14rem] w-full"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          fit="contain"
          loading="lazy"
          sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-sm sm:text-base font-semibold text-[#1a1a1a] leading-snug transition group-hover:text-[var(--color-primary)]">
          {title}
        </h3>
      </div>
    </div>
  );
}
