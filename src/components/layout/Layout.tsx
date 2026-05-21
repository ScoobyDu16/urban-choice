import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppCTA from "../cta/WhatsAppCTA";
import PhoneCTA from "../cta/PhoneCTA";
import MobileCTABar from "../cta/MobileCTABar";
import ScrollToTop from "../common/ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppCTA />
      <PhoneCTA />
      <MobileCTABar />
    </div>
  );
}
