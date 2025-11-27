import BackButton from "@/components/BackButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaArrowLeft, FaCalendarAlt, FaFire } from "react-icons/fa";

export default async function page({ params }) {
  const { id } = await params;
  let product = null;

  try {
    const res = await fetch(
      `https://next-js-project-server.vercel.app/products/${id}`
    );
    product = await res.json();
  } catch (err) {
    console.error("❌ Fetch failed:", err);
  }
  console.log(product);

  if (!product) {
    return (
      <div className="h-[400px]">
        <p className="text-center mt-36 text-4xl font-bold text-red-500">
          Product not found 😕
        </p>
        ;
      </div>
    );
  }

  return (
    <div className="text-center">
      {/* LARGE IMAGE */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-gray-200  mb-6">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>
      {/* TITLE */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900  mb-2">
        {product.title}
      </h1>

      {/* META INFO */}
      <div className="flex flex-wrap justify-around items-center  text-sm text-gray-600  my-5">
        <span className="flex items-center gap-1">
          <FaCalendarAlt /> {new Date(product.date).toLocaleDateString()}
        </span>
        <span className="flex items-center gap-1">
          <FaFire /> Category: {product.category || "Normal"}
        </span>
        <span className=" ">
          Price: {Number(product.price).toLocaleString()}
        </span>
      </div>

      {/* FULL DESCRIPTION */}
      <p className="text-base text-gray-700  leading-relaxed mb-8">
        {product.fullDesc || product.shortDesc}
      </p>

      {/* BACK BUTTON */}
      <BackButton></BackButton>
    </div>
  );
}
