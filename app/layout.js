import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata = {
  title: "Maruf Hossain",
  description: "Maruf Hossain - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistMono.className}>{children}</body>
    </html>
  );
}
