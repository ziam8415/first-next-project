"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner, FaCloudUploadAlt } from "react-icons/fa";

export default function AddProductForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newProduct = {
      title: e.target.title.value,
      shortDesc: e.target.shortDesc.value,
      fullDesc: e.target.fullDesc.value,
      price: e.target.price.value,
      date: e.target.date.value,
      category: e.target.category.value,
      stock: e.target.stock.value,
      imageUrl: e.target.imageUrl.value,
    };

    try {
      const res = await fetch(
        "https://next-js-project-server.vercel.app/products",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newProduct),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "❌ Failed to add product");
        setLoading(false);
        return;
      }

      console.log("✅ Product added:", data);
      toast.success("🛍 Product added successfully!");
      e.target.reset();
    } catch (error) {
      console.error("POST Error:", error);
      toast.error("⚠ Network/server error!");
    }

    setLoading(false);
  };

  return (
    <div className="card bg-base-100 shadow-xl max-w-2xl mx-auto p-6 my-10">
      <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
        <FaCloudUploadAlt /> Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label font-semibold">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter product title"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Short Description</label>
          <input
            type="text"
            name="shortDesc"
            placeholder="Enter short description"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Full Description</label>
          <textarea
            name="fullDesc"
            placeholder="Full product details..."
            className="textarea textarea-bordered w-full h-32"
            required
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label font-semibold">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Date</label>
            <input
              type="date"
              name="date"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label font-semibold">Category</label>
          <select
            name="category"
            className="select select-bordered w-full"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Gadgets">Gadgets</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label font-semibold">Stock Quantity</label>
          <input
            type="number"
            name="stock"
            placeholder="Available stock"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Image URL</label>
          <input
            type="url"
            name="imageUrl"
            placeholder="Paste image link"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full flex items-center justify-center gap-2 text-lg"
          disabled={loading}
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin text-xl" /> Submitting...
            </>
          ) : (
            <>
              <FaCloudUploadAlt className="text-xl" /> Add Product
            </>
          )}
        </button>
      </form>
    </div>
  );
}
