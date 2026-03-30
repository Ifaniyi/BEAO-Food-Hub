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
import WhatsAppButton from "./components/WhatsAppButton";

function HomePage({ searchQuery, setSearchQuery, cartItems, addToCart, updateQuantity, removeFromCart }) {
  return (
    <>
      <AnnouncementBar />
      <Navbar
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
      <Hero />
      <Bestsellers searchQuery={searchQuery} addToCart={addToCart} />
      <WhyShopWithUs />
      <SpecialOfferBanner />
      <ProductsSection searchQuery={searchQuery} addToCart={addToCart} />
      <Footer />
    </>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              cartItems={cartItems}
              addToCart={addToCart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/track-order" element={<OrderTracking />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* Shows on every page */}
      <WhatsAppButton />
    </>
  );
}

export default App;