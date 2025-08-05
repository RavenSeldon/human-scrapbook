import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Community of Givers
        </h2>
        {/* Scrapbook entries will be rendered here in Phase 2 */}
      </main>
      <Footer />
    </>
  );
}