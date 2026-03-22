import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'Sweet Artisan Bakery | Handcrafted Breads & Pastries',
  description: 'Artisan bakery offering fresh, handcrafted breads, pastries, and desserts made daily with premium ingredients. Order online or visit us today.',
  keywords: ["artisan bakery, fresh bread, pastries, croissants, sourdough, custom cakes"],
  openGraph: {
    "title": "Sweet Artisan Bakery | Handcrafted Breads & Pastries",
    "description": "Discover authentic artisan baking with fresh ingredients and time-honored techniques.",
    "siteName": "Sweet Artisan Bakery",
    "type": "website",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=tgxxem",
        "alt": "Fresh artisan bakery products"
      }
    ]
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Sweet Artisan Bakery",
    "description": "Handcrafted breads and pastries made fresh daily.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=tgxxem"
    ]
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${poppins.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
