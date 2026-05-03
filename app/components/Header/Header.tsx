import { Logo } from "@/types/api";
import Image from "next/image";
import styles from "./Header.module.css";

interface HeaderProps {
  logo: Logo;
  cartCount: number;
}

export default function Header({ logo, cartCount }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Image src={logo.url} alt={logo.altText} width={100} height={40} />

      <div className={styles.cart}>
        {/* https://lucide.dev/icons/shopping-cart */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
        {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
      </div>
    </header>
  );
}
