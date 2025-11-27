"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import NavLink from "./NavLink";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();
  const handleLogout = () => {
    signOut();
    toast.success("Logged out successfully!");
  };
  const links = (
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/products"> Products</NavLink>
      <NavLink href="/protectedRoute/addProduct">Add Product</NavLink>
      <NavLink href="/protectedRoute/manageProduct">Manage Products</NavLink>
      <NavLink href="/login">Login</NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <a className="font-bold text-2xl">
          E-<span className="text-primary">mart</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {status === "authenticated" ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              {session?.user?.name || "Account"}
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              <li className="p-2 border-b">
                <p className="font-semibold">{session?.user?.name}</p>
                <p className="text-xs">{session?.user?.email}</p>
              </li>
              <li>
                <button
                  onClick={() => {
                    signOut();
                    toast.success("Logged out successfully!");
                  }}
                  className="text-red-500"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link href="/login">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
