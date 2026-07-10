import { CityPageContent } from "@/components/sections/CityPageContent";
import { getCityBySlug } from "@/lib/city-pages";

const city = getCityBySlug("sankagiri")!;

export default function SankagiriPage() {
  return <CityPageContent city={city} />;
}
