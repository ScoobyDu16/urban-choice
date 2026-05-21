import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GA_MEASUREMENT_ID } from "../../../constants/config";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function loadGAScript(measurementId: string) {
  if (document.getElementById("ga-script")) return;

  const script1 = document.createElement("script");
  script1.id = "ga-script";
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId);
}

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    loadGAScript(GA_MEASUREMENT_ID);
  }, []);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !window.gtag) return;
    window.gtag("config", GA_MEASUREMENT_ID, { page_path: location.pathname });
  }, [location.pathname]);

  return null;
}
