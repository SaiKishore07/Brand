import React, { useState } from 'react';
import {
  Lock,
  ShieldCheck,
  CheckCircle2,
  Save,
  Check,
  Eye,
  EyeOff,
  KeyRound,
  FileText,
  Server,
  Fingerprint
} from 'lucide-react';

export default function PrivacySettingsContent() {
  const [isSaved, setIsSaved] = useState(false);

  const [settings, setSettings] = useState({
    publicRegistryVisibility: 'Full Verified Public Profile',
    redactUboFromPublic: true,
    dpdpCompliance: true,
    gdprTransferSafeguard: true,
    b2bDataSharing: true,
    hardwareKeyEnforcement: true,
    dataRetentionYears: '7 Years (Regulatory Requirement)',
    dataCenterLocation: 'India (MeitY Empanelled Cloud, Hyderabad)'
  });

  const toggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
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
            6. ACCOUNT SETTINGS
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span>Privacy &amp; Data Governance Settings</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              DPDP &amp; GDPR Active
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Public directory visibility rules, beneficial ownership redaction, third-party data sharing consents, and encryption keys.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            ISO 27001 Certified
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
                <span>Privacy Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Privacy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Public Directory</div>
          <div className="text-base font-bold text-slate-900 mt-1">Verified Listing</div>
          <div className="text-xs text-sky-600 mt-1">Registry Profile Visible</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">UBO Privacy</div>
          <div className="text-base font-bold text-slate-900 mt-1">Redacted</div>
          <div className="text-xs text-emerald-600 mt-1">Regulators Only</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Data Localization</div>
          <div className="text-base font-bold text-slate-900 mt-1">India Domestic</div>
          <div className="text-xs text-indigo-600 mt-1">MeitY Cloud Sovereign</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Encryption Tier</div>
          <div className="text-base font-bold text-slate-900 mt-1">AES-256 GCM</div>
          <div className="text-xs text-emerald-600 mt-1">Zero-Knowledge Keys</div>
        </div>
      </div>

      {/* Privacy Configuration Cards */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <Lock className="w-4 h-4 text-sky-600" />
          <span>Data Governance &amp; Registry Sharing Policies</span>
        </h2>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <div>
              <div className="font-bold text-xs text-slate-900">Redact Ultimate Beneficial Owner (UBO) from Public Index</div>
              <div className="text-[11px] text-slate-500">Sensitive personal details of shareholders are hidden from public view and only accessible to accredited regulators.</div>
            </div>
            <input
              type="checkbox"
              checked={settings.redactUboFromPublic}
              onChange={() => toggle('redactUboFromPublic')}
              className="w-4 h-4 text-sky-600 rounded"
            />
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <div>
              <div className="font-bold text-xs text-slate-900">Digital Personal Data Protection (DPDP) Act 2023 Compliance</div>
              <div className="text-[11px] text-slate-500">Automatic consent logging and data fiduciary protections applied to all brand contact personnel.</div>
            </div>
            <input
              type="checkbox"
              checked={settings.dpdpCompliance}
              onChange={() => toggle('dpdpCompliance')}
              className="w-4 h-4 text-sky-600 rounded"
            />
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <div>
              <div className="font-bold text-xs text-slate-900">Enforce FIDO2 / YubiKey Hardware Security Keys for Administrators</div>
              <div className="text-[11px] text-slate-500">Master brand administrators must authenticate using a certified physical hardware token.</div>
            </div>
            <input
              type="checkbox"
              checked={settings.hardwareKeyEnforcement}
              onChange={() => toggle('hardwareKeyEnforcement')}
              className="w-4 h-4 text-sky-600 rounded"
            />
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <div>
              <div className="font-bold text-xs text-slate-900">Automated B2B Partner Data Sync (SAP Ariba, WEBUOS)</div>
              <div className="text-[11px] text-slate-500">Permit verified e-procurement networks to pull updated catalog pricing and compliance certificates.</div>
            </div>
            <input
              type="checkbox"
              checked={settings.b2bDataSharing}
              onChange={() => toggle('b2bDataSharing')}
              className="w-4 h-4 text-sky-600 rounded"
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
          <span>Save Privacy Policies</span>
        </button>
      </div>
    </div>
  );
}

