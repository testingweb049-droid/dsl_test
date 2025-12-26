import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/topNavbar/Navbar";
import Footer from "../components/footer/footer";
import HeaderBar from "../components/Header";
import { Toaster } from "sonner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DSL Limo Services | Luxury Transportation & Chauffeur Services",
  description:
    "Book premier limo service in NYC & NJ. Reliable black car service for JFK, EWR, and LGA airport transfers. Luxury sedans, SUVs & Sprinters. Get a quote today.",
  keywords: [
    "limo service",
    "luxury transportation",
    "airport limo",
    "chauffeur service",
    "wedding limo",
    "corporate transportation",
    "black car service",
  ],
  openGraph: {
    title: "DSL Limo Services",
    description:
      "Book premier limo service in NYC & NJ. Reliable black car service for JFK, EWR, and LGA airport transfers. Luxury sedans, SUVs & Sprinters. Get a quote today.",
    url: "https://www.dsllimoservice.com",
    siteName: "DSL Limo Services",
    images: [
      {
        url: "https://www.dsllimoservice.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DSL Limo Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DSL Limo Services",
    description:
      "Book premier limo service in NYC & NJ. Reliable black car service for JFK, EWR, and LGA airport transfers. Luxury sedans, SUVs & Sprinters. Get a quote today.",
    images: ["https://www.dsllimoservice.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.dsllimoservice.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "DSL Limo Services",
    url: "https://www.dsllimoservice.com",
    logo: "https://www.dsllimoservice.com/Logo.png",
    telephone: "+1-000-000-0000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main St",
      addressLocality: "Your City",
      addressRegion: "Your State",
      postalCode: "00000",
      addressCountry: "USA",
    },
    image: "https://www.dsllimoservice.com/og-image.jpg",
    description:
      "Premium luxury limousine and chauffeur services for airport, corporate, and special events.",
  };

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5FTPCVQZ');
        `}</Script>
      </head>

      <body 
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        {/* Schema Markup (SEO Boost) - JSON-LD in body is valid and prevents hydration issues */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FTPCVQZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        <HeaderBar />
        {children}
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
