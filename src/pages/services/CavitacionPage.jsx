import ServiceStoryPage from "@/pages/services/ServiceStoryPage";
import { cavitacionPage } from "@/data/site";

export default function CavitacionPage() {
  return (
    <ServiceStoryPage
      serviceId="reductor"
      bannerSrc={cavitacionPage.bannerSrc}
      bannerAlt={cavitacionPage.bannerAlt}
      bannerLabel={cavitacionPage.bannerLabel ?? cavitacionPage.title}
    />
  );
}
