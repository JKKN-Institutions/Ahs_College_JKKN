import { CityPageContent } from "@/components/sections/CityPageContent";
import { getCityBySlug } from "@/lib/city-pages";

const city = getCityBySlug("bhavani")!;

export default function BhavaniPage() {
  return <CityPageContent city={city} />;
}
