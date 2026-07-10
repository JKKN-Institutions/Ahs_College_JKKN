import { buildCityMetadata, buildCitySchemas, getCityBySlug } from "@/lib/city-pages";

const city = getCityBySlug("bhavani")!;

export const metadata = buildCityMetadata(city);

export default function BhavaniLayout({
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
