import React, { useState } from 'react';
import {
  Bell,
  ShieldCheck,
  CheckCircle2,
  Save,
  Check,
  AlertTriangle,
  FileCheck2,
  Mail,
  Smartphone,
  Webhook,
  Clock,
  Trash2
} from 'lucide-react';

export default function NotificationsContent() {
  const [isSaved, setIsSaved] = useState(false);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Annual Trademark Watch Alert: Conflicting Mark Detected',
      time: '2 hours ago',
      category: 'Intellectual Property',
      priority: 'High Priority',
      priorityColor: 'bg-red-50 text-red-700 border-red-200',
      description: 'The global trademark watch bot flagged an application for "ACME-FLOW" in Class 07 in Brazil. Legal counsel review recommended.',
      unread: true
    },
    {
      id: 2,
      title: 'Regulatory Consent Expiring in 90 Days',
      time: '1 day ago',
      category: 'Compliance & Licenses',
      priority: 'Action Required',
      priorityColor: 'bg-amber-50 text-amber-700 border-amber-200',
      description: 'Telangana State Pollution Control Board Consent to Operate (CTO) enters renewal window on 30 March 2026.',
      unread: true
    },
    {
      id: 3,
      title: 'Authorized Distributor Audit Complete: Grainger NA',
      time: '3 days ago',
      category: 'Business Network',
      priority: 'Verified',
      priorityColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'W.W. Grainger, Inc. annual anti-counterfeit stock verification completed. Certificate renewed through 2027.',
      unread: true
    }
  ]);

  const [preferences, setPreferences] = useState({
    securityEmail: true,
    securitySms: true,
    trademarkAlerts: true,
    documentExpiry: true,
    orderRouting: false,
    webhookIntegration: true
  });

  const togglePref = (key) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    setIsSaved(false);
  };

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
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
            <span>Notification Center &amp; Alerts</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
              3 New Unread
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Real-time regulatory alerts, trademark watch notifications, distributor audit updates, and dispatch preferences.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={markAllRead}
            className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition shadow-2xs"
          >
            Mark All as Read
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
                <span>Preferences Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Preferences</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Unread Alerts</div>
          <div className="text-base font-bold text-slate-900 mt-1">3 Pending</div>
          <div className="text-xs text-rose-600 mt-1">1 Critical IP Watch</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">SMS Alert Gateway</div>
          <div className="text-base font-bold text-slate-900 mt-1">Active (ACMEIN)</div>
          <div className="text-xs text-emerald-600 mt-1">Tier-1 DLT Registered</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Audit Webhook</div>
          <div className="text-base font-bold text-slate-900 mt-1">Connected</div>
          <div className="text-xs text-indigo-600 mt-1">Enterprise Slack &amp; SIEM</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Digest Cadence</div>
          <div className="text-base font-bold text-slate-900 mt-1">Daily Briefing</div>
          <div className="text-xs text-emerald-600 mt-1">Delivered at 08:00 IST</div>
        </div>
      </div>

      {/* Unread Alerts Feed */}
      <div className="space-y-3">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`p-5 bg-white border rounded-3xl transition space-y-2 ${
              n.unread ? 'border-sky-300 shadow-xs' : 'border-slate-200'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                {n.unread && <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />}
                <h3 className="font-bold text-sm text-slate-900">{n.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${n.priorityColor}`}>
                  {n.priority}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">{n.time}</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">{n.description}</p>
            <div className="text-[11px] text-slate-400 font-medium pt-1 border-t border-slate-100">
              Category: <strong className="text-slate-700">{n.category}</strong>
            </div>
          </div>
        ))}
      </div>

      {/* Notification Dispatch Preferences */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-5">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Bell className="w-4 h-4 text-sky-600" />
            <span>Notification Dispatch Channels &amp; Preferences</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">Configure how your brand custodians receive alerts for security, legal, and operational events.</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
            <div>
              <div className="font-bold text-xs text-slate-900">Critical Security &amp; Authorization Alerts</div>
              <div className="text-[11px] text-slate-500">Immediate email and SMS dispatch when signing tokens or board changes occur.</div>
            </div>
            <input
              type="checkbox"
              checked={preferences.securityEmail}
              onChange={() => togglePref('securityEmail')}
              className="w-4 h-4 text-sky-600 rounded"
            />
          </div>

          <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
            <div>
              <div className="font-bold text-xs text-slate-900">Trademark Watch Notices (WIPO &amp; USPTO)</div>
              <div className="text-[11px] text-slate-500">Weekly bulletin of conflicting commercial trademark filings across 120+ jurisdictions.</div>
            </div>
            <input
              type="checkbox"
              checked={preferences.trademarkAlerts}
              onChange={() => togglePref('trademarkAlerts')}
              className="w-4 h-4 text-sky-600 rounded"
            />
          </div>

          <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
            <div>
              <div className="font-bold text-xs text-slate-900">Regulatory &amp; License Expiration Alerts</div>
              <div className="text-[11px] text-slate-500">Advance notices dispatched 90, 60, and 30 days prior to license renewals.</div>
            </div>
            <input
              type="checkbox"
              checked={preferences.documentExpiry}
              onChange={() => togglePref('documentExpiry')}
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
          <span>Save Notification Settings</span>
        </button>
      </div>
    </div>
  );
}
