import { ApiResponse } from "@/types/api";
import ProductPage from "./components/ProductPage";

async function getData(): Promise<ApiResponse> {
  const API_URL = process.env.API_URL;
  const API_KEY = process.env.API_KEY;

  if (!API_URL || !API_KEY) {
    throw new Error("Missing API environment variables");
  }

  const res = await fetch(API_URL, {
    headers: {
      "x-api-key": API_KEY,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata() {
  const data = await getData();

  return {
    title: data.title,
  };
}

export default async function Home() {
  const { logo, products } = await getData();

  return <ProductPage logo={logo} products={products} />;
}
