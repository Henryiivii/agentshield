"use client";

import React, { useState } from "react";
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

export default function DashboardPage() {
  const [company, setCompany] = useState("");

  const current = company
    ? companies[company as keyof typeof companies]
    : {
        name: "No Company Selected",
        revenue: "--",
        threats: "--",
        assets: "--",
        score: "--",
      };

  return (
    <main className="min-h-screen bg-[#09090B] text-white p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            AgentShield Dashboard
          </h1>

          <p className="text-zinc-400 mt-2">
            Executive overview of revenue, security, and AI operations.
          </p>
        </div>

        <div className="bg-blue-500/20 border border-blue-500 rounded-2xl p-4 mb-6">
          <div className="flex justify-between items-center">

            <div>
              <p className="font-semibold">
                Private Beta
              </p>

              <p className="text-sm text-zinc-300">
                Select a demo company to load sample metrics.
              </p>
            </div>

            <select
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2"
            >
              <option value="">
                Select Demo Company
              </option>

              <option value="roofing">
                Acme Roofing LLC
              </option>

              <option value="hvac">
                Atlanta HVAC Pros
              </option>

              <option value="dental">
                Smith Dental Group
              </option>
            </select>

          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-4xl font-bold text-cyan-400">
            {current.name}
          </h2>

          <p className="text-zinc-400">
            Protected by AgentShield
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400 text-sm">
              Security Score
            </p>

            <h2 className="text-3xl font-bold mt-2 text-green-500">
              {company ? current.score : "--"}
            </h2>

            <p className="text-green-400 text-sm mt-2">
              {company ? "Low Risk" : "--"}
            </p>

            <p className="text-zinc-500 text-xs mt-1">
              {company ? "Last scan: 2 minutes ago" : "--"}
            </p>
          </div>

          <Card
            title="Revenue Recovered"
            value={company ? current.revenue : "--"}
          />

          <Card
            title="Threats Blocked"
            value={company ? current.threats : "--"}
          />

          <Card
            title="Protected Assets"
            value={company ? current.assets : "--"}
          />

          <Card
            title="AI Agents"
            value={company ? "8" : "--"}
          />

        </div>

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

      </div>
    </main>
  );
}





