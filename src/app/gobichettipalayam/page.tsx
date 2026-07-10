import { CityPageContent } from "@/components/sections/CityPageContent";
import { getCityBySlug } from "@/lib/city-pages";

const city = getCityBySlug("gobichettipalayam")!;

export default function GobichettipalayamPage() {
  return <CityPageContent city={city} />;
}
