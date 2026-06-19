import Image from "next/image";

export default function Login() {
  return (
    <main className="min-h-screen bg-[#09090B] flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        {/* Logo */}
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

        {/* Login Card */}
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
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white outline-none focus:border-orange-500"
              />
            </div>

            <button
              className="w-full bg-orange-600 hover:bg-orange-700 transition rounded-xl p-3 font-semibold text-white"
            >
              Sign In
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

        {/* Footer */}
        <p className="text-center text-zinc-600 text-sm mt-6">
          © 2026 AgentShield. All rights reserved.
        </p>

      </div>
    </main>
  );
}
