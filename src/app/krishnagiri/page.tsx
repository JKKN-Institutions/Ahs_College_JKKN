import { CityPageContent } from "@/components/sections/CityPageContent";
import { getCityBySlug } from "@/lib/city-pages";

const city = getCityBySlug("krishnagiri")!;

export default function KrishnagiriPage() {
  return <CityPageContent city={city} />;
}
