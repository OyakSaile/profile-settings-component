import "./globals.css";
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"] });

export const metadata = {
  title: "Profile Setting",
  description: "Profile Settings Component by Kayo Elias",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={heebo.className}>{children}</body>
    </html>
  );
}
