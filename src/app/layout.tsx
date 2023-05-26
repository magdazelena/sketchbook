import { prisma } from "../db";
import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "../components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sketchbook",
  description: "Projects viewer",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await prisma.category.findMany();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation title={metadata.title} categories={categories} />
        {children}
      </body>
    </html>
  );
}
