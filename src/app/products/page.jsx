export const dynamic = "force-dynamic";

import ProductCard from "@/components/ProductCard";
import { FaSearch, FaFilter, FaBoxOpen } from "react-icons/fa";

export default async function Products() {
  let products = [];

  try {
    const res = await fetch(
      "https://next-js-project-server.vercel.app/products",
      {
        cache: "no-store",
      }
    );
    products = await res.json();
  } catch (error) {
    console.error("❌ Fetch error:", error);
  }

  const displayProducts = products.slice(0, 6);

  return (
    <main className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
      {/* HEADER */}
      <header className="text-center  mb-10">
        <div className="flex justify-center   items-center gap-3 mb-2">
          <FaBoxOpen className="text-2xl text-blue-600" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Products
          </h1>
        </div>
        <p className="text-sm text-center md:text-base text-gray-600 max-w-xl mx-auto ">
          Explore our latest collection of high-quality products <br /> with
          trusted service and smooth experience.
        </p>
      </header>

      {/* SEARCH + FILTER (UI only) */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <div className="relative w-full sm:max-w-sm">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="input input-bordered w-full pl-10 rounded-xl text-sm"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <FaFilter className="text-gray-500" />
          <select className="select select-bordered rounded-xl text-sm w-full sm:w-auto">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home</option>
            <option>Accessories</option>
          </select>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {displayProducts.length > 0 ? (
          displayProducts.map((p) => <ProductCard key={p._id} product={p} />)
        ) : (
          <p className="text-center col-span-full text-lg font-semibold text-gray-500">
            No products found 😕
          </p>
        )}
      </section>
    </main>
  );
}
