import { buildCityMetadata, buildCitySchemas, getCityBySlug } from "@/lib/city-pages";

const city = getCityBySlug("tiruchengode")!;

export const metadata = buildCityMetadata(city);

export default function TiruchengodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {buildCitySchemas(city).map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  );
}
