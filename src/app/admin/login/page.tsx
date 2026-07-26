import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Login — Thrift Land",
};

export default function AdminLoginPage() {
  return (
    <div className="bg-surface flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-90">
        <div className="mb-8 text-center font-display text-2xl tracking-wide">
          THRIFT<span className="text-accent-ink">LAND</span>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
