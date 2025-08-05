import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrapbookEntry from "@/components/ScrapbookEntry";
import data from "@/data.json";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold text-center text-info-blue mb-12">
          Our Community of Generous Donators
        </h2>
        {/* Dynamic Grid for Scrapbook Entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.donors.map((donor, index) => (
              <ScrapbookEntry
                key={index}
                name={donor.name}
                message={donor.message}
                imageUrl={donor.imageUrl}
              />
          ))}
        </div>

        {/* Destination Gallery */}
      </main>
      <Footer />
    </>
  );
}