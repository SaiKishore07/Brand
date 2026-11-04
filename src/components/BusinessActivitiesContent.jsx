import React, { useState } from 'react';
import {
  Activity,
  Award,
  CheckCircle2,
  ShieldCheck,
  Save,
  Check,
  PieChart,
  FileCheck,
  FileSpreadsheet,
  Cpu,
  Wrench,
  Percent
} from 'lucide-react';

export default function BusinessActivitiesContent() {
  const [isSaved, setIsSaved] = useState(false);

  const [activities] = useState([
    {
      code: 'ACT-01',
      title: 'Precision Industrial Valves & Actuator Manufacturing',
      type: 'Core Primary Activity',
      revenue: '52% of Total Turnover',
      revenueColor: 'text-sky-600 bg-sky-50 border-sky-200',
      description: 'Design, casting, multi-axis CNC machining, micro-grinding, and pressure testing of heavy-duty hydraulic and electro-pneumatic valves.'
    },
    {
      code: 'ACT-02',
      title: 'Embedded IoT Telemetry & Industrial Sensors',
      type: 'High-Growth Tech Activity',
      revenue: '31% of Total Turnover',
      revenueColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      description: 'Fabrication of micro-transducers, vibration analytics boards, edge telemetry firmware, and secure telemetry gateways.'
    },
    {
      code: 'ACT-03',
      title: 'OEM Engineering, Overhaul & Turnkey Maintenance',
      type: 'Service & Lifecycle Activity',
      revenue: '17% of Total Turnover',
      revenueColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      description: 'On-site technical calibration, 48-hour critical spare dispatch, retrofitting legacy industrial facilities with digital valve actuation.'
    }
  ]);

  const [licenses] = useState([
    {
      name: 'Factories Act Operating License',
      number: 'FAC-HYD-1998-0914',
      authority: 'Department of Factories, Govt. of Telangana',
      validTill: '31 December 2028',
      status: 'Active & Current'
    },
    {
      name: 'Pollution Control Board Consent to Operate (CTO)',
      number: 'TSPCB-CTO-AIR-WATER-2024',
      authority: 'Telangana State Pollution Control Board',
      validTill: '30 June 2029',
      status: 'Compliant'
    },
    {
      name: 'Directorate General of Foreign Trade (IEC)',
      number: 'IEC-0198041920',
      authority: 'Ministry of Commerce & Industry, DGFT',
      validTill: 'Permanent Lifetime',
      status: 'Verified'
    },
    {
      name: 'Authorized Economic Operator (AEO-T2)',
      number: 'IN-AEO-T2-08942-2023',
      authority: 'Central Board of Indirect Taxes & Customs',
      validTill: '15 August 2027',
      status: 'Tier-2 Fast-Track'
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
            3. BUSINESS &amp; CLASSIFICATION
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span>Business Activities &amp; Licenses</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Regulatory Current
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Principal business operations, revenue percentage contributions, factory operating consents, and trade permissions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            4 Licenses Active
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
                <span>Activities Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Activities</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Core Revenue Stream</div>
          <div className="text-base font-bold text-slate-900 mt-1">52% Valve Mfg</div>
          <div className="text-xs text-sky-600 mt-1">Precision Actuators</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">IoT Telemetry Share</div>
          <div className="text-base font-bold text-slate-900 mt-1">31% IoT &amp; SaaS</div>
          <div className="text-xs text-indigo-600 mt-1">Embedded Diagnostics</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Import-Export Code</div>
          <div className="text-base font-bold text-slate-900 mt-1 font-mono">0198041920</div>
          <div className="text-xs text-emerald-600 mt-1">DGFT Verified Trader</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Customs Status</div>
          <div className="text-base font-bold text-slate-900 mt-1">AEO-T2 Accredited</div>
          <div className="text-xs text-emerald-600 mt-1">Green Channel Clearance</div>
        </div>
      </div>

      {/* SECTION 1: Principal Business Activities & Revenue Contribution */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Percent className="w-4 h-4 text-sky-600" />
            <span>Principal Business Operations &amp; Turnover Share</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">Reported under Schedule III of the Companies Act to the Ministry of Corporate Affairs.</p>
        </div>

        <div className="space-y-4">
          {activities.map((act, idx) => (
            <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded">
                    {act.code}
                  </span>
                  <span className="font-bold text-sm text-slate-900">{act.title}</span>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border font-mono ${act.revenueColor}`}>
                  {act.revenue}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{act.description}</p>
              <div className="text-[11px] text-slate-400 font-semibold">{act.type}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: Statutory Operating Licenses & Clearances */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-5">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-sky-600" />
              <span>Statutory Operating Licenses &amp; Regulatory Consents</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Valid operating permits verified against state and central regulatory authorities.</p>
          </div>
          <span className="text-xs font-mono text-slate-400 font-bold">{licenses.length} Verified</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {licenses.map((lic, idx) => (
            <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-900">{lic.name}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {lic.status}
                </span>
              </div>
              <div className="text-xs font-mono font-bold text-sky-600">{lic.number}</div>
              <div className="text-[11px] text-slate-500">{lic.authority}</div>
              <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-200/60">
                Valid through: <strong className="text-slate-700">{lic.validTill}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-2">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white rounded-xl font-semibold text-sm shadow-md transition flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Save Business Activities</span>
        </button>
      </div>
    </div>
  );
}
