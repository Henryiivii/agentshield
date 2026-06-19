export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white p-8">
      <div className="max-w-7xl mx-auto">
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
        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            AgentShield Dashboard
          </h1>

          <p className="text-zinc-400 mt-2">
            Executive overview of revenue, security, and AI operations.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">

          <Card
            title="Revenue Recovered"
            value="$12,840"
          />

          <Card
            title="Threats Blocked"
            value="1,248"
          />

          <Card
            title="Protected Assets"
            value="127"
          />

          <Card
            title="AI Agents"
            value="8"
          />

        </div>

        {/* Main Panels */}
        <div className="grid lg:grid-cols-2 gap-6">

          <Panel title="Revenue Recovery Trend">
            <div className="h-64 rounded-2xl bg-zinc-800 flex items-center justify-center">
              <span className="text-zinc-500">
                Revenue Chart
              </span>
            </div>
          </Panel>

          <Panel title="Security Incident Trend">
            <div className="h-64 rounded-2xl bg-zinc-800 flex items-center justify-center">
              <span className="text-zinc-500">
                Security Chart
              </span>
            </div>
          </Panel>

        </div>

        {/* Bottom Row */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">

          <Panel title="Live Activity Feed">
            <div className="space-y-4">

              <Activity text="AI recovered missed customer lead." />
              <Activity text="Unauthorized login blocked." />
              <Activity text="Appointment booked automatically." />
              <Activity text="Security scan completed." />
              <Activity text="Revenue report generated." />

            </div>
          </Panel>

          <Panel title="Recent Security Incidents">
            <div className="space-y-4">

              <Incident
                color="border-red-500"
                title="Unauthorized Login Attempt"
                status="Blocked"
              />

              <Incident
                color="border-yellow-500"
                title="Suspicious PowerShell Activity"
                status="Investigating"
              />

              <Incident
                color="border-green-500"
                title="Malware Detection"
                status="Resolved"
              />

            </div>
          </Panel>

        </div>

      </div>
    </main>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
      <p className="text-zinc-400 text-sm">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
      <h2 className="text-xl font-bold mb-4">
        {title}
      </h2>

      {children}
    </div>
  );
}

function Activity({
  text,
}: {
  text: string;
}) {
  return (
    <div className="bg-zinc-800 rounded-xl p-4">
      {text}
    </div>
  );
}

function Incident({
  title,
  status,
  color,
}: {
  title: string;
  status: string;
  color: string;
}) {
  return (
    <div className={`border ${color} rounded-xl p-4`}>
      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="text-zinc-400 mt-1">
        {status}
      </p>
    </div>
  );
}
