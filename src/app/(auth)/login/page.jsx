import LoginClient from "@/components/LoginClient";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <Suspense
      fallback={<div className="text-center p-6">Loading Login...</div>}
    >
      <LoginClient />
    </Suspense>
  );
}
