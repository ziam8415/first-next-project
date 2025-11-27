import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-[40vh] md:h-[75vh] bg-gray-50 overflow-hidden">
      {/* overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* content */}
      <div className="relative z-10 text-center px-5 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
          Shop Smart, <span className="text-blue-600">Live Better</span>
        </h1>

        <p className="text-base md:text-lg text-gray-600 mb-6">
          Discover top-quality products at the best prices with fast and trusted
          delivery across Bangladesh.
        </p>

        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:opacity-90 transition"
        >
          <FaShoppingCart /> Start Shopping
        </Link>
      </div>
    </section>
  );
}
