import React, { useState } from 'react';
import {
  GitFork,
  Layers,
  CheckCircle2,
  ShieldCheck,
  Save,
  Check,
  Building2,
  ChevronRight,
  ExternalLink,
  Cpu,
  Settings,
  HelpCircle
} from 'lucide-react';

export default function IndustryHierarchyContent() {
  const [isSaved, setIsSaved] = useState(false);

  const [codes, setCodes] = useState({
    nicCode: '28199',
    nicDescription: 'Manufacture of other general purpose machinery n.e.c.',
    naicsCode: '333999',
    naicsDescription: 'All Other Miscellaneous General Purpose Machinery Manufacturing',
    isicCode: '2819',
    isicDescription: 'Manufacture of other general-purpose machinery (ISIC Rev 4)',
    gicsSector: 'Industrials (Code: 20)',
    gicsIndustryGroup: 'Capital Goods (Code: 2010)',
    gicsIndustry: 'Machinery (Code: 201060)',
    gicsSubIndustry: 'Industrial Machinery & Automation (Code: 20106020)'
  });

  const [hierarchyPath] = useState([
    { level: 'Level 1: Broad Macro Sector', title: 'Industrials & Heavy Manufacturing', code: 'SEC-IND-01', desc: 'Core global capital goods and industrial plant machinery' },
    { level: 'Level 2: Major Industry Group', title: 'Capital Goods & Mechanical Equipment', code: 'GRP-CAP-10', desc: 'Precision engineered industrial equipment, automated tooling and telemetry' },
    { level: 'Level 3: Specific Industry', title: 'Industrial Machinery & Precision Robotics', code: 'IND-MCH-42', desc: 'Automated hydraulic valves, linear actuators, sensor-integrated actuators' },
    { level: 'Level 4: Sub-Segment Niche', title: 'Smart Telemetry-Embedded Actuators', code: 'NIC-ACT-99', desc: 'IoT telemetry-enabled precision actuators for aerospace, automotive, energy' }
  ]);

  const [secondaryIndustries] = useState([
    { code: '334513', name: 'Industrial Process Variable Instruments', relevance: 'Smart IoT telemetry sensors and pressure transducers' },
    { code: '336413', name: 'Other Aircraft Parts and Auxiliary Equipment', relevance: 'Micro-precision hydraulic valves for commercial aerospace' },
    { code: '333618', name: 'Other Engine Equipment Manufacturing', relevance: 'Heavy duty continuous cycle marine and generator valves' }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCodes(prev => ({ ...prev, [name]: value }));
    setIsSaved(false);
  };

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
            <span>Industry Hierarchy &amp; Classification</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              NIC &amp; NAICS Mapped
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Standardized industrial taxonomy, international trade classifications (NIC, NAICS, ISIC, GICS), and sector hierarchy.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            UN &amp; WTO Harmonized
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
                <span>Hierarchy Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Hierarchy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Primary NIC Code</div>
          <div className="text-base font-bold text-slate-900 mt-1">NIC 28199</div>
          <div className="text-xs text-sky-600 mt-1">Ministry of Statistics Validated</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">NAICS Code (US/CA)</div>
          <div className="text-base font-bold text-slate-900 mt-1">NAICS 333999</div>
          <div className="text-xs text-emerald-600 mt-1">General Machinery Manufacturing</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">GICS Sector</div>
          <div className="text-base font-bold text-slate-900 mt-1">Industrials (20)</div>
          <div className="text-xs text-indigo-600 mt-1">Capital Goods • Machinery</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Cross-Industries</div>
          <div className="text-base font-bold text-slate-900 mt-1">3 Secondary Lines</div>
          <div className="text-xs text-emerald-600 mt-1">Aerospace &amp; IoT Telemetry</div>
        </div>
      </div>

      {/* SECTION 1: 4-Level Industry Tree Hierarchy */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <GitFork className="w-4 h-4 text-sky-600" />
            <span>Operational Industry Hierarchy Path</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">Top-down taxonomic breakdown from macro economic sector to specialized operational niche.</p>
        </div>

        <div className="space-y-4">
          {hierarchyPath.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 border-l-2 border-sky-200 pb-2 last:border-transparent last:pb-0">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-sky-600 shadow-xs" />
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">{item.level}</span>
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-700">
                    {item.code}
                  </span>
                </div>
                <div className="text-sm font-extrabold text-slate-900">{item.title}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: International Classification System Codes */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-600" />
            <span>Harmonized International Classification Codes</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">Standardized codes used across international customs, trade documentation, and procurement registries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">National Industrial Classification (India NIC 2008)</label>
            <input
              type="text"
              name="nicCode"
              value={codes.nicCode}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
            <span className="text-[11px] text-slate-400 mt-1 block">{codes.nicDescription}</span>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">North American Industry Classification (NAICS 2022)</label>
            <input
              type="text"
              name="naicsCode"
              value={codes.naicsCode}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
            <span className="text-[11px] text-slate-400 mt-1 block">{codes.naicsDescription}</span>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">UN International Standard Industrial Classification (ISIC Rev 4)</label>
            <input
              type="text"
              name="isicCode"
              value={codes.isicCode}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
            <span className="text-[11px] text-slate-400 mt-1 block">{codes.isicDescription}</span>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">GICS Industry Sub-Segment Code</label>
            <input
              type="text"
              name="gicsSubIndustry"
              value={codes.gicsSubIndustry}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
            <span className="text-[11px] text-slate-400 mt-1 block">{codes.gicsSector} &gt; {codes.gicsIndustryGroup}</span>
          </div>
        </div>
      </div>

      {/* SECTION 3: Secondary Cross-Industry Classifications */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-sky-600" />
            <span>Secondary &amp; Adjacent Industry Verticals</span>
          </h2>
          <span className="text-xs text-slate-400 font-bold">3 Verticals Active</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {secondaryIndustries.map((sec, idx) => (
            <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                  {sec.code}
                </span>
                <span className="text-[10px] text-emerald-600 font-bold">Active Line</span>
              </div>
              <div className="text-xs font-bold text-slate-900 pt-1">{sec.name}</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">{sec.relevance}</p>
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
          <span>Save Industry Hierarchy</span>
        </button>
      </div>
    </div>
  );
}
