import ServiceStoryPage from "@/pages/services/ServiceStoryPage";
import { deepCleansePage } from "@/data/site";

export default function DeepCleansePage() {
  return (
    <ServiceStoryPage
      serviceId="limpieza-facial-profunda"
      bannerSrc={deepCleansePage.bannerSrc}
      bannerAlt={deepCleansePage.bannerAlt}
      bannerLabel={deepCleansePage.bannerLabel ?? deepCleansePage.title}
    />
  );
}
