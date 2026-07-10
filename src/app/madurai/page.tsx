import { CityPageContent } from "@/components/sections/CityPageContent";
import { getCityBySlug } from "@/lib/city-pages";

const city = getCityBySlug("madurai")!;

export default function MaduraiPage() {
  return <CityPageContent city={city} />;
}
