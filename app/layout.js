import Navbar from "@/components/navbar";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/footer";
import ToastProvider from "@/provider/toast-provider";
import Providers from "@/provider/providers";

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Destinacioni ku blerësit e zgjuar gjejnë ofertat më të mira",
  description: "Online Shop Drizlymall",
  icons: {
    icon: "./dm.svg",
    apple: "./dm.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="pt-[64.8px]">
      <body className={inter.className}>
        <ToastProvider />
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
