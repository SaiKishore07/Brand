import React, { useState } from 'react';
import {
  Settings,
  ShieldCheck,
  CheckCircle2,
  Save,
  Check,
  Key,
  Globe,
  Clock,
  Coins,
  AlertTriangle,
  RefreshCw,
  LogOut,
  Building
} from 'lucide-react';

export default function AccountSettingsContent() {
  const [isSaved, setIsSaved] = useState(false);

  const [formData, setFormData] = useState({
    brandId: 'BR-9842',
    accountTier: 'Enterprise Platinum Master Suite',
    workspaceDomain: 'acme.webuos.com',
    primaryAdminEmail: 'admin@acme-industries.com',
    defaultCurrency: 'INR (₹) — Indian Rupee',
    timezone: 'Asia/Kolkata (IST, UTC+5:30)',
    sessionTimeout: '15 Minutes',
    ssoProvider: 'SAML 2.0 (Okta Enterprise Identity)',
    auditLogRetention: '7 Years (Regulatory Statutory Retention)',
    apiRateLimit: '50,000 Requests / Hour'
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
            6. ACCOUNT SETTINGS
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span>Brand Account &amp; Workspace Configuration</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
              BR-9842
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage enterprise workspace parameters, default operational currency, single sign-on (SSO), and session security.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            Enterprise SSO Active
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
                <span>Settings Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Settings</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Account Plan</div>
          <div className="text-base font-bold text-slate-900 mt-1">Platinum Suite</div>
          <div className="text-xs text-sky-600 mt-1">Dedicated Tenant</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Brand ID</div>
          <div className="text-base font-bold text-slate-900 mt-1 font-mono">BR-9842</div>
          <div className="text-xs text-emerald-600 mt-1">Verified Entity</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">SSO Protocol</div>
          <div className="text-base font-bold text-slate-900 mt-1">SAML 2.0</div>
          <div className="text-xs text-indigo-600 mt-1">Okta Directory Linked</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Audit Log Window</div>
          <div className="text-base font-bold text-slate-900 mt-1">7 Years WORM</div>
          <div className="text-xs text-emerald-600 mt-1">Tamper-Proof Archive</div>
        </div>
      </div>

      {/* Main Form */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <Settings className="w-4 h-4 text-sky-600" />
          <span>Core Operational Parameters</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Brand Entity ID (Immutable)</label>
            <input
              type="text"
              readOnly
              value={formData.brandId}
              className="w-full h-11 px-3.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-700 font-mono text-xs font-bold cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Workspace Subdomain URL</label>
            <input
              type="text"
              name="workspaceDomain"
              value={formData.workspaceDomain}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Primary Administrative Contact Email</label>
            <input
              type="email"
              name="primaryAdminEmail"
              value={formData.primaryAdminEmail}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Default Operational Currency</label>
            <input
              type="text"
              name="defaultCurrency"
              value={formData.defaultCurrency}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">System Timezone</label>
            <input
              type="text"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Session Inactivity Timeout</label>
            <input
              type="text"
              name="sessionTimeout"
              value={formData.sessionTimeout}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-rose-50/60 border border-rose-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-rose-700">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <h2 className="text-base font-bold">Privileged Administrative Operations</h2>
        </div>
        <p className="text-xs text-rose-800 leading-relaxed">
          Transferring brand ownership or deactivating the brand workspace requires multi-party authorization from two registered board custodians with Class 3 Digital Signature tokens.
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => alert('Transfer Brand Custodianship protocol initiated. Multi-sig signoff required.')}
            className="px-4 py-2 bg-white hover:bg-rose-100 text-rose-700 border border-rose-300 rounded-xl text-xs font-bold transition shadow-2xs"
          >
            Initiate Custodianship Transfer
          </button>
          <button
            type="button"
            onClick={() => alert('Workspace deactivation request logged for board review.')}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition shadow-xs"
          >
            Request Workspace Deactivation
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-2">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white rounded-xl font-semibold text-sm shadow-md transition flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Save Account Settings</span>
        </button>
      </div>
    </div>
  );
}

