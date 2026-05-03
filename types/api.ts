export interface Product {
  articleNumber: string;
  ean: string;
  link: string;
  image: {
    url: string;
    altText: string;
  };
  title: string;
  description: string;
  brandName: string;
  brandLogo: string;
  price: number;
  promotion?: {
    name: string;
    percentage: number;
  } | null;
}

export interface Logo {
  url: string;
  altText: string;
}

export interface ApiResponse {
  title: string;
  logo: Logo;
  products: Product[];
}
