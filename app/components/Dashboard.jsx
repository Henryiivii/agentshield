"use client";
import { useState, useEffect } from "react";

const mockData = {
business: "Apex Painting Co.",
agent: "APEX-001",
stats: {
leadsCapture: 47,
appointmentsBooked: 31,
revenueRecovered: 18400,
agentUptime: 99.7,
},
leads: [
{ id: "L001", name: "Marcus T.", phone: "***-***-4821", time: "Today, 11:42 PM", type: "After-hours", status: "Converted", value: 1200 },
{ id: "L002", name: "Sandra W.", phone: "***-***-7730", time: "Today, 9:15 PM", type: "Missed call", status: "Pending", value: 800 },
{ id: "L003", name: "James R.", phone: "***-***-2291", time: "Yesterday, 8:03 PM", type: "After-hours", status: "Converted", value: 2400 },
{ id: "L004", name: "Priya K.", phone: "***-***-5509", time: "Yesterday, 6:48 PM", type: "Web form", status: "Converted", value: 650 },
{ id: "L005", name: "Derek M.", phone: "***-***-1143", time: "Apr 18, 10:22 PM", type: "Missed call", status: "Lost", value: 400 },
{ id: "L006", name: "Aisha L.", phone: "***-***-9967", time: "Apr 18, 7:11 PM", type: "After-hours", status: "Converted", value: 1750 },
],
appointments: [
{ id: "A001", client: "Marcus T.", date: "Apr 23", time: "10:00 AM", job: "Interior repaint - 3BR", status: "Confirmed" },
{ id: "A002", client: "James R.", date: "Apr 24", time: "8:30 AM", job: "Exterior full house", status: "Confirmed" },
{ id: "A003", client: "Priya K.", date: "Apr 25", time: "2:00 PM", job: "Kitchen + dining room", status: "Pending" },
{ id: "A004", client: "Aisha L.", date: "Apr 26", time: "9:00 AM", job: "Garage + basement", status: "Confirmed" },
{ id: "A005", client: "Tom B.", date: "Apr 28", time: "11:00 AM", job: "Deck staining", status: "Pending" },
],
agentLog: [
{ id: "AG001", time: "11:42 PM", event: "Inbound call answered", detail: "Caller greeted, quote request captured", duration: "3m 12s" },
{ id: "AG002", time: "11:43 PM", event: "SMS follow-up sent", detail: "Booking link dispatched to +1***4821", duration: "—" },
{ id: "AG003", time: "9:15 PM", event: "Missed call detected", detail: "Voicemail fallback triggered", duration: "—" },
{ id: "AG004", time: "9:16 PM", event: "SMS follow-up sent", detail: "Re-engagement text sent to +1***7730", duration: "—" },
{ id: "AG005", time: "4:02 PM", event: "Review request sent", detail: "Post-job SMS to James R.", duration: "—" },
{ id: "AG006", time: "2:30 PM", event: "Appointment reminder", detail: "24hr reminder sent to 3 clients", duration: "—" },
],
securityLog: [
{ id: "S001", time: "Today, 11:44 PM", event: "PII masked in log", severity: "Info", detail: "Phone number redacted before storage" },
{ id: "S002", time: "Today, 9:20 PM", event: "Login: Owner", severity: "Info", detail: "Successful MFA login from 192.168.x.x" },
{ id: "S003", time: "Today, 8:01 AM", event: "API key rotated", severity: "Info", detail: "Scheduled rotation completed successfully" },
{ id: "S004", time: "Yesterday, 11:58 PM", event: "Prompt injection attempt", severity: "Warning", detail: "Anomalous input detected and blocked" },
{ id: "S005", time: "Yesterday, 6:00 AM", event: "SSL cert renewed", severity: "Info", detail: "TLS 1.3 cert auto-renewed, valid 90 days" },
{ id: "S006", time: "Apr 18, 3:12 PM", event: "Rate limit triggered", severity: "Warning", detail: "15 rapid requests from single IP — blocked" },
],
weeklyRevenue: [6200, 8400, 5900, 7100, 9200, 11400, 18400],
weeklyLeads: [8, 12, 9, 11, 14, 18, 47],
};

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function MiniBarChart({ data, color, label }) {
const max = Math.max(...data);
return (
<div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 48 }}>
{data.map((v, i) => (
<div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
<div
style={{
width: "100%",
height: `${(v / max) * 40}px`,
background: i === data.length - 1 ? color : `${color}55`,
borderRadius: 2,
transition: "height 0.6s ease",
}}
/>
<span style={{ fontSize: 9, color: "#666", fontFamily: "monospace" }}>{weekDays[i]}</span>
</div>
))}
</div>
);
}

function StatusBadge({ status }) {
const colors = {
Converted: { bg: "#0d2e1a", color: "#22c55e", border: "#166534" },
Pending: { bg: "#1e1a0d", color: "#eab308", border: "#854d0e" },
Lost: { bg: "#2e0d0d", color: "#ef4444", border: "#991b1b" },
Confirmed: { bg: "#0d1e2e", color: "#38bdf8", border: "#075985" },
Info: { bg: "#0d1e2e", color: "#38bdf8", border: "#075985" },
Warning: { bg: "#1e1a0d", color: "#eab308", border: "#854d0e" },
};
const c = colors[status] || colors.Info;
return (
<span style={{
fontSize: 11,
padding: "2px 8px",
borderRadius: 4,
background: c.bg,
color: c.color,
border: `1px solid ${c.border}`,
fontFamily: "monospace",
letterSpacing: "0.05em",
fontWeight: 600,
}}>
{status.toUpperCase()}
</span>
);
}



// ── Login Screen ──────────────────────────────────────────────
function LoginScreen({ onLogin }) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [mfaCode, setMfaCode] = useState("");
const [step, setStep] = useState("credentials"); // "credentials" | "mfa"
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
const [showPass, setShowPass] = useState(false);
const [mounted, setMounted] = useState(false);

useEffect(() => { setMounted(true); }, []);

const DEMO_EMAIL = "owner@apexpainting.com";
const DEMO_PASSWORD = "Demo1234!";
const DEMO_MFA = "123456";

function handleCredentials() {
setError("");
if (!email || !password) { setError("Please enter your email and password."); return; }
if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
setError("Invalid credentials. Try: owner@apexpainting.com / Demo1234!");
return;
}
setLoading(true);
setTimeout(() => { setLoading(false); setStep("mfa"); }, 900);
}

function handleMfa() {
setError("");
if (mfaCode.length !== 6) { setError("Enter the 6-digit code."); return; }
if (mfaCode !== DEMO_MFA) { setError("Incorrect code. Try: 123456"); return; }
setLoading(true);
setTimeout(() => { setLoading(false); onLogin(); }, 800);
}

const inputStyle = {
width: "100%",
padding: "11px 14px",
background: "#0a0f14",
border: "1px solid #1e2d3d",
borderRadius: 8,
color: "#e2e8f0",
fontSize: 14,
outline: "none",
transition: "border-color 0.2s",
fontFamily: "inherit",
};

return (
<div style={{
minHeight: "100vh",
background: "#080c10",
display: "flex",
alignItems: "center",
justifyContent: "center",
fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
position: "relative",
overflow: "hidden",
}}>
{/* Background grid */}
<div style={{
position: "absolute", inset: 0,
backgroundImage: "linear-gradient(#1a2233 1px, transparent 1px), linear-gradient(90deg, #1a2233 1px, transparent 1px)",
backgroundSize: "40px 40px",
opacity: 0.15,
}} />
{/* Glow */}
<div style={{
position: "absolute",
width: 500, height: 500,
background: "radial-gradient(circle, #0ea5e920 0%, transparent 70%)",
top: "50%", left: "50%",
transform: "translate(-50%, -50%)",
pointerEvents: "none",
}} />

<div style={{
width: 420,
background: "#0d1117",
border: "1px solid #1a2233",
borderRadius: 16,
padding: "40px 36px",
position: "relative",
zIndex: 1,
opacity: mounted ? 1 : 0,
transform: mounted ? "translateY(0)" : "translateY(16px)",
transition: "all 0.5s ease",
}}>
{/* Logo */}
<div style={{ textAlign: "center", marginBottom: 32 }}>
<div style={{
width: 44, height: 44,
background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
borderRadius: 10,
display: "flex", alignItems: "center", justifyContent: "center",
fontSize: 20, fontWeight: 800,
margin: "0 auto 12px",
}}>A</div>
<div style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em" }}>AgentShield</div>
<div style={{ fontSize: 13, color: "#475569", marginTop: 4 }}>Client Dashboard</div>
</div>

{step === "credentials" && (
<>
<div style={{ marginBottom: 16 }}>
<label style={{ fontSize: 12, color: "#64748b", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>Email</label>
<input
type="email"
value={email}
onChange={e => setEmail(e.target.value)}
onKeyDown={e => e.key === "Enter" && handleCredentials()}
placeholder="owner@yourbusiness.com"
style={inputStyle}
onFocus={e => e.target.style.borderColor = "#0ea5e9"}
onBlur={e => e.target.style.borderColor = "#1e2d3d"}
/>
</div>
<div style={{ marginBottom: 24 }}>
<label style={{ fontSize: 12, color: "#64748b", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>Password</label>
<div style={{ position: "relative" }}>
<input
type={showPass ? "text" : "password"}
value={password}
onChange={e => setPassword(e.target.value)}
onKeyDown={e => e.key === "Enter" && handleCredentials()}
placeholder="••••••••"
style={{ ...inputStyle, paddingRight: 44 }}
onFocus={e => e.target.style.borderColor = "#0ea5e9"}
onBlur={e => e.target.style.borderColor = "#1e2d3d"}
/>
<button onClick={() => setShowPass(!showPass)} style={{
position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
background: "none", border: "none", color: "#475569", cursor: "pointer", fontSize: 13,
}}>
{showPass ? "Hide" : "Show"}
</button>
</div>
</div>
{error && <div style={{ fontSize: 13, color: "#ef4444", marginBottom: 14, padding: "8px 12px", background: "#2e0d0d", borderRadius: 6, border: "1px solid #991b1b" }}>{error}</div>}
<button onClick={handleCredentials} style={{
width: "100%", padding: "12px",
background: loading ? "#1a2233" : "linear-gradient(135deg, #0ea5e9, #6366f1)",
border: "none", borderRadius: 8,
color: "#fff", fontSize: 14, fontWeight: 600,
cursor: loading ? "not-allowed" : "pointer",
transition: "opacity 0.2s",
fontFamily: "inherit",
}}>
{loading ? "Verifying..." : "Continue →"}
</button>
<div style={{ marginTop: 20, padding: "12px", background: "#090d12", borderRadius: 8, border: "1px solid #1a2233" }}>
<div style={{ fontSize: 11, color: "#334155", marginBottom: 4 }}>DEMO CREDENTIALS</div>
<div style={{ fontSize: 12, color: "#475569", fontFamily: "monospace" }}>owner@apexpainting.com</div>
<div style={{ fontSize: 12, color: "#475569", fontFamily: "monospace" }}>Demo1234!</div>
</div>
</>
)}

{step === "mfa" && (
<>
<div style={{
textAlign: "center", marginBottom: 24,
padding: "16px", background: "#0d1e2e", borderRadius: 10, border: "1px solid #075985"
}}>
<div style={{ fontSize: 24, marginBottom: 8 }}>🔐</div>
<div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Two-Factor Authentication</div>
<div style={{ fontSize: 12, color: "#64748b" }}>A 6-digit code was sent to your authenticator app.</div>
</div>
<div style={{ marginBottom: 24 }}>
<label style={{ fontSize: 12, color: "#64748b", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>Authentication Code</label>
<input
type="text"
value={mfaCode}
onChange={e => setMfaCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
onKeyDown={e => e.key === "Enter" && handleMfa()}
placeholder="000000"
maxLength={6}
style={{ ...inputStyle, textAlign: "center", fontSize: 24, fontFamily: "monospace", letterSpacing: "0.3em" }}
onFocus={e => e.target.style.borderColor = "#0ea5e9"}
onBlur={e => e.target.style.borderColor = "#1e2d3d"}
/>
</div>
{error && <div style={{ fontSize: 13, color: "#ef4444", marginBottom: 14, padding: "8px 12px", background: "#2e0d0d", borderRadius: 6, border: "1px solid #991b1b" }}>{error}</div>}
<button onClick={handleMfa} style={{
width: "100%", padding: "12px",
background: loading ? "#1a2233" : "linear-gradient(135deg, #0ea5e9, #6366f1)",
border: "none", borderRadius: 8,
color: "#fff", fontSize: 14, fontWeight: 600,
cursor: loading ? "not-allowed" : "pointer",
fontFamily: "inherit",
}}>
{loading ? "Authenticating..." : "Verify & Login"}
</button>
<button onClick={() => { setStep("credentials"); setError(""); setMfaCode(""); }} style={{
width: "100%", marginTop: 10, padding: "10px",
background: "none", border: "1px solid #1a2233",
borderRadius: 8, color: "#64748b", fontSize: 13,
cursor: "pointer", fontFamily: "inherit",
}}>← Back</button>
<div style={{ marginTop: 16, padding: "10px 12px", background: "#090d12", borderRadius: 8, border: "1px solid #1a2233" }}>
<div style={{ fontSize: 11, color: "#334155", marginBottom: 2 }}>DEMO CODE</div>
<div style={{ fontSize: 13, color: "#475569", fontFamily: "monospace", letterSpacing: "0.2em" }}>123456</div>
</div>
</>
)}

<div style={{ marginTop: 24, textAlign: "center", fontSize: 11, color: "#1e2d3d" }}>
Protected by AgentShield · TLS 1.3 · MFA Required
</div>
</div>
</div>
);
}

// ── Main App (Login Gate) ─────────────────────────────────────
export default function App() {
const [authed, setAuthed] = useState(false);
if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;
return <Dashboard onLogout={() => setAuthed(false)} />;
}

function Dashboard({ onLogout }) {
const [tab, setTab] = useState("leads");
const [mounted, setMounted] = useState(false);
const d = mockData;

useEffect(() => { setMounted(true); }, []);

const tabs = [
{ id: "leads", label: "Leads & Calls" },
{ id: "appointments", label: "Appointments" },
{ id: "agent", label: "Agent Activity" },
{ id: "security", label: "Security Logs" },
];

return (
<div style={{
minHeight: "100vh",
background: "#080c10",
color: "#e2e8f0",
fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
padding: "0",
}}>
{/* Topbar */}
<div style={{
borderBottom: "1px solid #1a2233",
padding: "0 32px",
display: "flex",
alignItems: "center",
justifyContent: "space-between",
height: 60,
background: "#060a0e",
position: "sticky",
top: 0,
zIndex: 100,
}}>
<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
<div style={{
width: 28,
height: 28,
background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
borderRadius: 6,
display: "flex",
alignItems: "center",
justifyContent: "center",
fontSize: 13,
fontWeight: 800,
}}>A</div>
<span style={{ fontWeight: 700, fontSize: 15, letterSpacing: "-0.02em" }}>AgentShield</span>
<span style={{ color: "#334155", fontSize: 14 }}>|</span>
<span style={{ color: "#64748b", fontSize: 13 }}>{d.business}</span>
</div>
<div style={{ display: "flex", alignItems: "center", gap: 16 }}>
<div style={{
display: "flex", alignItems: "center", gap: 6,
background: "#0d2e1a", border: "1px solid #166534",
borderRadius: 20, padding: "4px 12px",
}}>
<div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", animation: "pulse 2s infinite" }} />
<span style={{ fontSize: 12, color: "#22c55e", fontWeight: 600 }}>Agent Online</span>
</div>
<span style={{ fontSize: 12, color: "#475569" }}>ID: {d.agent}</span>
<button
onClick={onLogout}
style={{
padding: "5px 14px", background: "none",
border: "1px solid #1a2233", borderRadius: 6,
color: "#475569", fontSize: 12, cursor: "pointer",
fontFamily: "inherit", transition: "all 0.2s",
}}
onMouseEnter={e => { e.currentTarget.style.borderColor = "#ef4444"; e.currentTarget.style.color = "#ef4444"; }}
onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a2233"; e.currentTarget.style.color = "#475569"; }}
>Sign Out</button>
</div>
</div>

<div style={{ padding: "28px 32px", maxWidth: 1200, margin: "0 auto" }}>
{/* Stats row */}
<div style={{
display: "grid",
gridTemplateColumns: "repeat(4, 1fr)",
gap: 16,
marginBottom: 28,
opacity: mounted ? 1 : 0,
transform: mounted ? "translateY(0)" : "translateY(12px)",
transition: "all 0.5s ease",
}}>
{[
{
label: "Leads Captured", value: d.stats.leadsCapture, suffix: " this month",
color: "#0ea5e9", chart: d.weeklyLeads, sub: "+12 vs last month"
},
{
label: "Appointments Booked", value: d.stats.appointmentsBooked, suffix: " scheduled",
color: "#6366f1", chart: null, sub: "66% conversion rate"
},
{
label: "Revenue Recovered", value: `$${d.stats.revenueRecovered.toLocaleString()}`, suffix: "",
color: "#22c55e", chart: d.weeklyRevenue, sub: "from after-hours calls"
},
{
label: "Agent Uptime", value: `${d.stats.agentUptime}%`, suffix: "",
color: "#f59e0b", chart: null, sub: "Last 30 days"
},
].map((s, i) => (
<div key={i} style={{
background: "#0d1117",
border: "1px solid #1a2233",
borderRadius: 12,
padding: "20px",
position: "relative",
overflow: "hidden",
transition: "border-color 0.2s",
}}
onMouseEnter={e => e.currentTarget.style.borderColor = s.color + "66"}
onMouseLeave={e => e.currentTarget.style.borderColor = "#1a2233"}
>
<div style={{ fontSize: 12, color: "#64748b", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
<div style={{ fontSize: 28, fontWeight: 800, color: s.color, letterSpacing: "-0.03em", marginBottom: 4 }}>
{s.value}<span style={{ fontSize: 13, fontWeight: 400, color: "#475569" }}>{s.suffix}</span>
</div>
<div style={{ fontSize: 12, color: "#475569", marginBottom: s.chart ? 12 : 0 }}>{s.sub}</div>
{s.chart && <MiniBarChart data={s.chart} color={s.color} />}
</div>
))}
</div>

{/* Tabs */}
<div style={{ display: "flex", gap: 2, marginBottom: 20, background: "#0d1117", borderRadius: 10, padding: 4, width: "fit-content", border: "1px solid #1a2233" }}>
{tabs.map(t => (
<button key={t.id} onClick={() => setTab(t.id)} style={{
padding: "8px 18px",
borderRadius: 7,
border: "none",
background: tab === t.id ? "#1a2a3f" : "transparent",
color: tab === t.id ? "#e2e8f0" : "#64748b",
fontSize: 13,
fontWeight: tab === t.id ? 600 : 400,
cursor: "pointer",
transition: "all 0.2s",
outline: tab === t.id ? "1px solid #2a3f5f" : "none",
}}>
{t.label}
{t.id === "security" && (
<span style={{
marginLeft: 6, fontSize: 10, background: "#1e1a0d",
color: "#eab308", border: "1px solid #854d0e",
borderRadius: 4, padding: "1px 5px",
}}>2</span>
)}
</button>
))}
</div>

{/* Table card */}
<div style={{
background: "#0d1117",
border: "1px solid #1a2233",
borderRadius: 12,
overflow: "hidden",
opacity: mounted ? 1 : 0,
transition: "opacity 0.4s ease 0.2s",
}}>
{/* Table header */}
<div style={{
padding: "16px 24px",
borderBottom: "1px solid #1a2233",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
}}>
<span style={{ fontWeight: 600, fontSize: 14 }}>
{tab === "leads" && "Captured Leads & Calls"}
{tab === "appointments" && "Scheduled Appointments"}
{tab === "agent" && "AI Agent Activity Log"}
{tab === "security" && "Security & Audit Log"}
</span>
<div style={{
display: "flex", alignItems: "center", gap: 6,
padding: "4px 12px",
background: "#0a0f14",
border: "1px solid #1a2233",
borderRadius: 6,
fontSize: 11,
color: "#475569",
userSelect: "none",
}}>
🔒 View Only
</div>
</div>

{/* Leads tab */}
{tab === "leads" && (
<table style={{ width: "100%", borderCollapse: "collapse" }}>
<thead>
<tr style={{ borderBottom: "1px solid #1a2233" }}>
{["ID", "Name", "Phone", "Time", "Type", "Status", "Est. Value"].map(h => (
<th key={h} style={{ padding: "10px 24px", textAlign: "left", fontSize: 11, color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{h}</th>
))}
</tr>
</thead>
<tbody>
{d.leads.map((row, i) => (
<tr key={row.id} style={{
borderBottom: "1px solid #0f1923",
background: i % 2 === 0 ? "transparent" : "#090d12",
transition: "background 0.15s",
}}
onMouseEnter={e => e.currentTarget.style.background = "#111827"}
onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? "transparent" : "#090d12"}
>
<td style={{ padding: "12px 24px", fontSize: 12, color: "#475569", fontFamily: "monospace" }}>{row.id}</td>
<td style={{ padding: "12px 24px", fontSize: 13, fontWeight: 600 }}>{row.name}</td>
<td style={{ padding: "12px 24px", fontSize: 12, color: "#64748b", fontFamily: "monospace" }}>{row.phone}</td>
<td style={{ padding: "12px 24px", fontSize: 12, color: "#64748b" }}>{row.time}</td>
<td style={{ padding: "12px 24px", fontSize: 12, color: "#94a3b8" }}>{row.type}</td>
<td style={{ padding: "12px 24px" }}><StatusBadge status={row.status} /></td>
<td style={{ padding: "12px 24px", fontSize: 13, color: "#22c55e", fontWeight: 700, fontFamily: "monospace" }}>${row.value.toLocaleString()}</td>
</tr>
))}
</tbody>
</table>
)}

{/* Appointments tab */}
{tab === "appointments" && (
<table style={{ width: "100%", borderCollapse: "collapse" }}>
<thead>
<tr style={{ borderBottom: "1px solid #1a2233" }}>
{["ID", "Client", "Date", "Time", "Job", "Status"].map(h => (
<th key={h} style={{ padding: "10px 24px", textAlign: "left", fontSize: 11, color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{h}</th>
))}
</tr>
</thead>
<tbody>
{d.appointments.map((row, i) => (
<tr key={row.id} style={{
borderBottom: "1px solid #0f1923",
background: i % 2 === 0 ? "transparent" : "#090d12",
}}
onMouseEnter={e => e.currentTarget.style.background = "#111827"}
onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? "transparent" : "#090d12"}
>
<td style={{ padding: "12px 24px", fontSize: 12, color: "#475569", fontFamily: "monospace" }}>{row.id}</td>
<td style={{ padding: "12px 24px", fontSize: 13, fontWeight: 600 }}>{row.client}</td>
<td style={{ padding: "12px 24px", fontSize: 13, color: "#0ea5e9", fontWeight: 600 }}>{row.date}</td>
<td style={{ padding: "12px 24px", fontSize: 12, color: "#64748b" }}>{row.time}</td>
<td style={{ padding: "12px 24px", fontSize: 12, color: "#94a3b8" }}>{row.job}</td>
<td style={{ padding: "12px 24px" }}><StatusBadge status={row.status} /></td>
</tr>
))}
</tbody>
</table>
)}

{/* Agent log tab */}
{tab === "agent" && (
<table style={{ width: "100%", borderCollapse: "collapse" }}>
<thead>
<tr style={{ borderBottom: "1px solid #1a2233" }}>
{["ID", "Time", "Event", "Detail", "Duration"].map(h => (
<th key={h} style={{ padding: "10px 24px", textAlign: "left", fontSize: 11, color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{h}</th>
))}
</tr>
</thead>
<tbody>
{d.agentLog.map((row, i) => (
<tr key={row.id} style={{
borderBottom: "1px solid #0f1923",
background: i % 2 === 0 ? "transparent" : "#090d12",
}}
onMouseEnter={e => e.currentTarget.style.background = "#111827"}
onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? "transparent" : "#090d12"}
>
<td style={{ padding: "12px 24px", fontSize: 12, color: "#475569", fontFamily: "monospace" }}>{row.id}</td>
<td style={{ padding: "12px 24px", fontSize: 12, color: "#64748b", fontFamily: "monospace" }}>{row.time}</td>
<td style={{ padding: "12px 24px", fontSize: 13, fontWeight: 600, color: "#6366f1" }}>{row.event}</td>
<td style={{ padding: "12px 24px", fontSize: 12, color: "#94a3b8" }}>{row.detail}</td>
<td style={{ padding: "12px 24px", fontSize: 12, color: "#475569", fontFamily: "monospace" }}>{row.duration}</td>
</tr>
))}
</tbody>
</table>
)}

{/* Security log tab */}
{tab === "security" && (
<>
<div style={{
margin: "16px 24px",
padding: "12px 16px",
background: "#1e1a0d",
border: "1px solid #854d0e",
borderRadius: 8,
fontSize: 13,
color: "#eab308",
display: "flex",
gap: 10,
alignItems: "center",
}}>
<span>⚠</span>
<span>2 security warnings detected in the last 48 hours. Review recommended.</span>
</div>
<table style={{ width: "100%", borderCollapse: "collapse" }}>
<thead>
<tr style={{ borderBottom: "1px solid #1a2233" }}>
{["ID", "Timestamp", "Event", "Severity", "Detail"].map(h => (
<th key={h} style={{ padding: "10px 24px", textAlign: "left", fontSize: 11, color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{h}</th>
))}
</tr>
</thead>
<tbody>
{d.securityLog.map((row, i) => (
<tr key={row.id} style={{
borderBottom: "1px solid #0f1923",
background: row.severity === "Warning" ? "#120e00" : i % 2 === 0 ? "transparent" : "#090d12",
}}
onMouseEnter={e => e.currentTarget.style.background = "#111827"}
onMouseLeave={e => e.currentTarget.style.background = row.severity === "Warning" ? "#120e00" : i % 2 === 0 ? "transparent" : "#090d12"}
>
<td style={{ padding: "12px 24px", fontSize: 12, color: "#475569", fontFamily: "monospace" }}>{row.id}</td>
<td style={{ padding: "12px 24px", fontSize: 12, color: "#64748b" }}>{row.time}</td>
<td style={{ padding: "12px 24px", fontSize: 13, fontWeight: 600 }}>{row.event}</td>
<td style={{ padding: "12px 24px" }}><StatusBadge status={row.severity} /></td>
<td style={{ padding: "12px 24px", fontSize: 12, color: "#94a3b8" }}>{row.detail}</td>
</tr>
))}
</tbody>
</table>
</>
)}

{/* Footer */}
<div style={{
padding: "12px 24px",
borderTop: "1px solid #1a2233",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
}}>
<span style={{ fontSize: 12, color: "#334155" }}>
All data encrypted at rest · TLS 1.3 in transit · PII masked
</span>
<span style={{ fontSize: 12, color: "#334155" }}>
Last sync: {new Date().toLocaleTimeString()}
</span>
</div>
</div>
</div>

<style>{`
@keyframes pulse {
0%, 100% { opacity: 1; }
50% { opacity: 0.4; }
}
* { box-sizing: border-box; }
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #080c10; }
::-webkit-scrollbar-thumb { background: #1a2233; border-radius: 3px; }
`}</style>
</div>
);
}