import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bestsellers from "./components/Bestsellers";
import WhyShopWithUs from "./components/WhyShopWithUs";
import SpecialOfferBanner from "./components/SpecialOfferBanner";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";
import OrderTracking from "./pages/OrderTracking";
import Profile from "./pages/Profile";

function HomePage({ searchQuery, setSearchQuery }) {
  return (
    <>
      <AnnouncementBar />
      <Navbar searchQuery={searchQuery} onSearch={setSearchQuery} />
      <Hero />
      <Bestsellers searchQuery={searchQuery} />
      <WhyShopWithUs />
      <SpecialOfferBanner />
      <ProductsSection searchQuery={searchQuery} />
      <Footer />
    </>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        }
      />
      <Route path="/track-order" element={<OrderTracking />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;