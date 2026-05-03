"use client";

import Image from "next/image";
import { Product } from "@/types/api";
import styles from "./ProductCard.module.css";

interface ProductCartProps {
  product: Product;
  onAddToCart: () => void;
}

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCartProps) {
  const { image, title, description, brandName, price, promotion } = product;

  const hasPromotion = promotion && promotion.percentage > 0;

  const discountedPrice = hasPromotion
    ? Math.round(price * (1 - promotion.percentage / 100))
    : null;

  return (
    <div className={styles.card}>
      {hasPromotion && (
        <span className={styles.promoBadge}>{promotion!.name}</span>
      )}

      <Image
        src={image.url}
        alt={image.altText}
        width={200}
        height={200}
        className={styles.image}
      />

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.brand}>{brandName}</p>
      <p className={styles.description}>{description}</p>

      <div className={styles.priceContainer}>
        {hasPromotion ? (
          <>
            <span className={styles.oldPrice}>{price} zł</span>
            <span className={styles.newPrice}>{discountedPrice} zł</span>
          </>
        ) : (
          <span className={styles.price}>{price} zł</span>
        )}
      </div>

      <button className={styles.button} onClick={onAddToCart}>
        Add to cart
      </button>
    </div>
  );
}
