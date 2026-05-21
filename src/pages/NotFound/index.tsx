import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import SEO from "../../components/seo/SEO";
import { SITE_NAME } from "../../constants";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />

      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <h1 className="text-9xl font-bold text-orange-500 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
