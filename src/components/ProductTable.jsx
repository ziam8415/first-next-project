"use client";
import Image from "next/image";
import React from "react";
import { FaTag, FaTrash, FaEye } from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProductRow({ product }) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `https://next-js-project-server.vercel.app/products/${product._id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        toast.success("Product deleted!");
      } else {
        toast.error("Delete failed!");
      }
    } catch {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="w-full bg-white  border-b border-gray-200  p-3 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-200 transition">
      {/* LEFT — IMAGE */}
      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
        <Image
          src={
            product.imageUrl || "https://i.ibb.co.com/1tJkmKtq/download-16.jpg"
          }
          alt={product.title || "Product Image"}
          fill
          className="object-cover"
        />
      </div>

      {/* MIDDLE — TITLE + DESC */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{product.title}</h3>

        <p className="text-sm text-gray-600  line-clamp-2 max-w-[90%]">
          {product.shortDesc}
        </p>

        <span className="flex items-center gap-1 text-xs text-primary mt-1">
          <FaTag /> {product.category}
        </span>
      </div>

      {/* RIGHT — ACTION BUTTONS */}
      <div className="flex flex-col gap-2 items-end">
        <span className="text-lg font-bold text-gray-800 dark:text-gray-100">
          ৳{product.price}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => router.push(`/products/${product._id}`)}
            className="btn btn-sm btn-info"
          >
            <FaEye />
          </button>

          <button onClick={handleDelete} className="btn btn-sm btn-error">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
