import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/common/Loader";

const Home = lazy(() => import("../pages/Home"));
const CategoriesPage = lazy(() => import("../pages/CategoriesPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const CategoryProductsPage = lazy(() => import("../pages/CategoryProductsPage"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:categorySlug" element={<CategoryProductsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
