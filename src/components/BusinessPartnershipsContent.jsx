import React, { useState } from 'react';
import {
  Handshake,
  ShieldCheck,
  CheckCircle2,
  Save,
  Check,
  Globe,
  Award,
  ExternalLink,
  Layers,
  Sparkles,
  Cpu
} from 'lucide-react';

export default function BusinessPartnershipsContent() {
  const [isSaved, setIsSaved] = useState(false);

  const [partnerships] = useState([
    {
      partner: 'Siemens Industrial Automation',
      tier: 'Strategic Global OEM Partner',
      badge: 'Tier 1 Alliance',
      category: 'PLC & Automation Systems Interoperability',
      mouRef: 'ALLIANCE-SIE-2022-88',
      scope: 'Joint development of direct TIA Portal software drivers and embedded Profinet telemetry for Acme smart valves.',
      validity: 'Active (2022 – 2027)',
      status: 'Current & Active'
    },
    {
      partner: 'Bosch Rexroth AG',
      tier: 'Hydraulic Systems Technology Alliance',
      badge: 'Engineering Partner',
      category: 'Co-Engineered Heavy Hydraulic Motion',
      mouRef: 'MOU-BOSCH-2023-14',
      scope: 'Co-engineered high-pressure electro-hydraulic actuation units for aerospace and specialized heavy mining machinery.',
      validity: 'Active (2023 – 2028)',
      status: 'Current & Active'
    },
    {
      partner: 'Fraunhofer Institute for Production Technology',
      tier: 'Advanced Research & Metallurgy Consortium',
      badge: 'R&D Alliance',
      category: 'Additive Manufacturing & Alloy Research',
      mouRef: 'RD-FRAUNHOFER-2021-09',
      scope: 'Joint R&D laboratory in Aachen developing cryogenic titanium-alloy valve seats with zero cavitation wear.',
      validity: 'Active (2021 – 2026)',
      status: 'Current & Active'
    },
    {
      partner: 'Amazon Web Services (AWS Industrial IoT)',
      tier: 'Global Cloud Telemetry Partner',
      badge: 'Cloud Infrastructure',
      category: 'Fleet Analytics & Edge Telemetry SaaS',
      mouRef: 'AWS-IND-IOT-2024-99',
      scope: 'Global cloud edge runtime integration for Acme telemetry sensors supporting 100,000+ streaming data points per second.',
      validity: 'Active (2024 – 2029)',
      status: 'Current & Active'
    }
  ]);

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
            5. BUSINESS NETWORK
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span>Business Partnerships &amp; Alliances</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              4 Strategic Alliances
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Official technology integration agreements, joint engineering consortiums, and cloud telemetry infrastructure alliances.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            Active Master Agreements
          </span>
          <button
            onClick={handleSave}
            className={`px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-xs flex items-center gap-2 transition duration-200 ${
              isSaved
                ? 'bg-emerald-600 text-white'
                : 'bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white'
            }`}
          >
            {isSaved ? (
              <>
                <Check className="w-4 h-4" />
                <span>Partnerships Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Partnerships</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Strategic Alliances</div>
          <div className="text-base font-bold text-slate-900 mt-1">4 Global Leaders</div>
          <div className="text-xs text-sky-600 mt-1">Siemens, Bosch, AWS</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">R&amp;D Consortium</div>
          <div className="text-base font-bold text-slate-900 mt-1">Fraunhofer Aachen</div>
          <div className="text-xs text-emerald-600 mt-1">Cryogenic Alloy Lab</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Cloud Telemetry</div>
          <div className="text-base font-bold text-slate-900 mt-1">AWS IoT Core</div>
          <div className="text-xs text-indigo-600 mt-1">Sub-second Latency</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Joint IP Protections</div>
          <div className="text-base font-bold text-slate-900 mt-1">Mutual NDA &amp; IP</div>
          <div className="text-xs text-emerald-600 mt-1">Standardized Governance</div>
        </div>
      </div>

      {/* Partnerships Directory */}
      <div className="space-y-4">
        {partnerships.map((p, idx) => (
          <div
            key={idx}
            className="p-5 bg-white border border-slate-200 rounded-3xl shadow-2xs hover:border-sky-300 transition space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-extrabold text-base text-slate-900">{p.partner}</h3>
                <div className="text-xs text-slate-500 mt-0.5">{p.category}</div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                {p.badge}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">{p.scope}</p>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 text-[11px] text-slate-400 font-mono">
              <span>Master Agreement: {p.mouRef}</span>
              <span className="text-slate-700 font-medium font-sans">{p.validity}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-2">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white rounded-xl font-semibold text-sm shadow-md transition flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Save Partnerships</span>
        </button>
      </div>
    </div>
  );
}

