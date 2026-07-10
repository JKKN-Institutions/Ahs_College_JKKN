import { CityPageContent } from "@/components/sections/CityPageContent";
import { getCityBySlug } from "@/lib/city-pages";

const city = getCityBySlug("tiruchengode")!;

export default function TiruchengodePage() {
  return <CityPageContent city={city} />;
}
