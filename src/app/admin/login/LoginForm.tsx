"use client";

import { useState, type FormEvent } from "react";
import { FormField, fieldControlClass } from "@/components/ui/FormField";
import { signIn } from "./actions";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setPending(true);
    setError(null);
    const message = await signIn(email, password);
    if (message) {
      setError(message);
      setPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-line p-7">
      <FormField label="Email">
        <input
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldControlClass}
        />
      </FormField>
      <FormField label="Password">
        <input
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={fieldControlClass}
        />
      </FormField>
      {error && <div className="text-sm text-red-500">{error}</div>}
      <button
        type="submit"
        disabled={pending}
        className="bg-fg text-bg-solid mt-2 cursor-pointer rounded-full border-none p-4 text-sm font-bold tracking-wide uppercase transition-opacity duration-200 hover:opacity-85 disabled:opacity-50 disabled:hover:opacity-50"
      >
        {pending ? "Signing In…" : "Sign In"}
      </button>
    </form>
  );
}
