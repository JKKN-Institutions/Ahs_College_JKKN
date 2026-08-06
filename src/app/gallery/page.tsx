import { createClient } from '@/lib/supabase/server';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import AlbumCarousel from './AlbumCarousel';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';

export const revalidate = 60;

const hardcodedAlbums = [
  {
    id: 'hc-lab',
    name: 'Learning Labs',
    images: [
      { url: '/lab/allied health science lab1.webp', caption: 'Allied Health Science Learning Lab 1' },
      { url: '/lab/allied health science lab2.webp', caption: 'Allied Health Science Learning Lab 2' },
      { url: '/lab/allied health science lab3.webp', caption: 'Allied Health Science Learning Lab 3' },
    ],
  },
  {
    id: 'hc-classroom',
    name: 'Learning Studios',
    images: [
      { url: '/classroom/digital-class-room-1.webp', caption: 'Digital Learning Studio 1' },
      { url: '/classroom/digital-class-room-3.webp', caption: 'Digital Learning Studio 2' },
    ],
  },
  {
    id: 'hc-library',
    name: 'Learning Commons',
    images: [
      { url: '/library/library-1.png', caption: 'Learning Commons' },
      { url: '/library/library-1.webp', caption: 'Learning Commons Reading Area' },
      { url: '/library/library-3.png', caption: 'Learning Commons Collection' },
    ],
  },
  {
    id: 'hc-foodcourt',
    name: 'Food Court',
    images: [
      { url: '/food court/allied health science food court.png', caption: 'Food Court' },
      { url: '/food court/allied health science food court1.png', caption: 'Food Court 2' },
      { url: '/food court/allied health science food court22.png', caption: 'Food Court 3' },
    ],
  },
  {
    id: 'hc-hostel',
    name: 'Hostel',
    images: [
      { url: '/images/boys-hostel.webp', caption: 'Boys Hostel' },
      { url: '/images/girls-hostel.webp', caption: 'Girls Hostel' },
    ],
  },
];

export default async function GalleryPage() {
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  const { data: albums } = await supabase
    .from('gallery_albums')
    .select('id, name, description, cover_image_url, created_at')
    .eq('college_id', collegeId)
    .order('created_at', { ascending: false });

  const hasAdminAlbums = albums && albums.length > 0;

  // Fetch images for each admin album
  const adminAlbums = hasAdminAlbums
    ? await Promise.all(
        albums.map(async (album) => {
          const { data: images } = await supabase
            .from('gallery_images')
            .select('id, image_url, caption, display_order')
            .eq('album_id', album.id)
            .order('display_order', { ascending: true });
          return {
            id: album.id,
            name: album.name,
            images: (images ?? []).map((img) => ({
              url: img.image_url,
              caption: img.caption ?? album.name,
            })),
          };
        })
      )
    : [];

  const displayAlbums = hasAdminAlbums ? adminAlbums : hardcodedAlbums;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://ahs.jkkn.ac.in/" },
    { name: "Gallery", url: "https://ahs.jkkn.ac.in/gallery" }
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBEE]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <main className="flex-grow pt-4 md:pt-20 lg:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0b6d41] mb-2">Gallery</h1>
          <p className="text-gray-500 mb-10">A glimpse into life at JKKN Allied Health Sciences</p>

          {displayAlbums.map((album) => (
            <AlbumCarousel key={album.id} name={album.name} images={album.images} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
