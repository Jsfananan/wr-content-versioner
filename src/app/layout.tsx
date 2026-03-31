import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "World Relief Content Versioner",
  description:
    "Customize content for World Relief U.S. offices while maintaining brand consistency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
