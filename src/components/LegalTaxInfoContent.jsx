import React, { useState } from 'react';
import {
  Receipt,
  ShieldCheck,
  CheckCircle2,
  Save,
  Check,
  FileCheck2,
  Building,
  Scale,
  Hash,
  ExternalLink,
  Percent
} from 'lucide-react';

export default function LegalTaxInfoContent() {
  const [isSaved, setIsSaved] = useState(false);

  const [formData, setFormData] = useState({
    pan: 'AAACA9842K',
    panHolder: 'Acme Industries Holdings Ltd.',
    tan: 'HYDA09842B',
    itrStatus: 'Filed & Cleared (AY 2025-26)',
    itrAck: 'ACK-9284019284-ITR6',
    taxRegime: 'Section 115BAA (22% Concessional Corporate Tax)',
    transferPricingForm: 'Form 3CEB Filed by E&Y LLP',
    sec281Clearance: 'Valid No-Dues Certificate Issued',
    dtaaStatus: 'TRC Certificate Active for Germany & USA'
  });

  const [gstins] = useState([
    {
      state: 'Telangana (Principal Place of Business)',
      gstin: '36AAACA9842K1Z5',
      type: 'Headquarters & Unit 1 Assembly Hub',
      filingStatus: 'GSTR-1 & 3B Compliant',
      status: 'Active'
    },
    {
      state: 'Maharashtra (Manufacturing Foundry)',
      gstin: '27AAACA9842K1Z1',
      type: 'Chakan Heavy Foundry Division',
      filingStatus: 'GSTR-1 & 3B Compliant',
      status: 'Active'
    },
    {
      state: 'Haryana (Northern Staging Hub)',
      gstin: '06AAACA9842K1Z8',
      type: 'Regional Distribution Depot',
      filingStatus: 'GSTR-1 & 3B Compliant',
      status: 'Active'
    },
    {
      state: 'Tamil Nadu (Southern Port Hub)',
      gstin: '33AAACA9842K1Z4',
      type: 'Export Warehousing Facility',
      filingStatus: 'GSTR-1 & 3B Compliant',
      status: 'Active'
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
            <span>Legal &amp; Tax Information</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Tax Compliant
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Corporate PAN, multi-state GSTIN registrations, Income Tax return status, and transfer pricing audit certifications.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            Income Tax Portal Linked
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
                <span>Tax Info Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Tax Info</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Corporate PAN</div>
          <div className="text-base font-bold text-slate-900 mt-1 font-mono">{formData.pan}</div>
          <div className="text-xs text-emerald-600 mt-1">Active &amp; Verified</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Active GSTINs</div>
          <div className="text-base font-bold text-slate-900 mt-1">{gstins.length} State Regs</div>
          <div className="text-xs text-sky-600 mt-1">100% GSTR-1/3B Cleared</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">ITR Filing Status</div>
          <div className="text-base font-bold text-slate-900 mt-1">AY 2025-26 Filed</div>
          <div className="text-xs text-emerald-600 mt-1 font-mono">{formData.itrAck}</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Tax Rate Regime</div>
          <div className="text-base font-bold text-slate-900 mt-1">Sec 115BAA</div>
          <div className="text-xs text-indigo-600 mt-1">22% Concessional Rate</div>
        </div>
      </div>

      {/* SECTION 1: Direct Tax Credentials */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Receipt className="w-4 h-4 text-sky-600" />
            <span>Direct Tax Identifiers &amp; Compliance Audit</span>
          </h2>
          <span className="text-xs font-mono text-slate-400 font-bold">NSDL Verified</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Permanent Account Number (PAN)</label>
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Tax Deduction Account Number (TAN)</label>
            <input
              type="text"
              name="tan"
              value={formData.tan}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Latest ITR Return Status (ITR-6)</label>
            <input
              type="text"
              name="itrStatus"
              value={formData.itrStatus}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">International Transfer Pricing Filing</label>
            <input
              type="text"
              name="transferPricingForm"
              value={formData.transferPricingForm}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>
        </div>
      </div>

      {/* SECTION 2: Multi-State Goods & Services Tax (GST) Registrations */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-5">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-4 h-4 text-sky-600" />
              <span>Goods &amp; Services Tax (GSTIN) State Registrations</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">GST portal linked registrations with verified filing track records.</p>
          </div>
          <span className="text-xs font-mono text-slate-400 font-bold">{gstins.length} Registered States</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gstins.map((g, idx) => (
            <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-900">{g.state}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {g.status}
                </span>
              </div>
              <div className="font-mono text-xs font-extrabold text-sky-600">{g.gstin}</div>
              <div className="text-[11px] text-slate-500">{g.type}</div>
              <div className="pt-2 text-[11px] text-emerald-700 font-medium border-t border-slate-200/60 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>{g.filingStatus}</span>
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
          <span>Save Legal &amp; Tax Info</span>
        </button>
      </div>
    </div>
  );
}
