import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The HUMA-N Project Donation Drive Scrapbook",
  description: "A showcase of all the amazing Human Beings who donated during our month-long drive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cream text-charcoal font-body antialiased">
        {children}
      </body>
    </html>
  );
}