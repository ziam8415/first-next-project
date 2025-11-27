"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaTag, FaEye } from "react-icons/fa";

export default function ProductCard({ product }) {
  const router = useRouter();

  return (
    <article
      tabIndex={0}
      className="flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden"
    >
      {/* IMAGE */}
      <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
        {product.imageUrl && (
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center hover:scale-[1.04] transition-transform duration-300"
            priority
          />
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4 flex-1 flex flex-col">
        {/* TITLE + CATEGORY */}
        <div className="flex justify-between items-start gap-3 mb-2">
          <h3 className="text-lg font-medium text-gray-900 leading-tight">
            {product.title}
          </h3>
          <span className="flex items-center gap-1 text-[11px] font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full shrink-0">
            <FaTag />
            {product.category}
          </span>
        </div>

        {/* SHORT DESCRIPTION */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
          {product.shortDesc}
        </p>

        {/* FOOTER: PRICE + VIEW BUTTON */}
        <div className="mt-auto flex justify-between items-center">
          <span className="text-xl font-semibold text-gray-900">
            ৳{Number(product.price).toLocaleString()}
          </span>

          <button
            onClick={() => router.push(`/products/${product._id}`)}
            className="flex items-center gap-1 justify-start p-2 rounded-lg bg-blue-500 hover:bg-blue-700"
          >
            <FaEye className="text-[13px]" /> View
          </button>
        </div>
      </div>
    </article>
  );
}
