import React, { useState } from 'react';
import {
  Link2,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Save,
  Check,
  Globe,
  Share2,
  Percent,
  ExternalLink,
  Plus
} from 'lucide-react';

export default function AssociatedCompaniesContent() {
  const [isSaved, setIsSaved] = useState(false);

  const [subsidiaries] = useState([
    {
      name: 'Acme Precision Robotics GmbH',
      jurisdiction: 'Munich, Bavaria, Germany',
      regId: 'HRB 298421 (Amtsgericht München)',
      holding: '100% Wholly Owned Subsidiary',
      holdingColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      role: 'European R&D hub and precision robotics component assembly',
      directors: 'Dr. Evelyn Weber, Dr. Raghavendra Rao'
    },
    {
      name: 'SensorTech GmbH',
      jurisdiction: 'Frankfurt am Main, Germany',
      regId: 'HRB 104829 (Amtsgericht Frankfurt)',
      holding: '100% Wholly Owned Subsidiary',
      holdingColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      role: 'Industrial IoT telemetry hardware & high-temperature sensor manufacturing',
      directors: 'Dr. Evelyn Weber, Anand Kumar'
    },
    {
      name: 'Acme Industrial Americas Inc.',
      jurisdiction: 'Wilmington, Delaware / Chicago, IL, USA',
      regId: 'DE File #7294810',
      holding: '100% Operating Subsidiary',
      holdingColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      role: 'North American distribution, inventory staging & client logistics hub',
      directors: 'Marcus Vance, Anand Kumar'
    },
    {
      name: 'Apex Hydraulics India Ltd.',
      jurisdiction: 'Pune, Maharashtra, India',
      regId: 'U29100PN2008PLC119284',
      holding: '100% Wholly Owned Operating Division',
      holdingColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      role: 'Heavy industrial valve forging & high-pressure foundry operations',
      directors: 'Vikas Deshmukh, Dr. Raghavendra Rao'
    },
    {
      name: 'Nordic Telematics AS',
      jurisdiction: 'Oslo, Norway',
      regId: 'Org nr 928 401 928 MVA',
      holding: '51% Controlling Joint Venture',
      holdingColor: 'text-sky-700 bg-sky-50 border-sky-200',
      role: 'Subsea telemetry sensor arrays for offshore wind & marine energy',
      directors: 'Suhasini Mehta, Henrik Lindqvist'
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
            <span>Associated Companies &amp; Subsidiaries</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              5 Entities Active
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Operating subsidiaries, sister entities, joint ventures, and related party disclosures under Companies Act 2013.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            MCA Form AOC-1 Verified
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
                <span>Companies Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Associated</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Controlled Entities</div>
          <div className="text-base font-bold text-slate-900 mt-1">5 Entities</div>
          <div className="text-xs text-sky-600 mt-1">4 Subsidiaries • 1 JV</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Global Footprint</div>
          <div className="text-base font-bold text-slate-900 mt-1">4 Countries</div>
          <div className="text-xs text-emerald-600 mt-1">Germany, USA, Norway, India</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Related Party Filing</div>
          <div className="text-base font-bold text-slate-900 mt-1">Section 188 Clear</div>
          <div className="text-xs text-indigo-600 mt-1">Form AOC-1 Attached</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Intercompany Trade</div>
          <div className="text-base font-bold text-slate-900 mt-1">Arm's Length Basis</div>
          <div className="text-xs text-emerald-600 mt-1">TP Documentation Audited</div>
        </div>
      </div>

      {/* Associated Companies List */}
      <div className="space-y-4">
        {subsidiaries.map((sub, idx) => (
          <div
            key={idx}
            className="p-5 bg-white border border-slate-200 rounded-3xl shadow-2xs hover:border-sky-300 transition space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-extrabold text-base text-slate-900">{sub.name}</h3>
                <div className="text-xs text-slate-500 mt-0.5">{sub.jurisdiction} • <span className="font-mono text-slate-600">{sub.regId}</span></div>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border font-mono ${sub.holdingColor}`}>
                {sub.holding}
              </span>
            </div>

            <div className="text-xs text-slate-600 leading-relaxed">
              <strong>Operational Scope:</strong> {sub.role}
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 text-[11px] text-slate-500">
              <span>Nominee / Common Directors: <strong className="text-slate-700">{sub.directors}</strong></span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Audited Consolidation Entity
              </span>
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
          <span>Save Associated Companies</span>
        </button>
      </div>
    </div>
  );
}
