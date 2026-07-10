import { CityPageContent } from "@/components/sections/CityPageContent";
import { getCityBySlug } from "@/lib/city-pages";

const city = getCityBySlug("mettur")!;

export default function MetturPage() {
  return <CityPageContent city={city} />;
}
