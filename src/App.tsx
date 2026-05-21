import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsPage";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:categorySlug" element={<CategoryProductsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
