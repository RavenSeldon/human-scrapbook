import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The HUMA-N Project Scrapbook",
  description: "A Showcase of all the lovely Human Beings who donated during the month-long donation drive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-700">{children}</body>
    </html>
  );
}