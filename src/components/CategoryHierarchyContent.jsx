import React, { useState } from 'react';
import {
  Layers,
  Barcode,
  CheckCircle2,
  ShieldCheck,
  Save,
  Check,
  Tag,
  FolderTree,
  ChevronRight,
  ExternalLink,
  Box,
  FileCheck2
} from 'lucide-react';

export default function CategoryHierarchyContent() {
  const [isSaved, setIsSaved] = useState(false);

  const [gpcData, setGpcData] = useState({
    segment: '84000000 - Machinery / Process Equipment',
    family: '84040000 - Fluid Handling Equipment & Specialized Industrial Valves',
    gpcClass: '84040200 - Automated Precision Control Valves & Actuators',
    brick: '10005912 - Electro-Pneumatic Actuator Telemetry Valves',
    unspsc: '40141616 - Industrial Actuator Control Valves',
    hsnCode: '8481.80.30 - Oleohydraulic or Pneumatic Transmission Valves'
  });

  const [categories] = useState([
    {
      name: 'Smart Industrial Actuator Valves',
      code: 'CAT-ACT-01',
      skus: '482 SKUs',
      share: '34% of Catalog',
      subcats: ['Electro-Pneumatic Valves', 'Cryogenic Actuators', 'High-Pressure Hydraulic Gate Valves'],
      compliance: 'RoHS / REACH Compliant'
    },
    {
      name: 'Micro-Precision CNC Tooling & Dies',
      code: 'CAT-CNC-02',
      skus: '390 SKUs',
      share: '27% of Catalog',
      subcats: ['Carbide Tool Inserts', 'Multi-Axis Collets', 'Aerospace Tolerance Dies'],
      compliance: 'AS9100D Certified'
    },
    {
      name: 'Embedded Telemetry Sensor Modules',
      code: 'CAT-SEN-03',
      skus: '318 SKUs',
      share: '23% of Catalog',
      subcats: ['Vibration Transducers', 'Thermal Telemetry Probes', 'Wireless IoT Valve Monitors'],
      compliance: 'CE / FCC Class B'
    },
    {
      name: 'Industrial Fluid Sealing & Gaskets',
      code: 'CAT-SLG-04',
      skus: '230 SKUs',
      share: '16% of Catalog',
      subcats: ['PTFE Spiral Wound Gaskets', 'Elastomeric O-Rings', 'High-Temp Metal Seals'],
      compliance: 'API 6A Certified'
    }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGpcData(prev => ({ ...prev, [name]: value }));
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
            <span>Category Hierarchy &amp; Taxonomy</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              GS1 GPC Verified
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Standardized product catalog categories, GS1 Global Product Classification (GPC) bricks, and UNSPSC commodity mapping.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            1,420 SKUs Synchronized
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
                <span>Categories Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Taxonomy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">GS1 GPC Brick</div>
          <div className="text-base font-bold text-slate-900 mt-1">Brick 10005912</div>
          <div className="text-xs text-sky-600 mt-1 font-mono">Actuator Valves</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">UNSPSC Code</div>
          <div className="text-base font-bold text-slate-900 mt-1">40141616</div>
          <div className="text-xs text-emerald-600 mt-1">Industrial Actuator Valves</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Master Tariff (HSN)</div>
          <div className="text-base font-bold text-slate-900 mt-1">8481.80.30</div>
          <div className="text-xs text-indigo-600 mt-1 font-mono">18% GST / Custom Tier</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Active Categories</div>
          <div className="text-base font-bold text-slate-900 mt-1">4 Master Branches</div>
          <div className="text-xs text-emerald-600 mt-1">1,420 Total Catalog SKUs</div>
        </div>
      </div>

      {/* SECTION 1: GS1 Global Product Classification (GPC) Structure */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Barcode className="w-4 h-4 text-sky-600" />
            <span>GS1 Global Product Classification (GPC) Hierarchy</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">The global standard for electronic commerce taxonomy across retail and industrial supply chains.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">GPC Segment</label>
            <input
              type="text"
              name="segment"
              value={gpcData.segment}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">GPC Family</label>
            <input
              type="text"
              name="family"
              value={gpcData.family}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">GPC Class</label>
            <input
              type="text"
              name="gpcClass"
              value={gpcData.gpcClass}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">GPC Brick</label>
            <input
              type="text"
              name="brick"
              value={gpcData.brick}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">UNSPSC Commodity Code</label>
            <input
              type="text"
              name="unspsc"
              value={gpcData.unspsc}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Primary Harmonized Tariff Code (HSN/SAC)</label>
            <input
              type="text"
              name="hsnCode"
              value={gpcData.hsnCode}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>
        </div>
      </div>

      {/* SECTION 2: Master Product Categories & SKU Distribution */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-5">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FolderTree className="w-4 h-4 text-sky-600" />
              <span>Catalog Category Taxonomy &amp; SKU Allocation</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">All 1,420 registered products mapped to authorized brand category nodes.</p>
          </div>
          <span className="text-xs font-mono text-slate-400 font-bold">4 Major Branches</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((c, idx) => (
            <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-sm text-slate-900">{c.name}</span>
                <span className="text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-md font-mono">
                  {c.skus}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono font-bold text-slate-700">{c.code}</span>
                <span className="text-emerald-600 font-medium">{c.share}</span>
              </div>
              <div className="pt-2 border-t border-slate-200/60">
                <div className="text-[11px] font-bold text-slate-400 uppercase mb-1">Sub-Categories:</div>
                <div className="flex flex-wrap gap-1.5">
                  {c.subcats.map((sub, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 bg-white border border-slate-200 rounded-md text-slate-700">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-[10px] text-emerald-700 font-semibold pt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>{c.compliance}</span>
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
          <span>Save Category Hierarchy</span>
        </button>
      </div>
    </div>
  );
}
