export default function Pricing() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">

{/* Threat Intelligence & Agent Activity */}
<div className="grid lg:grid-cols-2 gap-6 mt-8">

  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
    <h2 className="text-2xl font-bold mb-6">
      Top Threat Sources
    </h2>

    <div className="space-y-4">

      <div className="flex justify-between">
        <span>Russia</span>
        <span className="text-orange-500">32%</span>
      </div>

      <div className="flex justify-between">
        <span>China</span>
        <span className="text-orange-500">27%</span>
      </div>

      <div className="flex justify-between">
        <span>North Korea</span>
        <span className="text-orange-500">18%</span>
      </div>

      <div className="flex justify-between">
        <span>Iran</span>
        <span className="text-orange-500">14%</span>
      </div>

      <div className="flex justify-between">
        <span>Other</span>
        <span className="text-orange-500">9%</span>
      </div>

    </div>
  </div>

  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
    <h2 className="text-2xl font-bold mb-6">
      AI Agent Activity
    </h2>

    <div className="space-y-4">

      <div className="bg-zinc-800 rounded-xl p-4">
        Revenue Agent recovered missed lead
      </div>

      <div className="bg-zinc-800 rounded-xl p-4">
        Security Agent blocked suspicious login
      </div>

      <div className="bg-zinc-800 rounded-xl p-4">
        Compliance Agent generated audit report
      </div>

      <div className="bg-zinc-800 rounded-xl p-4">
        Support Agent resolved customer ticket
      </div>

    </div>
  </div>

</div>



        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-2 text-orange-400 mb-6">
            Simple Pricing
          </div>

          <h1 className="text-6xl font-bold">
            Pricing Built To Scale
          </h1>

          <p className="text-zinc-400 text-xl mt-6 max-w-2xl mx-auto">
            Choose the AgentShield plan that fits your business.
            Start protecting revenue, customers, and infrastructure
            from a single platform.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Starter */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="text-zinc-400 mb-4">
              STARTER
            </div>

            <h2 className="text-3xl font-bold">
              $99
              <span className="text-lg text-zinc-400">
                /month
              </span>
            </h2>

            <p className="text-zinc-400 mt-4">
              Ideal for small businesses.
            </p>

            <ul className="space-y-4 mt-8">
              <li>✓ 1 AI Agent</li>
              <li>✓ Revenue Recovery</li>
              <li>✓ Basic Security Monitoring</li>
              <li>✓ Email Support</li>
              <li>✓ Monthly Reports</li>
            </ul>

            <button className="w-full mt-8 bg-zinc-800 hover:bg-zinc-700 rounded-xl py-3">
              Get Started
            </button>
          </div>

          {/* Professional */}
          <div className="bg-zinc-900 border-2 border-orange-500 rounded-3xl p-8 relative">

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
              MOST POPULAR
            </div>

            <div className="text-orange-400 mb-4">
              PROFESSIONAL
            </div>

            <h2 className="text-3xl font-bold">
              $299
              <span className="text-lg text-zinc-400">
                /month
              </span>
            </h2>

            <p className="text-zinc-400 mt-4">
              Complete AI and security platform.
            </p>

            <ul className="space-y-4 mt-8">
              <li>✓ 5 AI Agents</li>
              <li>✓ Revenue Recovery Suite</li>
              <li>✓ Security Center</li>
              <li>✓ Incident Monitoring</li>
              <li>✓ Executive Dashboard</li>
              <li>✓ Analytics & Reporting</li>
              <li>✓ Priority Support</li>
            </ul>

            <button className="w-full mt-8 bg-orange-600 hover:bg-orange-700 rounded-xl py-3 font-semibold">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="text-zinc-400 mb-4">
              ENTERPRISE
            </div>

            <h2 className="text-3xl font-bold">
              Custom
            </h2>

            <p className="text-zinc-400 mt-4">
              Advanced deployments and custom integrations.
            </p>

            <ul className="space-y-4 mt-8">
              <li>✓ Unlimited AI Agents</li>
              <li>✓ Dedicated Security Team</li>
              <li>✓ Advanced Compliance</li>
              <li>✓ Custom Integrations</li>
              <li>✓ SSO & MFA</li>
              <li>✓ Dedicated Account Manager</li>
              <li>✓ 24/7 Support</li>
            </ul>

            <button className="w-full mt-8 bg-zinc-800 hover:bg-zinc-700 rounded-xl py-3">
              Contact Sales
            </button>
          </div>

        </div>

        {/* Feature Comparison */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-10">
            Compare Plans
          </h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left p-6">Feature</th>
                  <th>Starter</th>
                  <th>Professional</th>
                  <th>Enterprise</th>
                </tr>
              </thead>

              <tbody className="text-center">
                <tr className="border-b border-zinc-800">
                  <td className="text-left p-6">
                    AI Agents
                  </td>
                  <td>1</td>
                  <td>5</td>
                  <td>Unlimited</td>
                </tr>

                <tr className="border-b border-zinc-800">
                  <td className="text-left p-6">
                    Revenue Recovery
                  </td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>

                <tr className="border-b border-zinc-800">
                  <td className="text-left p-6">
                    Security Monitoring
                  </td>
                  <td>Basic</td>
                  <td>Advanced</td>
                  <td>Enterprise</td>
                </tr>

                <tr>
                  <td className="text-left p-6">
                    Support
                  </td>
                  <td>Email</td>
                  <td>Priority</td>
                  <td>24/7 Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}
