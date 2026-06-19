import Link from "next/link";
import Image from "next/image";

<nav className="border-b border-zinc-800 backdrop-blur">
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

      <Link
        href="/dashboard"
        className="hover:text-orange-500"
      >
        Dashboard
      </Link>

      <Link
        href="/security"
        className="hover:text-orange-500"
      >
        Security
      </Link>

      <Link
        href="/agents"
        className="hover:text-orange-500"
      >
        AI Agents
      </Link>

      <Link
        href="/pricing"
        className="hover:text-orange-500"
      >
        Pricing
      </Link>

      <Link
        href="/login"
        className="hover:text-orange-500"
      >
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

<Metric title="Protected Endpoints" value="12,487" />
<Metric title="Security Events" value="1.2M" />
<Metric title="AI Actions" value="248K" />
<Metric title="Platform Uptime" value="99.99%" />

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
    <Stat value="12K+" label="Protected Devices" />
<Stat value="248K+" label="AI Actions" />
<Stat value="99.99%" label="Uptime" />
<Stat value="1.2M" label="Security Events" />
    <section className="max-w-7xl mx-auto px-8 py-20">
  <div className="bg-gradient-to-r from-orange-900 to-orange-700 rounded-3xl p-12 text-center">

    <h2 className="text-5xl font-bold">
      Ready to Secure Operations?
    </h2>

    <p className="text-orange-100 mt-4 text-xl">
      Launch the AgentShield platform and start
      monitoring security, AI agents, and business
      operations from one dashboard.
    </p>

    <Link
      href="/dashboard"
      className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-xl font-semibold"
    >
      Open Dashboard
    </Link>

  </div>
</section>
