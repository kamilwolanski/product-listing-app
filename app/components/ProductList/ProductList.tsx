import { Product } from "@/types/api";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

interface ProductListProps {
  products: Product[];
  onAddToCart: () => void;
}

export default function ProductList({
  products,
  onAddToCart,
}: ProductListProps) {
  return (
    <section className={styles.container}>
      {products.map((product) => (
        <ProductCard
          key={product.articleNumber}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  );
}
