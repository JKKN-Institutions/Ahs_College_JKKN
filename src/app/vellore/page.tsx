import { CityPageContent } from "@/components/sections/CityPageContent";
import { getCityBySlug } from "@/lib/city-pages";

const city = getCityBySlug("vellore")!;

export default function VellorePage() {
  return <CityPageContent city={city} />;
}
