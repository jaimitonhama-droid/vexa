import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VEXA Technology Group | Construímos tecnologia para transformar ideias em realidade",
  description:
    "Desenvolvemos produtos digitais, plataformas e soluções tecnológicas que ajudam pessoas e empresas a evoluir. Conheça as divisões VEXA Web, VEXA Digital e VEXA Cloud.",
  keywords: [
    "VEXA",
    "VEXA Technology Group",
    "Desenvolvimento Web",
    "Produtos Digitais",
    "SaaS",
    "Software Sob Medida",
    "VYRON",
  ],
  authors: [{ name: "VEXA Technology Group" }],
  openGraph: {
    title: "VEXA Technology Group",
    description: "Construímos tecnologia para transformar ideias em realidade.",
    type: "website",
    locale: "pt_PT",
  },
  icons: {
    icon: "/images/vexa-logo.png",
    apple: "/images/vexa-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${sora.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0C0D0E] text-[#F8FAFC] font-inter selection:bg-blue-600/30 selection:text-white">
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
