import ProductTable from "@/components/ProductTable";
import Image from "next/image";

export default async function Page() {
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

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-4xl text-center font-bold mb-6">Manage Products</h2>

      <div className="">
        {products.map((p) => (
          <ProductTable key={p._id} product={p}></ProductTable>
        ))}
      </div>
    </section>
  );
}
