import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import TestimonialsSection from "@/components/TestimonialsSection";
import React from "react";

export default async function Page() {
  let products = [];

  try {
    const res = await fetch(
      "https://next-js-project-server.vercel.app/products",
      {
        cache: "no-store", // always fetch fresh data
      }
    );
    products = await res.json();
  } catch (error) {
    console.error("❌ Fetch error:", error);
  }

  // const handleDetails = (product) => {
  //   console.log("🔍 Product Details:", product);
  //   // You can navigate or open modal later
  // };

  return (
    <div>
      <HeroSection></HeroSection>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center  mb-6">
          <h2 className="text-4xl md:text-6xl my-3 font-bold text-gray-900">
            Products
          </h2>
          <p className="text-lg text-gray-500">Browse our latest items</p>
        </div>

        {/* GRID: 3 cards 1 row */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.length > 0 ? (
            products
              .slice(0, 3)
              .map((p) => <ProductCard key={p._id} product={p} />)
          ) : (
            <p className="text-center col-span-full text-md font-medium text-gray-400">
              No products found 😕
            </p>
          )}
        </div>
      </section>

      <FeaturesSection></FeaturesSection>
      <TestimonialsSection></TestimonialsSection>
    </div>
  );
}
