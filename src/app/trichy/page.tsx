import { CityPageContent } from "@/components/sections/CityPageContent";
import { getCityBySlug } from "@/lib/city-pages";

const city = getCityBySlug("trichy")!;

export default function TrichyPage() {
  return <CityPageContent city={city} />;
}
