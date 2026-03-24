/**
 * Generates BreadcrumbList JSON-LD schema from a page hierarchy.
 * Usage: generateBreadcrumbSchema([{ name: 'Home', url: 'https://ahs.jkkn.ac.in/' }, { name: 'Departments', url: '...' }, ...])
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}
