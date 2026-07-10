import { CityPageContent } from "@/components/sections/CityPageContent";
import { getCityBySlug } from "@/lib/city-pages";

const city = getCityBySlug("karur")!;

export default function KarurPage() {
  return <CityPageContent city={city} />;
}
