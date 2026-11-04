import React, { useState } from 'react';
import {
  UserCheck,
  ShieldCheck,
  CheckCircle2,
  Save,
  Check,
  Lock,
  FileText,
  Key,
  Calendar,
  Mail,
  Phone,
  Fingerprint
} from 'lucide-react';

export default function AuthorizedRepresentativesContent() {
  const [isSaved, setIsSaved] = useState(false);

  const [representatives] = useState([
    {
      name: 'Dr. Raghavendra Rao',
      designation: 'Chairman & Managing Director',
      authorityTier: 'Tier 1: Unlimited Full Authority',
      scope: 'Statutory Deeds, Bank Accounts, Equity Transactions & Corporate M&A',
      dscType: 'Class 3 Organization DSC (eMudhra)',
      dscExpiry: '14 Oct 2027',
      poaDoc: 'POA-MD-UNLIMITED-2026.pdf',
      status: 'Active Signatory'
    },
    {
      name: 'Anand Kumar',
      designation: 'Joint Managing Director & COO',
      authorityTier: 'Tier 2: Up to ₹50 Crores',
      scope: 'Commercial Procurement, Distributor Contracts & Operating Leases',
      dscType: 'Class 3 Organization DSC (Pantasign)',
      dscExpiry: '22 May 2027',
      poaDoc: 'POA-COO-COMMERCIAL-2026.pdf',
      status: 'Active Signatory'
    },
    {
      name: 'Suhasini Mehta',
      designation: 'Chief Technology Officer (CTO)',
      authorityTier: 'Tier 3: Up to ₹10 Crores',
      scope: 'Patent & Trademark Filings, Software Licensing & Technical R&D',
      dscType: 'Class 3 Organization DSC (eMudhra)',
      dscExpiry: '10 Aug 2027',
      poaDoc: 'POA-CTO-TECH-2026.pdf',
      status: 'Active Signatory'
    },
    {
      name: 'Rajesh Varma',
      designation: 'Vice President — Global Supply Chain',
      authorityTier: 'Tier 3: Up to ₹5 Crores',
      scope: 'Customs Clearances, DGFT Import/Export Licensing & Freight Agreements',
      dscType: 'Class 3 Organization DSC (Capricom)',
      dscExpiry: '18 Nov 2026',
      poaDoc: 'POA-SCM-CUSTOMS-2026.pdf',
      status: 'Active Signatory'
    },
    {
      name: 'Dr. Evelyn Weber',
      designation: 'European Authorized Representative',
      authorityTier: 'European Union Mandate (€5.0M)',
      scope: 'EU Regulatory Filings, CE Declarations of Conformity, GDPR Representation',
      dscType: 'EU Qualified Electronic Signature (QES)',
      dscExpiry: '30 Jun 2027',
      poaDoc: 'POA-EU-REP-MANDATE-2026.pdf',
      status: 'Active Signatory'
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
            <span>Authorized Representatives &amp; Signatories</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              5 Active Mandates
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Notarized Powers of Attorney (PoA), Class 3 Digital Signature Certificate (DSC) tokens, and certified delegation of authority.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
            <Fingerprint className="w-3.5 h-3.5 text-sky-600" />
            Class 3 DSC Verified
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
                <span>Mandates Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Signatories</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Active Signatories</div>
          <div className="text-base font-bold text-slate-900 mt-1">5 Key Officials</div>
          <div className="text-xs text-sky-600 mt-1">Board Authorized</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">DSC Security Tier</div>
          <div className="text-base font-bold text-slate-900 mt-1">Class 3 Hardware</div>
          <div className="text-xs text-emerald-600 mt-1">Cryptographic Token Key</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Board Resolution</div>
          <div className="text-base font-bold text-slate-900 mt-1">BR-2026-01 Active</div>
          <div className="text-xs text-indigo-600 mt-1">Registrar Filed</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Cross-Border Mandate</div>
          <div className="text-base font-bold text-slate-900 mt-1">EU Representative</div>
          <div className="text-xs text-emerald-600 mt-1">CE &amp; GDPR Authorized</div>
        </div>
      </div>

      {/* Representatives Directory */}
      <div className="space-y-4">
        {representatives.map((rep, idx) => (
          <div
            key={idx}
            className="p-5 bg-white border border-slate-200 rounded-3xl shadow-2xs hover:border-sky-300 transition space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-extrabold text-base text-slate-900">{rep.name}</h3>
                <div className="text-xs text-slate-500 mt-0.5">{rep.designation}</div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                {rep.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600">
              <div>
                <span className="text-slate-400 block text-[11px] uppercase font-bold">Authority Tier &amp; Scope</span>
                <span className="text-slate-900 font-bold">{rep.authorityTier}</span>
                <p className="text-slate-500 mt-0.5">{rep.scope}</p>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px] uppercase font-bold">DSC Token &amp; Power of Attorney</span>
                <span className="text-slate-800 font-semibold">{rep.dscType} (Expires: {rep.dscExpiry})</span>
                <div className="font-mono text-sky-600 font-medium mt-0.5">Deed: {rep.poaDoc}</div>
              </div>
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
          <span>Save Authorized Representatives</span>
        </button>
      </div>
    </div>
  );
}

