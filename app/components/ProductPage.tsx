"use client";

import { useState } from "react";
import Header from "./Header/Header";
import ProductList from "./ProductList/ProductList";
import { Logo, Product } from "@/types/api";

interface ProductPageProps {
  logo: Logo;
  products: Product[];
}

export default function ProductPage({ logo, products }: ProductPageProps) {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setTimeout(() => {
      setCartCount((prev) => prev + 1);
    }, 300);
  };

  return (
    <div className="container">
      <Header logo={logo} cartCount={cartCount} />
      <ProductList products={products} onAddToCart={addToCart} />
    </div>
  );
}
