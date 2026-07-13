import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import TeamPage from "../pages/TeamPage";
import ProductDetail from "../components/ProductDetail/ProductDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:slug" element={<ProductDetail />} />
    </Routes>
  );
};

export default AppRoutes;
