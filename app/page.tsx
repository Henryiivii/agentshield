import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white">
      {/* Navbar */}
      <nav className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
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
                AI Revenue Recovery & Security Operations
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <a href="#platform" className="hover:text-orange-500">
              Platform
            </a>

            <a href="#security" className="hover:text-orange-500">
              Security
            </a>

            <a href="#agents" className="hover:text-orange-500">
              AI Agents
            </a>

            <a href="#pricing" className="hover:text-orange-500">
              Pricing
            </a>

            <button className="bg-orange-600 hover:bg-orange-700 px-5 py-2 rounded-xl font-semibold">
              Request Demo
            </button>
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

            <h1 className="text-6xl font-bold leading-tight">
              Stop Losing Revenue.
              <br />
              Stop Missing Threats.
            </h1>

            <p className="text-zinc-400 text-xl mt-8 max-w-xl">
              AgentShield combines AI-powered revenue recovery,
              security monitoring, customer engagement, and
              executive reporting into one platform.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="bg-orange-600 hover:bg-orange-700 px-6 py-4 rounded-xl font-semibold">
                Request Demo
              </button>

              <button className="border border-zinc-700 hover:border-zinc-500 px-6 py-4 rounded-xl">
                View Platform
              </button>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-8">
              Live Platform Metrics
            </h3>

            <div className="grid grid-cols-2 gap-5">
              <Metric
                title="Revenue Recovered"
                value="$1.2M"
              />

              <Metric
                title="Threats Blocked"
                value="1,248"
              />

              <Metric
                title="AI Interactions"
                value="24K+"
              />

              <Metric
                title="Protected Assets"
                value="127"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section
        id="platform"
        className="max-w-7xl mx-auto px-8 py-16"
      >
        <h2 className="text-4xl font-bold mb-12">
          One Platform. Total Visibility.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="Revenue Recovery"
            description="Recover missed opportunities automatically with AI-powered follow-up."
          />

          <FeatureCard
            title="Security Monitoring"
            description="Real-time detection and response for modern threats."
          />

          <FeatureCard
            title="Executive Reporting"
            description="Business and security insights in one dashboard."
          />
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-4 gap-6">
          <Stat value="$1.2M+" label="Revenue Recovered" />
          <Stat value="24,000+" label="AI Conversations" />
          <Stat value="99.9%" label="Platform Uptime" />
          <Stat value="1,248" label="Threats Blocked" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-20">
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
