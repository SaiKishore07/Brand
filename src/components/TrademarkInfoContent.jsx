import React, { useState } from 'react';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Save,
  Check,
  Globe,
  Calendar,
  ExternalLink,
  AlertCircle,
  FileCheck2,
  Tag
} from 'lucide-react';

export default function TrademarkInfoContent() {
  const [isSaved, setIsSaved] = useState(false);

  const [trademarks] = useState([
    {
      jurisdiction: 'India (Trade Marks Registry)',
      markType: 'Wordmark ("ACME") + Monogram Device',
      regNumber: 'TM-3819284',
      classes: 'Class 07, 09, 42',
      filingDate: '14 Oct 2017',
      regDate: '22 May 2018',
      validTill: '14 Oct 2034 (10 Yrs Valid)',
      status: 'Registered & Protected',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      jurisdiction: 'United States (USPTO)',
      markType: 'Wordmark ("ACME INDUSTRIES")',
      regNumber: 'USPTO Reg #6,192,840',
      classes: 'Class 07 & 09',
      filingDate: '08 Mar 2019',
      regDate: '15 Dec 2020',
      validTill: '15 Dec 2030 (Sec 8 & 15 Clear)',
      status: 'Registered & Incontestable',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      jurisdiction: 'European Union (EUIPO)',
      markType: 'Device Mark (Geometric Logo + Wordmark)',
      regNumber: 'EUIPO #018294812',
      classes: 'Class 07, 09, 42',
      filingDate: '18 Jun 2020',
      regDate: '12 Jan 2021',
      validTill: '18 Jun 2031',
      status: 'Registered Across EU27',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      jurisdiction: 'WIPO Madrid Protocol',
      markType: 'International Master Registration',
      regNumber: 'WIPO IR-1498420',
      classes: 'Designated: UK, JP, AU, SG, AE',
      filingDate: '10 Nov 2020',
      regDate: '05 Aug 2021',
      validTill: '10 Nov 2030',
      status: 'Active International Mark',
      statusColor: 'bg-sky-50 text-sky-700 border-sky-200'
    }
  ]);

  const [niceClasses] = useState([
    {
      classNum: 'Class 07',
      title: 'Machines, Machine Tools & Valve Equipment',
      items: 'Hydraulic and pneumatic valves, automated actuators, precision machine tooling, CNC machine parts.'
    },
    {
      classNum: 'Class 09',
      title: 'Electronic Telemetry & Sensor Instrumentation',
      items: 'IoT telemetry transmitters, vibration transducers, pressure transmitters, edge computing firmware boards.'
    },
    {
      classNum: 'Class 42',
      title: 'Industrial Engineering & Technological R&D',
      items: 'Scientific research, custom CAD/CAM design of precision engineering components, IoT cloud software services.'
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
            4. OWNERSHIP &amp; VERIFICATION
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span>Trademark Information &amp; IP Protection</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              WIPO &amp; USPTO Current
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Registered wordmarks, figurative device emblems, Nice classification classes, and international Madrid Protocol filings.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            Zero Conflicting Marks
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
                <span>Trademarks Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Trademarks</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Primary Wordmark</div>
          <div className="text-base font-bold text-slate-900 mt-1">"ACME"</div>
          <div className="text-xs text-sky-600 mt-1">Registered &amp; Protected</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Global Registries</div>
          <div className="text-base font-bold text-slate-900 mt-1">4 Major Jurisdictions</div>
          <div className="text-xs text-emerald-600 mt-1">India, US, EU, WIPO</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Nice Classes</div>
          <div className="text-base font-bold text-slate-900 mt-1">Class 07, 09, 42</div>
          <div className="text-xs text-indigo-600 mt-1">Industrial &amp; High-Tech</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Earliest Expiry</div>
          <div className="text-base font-bold text-slate-900 mt-1">Nov 2030</div>
          <div className="text-xs text-emerald-600 mt-1">All Current &amp; Active</div>
        </div>
      </div>

      {/* SECTION 1: Registered Trademark Portfolio */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-4 h-4 text-sky-600" />
            <span>International Trademark Registration Portfolio</span>
          </h2>
          <span className="text-xs font-mono text-slate-400 font-bold">{trademarks.length} Registrations</span>
        </div>

        <div className="space-y-3">
          {trademarks.map((tm, idx) => (
            <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="font-bold text-sm text-slate-900">{tm.jurisdiction}</span>
                  <span className="font-mono text-xs font-bold text-sky-700 bg-white border border-slate-200 px-2 py-0.5 rounded">
                    {tm.regNumber}
                  </span>
                </div>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${tm.statusColor}`}>
                  {tm.status}
                </span>
              </div>
              <div className="text-xs text-slate-600">
                <strong>Mark Type:</strong> {tm.markType} • <strong>Classification:</strong> {tm.classes}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 pt-1 border-t border-slate-200/60 font-mono">
                <span>Filing: {tm.filingDate} • Registered: {tm.regDate}</span>
                <span className="text-emerald-700 font-medium">Valid through: {tm.validTill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: Nice Classification Details */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-5">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Tag className="w-4 h-4 text-sky-600" />
            <span>Nice Classification Goods &amp; Services Scope</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">Specifications of goods and services protected under the registered trademarks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {niceClasses.map((cls, idx) => (
            <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5">
              <span className="font-mono text-xs font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                {cls.classNum}
              </span>
              <div className="text-xs font-bold text-slate-900 pt-1">{cls.title}</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">{cls.items}</p>
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
          <span>Save Trademark Information</span>
        </button>
      </div>
    </div>
  );
}
