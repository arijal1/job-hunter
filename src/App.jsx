import { useState, useEffect, useRef } from "react";

// ─── User Profiles ────────────────────────────────────────────────────────────
const USERS = {
  anup: {
    id: "anup",
    name: "Anup Rijal",
    avatar: "AR",
    color: "#4a9eff",
    location: "Burwood, NSW 2134",
    phone: "0416 203 633",
    email: "rejalanop55@gmail.com",
    linkedin: "https://www.linkedin.com/in/anup-rijal-bb579a131",
    current: "Service Desk Analyst L2 — Opal Healthcare",
    salary: "AUD 80,000–100,000",
    sectors: "healthcare, enterprise IT, managed services",
    roles: [
      "Service Desk Analyst Level 2 Sydney",
      "ICT Technical Support Specialist Sydney",
      "Endpoint Engineer Intune SCCM Sydney",
      "Junior Systems Administrator M365 Sydney",
      "IT Operations Analyst Healthcare Sydney",
    ],
    resume: `Anup Rijal
Burwood, NSW 2134 | 0416 203 633 | rejalanop55@gmail.com
LinkedIn: https://www.linkedin.com/in/anup-rijal-bb579a131 | Portfolio: https://anuprijal.com

PROFESSIONAL SUMMARY
IT Service Desk Analyst Level 2 with experience supporting enterprise environments across healthcare, telecommunications, and technology sectors. Skilled in advanced troubleshooting, Microsoft 365 administration, Active Directory, Intune device management, SCCM deployments, and endpoint support across Windows, macOS, and mobile platforms. Known for resolving complex escalations, improving IT processes, and delivering high-quality end-user support in fast-paced enterprise environments.

TECHNICAL SKILLS
Operating Systems: Windows 10/11, Windows Server 2016/2019, macOS, iOS
Microsoft Technologies: Microsoft 365, Exchange Admin Center, Azure AD, Teams, SharePoint
Endpoint Management: Microsoft Intune, SCCM, PDQ Deploy
Identity & Access: Active Directory, Group Policy, User Provisioning
Virtualization: VMware, Hyper-V, Citrix
Networking: TCP/IP, DNS, DHCP, VLANs, VPN, Routing & Switching
Remote Support: RDC, TeamViewer, AnyDesk, Quick Assist
Ticketing Systems: ServiceNow, Zendesk, FreshService
Hardware: Laptops, desktops, MacBooks, Printers, mobile devices, Timeclock

PROFESSIONAL EXPERIENCE

Service Desk Analyst – Level 2 | Opal Healthcare | Dec 2025 – Present
• Provide Level 2 technical support and escalation management for enterprise users across healthcare facilities.
• Troubleshoot complex Windows, macOS, and mobile device issues escalated from Level 1 support.
• Administer Active Directory accounts, group policies, and security permissions; Microsoft 365 services including Exchange, Teams, SharePoint, and user provisioning.
• Project cutover for new site acquisition as ICT end user lead for multiple sites.
• Support device management using Microsoft Intune and SCCM including policy deployment and compliance monitoring.
• Investigate and resolve networking issues including DNS, DHCP, VPN, and connectivity problems.
• Manage IP phones and DECT phones across Opal facilities.
• Perform device deployment, imaging, and lifecycle management for laptops, desktops, and mobile devices.
• Participate in incident management and root cause analysis for recurring technical issues.
• Maintain and improve internal IT knowledge base documentation.

Service Desk Analyst – Level 1 | Opal Healthcare | Dec 2024 – Dec 2025
• Provided frontline IT support across enterprise healthcare environments.
• Logged and managed incidents and service requests using ITSM platforms.
• Supported Windows, macOS, and mobile devices including troubleshooting hardware and software issues.
• Assisted with device imaging, account provisioning, and application installations.
• Resolved issues related to printers, VPN access, and Microsoft 365 applications.
• Escalated complex incidents to Level 2 and infrastructure teams.

Technical Specialist | Apple | May 2024 – Dec 2024
• Delivered advanced Apple device troubleshooting and technical solutions for customers.
• Escalated complex technical issues and ensured high-quality customer support.
• Maintained strong customer satisfaction through effective problem resolution.

IT Support Officer (Intern) | Rebb Tech Pty Ltd | Dec 2021 – May 2022
• Delivered remote and onsite support for PCs, printers, and network systems.
• Assisted with hardware and software configuration and enterprise device rollouts.
• Supported SCCM deployments and maintained equipment inventory.

EDUCATION
Bachelor of Information Technology & Systems — Victorian Institute of Technology Sydney | Mar 2018 – Dec 2020
Certificate IV in Information Technology — TAFE NSW Meadowbank | Jul 2017 – Jan 2018
Certificate III in Information, Digital Media & Technology — TAFE NSW Meadowbank | Jan 2017 – Jul 2018

CERTIFICATIONS
• Systems Analyst — Australian Computer Society
• Network & Systems Engineer — Australian Computer Society`,
  },

  apil: {
    id: "apil",
    name: "Apil Rijal",
    avatar: "AP",
    color: "#34d399",
    location: "Burwood, NSW",
    phone: "+61 411 237 563",
    email: "rijalapil43@gmail.com",
    linkedin: "https://linkedin.com/in/aaronrijal",
    current: "Data Research Analyst — Dealer Studio (Remote)",
    salary: "AUD 85,000–115,000",
    sectors: "data analytics, government, health, automotive, finance",
    roles: [
      "Data Analyst Sydney",
      "Senior Data Analyst NSW Government Sydney",
      "Business Intelligence Analyst Power BI Sydney",
      "Analytics Engineer SQL Python Sydney",
      "Data Scientist Healthcare Sydney",
    ],
    resume: `APIL RIJAL
Burwood, NSW | +61 411 237 563 | rijalapil43@gmail.com
LinkedIn: https://linkedin.com/in/aaronrijal | GitHub: https://github.com/rijalapil

OBJECTIVE
Data Analyst with years of experience in data research, predictive analytics, and data-driven process improvement across NSW Government and private sector organisations. Skilled in analysing large datasets, developing dashboards, automating workflows, and translating complex data into clear, actionable insights that support operational and strategic decision-making.

TECHNICAL SKILLS
- Data Analysis & Reporting: KPI monitoring, trend analysis, performance reporting, predictive analytics
- Programming: Python, SQL
- Data Visualisation: Power BI, Tableau, Excel (Pivot Tables, LOOKUP, Charts)
- Databases: MySQL, PostgreSQL, MSSQL, MongoDB, BigQuery, Snowflake
- Data Management: Data cleaning, transformation, ETL processes, API integration
- Cloud: AWS, Azure, GCP

PROFESSIONAL EXPERIENCE

Data Research Analyst | Dealer Studio, Gold Coast QLD (Remote) | Oct 2024 - Feb 2026
- Conducted in-depth data research and analysis to support automotive sales performance and inventory optimisation
- Designed interactive dashboards and executive reports to monitor KPIs, stock turnover, and revenue performance
- Built predictive models to forecast vehicle demand, pricing trends, and market behaviour using Python and ML
- Extracted, cleaned, and transformed large datasets, optimising ETL pipelines for data accuracy and integrity
- Performed EDA to identify trends, anomalies, and business opportunities

Data Analyst | NSW Health, Chatswood NSW | Jul 2022 - Oct 2024
- Conducted thorough data analysis to identify trends, patterns, and correlations in large datasets
- Designed and maintained dashboards and reporting tools for internal and external stakeholders
- Developed predictive models for disease forecasting, resource allocation, and operational planning
- Implemented process improvements, workflow automation, and standardisation to enhance operational efficiency
- Collaborated with cross-functional teams on vaccination coverage and health outcomes analytics

Aviation Safety Analyst | Certis Security, Sydney NSW | Jan 2021 - Jul 2022
- Analysed aviation safety data, incident reports, and operational logs to identify trends and risks
- Maintained dashboards to monitor safety performance, compliance, and incident response metrics
- Developed predictive models to anticipate safety risks and resource allocation needs

VOLUNTEERING
Australian Border Force - Sydney Airport Screening Project - Dec 2020

EDUCATION
Bachelor of Computing Information Systems - Victoria University, Melbourne VIC (2019)
Advanced Diploma in Data Analysis - Asia Pacific International College, Sydney NSW (2016)

CERTIFICATIONS
- Google Advanced Data Analytics Specialization
- Microsoft Power BI Data Analyst Associate`,
  },
};

const LOCATIONS = [
  { group: "Sydney",     label: "Sydney CBD",            value: "Sydney CBD, NSW" },
  { group: "Sydney",     label: "North Sydney",          value: "North Sydney, NSW" },
  { group: "Sydney",     label: "Parramatta",            value: "Parramatta, NSW" },
  { group: "Sydney",     label: "Macquarie Park",        value: "Macquarie Park, NSW" },
  { group: "Sydney",     label: "Chatswood",             value: "Chatswood, NSW" },
  { group: "Sydney",     label: "Burwood / Strathfield", value: "Burwood, NSW" },
  { group: "Sydney",     label: "Norwest / Hills",       value: "Norwest Business Park, NSW" },
  { group: "Sydney",     label: "Olympic Park",          value: "Sydney Olympic Park, NSW" },
  { group: "Sydney",     label: "Mascot / Airport",      value: "Mascot, NSW" },
  { group: "Sydney",     label: "Anywhere in NSW",       value: "New South Wales, Australia" },
  { group: "Melbourne",  label: "Melbourne CBD",         value: "Melbourne CBD, VIC" },
  { group: "Melbourne",  label: "St Kilda Rd / Southbank", value: "Southbank, VIC" },
  { group: "Melbourne",  label: "Docklands",             value: "Docklands, VIC" },
  { group: "Melbourne",  label: "Richmond / Cremorne",   value: "Richmond, VIC" },
  { group: "Melbourne",  label: "Clayton / Monash",      value: "Clayton, VIC" },
  { group: "Melbourne",  label: "Dandenong",             value: "Dandenong, VIC" },
  { group: "Melbourne",  label: "Anywhere in VIC",       value: "Victoria, Australia" },
  { group: "Remote",     label: "Remote / WFH",          value: "Remote, Australia" },
  { group: "Remote",     label: "Anywhere in Australia", value: "Australia" },
];

const STATUS_COLS = [
  { id: "saved",     label: "Saved",     color: "#4a9eff", bg: "rgba(74,158,255,0.07)" },
  { id: "applied",   label: "Applied",   color: "#f0c040", bg: "rgba(240,192,64,0.07)" },
  { id: "interview", label: "Interview", color: "#a78bfa", bg: "rgba(167,139,250,0.07)" },
  { id: "offer",     label: "Offer",     color: "#34d399", bg: "rgba(52,211,153,0.07)" },
  { id: "rejected",  label: "Rejected",  color: "#f87171", bg: "rgba(248,113,113,0.07)" },
];

const STORAGE_KEY = (uid) => `jh-pipeline-${uid}`;
const CACHE_KEY   = (uid) => `jh-cache-${uid}`;

// ─── Helpers ──────────────────────────────────────────────────────────────────
function extractJSON(text) {
  if (!text) return null;
  const arr = text.match(/\[\s*\{[\s\S]*\}\s*\]/);
  if (arr) { try { return JSON.parse(arr[0]); } catch (_) {} }
  const obj = text.match(/\{\s*"jobs"\s*:\s*(\[[\s\S]*?\])\s*\}/);
  if (obj) { try { return JSON.parse(obj[1]); } catch (_) {} }
  const clean = text.replace(/```json\s*/gi,"").replace(/```\s*/g,"").trim();
  if (clean.startsWith("[")) { try { return JSON.parse(clean); } catch (_) {} }
  try { const p = JSON.parse(text.trim()); return Array.isArray(p) ? p : p.jobs || null; } catch (_) {}
  return null;
}

// ─── Job search — calls Pi proxy (SEEK + Adzuna) ─────────────────────────────
async function searchRealJobs(q, location, filters = {}) {
  const proxyUrl = localStorage.getItem("proxy_url") || "http://localhost:3002";
  let url = proxyUrl.replace(/\/$/, "") + "/api/jobs"
    + "?q=" + encodeURIComponent(q)
    + "&location=" + encodeURIComponent(location);
  if (filters.salaryMin)    url += "&salary_min="     + filters.salaryMin;
  if (filters.salaryMax)    url += "&salary_max="     + filters.salaryMax;
  if (filters.contractType) url += "&contract_type="  + filters.contractType;
  if (filters.contractTime) url += "&contract_time="  + filters.contractTime;
  if (filters.daysOld)      url += "&days_old="       + filters.daysOld;
  if (filters.distance)     url += "&distance="       + filters.distance;
  if (filters.sortBy)       url += "&sort_by="        + filters.sortBy;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Proxy error " + res.status + ". Is your Pi proxy running?");
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data;
}

// ─── AI caller — calls Pi proxy → Ollama ─────────────────────────────────────
async function callAI(system, userMsg) {
  const proxyUrl = localStorage.getItem("proxy_url") || "http://localhost:3002";
  const model    = localStorage.getItem("ollama_model") || "llama3.2";
  const url      = proxyUrl.replace(/\/$/, "") + "/api/ollama";

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      stream: false,
      messages: [
        { role: "system", content: system },
        { role: "user",   content: userMsg },
      ],
    }),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error("AI error " + res.status + (txt ? ": " + txt.slice(0,120) : "") + ". Check Pi proxy URL in Settings.");
  }
  const data = await res.json();
  return data?.message?.content || data?.response || "";
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function Tag({ children, color = "#4a9eff" }) {
  return (
    <span style={{
      fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 500,
      padding: "2px 8px", borderRadius: 2, letterSpacing: "0.06em", textTransform: "uppercase",
      background: color + "18", color, border: `1px solid ${color}30`,
    }}>{children}</span>
  );
}

function Btn({ onClick, children, variant = "primary", disabled, small, style: extraStyle }) {
  const base = {
    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
    fontSize: small ? 11 : 13, letterSpacing: "0.07em", textTransform: "uppercase",
    padding: small ? "5px 12px" : "9px 20px", borderRadius: 3,
    cursor: disabled ? "not-allowed" : "pointer", border: "none",
    transition: "all 0.15s", opacity: disabled ? 0.45 : 1,
  };
  const variants = {
    primary: { background: "linear-gradient(135deg,#1a6abf,#0d3a8a)", color: "#7ec8ff", border: "1px solid #2a6abf44" },
    ghost:   { background: "transparent", color: "#4a7a9a", border: "1px solid #1a3a5a" },
    danger:  { background: "transparent", color: "#f87171", border: "1px solid #f8717130" },
    green:   { background: "linear-gradient(135deg,#0d6a4a,#064a32)", color: "#34d399", border: "1px solid #34d39930" },
    purple:  { background: "linear-gradient(135deg,#3a1a8a,#5a2abf)", color: "#c4b5fd", border: "1px solid #a78bfa40" },
  };
  return <button onClick={onClick} disabled={disabled} style={{ ...base, ...variants[variant], ...extraStyle }}>{children}</button>;
}

function Card({ children, style: s }) {
  return (
    <div style={{
      background: "#0d1922", border: "1px solid #1a2d3e", borderRadius: 6,
      padding: "16px 18px", ...s,
    }}>{children}</div>
  );
}

function Spinner({ text = "working…" }) {
  return (
    <div style={{ textAlign: "center", padding: "48px 0" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 14 }}>
        {[0,1,2].map(i => (
          <div key={i} style={{
            width: 7, height: 7, borderRadius: "50%", background: "#4a9eff",
            animation: "pulse 1.4s ease-in-out infinite", animationDelay: `${i*0.2}s`,
          }}/>
        ))}
      </div>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#2a5a8a", letterSpacing: "0.1em" }}>{text}</div>
    </div>
  );
}

function ResultBox({ content, onCopy }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div style={{ position: "relative" }}>
      <div style={{
        background: "#080f18", border: "1px solid #1a3a5a", borderRadius: 4,
        padding: "16px", fontFamily: "'DM Mono', monospace", fontSize: 11.5,
        color: "#8ab8d8", lineHeight: 1.75, whiteSpace: "pre-wrap",
        maxHeight: 420, overflowY: "auto",
      }}>{content}</div>
      <button onClick={copy} style={{
        position: "absolute", top: 10, right: 10,
        fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 10,
        letterSpacing: "0.08em", textTransform: "uppercase",
        padding: "4px 10px", borderRadius: 2, cursor: "pointer",
        background: copied ? "rgba(52,211,153,0.15)" : "rgba(74,158,255,0.1)",
        color: copied ? "#34d399" : "#4a9eff", border: `1px solid ${copied ? "#34d39930" : "#4a9eff30"}`,
      }}>{copied ? "✓ Copied" : "Copy"}</button>
    </div>
  );
}

// ─── Job Card ─────────────────────────────────────────────────────────────────
function JobCard({ job, onSave, onApply, isSaved, onSelect, isSelected }) {
  const [exp, setExp] = useState(false);
  return (
    <div onClick={() => onSelect && onSelect(job)} style={{
      background: isSelected ? "#0e2035" : "#0d1922",
      border: `1px solid ${isSelected ? "#2a6abf" : "#1a2d3e"}`,
      borderRadius: 6, padding: "14px 16px", marginBottom: 8,
      cursor: onSelect ? "pointer" : "default", transition: "all 0.15s",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 16, color: "#ddeeff", marginBottom: 4, letterSpacing: "0.02em" }}>
            {job.title}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: "#4a9eff", fontWeight: 500 }}>{job.company}</span>
            <span style={{ color: "#1a3a5a" }}>·</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#3a6a8a" }}>{job.location}</span>
            {job.salary && <><span style={{ color: "#1a3a5a" }}>·</span><span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#34d399" }}>{job.salary}</span></>}
            {job.type && <Tag color="#a78bfa">{job.type}</Tag>}
            <Tag color={job.source === "SEEK" ? "#f0c040" : job.source === "LinkedIn" ? "#4a9eff" : "#34d399"}>{job.source}</Tag>
          </div>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: "#3a6a8a", lineHeight: 1.55 }}>
            {exp ? job.description : (job.description||"").slice(0, 130) + ((job.description||"").length > 130 ? "…" : "")}
            {(job.description||"").length > 130 && (
              <span onClick={e => { e.stopPropagation(); setExp(!exp); }} style={{ color: "#4a9eff", cursor: "pointer", marginLeft: 4, fontSize: 11 }}>
                {exp ? "less" : "more"}
              </span>
            )}
          </div>
        </div>
        <div style={{ flexShrink: 0, textAlign: "right" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#1a4a6a" }}>{job.postedDate}</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 6, marginTop: 10 }} onClick={e => e.stopPropagation()}>
        <Btn small variant="ghost" onClick={() => onSave(job)}>{isSaved ? "✓ Saved" : "Save"}</Btn>
        <a href={job.url || "#"} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <Btn small variant="primary" onClick={() => onApply(job)}>Apply →</Btn>
        </a>
      </div>
    </div>
  );
}

// ─── Pipeline Card ────────────────────────────────────────────────────────────
function PipelineCard({ job, onStatusChange, onRemove, onSelect }) {
  const [menu, setMenu] = useState(false);
  const col = STATUS_COLS.find(s => s.id === job.status) || STATUS_COLS[0];
  return (
    <div style={{ background: "#080f18", border: "1px solid #1a2d3e", borderRadius: 5, padding: "10px 12px", marginBottom: 7, position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: 1, minWidth: 0, cursor: "pointer" }} onClick={() => onSelect(job)}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, color: "#c8d8e8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{job.title}</div>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, color: "#3a6a8a", marginTop: 2 }}>{job.company}</div>
          {job.salary && <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#34d399", marginTop: 3 }}>{job.salary}</div>}
        </div>
        <button onClick={() => setMenu(!menu)} style={{ background: "none", border: "none", color: "#2a5a7a", cursor: "pointer", fontSize: 16, padding: "0 2px", flexShrink: 0 }}>⋯</button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 7 }}>
        <Tag color={col.color}>{col.label}</Tag>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: "#1a3a5a" }}>{job.savedDate}</span>
      </div>
      {menu && (
        <div style={{ position: "absolute", right: 6, top: 30, background: "#09141e", border: "1px solid #1a3a5a", borderRadius: 4, zIndex: 99, minWidth: 140, boxShadow: "0 8px 32px rgba(0,0,0,0.6)" }}>
          {STATUS_COLS.map(s => (
            <div key={s.id} onClick={() => { onStatusChange(job.id, s.id); setMenu(false); }}
              style={{ padding: "7px 14px", cursor: "pointer", fontFamily: "'Barlow', sans-serif", fontSize: 12, color: s.color }}
              onMouseEnter={e => e.currentTarget.style.background = "#1a2a3a"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >→ {s.label}</div>
          ))}
          <div style={{ height: 1, background: "#1a2d3e", margin: "3px 0" }} />
          <div onClick={() => { onRemove(job.id); setMenu(false); }}
            style={{ padding: "7px 14px", cursor: "pointer", fontFamily: "'Barlow', sans-serif", fontSize: 12, color: "#f87171" }}
            onMouseEnter={e => e.currentTarget.style.background = "#1a2a3a"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >Remove</div>
        </div>
      )}
    </div>
  );
}

// ─── Match Score Ring ─────────────────────────────────────────────────────────
function ScoreRing({ score }) {
  const r = 36, c = 2 * Math.PI * r;
  const pct = Math.min(Math.max(score, 0), 100);
  const dash = (pct / 100) * c;
  const color = pct >= 75 ? "#34d399" : pct >= 50 ? "#f0c040" : "#f87171";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
      <svg width="90" height="90" viewBox="0 0 90 90">
        <circle cx="45" cy="45" r={r} fill="none" stroke="#1a2d3e" strokeWidth="7" />
        <circle cx="45" cy="45" r={r} fill="none" stroke={color} strokeWidth="7"
          strokeDasharray={`${dash} ${c - dash}`} strokeDashoffset={c / 4}
          strokeLinecap="round" style={{ transition: "stroke-dasharray 1s ease" }} />
        <text x="45" y="49" textAnchor="middle" fill={color}
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 18, fontWeight: 700 }}>{pct}%</text>
      </svg>
      <div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color, letterSpacing: "0.04em" }}>
          {pct >= 80 ? "STRONG MATCH" : pct >= 60 ? "GOOD FIT" : pct >= 40 ? "PARTIAL MATCH" : "LOW MATCH"}
        </div>
        <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: "#3a6a8a", marginTop: 2 }}>resume ↔ job description</div>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function JobHunter() {
  const [activeUserId, setActiveUserId] = useState(() => localStorage.getItem("jh-active-user") || "anup");
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("jh-dark-mode") !== "false");
  const user = USERS[activeUserId] || USERS.anup;

  const T = darkMode ? {
    bg: "#070d14", bg2: "#07111a", bg3: "#0d1922", border: "#1a2d3e",
    text: "#c8d8e8", textDim: "#3a6a8a", textMid: "#5a8ab8", accent: "#4a9eff",
  } : {
    bg: "#f0f4f8", bg2: "#ffffff", bg3: "#e8eef5", border: "#c8d8e8",
    text: "#1a2d3e", textDim: "#5a7a9a", textMid: "#2a5a8a", accent: "#1a5fa8",
  };

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("jh-dark-mode", String(next));
  };

  const [tab, setTab]             = useState("search");
  const [jobs, setJobs]           = useState([]);
  const [pipeline, setPipeline]   = useState([]);
  const [query, setQuery]         = useState(user.roles[0]);
  const [location, setLocation]   = useState(LOCATIONS[0].value);
  const [searching, setSearching] = useState(false);
  const [searchErr, setSearchErr] = useState(null);
  const [lastQ, setLastQ]         = useState(null);
  const [typeFilter, setTypeFilter]   = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters]         = useState({
    salaryMin: "", salaryMax: "", contractType: "", contractTime: "",
    daysOld: "", distance: "50", sortBy: "date",
  });
  const [selectedJob, setSelectedJob] = useState(null);

  // Settings
  const [showSettings, setShowSettings] = useState(false);
  const [ollamaUrl, setOllamaUrl]       = useState("");
  const [ollamaModel, setOllamaModel]   = useState("llama3.2");

  // AI tool states
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError]     = useState(null);

  // Cover Letter
  const [clJob, setClJob]         = useState(null);
  const [clTone, setClTone]       = useState("professional");
  const [clResult, setClResult]   = useState(null);

  // Resume Match
  const [rmJob, setRmJob]         = useState(null);
  const [rmScore, setRmScore]     = useState(null);
  const [rmAnalysis, setRmAnalysis] = useState(null);

  // Interview Prep
  const [ipJob, setIpJob]         = useState(null);
  const [ipResult, setIpResult]   = useState(null);

  // Resume Tailor
  const [rtJob, setRtJob]         = useState(null);
  const [rtResult, setRtResult]   = useState(null);

  // Load storage + Ollama config — reload when user switches
  useEffect(() => {
    setJobs([]); setLastQ(null); setPipeline([]);
    setClResult(null); setRmScore(null); setRmAnalysis(null); setIpResult(null); setRtResult(null);
    setQuery(user.roles[0]);
    try { const r = localStorage.getItem(STORAGE_KEY(activeUserId)); if (r) setPipeline(JSON.parse(r)); } catch (_) {}
    try { const c = localStorage.getItem(CACHE_KEY(activeUserId)); if (c) { const p = JSON.parse(c); setJobs(p.jobs||[]); setLastQ(p.query||null); } } catch (_) {}
    setOllamaUrl(localStorage.getItem("proxy_url") || "");
    setOllamaModel(localStorage.getItem("ollama_model") || "llama3.2");
  }, [activeUserId]);

  const savePipeline = (next) => {
    setPipeline(next);
    try { localStorage.setItem(STORAGE_KEY(activeUserId), JSON.stringify(next)); } catch (_) {}
  };

  const switchUser = (uid) => {
    localStorage.setItem("jh-active-user", uid);
    setActiveUserId(uid);
    setTab("search");
  };

  const saveSettings = () => {
    const url = ollamaUrl.trim() || "http://localhost:3002";
    localStorage.setItem("proxy_url", url);
    localStorage.setItem("ollama_model", ollamaModel.trim() || "llama3.2");
    setOllamaUrl(url);
    setShowSettings(false);
  };

  // ── Search — real jobs from SEEK + Adzuna ──
  const searchJobs = async () => {
    setSearching(true); setSearchErr(null); setJobs([]);
    try {
      const data = await searchRealJobs(query, location, filters);
      const results = data.results || [];
      if (!results.length) throw new Error("No results found. Try a broader search or different location.");
      setJobs(results);
      setLastQ(query + " · " + (LOCATIONS.find(l => l.value === location)?.label || location));
      try { localStorage.setItem(CACHE_KEY(activeUserId), JSON.stringify({ jobs: results, query })); } catch (_) {}
    } catch (e) {
      setSearchErr(e.message);
    }
    setSearching(false);
  };

  const handleSave = (job) => {
    if (!pipeline.find(p => p.id === job.id))
      savePipeline([...pipeline, { ...job, status: "saved", savedDate: new Date().toLocaleDateString("en-AU",{day:"2-digit",month:"short"}) }]);
  };
  const handleApply = (job) => {
    const exists = pipeline.find(p => p.id === job.id);
    if (exists) savePipeline(pipeline.map(p => p.id === job.id ? { ...p, status: "applied" } : p));
    else savePipeline([...pipeline, { ...job, status: "applied", savedDate: new Date().toLocaleDateString("en-AU",{day:"2-digit",month:"short"}) }]);
  };
  const handleStatus = (id, status) => savePipeline(pipeline.map(p => p.id === id ? { ...p, status } : p));
  const handleRemove = (id) => savePipeline(pipeline.filter(p => p.id !== id));

  // ── Cover Letter ──
  const generateCL = async () => {
    if (!clJob) return;
    setAiLoading(true); setAiError(null); setClResult(null);
    try {
      const resumeSnap = user.resume.slice(0, 600);
      const sys = `Write a ${clTone} cover letter for ${user.name}. 3 paragraphs, max 220 words. Plain text only — no asterisks, no markdown, no symbols. Match skills to the job. Sound human and specific. End with a confident call to action.`;
      const text = await callAI(sys, `ROLE: ${clJob.title} at ${clJob.company}. DESC: ${(clJob.description||"").slice(0,200)}. RESUME: ${resumeSnap}`);
      setClResult(text);
    } catch (e) { setAiError(e.message); }
    setAiLoading(false);
  };

  // ── Resume Match ──
  const analyseMatch = async () => {
    if (!rmJob) return;
    setAiLoading(true); setAiError(null); setRmScore(null); setRmAnalysis(null);
    try {
      const skillsSnap = user.resume.slice(0, 500);
      const sys = `Resume ATS analyser. Return ONLY valid JSON no markdown: {"score":0-100,"matched":["skill"],"missing":["gap"],"suggestions":["tip1","tip2","tip3"],"summary":"2 sentences"}`;
      const text = await callAI(sys, `JOB: ${rmJob.title} at ${rmJob.company}. DESC: ${(rmJob.description||"").slice(0,200)}. SKILLS: ${skillsSnap}`);
      const clean = text.replace(/```json\s*/gi,"").replace(/```\s*/g,"").trim();
      const parsed = JSON.parse(clean.match(/\{[\s\S]*\}/)[0]);
      setRmScore(parsed.score); setRmAnalysis(parsed);
    } catch (e) { setAiError("Analysis failed — " + e.message); }
    setAiLoading(false);
  };

  // ── Interview Prep ──
  const generateIP = async () => {
    if (!ipJob) return;
    setAiLoading(true); setAiError(null); setIpResult(null);
    try {
      const expSnap = user.resume.slice(0, 500);
      const sys = `Interview coach. Generate 5 questions with answers. Mix: 2 technical, 2 behavioural STAR, 1 situational. Format: Q1: ...\nA: ...\n\nQ2: ...`;
      const text = await callAI(sys, `ROLE: ${ipJob.title} at ${ipJob.company}. DESC: ${(ipJob.description||"").slice(0,200)}. EXPERIENCE: ${expSnap}`);
      setIpResult(text);
    } catch (e) { setAiError(e.message); }
    setAiLoading(false);
  };

  // ── Resume Tailor ──
  const tailorResume = async () => {
    if (!rtJob) return;
    setAiLoading(true); setAiError(null); setRtResult(null);
    try {
      const sys = `You are a professional resume writer. Output a COMPLETE tailored resume in PLAIN TEXT ONLY.
STRICT RULES:
- Plain text only. Zero asterisks, zero bold markers (**), zero markdown, zero bullet symbols like * or •.
- Use a hyphen (-) for ALL bullet points, exactly like the original resume.
- Output the FULL resume with ALL sections: Name/Contact, Objective/Summary, Technical Skills, ALL experience roles with ALL bullet points, Education, Certifications.
- Keep ALL facts 100% accurate. Never invent experience, companies, or qualifications.
- Rewrite the summary/objective to target this specific role.
- Reorder bullet points within each role so most relevant ones appear first.
- Inject keywords from the job description naturally into existing bullet points.
- Use UPPERCASE for section headers exactly as in the original.
- Output ONLY the resume. No intro sentence, no commentary, no explanation.`;
      const text = await callAI(sys, `TARGET JOB: ${rtJob.title} at ${rtJob.company}\nJOB DESCRIPTION KEYWORDS: ${(rtJob.description||"").slice(0,300)}\n\nORIGINAL RESUME:\n${user.resume}`);
      setRtResult(text);
    } catch (e) { setAiError(e.message); }
    setAiLoading(false);
  };

  const stats = STATUS_COLS.reduce((a, s) => { a[s.id] = pipeline.filter(p => p.status === s.id).length; return a; }, {});
  const allJobs = [...jobs, ...pipeline];
  const uniqueJobs = allJobs.filter((j, i, arr) => arr.findIndex(x => x.id === j.id) === i);

  const TABS = [
    { id: "search",    label: "🔍 Discover" },
    { id: "pipeline",  label: "⚡ Pipeline" },
    { id: "coverletter", label: "✉ Cover Letter" },
    { id: "match",     label: "📊 Resume Match" },
    { id: "interview", label: "🎯 Interview Prep" },
    { id: "tailor",    label: "⚙ Tailor Resume" },
    { id: "settings",  label: "⚙ Settings" },
  ];

  const JobPicker = ({ value, onChange, label }) => (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, color: "#2a6a9a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{label}</div>
      <select value={value?.id || ""} onChange={e => onChange(uniqueJobs.find(j => j.id === e.target.value) || null)}
        style={{
          width: "100%", background: "#08111a", border: "1px solid #1a3a5a", borderRadius: 4,
          color: value ? "#c8d8e8" : "#2a5a7a", fontFamily: "'Barlow', sans-serif", fontSize: 13,
          padding: "9px 12px", cursor: "pointer",
        }}>
        <option value="">— select a job —</option>
        {uniqueJobs.map(j => <option key={j.id} value={j.id}>{j.title} @ {j.company}</option>)}
      </select>
      {value && (
        <div style={{ marginTop: 8, fontFamily: "'Barlow', sans-serif", fontSize: 12, color: "#3a6a8a", lineHeight: 1.5 }}>
          <span style={{ color: "#4a9eff" }}>{value.company}</span> · {value.location}
          {value.salary && <> · <span style={{ color: "#34d399" }}>{value.salary}</span></>}
        </div>
      )}
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#070d14}::-webkit-scrollbar-thumb{background:#1a3a5a;border-radius:2px}
        select option{background:#08111a;color:#c8d8e8}
        @keyframes pulse{0%,80%,100%{transform:scale(0.6);opacity:0.3}40%{transform:scale(1);opacity:1}}
        @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      `}</style>

      <div style={{ background: T.bg, minHeight: "100vh", fontFamily: "'Barlow', sans-serif", color: T.text, transition: "background 0.2s" }}>

        {/* Header */}
        <div style={{ background: T.bg2, borderBottom: "1px solid " + T.border, padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: user.color, boxShadow: `0 0 10px ${user.color}88` }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 18, color: "#e8f4ff", letterSpacing: "0.1em", textTransform: "uppercase" }}>Job Hunter</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#1a5a8a", letterSpacing: "0.12em" }}>// {LOCATIONS.find(l=>l.value===location)?.label || "SYD"}</span>
          </div>
          {/* Dark/Light + User Switcher */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={toggleDark} style={{
              background: "transparent", border: "1px solid #1a2d3e", borderRadius: 20,
              padding: "5px 12px", cursor: "pointer", fontFamily: "'DM Mono', monospace",
              fontSize: 12, color: "#4a7a9a", transition: "all 0.15s",
            }}>{darkMode ? "☀ Light" : "🌙 Dark"}</button>
            {Object.values(USERS).map(u => (
              <button key={u.id} onClick={() => switchUser(u.id)} style={{
                display: "flex", alignItems: "center", gap: 7, padding: "6px 12px",
                borderRadius: 20, cursor: "pointer", transition: "all 0.15s",
                background: activeUserId === u.id ? `${u.color}18` : "transparent",
                border: activeUserId === u.id ? `1px solid ${u.color}44` : "1px solid #1a2d3e",
              }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: activeUserId === u.id ? u.color : "#1a2d3e", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 9, color: activeUserId === u.id ? "#070d14" : "#3a6a8a", letterSpacing: "0.05em" }}>{u.avatar}</div>
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 600, color: activeUserId === u.id ? u.color : "#2a5a7a" }}>{u.name.split(" ")[0]}</span>
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            {STATUS_COLS.map(s => (
              <div key={s.id} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 16, fontWeight: 700, color: s.color, lineHeight: 1 }}>{stats[s.id]}</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 9, color: "#1a4a6a", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ background: T.bg2, borderBottom: "1px solid " + T.border, padding: "0 24px", display: "flex", gap: 0, overflowX: "auto" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12,
              letterSpacing: "0.07em", textTransform: "uppercase", padding: "11px 18px",
              background: "transparent", cursor: "pointer", transition: "all 0.15s",
              color: tab === t.id ? "#4a9eff" : "#2a5a7a", border: "none", whiteSpace: "nowrap",
              borderBottom: tab === t.id ? "2px solid #4a9eff" : "2px solid transparent",
            }}>{t.label}</button>
          ))}
        </div>

        <div style={{ padding: "20px 24px", maxWidth: 900, margin: "0 auto", animation: "fadeIn 0.25s ease" }}>

          {/* ── DISCOVER ── */}
          {tab === "search" && (
            <>
              <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                <input value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === "Enter" && searchJobs()}
                  placeholder="e.g. Service Desk Analyst Level 2"
                  style={{ flex: 1, background: "#0d1922", border: "1px solid #1a3a5a", borderRadius: 4, color: "#c8d8e8", fontFamily: "'DM Mono', monospace", fontSize: 12, padding: "10px 14px" }} />
                <select value={location} onChange={e => setLocation(e.target.value)} style={{
                  background: "#0d1922", border: "1px solid #1a3a5a", borderRadius: 4,
                  color: "#7ec8ff", fontFamily: "'Barlow', sans-serif", fontSize: 12,
                  padding: "10px 12px", cursor: "pointer", minWidth: 160,
                }}>
                  {["Sydney","Melbourne","Remote"].map(group => (
                    <optgroup key={group} label={group}>
                      {LOCATIONS.filter(l => l.group === group).map(l => (
                        <option key={l.value} value={l.value}>{l.label}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <Btn onClick={searchJobs} disabled={searching}>{searching ? "Searching…" : "Search"}</Btn>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                {user.roles.map(r => (
                  <button key={r} onClick={() => setQuery(r)} style={{
                    fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 500, padding: "4px 12px", borderRadius: 20, cursor: "pointer",
                    background: query === r ? "rgba(74,158,255,0.15)" : "rgba(13,25,34,0.8)",
                    color: query === r ? "#7ec8ff" : "#2a5a7a", border: query === r ? "1px solid #4a9eff44" : "1px solid #1a3a5a",
                  }}>{r.replace(" Sydney","")}</button>
                ))}
              </div>
              {/* Filter Panel */}
              <div style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <button onClick={() => setShowFilters(!showFilters)} style={{
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 11,
                    letterSpacing: "0.08em", textTransform: "uppercase", padding: "5px 14px",
                    borderRadius: 3, cursor: "pointer",
                    background: showFilters ? "rgba(74,158,255,0.12)" : "transparent",
                    color: showFilters ? "#4a9eff" : "#2a5a7a",
                    border: showFilters ? "1px solid #4a9eff44" : "1px solid #1a3a5a",
                  }}>⚙ Filters {showFilters ? "▲" : "▼"}</button>
                  {Object.entries(filters).some(([k,v]) => v && !["50","date"].includes(v)) && (
                    <span onClick={() => setFilters({ salaryMin:"", salaryMax:"", contractType:"", contractTime:"", daysOld:"", distance:"50", sortBy:"date" })}
                      style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, color: "#f87171", cursor: "pointer" }}>
                      ✕ Clear filters
                    </span>
                  )}
                </div>
              </div>
              {showFilters && (
                <div style={{ background: "#0a1520", border: "1px solid #1a3a5a", borderRadius: 6, padding: "14px 16px", marginBottom: 12 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: "#2a6a9a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Min Salary</div>
                      <select value={filters.salaryMin} onChange={e => setFilters(f => ({...f, salaryMin: e.target.value}))}
                        style={{ width: "100%", background: "#08111a", border: "1px solid #1a3a5a", borderRadius: 3, color: "#c8d8e8", fontFamily: "'Barlow', sans-serif", fontSize: 12, padding: "6px 8px" }}>
                        <option value="">Any</option>
                        <option value="50000">$50,000+</option>
                        <option value="60000">$60,000+</option>
                        <option value="70000">$70,000+</option>
                        <option value="80000">$80,000+</option>
                        <option value="90000">$90,000+</option>
                        <option value="100000">$100,000+</option>
                        <option value="120000">$120,000+</option>
                      </select>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: "#2a6a9a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Max Salary</div>
                      <select value={filters.salaryMax} onChange={e => setFilters(f => ({...f, salaryMax: e.target.value}))}
                        style={{ width: "100%", background: "#08111a", border: "1px solid #1a3a5a", borderRadius: 3, color: "#c8d8e8", fontFamily: "'Barlow', sans-serif", fontSize: 12, padding: "6px 8px" }}>
                        <option value="">Any</option>
                        <option value="70000">Up to $70,000</option>
                        <option value="80000">Up to $80,000</option>
                        <option value="100000">Up to $100,000</option>
                        <option value="120000">Up to $120,000</option>
                        <option value="150000">Up to $150,000</option>
                      </select>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: "#2a6a9a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Posted Within</div>
                      <select value={filters.daysOld} onChange={e => setFilters(f => ({...f, daysOld: e.target.value}))}
                        style={{ width: "100%", background: "#08111a", border: "1px solid #1a3a5a", borderRadius: 3, color: "#c8d8e8", fontFamily: "'Barlow', sans-serif", fontSize: 12, padding: "6px 8px" }}>
                        <option value="">Any time</option>
                        <option value="1">Today</option>
                        <option value="3">Last 3 days</option>
                        <option value="7">Last week</option>
                        <option value="14">Last 2 weeks</option>
                        <option value="30">Last month</option>
                      </select>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: "#2a6a9a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Contract Type</div>
                      <select value={filters.contractType} onChange={e => setFilters(f => ({...f, contractType: e.target.value}))}
                        style={{ width: "100%", background: "#08111a", border: "1px solid #1a3a5a", borderRadius: 3, color: "#c8d8e8", fontFamily: "'Barlow', sans-serif", fontSize: 12, padding: "6px 8px" }}>
                        <option value="">Any</option>
                        <option value="permanent">Permanent</option>
                        <option value="contract">Contract</option>
                      </select>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: "#2a6a9a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Work Hours</div>
                      <select value={filters.contractTime} onChange={e => setFilters(f => ({...f, contractTime: e.target.value}))}
                        style={{ width: "100%", background: "#08111a", border: "1px solid #1a3a5a", borderRadius: 3, color: "#c8d8e8", fontFamily: "'Barlow', sans-serif", fontSize: 12, padding: "6px 8px" }}>
                        <option value="">Any</option>
                        <option value="full_time">Full Time</option>
                        <option value="part_time">Part Time</option>
                      </select>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: "#2a6a9a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Distance</div>
                      <select value={filters.distance} onChange={e => setFilters(f => ({...f, distance: e.target.value}))}
                        style={{ width: "100%", background: "#08111a", border: "1px solid #1a3a5a", borderRadius: 3, color: "#c8d8e8", fontFamily: "'Barlow', sans-serif", fontSize: 12, padding: "6px 8px" }}>
                        <option value="10">Within 10km</option>
                        <option value="25">Within 25km</option>
                        <option value="50">Within 50km</option>
                        <option value="100">Within 100km</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, marginTop: 12, alignItems: "center" }}>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: "#2a6a9a", letterSpacing: "0.1em", textTransform: "uppercase" }}>Sort by:</span>
                    {[["date","Recent"],["relevance","Relevant"],["salary","Salary"]].map(([val, label]) => (
                      <button key={val} onClick={() => setFilters(f => ({...f, sortBy: val}))} style={{
                        fontFamily: "'Barlow', sans-serif", fontSize: 11, padding: "3px 10px", borderRadius: 20, cursor: "pointer",
                        background: filters.sortBy === val ? "rgba(74,158,255,0.15)" : "transparent",
                        color: filters.sortBy === val ? "#7ec8ff" : "#2a5a7a",
                        border: filters.sortBy === val ? "1px solid #4a9eff44" : "1px solid #1a3a5a",
                      }}>{label}</button>
                    ))}
                    <button onClick={() => { setShowFilters(false); searchJobs(); }} style={{
                      marginLeft: "auto", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                      fontSize: 12, letterSpacing: "0.07em", textTransform: "uppercase",
                      padding: "6px 16px", borderRadius: 3, cursor: "pointer",
                      background: "linear-gradient(135deg,#1a6abf,#0d3a8a)", color: "#7ec8ff", border: "1px solid #2a6abf44",
                    }}>Apply & Search</button>
                  </div>
                </div>
              )}
              <div style={{ background: "#0a1520", border: "1px solid #0e2a3a", borderRadius: 5, padding: "9px 14px", marginBottom: 16, display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: "#1a6a9a", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Profile</span>
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: "#3a7ab8" }}>{user.current}</span>
                <span style={{ color: "#0e2a3a" }}>·</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#34d399" }}>{user.salary}</span>
                <span style={{ color: "#0e2a3a" }}>·</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#2a5a7a" }}>📍 {LOCATIONS.find(l=>l.value===location)?.label || user.location}</span>
              </div>
              {searchErr && <div style={{ background: "rgba(248,113,113,0.06)", border: "1px solid #f8717130", borderRadius: 4, padding: "10px 14px", marginBottom: 12, fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#f87171" }}>⚠ {searchErr}</div>}
              {searching && <Spinner text="searching sydney job boards…" />}
              {!searching && jobs.length > 0 && (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#2a5a7a" }}>{jobs.length} results · "{lastQ}"</span>
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, color: "#1a4a6a" }}>{pipeline.length} in pipeline</span>
                  </div>
                  {/* Direct search links */}
                  <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: "#1a4a6a", letterSpacing: "0.1em", textTransform: "uppercase" }}>Also search on:</span>
                    {[
                      { label: "SEEK", color: "#1a6abf", url: `https://www.seek.com.au/jobs?keywords=${encodeURIComponent(query)}&where=${encodeURIComponent(location.split(",")[0])}` },
                      { label: "Indeed", color: "#2557a7", url: `https://au.indeed.com/jobs?q=${encodeURIComponent(query)}&l=${encodeURIComponent(location.split(",")[0])}` },
                      { label: "LinkedIn", color: "#0a66c2", url: `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(query)}&location=${encodeURIComponent(location.split(",")[0])}%2C%20Australia` },
                      { label: "Jora", color: "#e85d04", url: `https://au.jora.com/jobs?q=${encodeURIComponent(query)}&l=${encodeURIComponent(location.split(",")[0])}` },
                    ].map(s => (
                      <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        <span style={{
                          fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 11,
                          letterSpacing: "0.06em", padding: "3px 10px", borderRadius: 3, cursor: "pointer",
                          background: s.color + "18", color: s.color, border: `1px solid ${s.color}44`,
                          transition: "all 0.15s",
                        }}>{s.label} ↗</span>
                      </a>
                    ))}
                  </div>
                  {/* Filter bar */}
                  <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
                    {["All", "Full-time", "Contract", "Part-time"].map(f => (
                      <button key={f} onClick={() => setTypeFilter(f)} style={{
                        fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 500,
                        padding: "3px 12px", borderRadius: 20, cursor: "pointer",
                        background: typeFilter === f ? "rgba(74,158,255,0.15)" : "transparent",
                        color: typeFilter === f ? "#7ec8ff" : "#2a5a7a",
                        border: typeFilter === f ? "1px solid #4a9eff44" : "1px solid #1a3a5a",
                      }}>{f}</button>
                    ))}
                    <div style={{ marginLeft: "auto", fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#1a4a6a", alignSelf: "center" }}>
                      {jobs.filter(j => typeFilter === "All" || j.type === typeFilter).length} shown
                    </div>
                  </div>
                  {jobs.filter(j => typeFilter === 'All' || j.type === typeFilter).map(j => <JobCard key={j.id} job={j} onSave={handleSave} onApply={handleApply} isSaved={!!pipeline.find(p => p.id === j.id)} />)}
                </>
              )}
              {!searching && jobs.length === 0 && !searchErr && (
                <div style={{ textAlign: "center", padding: "56px 0" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, color: "#0e2035", fontWeight: 800, letterSpacing: "0.06em" }}>READY TO HUNT</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#1a3a5a", marginTop: 6 }}>search for current sydney listings above</div>
                </div>
              )}
            </>
          )}

          {/* ── PIPELINE ── */}
          {tab === "pipeline" && (
            <>
              <div style={{ marginBottom: 16, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, color: "#2a6a9a", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Application Pipeline — {pipeline.length} total
              </div>
              {pipeline.length === 0 ? (
                <div style={{ textAlign: "center", padding: "56px 0" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, color: "#0e2035", fontWeight: 800, letterSpacing: "0.06em" }}>PIPELINE EMPTY</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#1a3a5a", marginTop: 6 }}>save or apply jobs from the discover tab</div>
                </div>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
                  {STATUS_COLS.map(col => (
                    <div key={col.id} style={{ background: col.bg, border: `1px solid ${col.color}20`, borderRadius: 6, padding: "10px 8px", minHeight: 100 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 11, color: col.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>{col.label}</span>
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: col.color, opacity: 0.6 }}>{stats[col.id]}</span>
                      </div>
                      {pipeline.filter(p => p.status === col.id).map(job => (
                        <PipelineCard key={job.id} job={job} onStatusChange={handleStatus} onRemove={handleRemove} onSelect={j => { setClJob(j); setRmJob(j); setIpJob(j); setRtJob(j); }} />
                      ))}
                    </div>
                  ))}
                </div>
              )}
              {pipeline.length > 0 && (
                <Card style={{ marginTop: 20 }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, color: "#1a5a7a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Conversion Funnel</div>
                  <div style={{ display: "flex", height: 7, borderRadius: 4, overflow: "hidden", gap: 1 }}>
                    {STATUS_COLS.map(col => { const p = (stats[col.id] / Math.max(pipeline.length, 1)) * 100; return p > 0 ? <div key={col.id} style={{ width: `${p}%`, background: col.color, opacity: 0.7 }} /> : null; })}
                  </div>
                  <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
                    {STATUS_COLS.map(col => stats[col.id] > 0 && (
                      <div key={col.id} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: col.color }} />
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#2a5a7a" }}>{col.label} {stats[col.id]}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </>
          )}

          {/* ── COVER LETTER ── */}
          {tab === "coverletter" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div>
                <JobPicker value={clJob} onChange={setClJob} label="Select Job" />
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, color: "#2a6a9a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Tone</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {["professional", "confident", "concise", "enthusiastic"].map(t => (
                      <button key={t} onClick={() => setClTone(t)} style={{
                        fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 500, padding: "5px 14px", borderRadius: 20, cursor: "pointer",
                        background: clTone === t ? "rgba(167,139,250,0.15)" : "transparent",
                        color: clTone === t ? "#c4b5fd" : "#2a5a7a", border: clTone === t ? "1px solid #a78bfa44" : "1px solid #1a3a5a",
                      }}>{t}</button>
                    ))}
                  </div>
                </div>
                <Btn variant="purple" onClick={generateCL} disabled={!clJob || aiLoading}>
                  {aiLoading ? "Generating…" : "✉ Generate Cover Letter"}
                </Btn>
                {aiError && <div style={{ marginTop: 10, fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#f87171" }}>⚠ {aiError}</div>}
                {clJob && (
                  <Card style={{ marginTop: 16 }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, color: "#1a5a7a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Target Role</div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, color: "#ddeeff", fontWeight: 700 }}>{clJob.title}</div>
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: "#4a9eff", marginTop: 2 }}>{clJob.company}</div>
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, color: "#2a5a7a", marginTop: 6, lineHeight: 1.5 }}>{clJob.description}</div>
                  </Card>
                )}
              </div>
              <div>
                {aiLoading && tab === "coverletter" && <Spinner text="writing your cover letter…" />}
                {clResult && !aiLoading && (
                  <>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, color: "#2a6a9a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Generated Cover Letter</div>
                    <ResultBox content={clResult} />
                  </>
                )}
                {!clResult && !aiLoading && (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", minHeight: 220 }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 24, color: "#0e2035", fontWeight: 800 }}>YOUR LETTER</div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#1a3a5a", marginTop: 4 }}>will appear here</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── RESUME MATCH ── */}
          {tab === "match" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div>
                <JobPicker value={rmJob} onChange={setRmJob} label="Analyse Match Against" />
                <Btn variant="green" onClick={analyseMatch} disabled={!rmJob || aiLoading}>
                  {aiLoading ? "Analysing…" : "📊 Analyse My Resume"}
                </Btn>
                {aiError && <div style={{ marginTop: 10, fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#f87171" }}>⚠ {aiError}</div>}
              </div>
              <div>
                {aiLoading && tab === "match" && <Spinner text="analysing resume fit…" />}
                {rmScore !== null && rmAnalysis && !aiLoading && (
                  <div style={{ animation: "fadeIn 0.3s ease" }}>
                    <ScoreRing score={rmScore} />
                    <div style={{ marginTop: 16, fontFamily: "'Barlow', sans-serif", fontSize: 13, color: "#5a8ab8", lineHeight: 1.6 }}>{rmAnalysis.summary}</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16 }}>
                      <Card>
                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: "#34d399", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>✓ Matched Skills</div>
                        {(rmAnalysis.matched || []).map((m, i) => <div key={i} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: "#2a7a5a", marginBottom: 4 }}>· {m}</div>)}
                      </Card>
                      <Card>
                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: "#f87171", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>✗ Gaps Found</div>
                        {(rmAnalysis.missing || []).map((m, i) => <div key={i} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: "#7a3a3a", marginBottom: 4 }}>· {m}</div>)}
                      </Card>
                    </div>
                    <Card style={{ marginTop: 12 }}>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: "#f0c040", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>💡 Suggestions</div>
                      {(rmAnalysis.suggestions || []).map((s, i) => <div key={i} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: "#7a6a2a", marginBottom: 5, lineHeight: 1.5 }}>{i+1}. {s}</div>)}
                    </Card>
                  </div>
                )}
                {rmScore === null && !aiLoading && (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", minHeight: 220 }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 24, color: "#0e2035", fontWeight: 800 }}>MATCH SCORE</div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#1a3a5a", marginTop: 4 }}>will appear here</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── INTERVIEW PREP ── */}
          {tab === "interview" && (
            <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 20 }}>
              <div>
                <JobPicker value={ipJob} onChange={setIpJob} label="Prep For Role" />
                <Btn variant="primary" onClick={generateIP} disabled={!ipJob || aiLoading}>
                  {aiLoading ? "Generating…" : "🎯 Generate Q&A"}
                </Btn>
                {aiError && <div style={{ marginTop: 10, fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#f87171" }}>⚠ {aiError}</div>}
                <Card style={{ marginTop: 16 }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: "#1a5a7a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>What you'll get</div>
                  {["3 technical questions", "3 behavioural (STAR)", "2 situational scenarios", "Suggested answers from your resume"].map((t, i) => (
                    <div key={i} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: "#2a5a7a", marginBottom: 5 }}>→ {t}</div>
                  ))}
                </Card>
              </div>
              <div>
                {aiLoading && tab === "interview" && <Spinner text="preparing your interview pack…" />}
                {ipResult && !aiLoading && (
                  <>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, color: "#2a6a9a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Interview Q&A — {ipJob?.title} @ {ipJob?.company}</div>
                    <ResultBox content={ipResult} />
                  </>
                )}
                {!ipResult && !aiLoading && (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", minHeight: 240 }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 24, color: "#0e2035", fontWeight: 800 }}>INTERVIEW PREP</div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#1a3a5a", marginTop: 4 }}>Q&A will appear here</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── RESUME TAILOR ── */}
          {tab === "tailor" && (
            <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 20 }}>
              <div>
                <JobPicker value={rtJob} onChange={setRtJob} label="Tailor Resume For" />
                <Btn variant="green" onClick={tailorResume} disabled={!rtJob || aiLoading}>
                  {aiLoading ? "Tailoring…" : "⚙ Auto-Tailor Resume"}
                </Btn>
                {aiError && <div style={{ marginTop: 10, fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#f87171" }}>⚠ {aiError}</div>}
                <Card style={{ marginTop: 16 }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: "#1a6a4a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>What this does</div>
                  {[
                    "Rewrites summary for target role",
                    "Reorders bullets by relevance",
                    "Injects JD keywords naturally",
                    "Highlights matching certs & tools",
                    "Keeps all facts accurate",
                  ].map((t, i) => (
                    <div key={i} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: "#1a5a3a", marginBottom: 5 }}>→ {t}</div>
                  ))}
                </Card>
              </div>
              <div>
                {aiLoading && tab === "tailor" && <Spinner text="tailoring your resume…" />}
                {rtResult && !aiLoading && (
                  <>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, color: "#1a6a4a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Tailored Resume — {rtJob?.title} @ {rtJob?.company}</div>
                    <ResultBox content={rtResult} />
                  </>
                )}
                {!rtResult && !aiLoading && (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", minHeight: 240 }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 24, color: "#0e2035", fontWeight: 800 }}>TAILORED RESUME</div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#1a3a5a", marginTop: 4 }}>will appear here</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}


          {/* ── SETTINGS ── */}
          {tab === "settings" && (
            <div style={{ maxWidth: 500 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, color: "#2a6a9a", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20 }}>
                Ollama Configuration
              </div>

              <Card style={{ marginBottom: 16 }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: "#1a5a7a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
                  Connection
                </div>
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: "#3a6a8a", marginBottom: 6 }}>Pi Proxy URL (your Raspberry Pi via Cloudflare Tunnel)</div>
                  <input
                    value={ollamaUrl}
                    onChange={e => setOllamaUrl(e.target.value)}
                    placeholder="https://proxy.anuprijal.com.np"
                    style={{ width: "100%", background: "#08111a", border: "1px solid #1a3a5a", borderRadius: 4, color: "#c8d8e8", fontFamily: "'DM Mono', monospace", fontSize: 12, padding: "9px 12px" }}
                  />
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, color: "#1a4a6a", marginTop: 5 }}>
                    This proxy handles both job search (SEEK + Adzuna) and AI tools (Ollama)
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: "#3a6a8a", marginBottom: 6 }}>Model</div>
                  <select
                    value={ollamaModel}
                    onChange={e => setOllamaModel(e.target.value)}
                    style={{ width: "100%", background: "#08111a", border: "1px solid #1a3a5a", borderRadius: 4, color: "#c8d8e8", fontFamily: "'Barlow', sans-serif", fontSize: 13, padding: "9px 12px" }}
                  >
                    <option value="llama3.2">llama3.2 (recommended — fast, good quality)</option>
                    <option value="llama3.2:1b">llama3.2:1b (smallest — best for Pi 4)</option>
                    <option value="mistral">mistral (good at structured output)</option>
                    <option value="llama3.1">llama3.1 (larger — better quality)</option>
                    <option value="gemma2:2b">gemma2:2b (Google, compact)</option>
                  </select>
                </div>
                <Btn variant="green" onClick={saveSettings}>Save Settings</Btn>
              </Card>

              <Card style={{ marginBottom: 16 }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: "#1a5a7a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                  Pi Setup — run these commands on your Pi
                </div>
                {[
                  { label: "1. Install Ollama", cmd: "curl -fsSL https://ollama.com/install.sh | sh" },
                  { label: "2. Pull model", cmd: "ollama pull llama3.2" },
                  { label: "3. Enable external access", cmd: "sudo systemctl edit ollama --force\n# Add under [Service]:\nEnvironment=\"OLLAMA_HOST=0.0.0.0\"\nEnvironment=\"OLLAMA_ORIGINS=*\"" },
                  { label: "4. Restart Ollama", cmd: "sudo systemctl restart ollama" },
                  { label: "5. Cloudflare Tunnel", cmd: "# Add to ~/.cloudflared/config.yml:\n- hostname: ollama.anuprijal.com.np\n  service: http://localhost:11434" },
                ].map(({ label, cmd }) => (
                  <div key={label} style={{ marginBottom: 12 }}>
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, color: "#2a6a9a", marginBottom: 4 }}>{label}</div>
                    <div style={{ background: "#050a10", border: "1px solid #0e2035", borderRadius: 3, padding: "8px 12px", fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#4a8ab8", whiteSpace: "pre-wrap", lineHeight: 1.7 }}>{cmd}</div>
                  </div>
                ))}
              </Card>

              <Card>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: "#1a5a7a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
                  Current Config
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#3a6a8a", lineHeight: 2 }}>
                  <div>URL &nbsp;&nbsp;→ <span style={{ color: "#4a9eff" }}>{localStorage.getItem("proxy_url") || "not set"}</span></div>
                  <div>Model → <span style={{ color: "#34d399" }}>{localStorage.getItem("ollama_model") || "llama3.2 (default)"}</span></div>
                </div>
              </Card>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
