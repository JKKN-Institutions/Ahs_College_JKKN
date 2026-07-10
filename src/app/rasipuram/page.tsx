import { CityPageContent } from "@/components/sections/CityPageContent";
import { getCityBySlug } from "@/lib/city-pages";

const city = getCityBySlug("rasipuram")!;

export default function RasipuramPage() {
  return <CityPageContent city={city} />;
}
