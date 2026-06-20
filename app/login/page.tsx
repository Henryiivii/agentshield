"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#09090B] flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        <div className="flex flex-col items-center mb-8">
          <Image
            src="/logo.png"
            alt="AgentShield"
            width={90}
            height={90}
            className="mb-4"
          />

          <h1 className="text-4xl font-bold text-white">
            AgentShield
          </h1>

          <p className="text-zinc-400 mt-2">
            Secure Platform Access
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">

          <h2 className="text-2xl font-bold text-white mb-6">
            Sign In
          </h2>

          <div className="space-y-4">

            <div>
              <label className="text-zinc-400 text-sm block mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="text-zinc-400 text-sm block mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••••"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white outline-none focus:border-orange-500"
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500 rounded-xl p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 transition rounded-xl p-3 font-semibold text-white"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

          </div>

          <div className="mt-6 text-center">
            <a
              href="#"
              className="text-orange-500 hover:text-orange-400 text-sm"
            >
              Forgot Password?
            </a>
          </div>

          <div className="mt-8 border-t border-zinc-800 pt-6">
            <div className="flex justify-between text-sm text-zinc-500">
              <span>TLS 1.3</span>
              <span>MFA Enabled</span>
              <span>SOC 2</span>
            </div>
          </div>

        </div>

        <p className="text-center text-zinc-600 text-sm mt-6">
          © 2026 AgentShield. All rights reserved.
        </p>

      </div>
    </main>
  );
}

