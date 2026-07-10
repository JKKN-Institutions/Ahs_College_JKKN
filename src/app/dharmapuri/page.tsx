import { CityPageContent } from "@/components/sections/CityPageContent";
import { getCityBySlug } from "@/lib/city-pages";

const city = getCityBySlug("dharmapuri")!;

export default function DharmapuriPage() {
  return <CityPageContent city={city} />;
}
