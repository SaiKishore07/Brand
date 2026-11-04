import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Save,
  Check,
  Building2,
  FileText,
  UserCheck,
  Scale,
  Percent,
  ExternalLink,
  Lock
} from 'lucide-react';

export default function BrandOwnershipContent() {
  const [isSaved, setIsSaved] = useState(false);

  const [formData, setFormData] = useState({
    legalOwnerEntity: 'Acme Industries Holdings Ltd.',
    ownershipType: '100% Sole Proprietary Beneficial Owner',
    cinNumber: 'L29299TG1998PLC030312',
    incorporationCountry: 'India',
    leiCode: '335800ACMEIND984200',
    deedRef: 'DEED-ASSIGN-BRAND-2017-09',
    uboRegistration: 'Reported under MCA Section 90 / Form BEN-2',
    beneficialOwner: 'Dr. Raghavendra Rao & Family Trust (Controlling Interest 54.2%)',
    institutionalHolding: 'Public & Institutional Shareholders (45.8%)',
    ipHoldingStructure: 'Direct Operating IP (Non-Offshore Shell)'
  });

  const [licenseAgreements] = useState([
    {
      licensee: 'Acme Telemetry GmbH (European Subsidiary)',
      territory: 'European Union & EEA',
      type: 'Exclusive Territorial Operating License',
      royalty: 'Arm\'s Length Transfer Pricing Basis',
      validity: 'Through 31 Dec 2030',
      status: 'Active & Filed'
    },
    {
      licensee: 'Acme Industrial Americas Inc.',
      territory: 'United States, Canada & Mexico',
      type: 'Exclusive Commercial Distribution License',
      royalty: 'Arm\'s Length Transfer Pricing Basis',
      validity: 'Through 31 Dec 2030',
      status: 'Active & Filed'
    }
  ]);

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
            4. OWNERSHIP &amp; VERIFICATION
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span>Brand Ownership &amp; Beneficial Title</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Verified Title
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Certified proprietary ownership, ultimate beneficial ownership (UBO) filings, and intra-group IP licensing deeds.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            100% Unencumbered Title
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
                <span>Ownership Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Ownership</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Title Holder</div>
          <div className="text-base font-bold text-slate-900 mt-1">Acme Holdings Ltd</div>
          <div className="text-xs text-sky-600 mt-1">Direct Master IP Owner</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Ownership Share</div>
          <div className="text-base font-bold text-slate-900 mt-1">100% Beneficial</div>
          <div className="text-xs text-emerald-600 mt-1 font-medium">Zero Encumbrance or Pledge</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">UBO Declaration</div>
          <div className="text-base font-bold text-slate-900 mt-1">Form BEN-2 Filed</div>
          <div className="text-xs text-indigo-600 mt-1">MCA Regulatory Certified</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Global LEI Code</div>
          <div className="text-base font-bold text-slate-900 mt-1 font-mono text-xs">335800ACMEIND</div>
          <div className="text-xs text-emerald-600 mt-1">GLEIF Verified</div>
        </div>
      </div>

      {/* SECTION 1: Legal Ownership & Beneficial Interest Details */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>Proprietary Title Holder &amp; Legal Structure</span>
          </h2>
          <span className="text-xs font-mono text-slate-400 font-bold">Audited Registry Record</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Primary Legal Title Holder</label>
            <input
              type="text"
              name="legalOwnerEntity"
              value={formData.legalOwnerEntity}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Nature of Ownership Title</label>
            <input
              type="text"
              name="ownershipType"
              value={formData.ownershipType}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Corporate Identifier (CIN)</label>
            <input
              type="text"
              name="cinNumber"
              value={formData.cinNumber}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Legal Entity Identifier (LEI)</label>
            <input
              type="text"
              name="leiCode"
              value={formData.leiCode}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Significant Beneficial Owner (SBO / UBO) Declaration</label>
            <input
              type="text"
              name="beneficialOwner"
              value={formData.beneficialOwner}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
            <span className="text-[11px] text-slate-400 mt-1 block">Registered under Section 90 of Companies Act 2013 via Form BEN-2.</span>
          </div>
        </div>
      </div>

      {/* SECTION 2: Intra-Group IP Licensing & Operating Deeds */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-5">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-4 h-4 text-sky-600" />
              <span>Intra-Group Brand Licensing &amp; Territorial Rights</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Formal brand license agreements executed with regional operating subsidiaries.</p>
          </div>
          <span className="text-xs font-mono text-slate-400 font-bold">{licenseAgreements.length} Active Licenses</span>
        </div>

        <div className="space-y-3">
          {licenseAgreements.map((lic, idx) => (
            <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-bold text-sm text-slate-900">{lic.licensee}</span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {lic.status}
                </span>
              </div>
              <div className="text-xs text-slate-600">
                <strong>Territory:</strong> {lic.territory} • <strong>Scope:</strong> {lic.type}
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-200/60 font-mono">
                <span>{lic.royalty}</span>
                <span>{lic.validity}</span>
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
          <span>Save Ownership Details</span>
        </button>
      </div>
    </div>
  );
}

