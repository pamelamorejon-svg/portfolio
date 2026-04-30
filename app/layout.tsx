import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pamela Morejón — Product Designer",
  description: "Selected work by Pamela Morejón, product designer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
