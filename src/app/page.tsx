import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrapbookEntry from "@/components/ScrapbookEntry";
// import DestinationGallery from "@/components/DestinationGallery";
import DestinationsSlideshow from "@/components/DestinationsSlideshow";
import Image from "next/image"; // This was missing
import data from "@/data.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <Image
            src="/images/super.jpg"
            alt="Decorative background image"
            layout="responsive"
            width={3000}
            height={4000}
            objectFit="cover"
            className="opacity-20"
          />
          <Image
            src="/images/super.jpg"
            alt="Decorative background image"
            layout="responsive"
            width={3000}
            height={4000}
            objectFit="cover"
            className="opacity-20"
          />
          <Image
            src="/images/super.jpg"
            alt="Decorative background image"
            layout="responsive"
            width={3000}
            height={4000}
            objectFit="cover"
            className="opacity-20"
          />
          <Image
            src="/images/super.jpg"
            alt="Decorative background image"
            layout="responsive"
            width={3000}
            height={4000}
            objectFit="cover"
            className="opacity-20"
          />
          <Image
            src="/images/super.jpg"
            alt="Decorative background image"
            layout="responsive"
            width={3000}
            height={4000}
            objectFit="cover"
            className="opacity-20"
          />
          <Image
            src="/images/super.jpg"
            alt="Decorative background image"
            layout="responsive"
            width={3000}
            height={4000}
            objectFit="cover"
            className="opacity-20"
          />
          <Image
            src="/images/super.jpg"
            alt="Decorative background image"
            layout="responsive"
            width={3000}
            height={4000}
            objectFit="cover"
            className="opacity-20"
          />
          <Image
            src="/images/super.jpg"
            alt="Decorative background image"
            layout="responsive"
            width={3000}
            height={4000}
            objectFit="cover"
            className="opacity-20"
          />
          <Image
            src="/images/me.jpg"
            alt="Decorative background image"
            layout="responsive"
            width={2130}
            height={2841}
            objectFit="cover"
            className="opacity-20"
          />
          <Image
            src="/images/super.jpg"
            alt="Decorative background image"
            layout="responsive"
            width={3000}
            height={4000}
            objectFit="cover"
            className="opacity-20"
          />
          <Image
            src="/images/super.jpg"
            alt="Decorative background image"
            layout="responsive"
            width={3000}
            height={4000}
            objectFit="cover"
            className="opacity-20"
          />
          <Image
            src="/images/super.jpg"
            alt="Decorative background image"
            layout="responsive"
            width={3000}
            height={4000}
            objectFit="cover"
            className="opacity-20"
          />
          <Image
            src="/images/super.jpg"
            alt="Decorative background image"
            layout="responsive"
            width={3000}
            height={4000}
            objectFit="cover"
            className="opacity-20"
          />
          <Image
            src="/images/me2.jpg"
            alt="Decorative background image"
            layout="responsive"
            width={3000}
            height={4000}
            objectFit="cover"
            className="opacity-20"
          />
          <Image
            src="/images/super.jpg"
            alt="Decorative background image"
            layout="responsive"
            width={3000}
            height={4000}
            objectFit="cover"
            className="opacity-20"
          />
          <Image
            src="/images/human.jpg"
            alt="Decorative background image"
            layout="responsive"
            width={3000}
            height={4000}
            objectFit="cover"
            className="opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto py-20 px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-lotus-400 via-lotus-500 to-sage-400 bg-clip-text text-transparent mb-6 leading-tight">
              Our Community of Generous Donors
            </h2>
            <p className="text-xl text-sage-700 font-body leading-relaxed mb-6">
              From the bottom of my heart, thanks to each and every one of you. Your contributions are not just donations - each one of you has sown a seed in hopes of a better tomorrow.
            </p>
          </div>

          {/* Dynamic Grid for Scrapbook Entries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {data.donors.map((donor, index) => (
              <div
                key={index}
                className="animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ScrapbookEntry
                  name={donor.name}
                  message={donor.message}
                  imageUrl={donor.imageUrl}
                />
              </div>
            ))}
          </div>

          {/* Destination Gallery Section */}
          <div className="mt-24">
            {/* Render all destinations in a single slideshow to reduce vertical scrolling while keeping the original look and feel. */}
            <DestinationsSlideshow destinations={data.destinations} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}