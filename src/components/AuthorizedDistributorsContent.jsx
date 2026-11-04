import React, { useState } from 'react';
import {
  Truck,
  ShieldCheck,
  CheckCircle2,
  Save,
  Check,
  Globe,
  Award,
  ExternalLink,
  MapPin,
  FileCheck2,
  AlertCircle
} from 'lucide-react';

export default function AuthorizedDistributorsContent() {
  const [isSaved, setIsSaved] = useState(false);

  const [distributors] = useState([
    {
      name: 'W.W. Grainger, Inc.',
      tier: 'Tier 1 Master Wholesale Distributor',
      territory: 'United States & Canada',
      agreementRef: 'DIST-GRAINGER-NA-2024-01',
      coverage: '380+ Regional Branch Depots & Next-Day Industrial Fulfillment',
      annualQuota: '$18.5 Million Commitment',
      status: 'Active Certified',
      certExpiry: '31 Dec 2027'
    },
    {
      name: 'RS Group plc (RS Components)',
      tier: 'Authorized Pan-European High-Service Distributor',
      territory: 'United Kingdom, Germany, France & Benelux',
      agreementRef: 'DIST-RS-EU-2023-18',
      coverage: 'Centralized distribution hubs in Corby (UK) & Bad Hersfeld (DE)',
      annualQuota: '€12.0 Million Commitment',
      status: 'Active Certified',
      certExpiry: '30 Jun 2026'
    },
    {
      name: 'Misumi Group Inc.',
      tier: 'Precision Components Factory Automation Partner',
      territory: 'Japan, South Korea, Taiwan & Singapore',
      agreementRef: 'DIST-MISUMI-APAC-2024-44',
      coverage: 'Same-day CAD-to-shipment integration for Acme precision dies & actuators',
      annualQuota: '$14.2 Million Commitment',
      status: 'Active Certified',
      certExpiry: '15 Oct 2027'
    },
    {
      name: 'Al-Futtaim Engineering & Technologies',
      tier: 'Exclusive Project & Energy Sector Distributor',
      territory: 'United Arab Emirates, Saudi Arabia & Qatar',
      agreementRef: 'DIST-ALFUTTAIM-ME-2023-09',
      coverage: 'Direct supply to regional oil & gas, desalination and civil infrastructure projects',
      annualQuota: '$8.5 Million Commitment',
      status: 'Active Certified',
      certExpiry: '31 Dec 2026'
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
            <span>Authorized Distributors &amp; Resellers</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              4 Master Networks
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Certified global commercial distributors, exclusive territory charters, minimum sales quotas, and anti-counterfeit stock audits.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            100% Genuine Certified Stock
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
                <span>Distributors Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Distributors</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Master Distributors</div>
          <div className="text-base font-bold text-slate-900 mt-1">4 Global Leaders</div>
          <div className="text-xs text-sky-600 mt-1">Grainger, RS, Misumi</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Territory Reach</div>
          <div className="text-base font-bold text-slate-900 mt-1">Global Coverage</div>
          <div className="text-xs text-emerald-600 mt-1">NA, Europe, APAC, MEA</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Contracted Quota</div>
          <div className="text-base font-bold text-slate-900 mt-1">$53.2M Annual</div>
          <div className="text-xs text-indigo-600 mt-1">100% Minimum Quota Met</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Authenticity Tracking</div>
          <div className="text-base font-bold text-slate-900 mt-1">Cryptographic</div>
          <div className="text-xs text-emerald-600 mt-1">Counterfeit Resistant</div>
        </div>
      </div>

      {/* Distributors Directory */}
      <div className="space-y-4">
        {distributors.map((d, idx) => (
          <div
            key={idx}
            className="p-5 bg-white border border-slate-200 rounded-3xl shadow-2xs hover:border-sky-300 transition space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-extrabold text-base text-slate-900">{d.name}</h3>
                <div className="text-xs text-slate-500 mt-0.5">{d.tier}</div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                {d.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600">
              <div>
                <span className="text-slate-400 block text-[11px] uppercase font-bold">Assigned Territory</span>
                <span className="text-slate-900 font-bold">{d.territory}</span>
                <p className="text-slate-500 mt-0.5">{d.coverage}</p>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px] uppercase font-bold">Annual Minimum Quota &amp; Agreement</span>
                <span className="text-slate-800 font-semibold">{d.annualQuota}</span>
                <div className="font-mono text-sky-600 font-medium mt-0.5">Agreement: {d.agreementRef}</div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 text-[11px] text-slate-400">
              <span>Certificate Valid Through: <strong className="text-slate-700">{d.certExpiry}</strong></span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Authorized Brand Stockist
              </span>
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
          <span>Save Authorized Distributors</span>
        </button>
      </div>
    </div>
  );
}
