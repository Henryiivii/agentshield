export default function Security() {
  const incidents = [
    {
      severity: "Critical",
      title: "Unauthorized Login Attempt",
      status: "Blocked",
      time: "2 minutes ago",
      color: "border-red-500",
    },
    {
      severity: "High",
      title: "Suspicious PowerShell Activity",
      status: "Investigating",
      time: "15 minutes ago",
      color: "border-yellow-500",
    },
    {
      severity: "Medium",
      title: "Malware Detection",
      status: "Resolved",
      time: "1 hour ago",
      color: "border-green-500",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090B] text-white p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Security Center
          </h1>

          <p className="text-zinc-400 mt-2">
            Real-time monitoring, incident response, and threat visibility.
          </p>
        </div>

        {/* Security Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">

          <StatCard
            title="Threats Blocked"
            value="1,248"
          />

          <StatCard
            title="Critical Alerts"
            value="3"
          />

          <StatCard
            title="Protected Assets"
            value="127"
          />

          <StatCard
            title="Security Score"
            value="98%"
          />

        </div>

        {/* Threat Feed + Incidents */}
        <div className="grid lg:grid-cols-2 gap-6">

          <Panel title="Live Threat Feed">

            <FeedItem text="Blocked malicious IP from Russia" />
            <FeedItem text="Suspicious PowerShell command detected" />
            <FeedItem text="Endpoint scan completed successfully" />
            <FeedItem text="Unauthorized login attempt prevented" />
            <FeedItem text="Firewall rules updated automatically" />

          </Panel>

          <Panel title="Recent Security Incidents">

            {incidents.map((incident, index) => (
              <div
                key={index}
                className={`border ${incident.color} rounded-xl p-4 mb-4`}
              >
                <div className="flex justify-between">
                  <h3 className="font-semibold">
                    {incident.title}
                  </h3>

                  <span className="text-orange-500">
                    {incident.severity}
                  </span>
                </div>

                <p className="text-zinc-400 mt-2">
                  Status: {incident.status}
                </p>

                <p className="text-zinc-500 text-sm mt-1">
                  {incident.time}
                </p>
              </div>
            ))}

          </Panel>

        </div>

        {/* Security Posture */}
        <div className="mt-6">
          <Panel title="Security Posture">

            <div className="rounded-3xl bg-gradient-to-r from-amber-800 to-orange-950 p-8">
              <h2 className="text-5xl font-bold">
                HEALTHY
              </h2>

              <p className="mt-4 text-xl">
                No active critical incidents detected.
              </p>

              <p className="text-orange-100 mt-2">
                All monitored systems are operating normally.
              </p>
            </div>

          </Panel>
        </div>

      </div>
    </main>
  );
}

function StatCard({
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

function FeedItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="bg-zinc-800 rounded-xl p-4 mb-3">
      {text}
    </div>
  );
}
