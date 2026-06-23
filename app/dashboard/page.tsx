"use client";

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 5800 },
  { month: "Mar", revenue: 7100 },
  { month: "Apr", revenue: 9200 },
  { month: "May", revenue: 11400 },
  { month: "Jun", revenue: 12840 },
];

const threatData = [
  { day: "Mon", threats: 34 },
  { day: "Tue", threats: 51 },
  { day: "Wed", threats: 67 },
  { day: "Thu", threats: 43 },
  { day: "Fri", threats: 72 },
  { day: "Sat", threats: 49 },
  { day: "Sun", threats: 88 },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            AgentShield Dashboard
          </h1>

          <p className="text-zinc-400 mt-2">
            Executive overview of revenue, security, and AI operations.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-5 gap-6 mb-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400 text-sm">Security Score</p>

            <h2 className="text-3xl font-bold mt-2 text-green-500">
              87/100
            </h2>

            <p className="text-green-400 text-sm mt-2">
              Low Risk
            </p>

            <p className="text-zinc-500 text-xs mt-1">
              Last scan: 2 minutes ago
            </p>
          </div>

          <Card title="Revenue Recovered" value="$12,840" />
          <Card title="Threats Blocked" value="1,248" />
          <Card title="Protected Assets" value="127" />
          <Card title="AI Agents" value="8" />

        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">

          <Panel title="Revenue Recovery Trend">

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#22c55e"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

          </Panel>

          <Panel title="Security Incident Trend">

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={threatData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="threats"
                    stroke="#ef4444"
                    fill="#ef4444"
                    fillOpacity={0.25}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

          </Panel>

        </div>

        {/* Activity & Incidents */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">

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

        {/* Threat Sources & AI Agents */}
        <div className="grid lg:grid-cols-2 gap-6">

          <Panel title="Top Threat Sources">

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
                <span>Pakistan</span>
                <span className="text-orange-500">7%</span>
              </div>

              <div className="flex justify-between">
                <span>Other</span>
                <span className="text-orange-500">2%</span>
              </div>

            </div>

          </Panel>

          <Panel title="AI Agent Activity">

            <div className="space-y-4">
              <Activity text="Revenue Agent recovered missed lead." />
              <Activity text="Security Agent blocked suspicious login." />
              <Activity text="Compliance Agent generated audit report." />
              <Activity text="Support Agent resolved customer ticket." />
            </div>

          </Panel>

        </div>

      </div>
    </main>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
      <p className="text-zinc-400 text-sm">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
}

function Panel({ title, children }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
}

function Activity({ text }) {
  return (
    <div className="bg-zinc-800 rounded-xl p-4">
      {text}
    </div>
  );
}

function Incident({ title, status, color }) {
  return (
    <div className={`border ${color} rounded-xl p-4`}>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-zinc-400 mt-1">{status}</p>
    </div>
  );
}

