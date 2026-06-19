export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Executive Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card title="Revenue Recovered" value="$12,840" />
        <Card title="Threats Blocked" value="1,248" />
        <Card title="Protected Assets" value="127" />
        <Card title="AI Agents" value="8" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Panel title="Revenue Trend">
          <div className="h-64 bg-zinc-800 rounded-xl" />
        </Panel>

        <Panel title="Security Trend">
          <div className="h-64 bg-zinc-800 rounded-xl" />
        </Panel>
      </div>
    </main>
  );
}

function Card({ title, value }: any) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
      <p className="text-zinc-400">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
}

function Panel({ title, children }: any) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
}
