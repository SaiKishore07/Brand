import React, { useState } from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  Award,
  Save,
  Check,
  FileCheck2,
  QrCode,
  ExternalLink,
  Copy,
  Clock,
  Sparkles,
  Lock
} from 'lucide-react';

export default function BrandVerificationContent() {
  const [isSaved, setIsSaved] = useState(false);
  const [copiedBadge, setCopiedBadge] = useState(false);

  const [verificationData] = useState({
    certId: 'WEBUOS-VERIF-BR9842-2026-A1',
    tier: 'Tier 1 Certified Master Enterprise',
    status: 'Active & In Good Standing',
    verifiedDate: '15 January 2026',
    expiryDate: '15 January 2027 (Annual Renewal)',
    authenticator: 'WEBUOS Trust & Cryptographic Audit Authority',
    digitalSealHash: '0x8f2948c2b7190e38471a24d88e09f42918820c78a1'
  });

  const [auditSteps] = useState([
    {
      title: 'Corporate Legal Existence & MCA Registry Match',
      agency: 'Ministry of Corporate Affairs (ROC Hyderabad)',
      date: '10 Jan 2026',
      status: 'Passed & Validated',
      details: 'CIN L29299TG1998PLC030312 verified active with nil defaults.'
    },
    {
      title: 'Trademark Ownership & Madrid Protocol Proof',
      agency: 'WIPO & Indian Trade Marks Registry',
      date: '11 Jan 2026',
      status: 'Passed & Validated',
      details: 'Sole unencumbered ownership of "ACME" in Class 07, 09, 42 confirmed.'
    },
    {
      title: 'Authorized Signatory KYC & Board Authority',
      agency: 'Aadhaar / Passport & DIN Biometric KYC',
      date: '12 Jan 2026',
      status: 'Passed & Validated',
      details: 'Managing Director DIN and PoA authority authenticated.'
    },
    {
      title: 'Physical Industrial Site Geolocation Audit',
      agency: 'Independent Third-Party Field Verification',
      date: '14 Jan 2026',
      status: 'Passed & Validated',
      details: 'Hyderabad and Pune manufacturing plants inspected and geo-tagged.'
    },
    {
      title: 'Tax Standing & Revenue Department Good Standing',
      agency: 'Central Board of Direct Taxes & GSTN',
      date: '15 Jan 2026',
      status: 'Passed & Validated',
      details: 'ITR-6 AY 2025-26 and all state GSTIN returns current.'
    }
  ]);

  const embedSnippet = `<a href="https://webuos.com/verify/BR-9842" target="_blank" rel="noopener"><img src="https://assets.webuos.com/badges/verified-tier1-master.svg" alt="WEBUOS Tier-1 Verified Brand" width="180" height="42" /></a>`;

  const handleCopyBadge = () => {
    navigator.clipboard.writeText(embedSnippet);
    setCopiedBadge(true);
    setTimeout(() => setCopiedBadge(false), 2000);
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
            <span>Brand Verification &amp; Certification</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Certified Level 2
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Cryptographic proof of brand authenticity, multi-factor regulatory audit pass, and public trust verification seal.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyBadge}
            className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 shadow-2xs transition"
          >
            {copiedBadge ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedBadge ? 'Badge Copied!' : 'Copy Web Badge'}</span>
          </button>
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
                <span>Certificate Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Status</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Verification Level</div>
          <div className="text-base font-bold text-slate-900 mt-1">Tier-1 Master</div>
          <div className="text-xs text-emerald-600 mt-1">Highest Enterprise Rank</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Audit Clearance</div>
          <div className="text-base font-bold text-slate-900 mt-1">5 of 5 Stages</div>
          <div className="text-xs text-emerald-600 mt-1">Zero Audit Discrepancies</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Certificate Serial</div>
          <div className="text-base font-bold text-slate-900 mt-1 font-mono text-xs">BR9842-2026-A1</div>
          <div className="text-xs text-sky-600 mt-1">Decentralized Timestamp</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Standing Status</div>
          <div className="text-base font-bold text-slate-900 mt-1">In Good Standing</div>
          <div className="text-xs text-emerald-600 mt-1">Valid through Jan 2027</div>
        </div>
      </div>

      {/* SECTION 1: Verification Seal Card */}
      <div className="p-6 sm:p-8 bg-gradient-to-tr from-slate-900 via-sky-950 to-slate-900 text-white rounded-3xl shadow-sm relative overflow-hidden space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Cryptographically Signed Seal
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold mt-2 tracking-tight">
              Acme Industries — Certified Level 2 Master Brand
            </h2>
            <div className="text-xs text-slate-300 font-mono mt-1">
              Certificate Ref: {verificationData.certId}
            </div>
          </div>
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center">
            <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto" />
            <span className="text-[10px] font-bold text-emerald-300 uppercase block mt-1">Verified Entity</span>
          </div>
        </div>

        <div className="pt-2 border-t border-white/10 text-xs text-slate-400 font-mono flex flex-wrap items-center justify-between gap-2">
          <span>Digital Ledger Hash: {verificationData.digitalSealHash}</span>
          <span className="text-slate-300">Audited: {verificationData.verifiedDate}</span>
        </div>
      </div>

      {/* SECTION 2: 5-Stage Verification Pipeline */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-600" />
            <span>Multi-Stage Regulatory Verification Audit Trail</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">All 5 mandatory verification checkpoints independently validated by legal and regulatory registrars.</p>
        </div>

        <div className="space-y-3">
          {auditSteps.map((step, idx) => (
            <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    ✓
                  </span>
                  <span className="font-bold text-sm text-slate-900">{step.title}</span>
                </div>
                <div className="text-xs text-slate-600 pl-7">{step.details}</div>
                <div className="text-[11px] text-slate-400 pl-7">{step.agency} • Audited: {step.date}</div>
              </div>

              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                {step.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: Public HTML Embed Code */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <QrCode className="w-4 h-4 text-sky-600" />
              <span>Public Verification Embed Snippet</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Display the verified brand badge on your public website and e-commerce checkouts.</p>
          </div>
          <button
            type="button"
            onClick={handleCopyBadge}
            className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copy Snippet</span>
          </button>
        </div>

        <textarea
          readOnly
          rows={2}
          value={embedSnippet}
          className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-mono text-slate-700 select-all"
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-2">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white rounded-xl font-semibold text-sm shadow-md transition flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Save Verification Record</span>
        </button>
      </div>
    </div>
  );
}
