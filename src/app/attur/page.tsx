import { CityPageContent } from "@/components/sections/CityPageContent";
import { getCityBySlug } from "@/lib/city-pages";

const city = getCityBySlug("attur")!;

export default function AtturPage() {
  return <CityPageContent city={city} />;
}
