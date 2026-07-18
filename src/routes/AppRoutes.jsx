import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import TeamPage from "../pages/TeamPage";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import ServiceDetail from "../components/ServiceDetail/ServiceDetail";
import RequestQuote from "../components/RequestQuote/RequestQuote";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:slug" element={<ProductDetail />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/request-quote" element={<RequestQuote />} />
    </Routes>
  );
};

export default AppRoutes;
