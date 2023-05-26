import { prisma } from "../db";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navigation from "../components/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={montserrat.className}>
        <Navigation title={metadata.title} categories={categories} />
        {children}
      </body>
    </html>
  );
}
