# E-Mart - Next.js Ecommerce Project

## Project Description

E-Mart is a modern e-commerce platform built with **Next.js**, **NextAuth.js**, **TailwindCSS**, and **DaisyUI**.  
It allows users to browse products, add/manage products (for authenticated users), and login using **Google** or **Email/Password**.  
The project demonstrates protected routes using Next.js Middleware and JWT authentication.

---

## live Link : https://my-next-app-sepia-delta.vercel.app/

## Setup & Installation

1. **Clone the repository**

git clone https://github.com/yourusername/e-mart.git
cd e-mart

2. **Install dependencies**

npm install

3. **Router Summary**

| Route                           | Access        | Description                                                  |
| ------------------------------- | ------------- | ------------------------------------------------------------ |
| `/`                             | Public        | Landing page with hero, products, features, and testimonials |
| `/products`                     | Public        | Browse all products                                          |
| `/login`                        | Public        | Login page (Google & Credentials)                            |
| `/protectedRoute/addProduct`    | Authenticated | Add a new product (protected)                                |
| `/protectedRoute/manageProduct` | Authenticated | View, edit, or delete products (protected)                   |

**Fetcher**
Authentication: NextAuth.js (Google + Credentials)

Protected Routes: Middleware-based JWT validation

Responsive Design: TailwindCSS + DaisyUI

Dynamic Data: Fetch products from API with server-side rendering

User Feedback: React Hot Toast notifications

---

If you want, I can also make a **version with badges, screenshots, and a live demo link** so it looks **professional on GitHub**.

Do you want me to do that next?
