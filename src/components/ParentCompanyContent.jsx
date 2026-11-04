import React, { useState } from 'react';
import {
  Landmark,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Save,
  Check,
  Globe,
  FileText,
  Percent,
  Coins,
  MapPin,
  ExternalLink
} from 'lucide-react';

export default function ParentCompanyContent() {
  const [isSaved, setIsSaved] = useState(false);

  const [formData, setFormData] = useState({
    parentLegalName: 'Acme Global Industrial Conglomerate AG',
    registrationNumber: 'CHE-109.842.192 (Swiss Commercial Register)',
    jurisdiction: 'Zurich, Switzerland',
    relationshipType: 'Ultimate Holding & Parent Entity (UPE)',
    equityShareholding: '74.8% Controlling Direct Equity',
    leiCode: '549300ACMEPAR984210',
    headquartersAddress: 'Gotthardstrasse 26, 8002 Zürich, Switzerland',
    consolidationStandard: 'IFRS Consolidated Financial Statements (KPMG Switzerland Audited)',
    boardRepresentation: '3 Nominee Directors on Indian Board',
    parentGroupTurnover: '€1.4 Billion (Annual Consolidated Global Revenue)'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
            5. BUSINESS NETWORK
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span>Parent Company &amp; Ultimate Holding</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              UPE Verified
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Ultimate Parent Entity (UPE) corporate pedigree, controlling equity percentage, and global group consolidation status.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            OECD / CbCR Compliant
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
                <span>Parent Info Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Parent Info</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Parent Entity</div>
          <div className="text-base font-bold text-slate-900 mt-1">Acme Global AG</div>
          <div className="text-xs text-sky-600 mt-1">Zurich, Switzerland</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Equity Shareholding</div>
          <div className="text-base font-bold text-slate-900 mt-1">74.8% Direct</div>
          <div className="text-xs text-emerald-600 mt-1">Controlling Shareholder</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Global Revenue</div>
          <div className="text-base font-bold text-slate-900 mt-1">€1.4 Billion</div>
          <div className="text-xs text-indigo-600 mt-1">IFRS Audited (KPMG)</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Parent LEI Code</div>
          <div className="text-base font-bold text-slate-900 mt-1 font-mono text-xs">549300ACMEPAR</div>
          <div className="text-xs text-emerald-600 mt-1">GLEIF Verified</div>
        </div>
      </div>

      {/* SECTION 1: Ultimate Parent Entity Corporate Structure */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Landmark className="w-4 h-4 text-sky-600" />
            <span>Parent Corporate Entity &amp; Jurisdiction Details</span>
          </h2>
          <span className="text-xs font-mono text-slate-400 font-bold">Country-by-Country (CbCR) Registered</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Ultimate Parent Entity Legal Name</label>
            <input
              type="text"
              name="parentLegalName"
              value={formData.parentLegalName}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Commercial Register ID &amp; Jurisdiction</label>
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Controlling Equity Shareholding</label>
            <input
              type="text"
              name="equityShareholding"
              value={formData.equityShareholding}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Legal Entity Identifier (Parent LEI)</label>
            <input
              type="text"
              name="leiCode"
              value={formData.leiCode}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Parent Company Registered Headquarters</label>
            <input
              type="text"
              name="headquartersAddress"
              value={formData.headquartersAddress}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Consolidated Audit &amp; Reporting Framework</label>
            <input
              type="text"
              name="consolidationStandard"
              value={formData.consolidationStandard}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-2">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white rounded-xl font-semibold text-sm shadow-md transition flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Save Parent Company Details</span>
        </button>
      </div>
    </div>
  );
}

