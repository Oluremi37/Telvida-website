import Navbar from "../components/Navbar/Navbar";
import ProductsHero from "../components/ProductsHero/ProductsHero.jsx";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory.jsx";
import ProductsCatalog from "../components/ProductsCatalog/ProductsCatalog";


import Footer from "../components/Footer/Footer";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
          <ProductsHero />
          <ShopByCategory />
            <ProductsCatalog />
      
      <Footer />
    </>
  );
}
