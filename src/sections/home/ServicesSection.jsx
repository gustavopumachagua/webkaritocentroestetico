import { imageAssets } from "@/assets/images";
import ServiceCard from "@/components/home/ServiceCard";
import PillList from "@/components/ui/PillList";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import { services, servicesIntro } from "@/data/site";

const imagesByServiceId = {
  "facial-cleanse": imageAssets.services.serviceFacialCleanse,
  "facial-treatment": imageAssets.services.serviceFacialTreatment,
  "body-treatment": imageAssets.services.serviceBodyTreatment,
};

export default function ServicesSection() {
  return (
    <SectionShell id="servicios" tone="white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={servicesIntro.eyebrow}
          title={
            <>
              {servicesIntro.titleStart}{" "}
              <span className="text-[var(--color-primary)]">
                {servicesIntro.titleHighlight}
              </span>{" "}
              {servicesIntro.titleEnd}
            </>
          }
          description={servicesIntro.description}
          centered
          tone="warm"
          className="mx-auto"
          titleClassName="max-w-4xl"
          descriptionClassName="max-w-3xl mx-auto"
        />
        <PillList items={servicesIntro.pills} centered className="mt-8" />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {services.map((service, index) => {
            const itemNumber = String(index + 1).padStart(2, "0");
            return (
              <ServiceCard
                key={service.id}
                service={service}
                image={imagesByServiceId[service.id]}
                itemNumber={itemNumber}
              />
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
