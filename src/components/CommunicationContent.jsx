import React, { useState } from 'react';
import {
  Mail,
  Phone,
  ShieldCheck,
  Globe,
  CheckCircle2,
  AlertCircle,
  Save,
  Check,
  Send,
  MessageSquare,
  Lock,
  Headphones,
  Radio,
  Clock,
  Sparkles,
  ExternalLink,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

export default function CommunicationContent() {
  const [isSaved, setIsSaved] = useState(false);
  const [formData, setFormData] = useState({
    // Official Email Inboxes
    generalEmail: 'contact@acme-industries.com',
    legalEmail: 'ip-compliance@acme-industries.com',
    pressEmail: 'media@acme-industries.com',
    supportEmail: 'support@acme-industries.com',
    investorEmail: 'ir@acme-industries.com',

    // Voice & Telecom
    tollFreePhone: '+1 (800) 555-ACME',
    directOfficePhone: '+91 40 4567 8900',
    grievancePhone: '+91 40 4567 8901',
    smsSenderId: 'ACMEIN',

    // Support SLA & Hours
    operatingHours: 'Monday - Friday (09:00 - 18:00 IST)',
    supportLanguages: 'English, Hindi, Spanish, German',
    firstResponseSla: 'Under 2 hours for Legal & Trademark / 24 hrs General',

    // Emergency Crisis
    crisisContactName: 'Acme Brand Security Team',
    crisisPhone: '+91 98765 43299',
    crisisEmail: 'security-escalations@acme-industries.com',

    // Notification Toggles
    notifyLegalAlerts: true,
    notifyDistributorInquiries: true,
    notifyTrademarkWatch: true,
    notifyWeeklyDigest: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setIsSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
            1. OVERVIEW &amp; IDENTITY
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Communication Channels &amp; Protocols
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage official brand inboxes, telephony lines, dispute escalation routing, and cryptographic email authentication.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Channels Verified
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
                <span>Changes Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Verification Status Overview Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase">
            <span>Email Authentication</span>
            <span className="text-emerald-600 text-xs font-bold">100% Enforced</span>
          </div>
          <div className="text-base font-bold text-slate-900 mt-1">DKIM, SPF &amp; DMARC</div>
          <div className="text-xs text-slate-500 mt-1">Acme brand emails protected from phishing</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase">
            <span>Primary Domain</span>
            <span className="text-sky-600 text-xs font-bold">Active MX</span>
          </div>
          <div className="text-base font-bold text-slate-900 mt-1">acme-industries.com</div>
          <div className="text-xs text-slate-500 mt-1">SSL/TLS 1.3 Certified &amp; Monitored</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase">
            <span>SMS Sender ID</span>
            <span className="text-emerald-600 text-xs font-bold">Telecom Approved</span>
          </div>
          <div className="text-base font-bold text-slate-900 mt-1 font-mono">ACMEIN</div>
          <div className="text-xs text-slate-500 mt-1">Authorized for Transactional Dispatches</div>
        </div>
      </div>

      {/* Main Form */}
      <form onSubmit={handleSave} className="space-y-6">

        {/* SECTION 1: Official Dedicated Inboxes */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Mail className="w-4 h-4 text-sky-600" />
              <span>Official Departmental Inboxes</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Public and regulatory inquiries sent to these verified addresses are logged in your WEBUOS compliance dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* General Corporate Inquiries */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">General Brand Contact</label>
                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verified
                </span>
              </div>
              <input
                type="email"
                name="generalEmail"
                value={formData.generalEmail}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            {/* Legal & Trademark Infringement Notice */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">IP &amp; Trademark Compliance</label>
                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Priority Inbound
                </span>
              </div>
              <input
                type="email"
                name="legalEmail"
                value={formData.legalEmail}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            {/* Press & Media */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Press &amp; Media Relations</label>
              <input
                type="email"
                name="pressEmail"
                value={formData.pressEmail}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            {/* Customer Support */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Customer Support / Helpdesk</label>
              <input
                type="email"
                name="supportEmail"
                value={formData.supportEmail}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            {/* Investor Relations */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Investor Relations &amp; Financial Disclosures</label>
              <input
                type="email"
                name="investorEmail"
                value={formData.investorEmail}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: Official Telephony & SMS Sender IDs */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Phone className="w-4 h-4 text-sky-600" />
              <span>Official Telephony &amp; Telecom Sender IDs</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Voice channels and verified alphanumeric SMS headers for brand notifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Toll-Free Customer Hotline</label>
              <input
                type="text"
                name="tollFreePhone"
                value={formData.tollFreePhone}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 font-mono focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Direct Headquarters Switchboard</label>
              <input
                type="text"
                name="directOfficePhone"
                value={formData.directOfficePhone}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 font-mono focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Registered SMS Sender ID</label>
              <div className="relative flex items-center">
                <Radio className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  name="smsSenderId"
                  value={formData.smsSenderId}
                  onChange={handleChange}
                  className="w-full h-11 pl-10 pr-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 font-mono font-bold tracking-wider focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: Cryptographic Domain & Email Security (Anti-Spoofing) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-5">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Domain Authentication &amp; Anti-Spoofing Protocols</span>
            </h2>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
              Grade A+ Security
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>SPF (Sender Policy Framework)</span>
                </div>
                <div className="text-xs text-slate-500 font-mono mt-0.5">v=spf1 include:_spf.webuos.com ~all</div>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">Active</span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>DKIM 2048-bit Signature</span>
                </div>
                <div className="text-xs text-slate-500 font-mono mt-0.5">k=rsa; p=MIIBIjANBgkqhkiG9w0...</div>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">Verified</span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>DMARC Enforcement</span>
                </div>
                <div className="text-xs text-slate-500 font-mono mt-0.5">p=reject; sp=reject; pct=100</div>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">Enforced</span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>BIMI Brand Logo Indicator</span>
                </div>
                <div className="text-xs text-slate-500 font-mono mt-0.5">VMC Certificate Verified by Entrust</div>
              </div>
              <span className="text-xs font-bold text-sky-700 bg-sky-100/70 px-2 py-0.5 rounded">Published</span>
            </div>
          </div>
        </div>

        {/* SECTION 4: 24/7 Brand Protection & Crisis Escalation */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Radio className="w-4 h-4 text-rose-600" />
              <span>24/7 Emergency &amp; Brand Impersonation Crisis Desk</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Direct escalation channel for counterfeit products, domain hijacking, or executive impersonation alerts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Crisis Unit / Team Name</label>
              <input
                type="text"
                name="crisisContactName"
                value={formData.crisisContactName}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Immediate Priority Phone</label>
              <input
                type="text"
                name="crisisPhone"
                value={formData.crisisPhone}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 font-mono focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Direct Escalation Dispatch Email</label>
              <input
                type="email"
                name="crisisEmail"
                value={formData.crisisEmail}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>
          </div>
        </div>

        {/* SECTION 5: Support SLA & Response Protocols */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-600" />
              <span>Service Level Agreements (SLA) &amp; Operating Hours</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Official Working Window</label>
              <input
                type="text"
                name="operatingHours"
                value={formData.operatingHours}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Supported Communication Languages</label>
              <input
                type="text"
                name="supportLanguages"
                value={formData.supportLanguages}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Target Response Time SLA</label>
              <input
                type="text"
                name="firstResponseSla"
                value={formData.firstResponseSla}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>
          </div>
        </div>

        {/* SECTION 6: Inbound Notification Routing Preferences */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            Inbound Brand Notification Routing
          </h2>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100/70 rounded-2xl cursor-pointer transition">
              <div>
                <div className="text-sm font-semibold text-slate-900">Trademark &amp; Counterfeit Watch Alerts</div>
                <div className="text-xs text-slate-500">Instant notification when a similar mark or unauthorized distributor listing is detected.</div>
              </div>
              <input
                type="checkbox"
                name="notifyTrademarkWatch"
                checked={formData.notifyTrademarkWatch}
                onChange={handleChange}
                className="w-4 h-4 rounded text-sky-600 border-slate-300 focus:ring-sky-500"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100/70 rounded-2xl cursor-pointer transition">
              <div>
                <div className="text-sm font-semibold text-slate-900">Authorized Distributor &amp; Partner Requests</div>
                <div className="text-xs text-slate-500">Route retail and distribution inquiries directly to the commercial team.</div>
              </div>
              <input
                type="checkbox"
                name="notifyDistributorInquiries"
                checked={formData.notifyDistributorInquiries}
                onChange={handleChange}
                className="w-4 h-4 rounded text-sky-600 border-slate-300 focus:ring-sky-500"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100/70 rounded-2xl cursor-pointer transition">
              <div>
                <div className="text-sm font-semibold text-slate-900">Weekly Communication &amp; Dispute Summary Digest</div>
                <div className="text-xs text-slate-500">Receive weekly summaries of resolution metrics and communication volume.</div>
              </div>
              <input
                type="checkbox"
                name="notifyWeeklyDigest"
                checked={formData.notifyWeeklyDigest}
                onChange={handleChange}
                className="w-4 h-4 rounded text-sky-600 border-slate-300 focus:ring-sky-500"
              />
            </label>
          </div>
        </div>

        {/* Bottom Save Action */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white rounded-xl font-semibold text-sm shadow-md transition flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Communication Settings</span>
          </button>
        </div>

      </form>
    </div>
  );
}
