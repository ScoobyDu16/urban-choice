import { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingCTA from "../cta/FloatingCTA";
import ScrollToTop from "../common/ScrollToTop";
import GoogleAnalytics from "../analytics/GoogleAnalytics";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <GoogleAnalytics />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
