import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white">

      {/* Navbar */}
      <nav className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="AgentShield"
              width={60}
              height={60}
            />

            <div>
              <h1 className="text-2xl font-bold">
                AgentShield
              </h1>

              <p className="text-zinc-400 text-sm">
                AI Security & Operations Platform
              </p>
            </div>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link href="/dashboard" className="hover:text-orange-500">
              Dashboard
            </Link>

            <Link href="/security" className="hover:text-orange-500">
              Security
            </Link>

            <Link href="/agents" className="hover:text-orange-500">
              AI Agents
            </Link>

            <Link href="/pricing" className="hover:text-orange-500">
              Pricing
            </Link>

            <Link href="/login" className="hover:text-orange-500">
              Login
            </Link>

            <Link
              href="/dashboard"
              className="bg-orange-700 hover:bg-orange-800 px-5 py-2 rounded-xl font-semibold"
            >
              Launch Platform
            </Link>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400 mb-8">
              Enterprise AI Platform
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              Enterprise AI.
              <br />
              Security Intelligence.
              <br />
              Automated Operations.
            </h1>

            <p className="text-zinc-400 text-xl mt-8 max-w-xl">
              AgentShield unifies AI agents, security monitoring,
              customer engagement, and executive reporting into a
              single operational platform.
            </p>

            <div className="flex gap-4 mt-10">
              <Link
                href="/dashboard"
                className="bg-orange-700 hover:bg-orange-800 px-6 py-4 rounded-xl font-semibold"
              >
                Launch Dashboard
              </Link>

              <Link
                href="/pricing"
                className="border border-zinc-700 hover:border-zinc-500 px-6 py-4 rounded-xl"
              >
                View Pricing
              </Link>
            </div>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-8">
              Live Platform Metrics
            </h3>

            <div className="grid grid-cols-2 gap-5">

              <Metric
                title="Protected Endpoints"
                value="12,487"
              />

              <Metric
                title="Security Events"
                value="1.2M"
              />

              <Metric
                title="AI Actions"
                value="248K"
              />

              <Metric
                title="Platform Uptime"
                value="99.99%"
              />

            </div>

          </div>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 py-16">

        <h2 className="text-4xl font-bold mb-12">
          One Platform. Total Visibility.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <FeatureCard
            title="AI Security Center"
            description="Real-time monitoring, threat detection, and automated response."
          />

          <FeatureCard
            title="Autonomous Agents"
            description="Deploy AI agents to automate support, operations, and security workflows."
          />

          <FeatureCard
            title="Executive Visibility"
            description="Unified reporting across business operations and cybersecurity."
          />

        </div>

      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-4 gap-6">

          <Stat
            value="12K+"
            label="Protected Devices"
          />

          <Stat
            value="248K+"
            label="AI Actions"
          />

          <Stat
            value="99.99%"
            label="Uptime"
          />

          <Stat
            value="1.2M"
            label="Security Events"
          />

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="bg-gradient-to-r from-orange-900 to-orange-700 rounded-3xl p-12 text-center">

          <h2 className="text-5xl font-bold">
            Ready to Secure Operations?
          </h2>

          <p className="text-orange-100 mt-4 text-xl">
            Launch AgentShield and manage security,
            AI agents, and operations from one dashboard.
          </p>

          <Link
            href="/dashboard"
            className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-xl font-semibold"
          >
            Open Dashboard
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-10">

        <div className="max-w-7xl mx-auto px-8 py-10 text-zinc-500">
          © 2026 AgentShield. All rights reserved.
        </div>

      </footer>

    </main>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-zinc-800 rounded-2xl p-5">
      <p className="text-zinc-400 text-sm">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-2">
        {value}
      </h3>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
      <h3 className="text-xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-zinc-400">
        {description}
      </p>
    </div>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
      <h3 className="text-4xl font-bold text-orange-500">
        {value}
      </h3>

      <p className="text-zinc-400 mt-2">
        {label}
      </p>
    </div>
  );
}

