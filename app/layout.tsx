import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@components/ui/navbar";
import Footer from "@components/ui/footer";

export const metadata: Metadata = {
  title: "Enigma Blog",
  description:
    "Unveiling knowledge mysteries for contributors and developers worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
