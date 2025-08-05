import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The HUMA-N Project Donation Drive Scrapbook",
  description: "A showcase of all the people who donated during our drive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-base-background text-base-text">{children}</body>
    </html>
  );
}