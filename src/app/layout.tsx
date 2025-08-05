// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="min-h-screen flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto py-4 px-6">
            <h1 className="text-2xl font-semibold">Donation Drive Scrapbook</h1>
          </div>
        </header>
        <main className="flex-grow container mx-auto py-6 px-6">
          {children}
        </main>
        <footer className="bg-white border-t">
          <div className="container mx-auto py-4 px-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Donation Drive
          </div>
        </footer>
      </body>
    </html>
  );
}