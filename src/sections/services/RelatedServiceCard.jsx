export default function RelatedServiceCard({ title, image }) {
  return (
    <div className="group relative overflow-hidden rounded-[1.5rem] border border-[rgba(0,0,0,0.06)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-[14rem] w-full object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
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
