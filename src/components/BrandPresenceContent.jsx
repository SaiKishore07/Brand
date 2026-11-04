import React, { useState } from 'react';
import {
  Globe,
  MapPin,
  Building2,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Save,
  Check,
  Share2,
  Laptop,
  Store,
  Award,
  Sparkles,
  Radio,
  Plus,
  Trash2,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Server
} from 'lucide-react';

export default function BrandPresenceContent() {
  const [isSaved, setIsSaved] = useState(false);

  // Digital Web Properties
  const [domains, setDomains] = useState([
    {
      id: 1,
      name: 'Global Corporate Portal',
      url: 'https://www.acme-industries.com',
      region: 'Worldwide (Primary)',
      status: 'Primary Master',
      ssl: 'Valid (DigiCert EV)',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      id: 2,
      name: 'European Operations & Compliance Hub',
      url: 'https://eu.acme-industries.com',
      region: 'European Union (GDPR)',
      status: 'Active Regional',
      ssl: 'Valid (Let\'s Encrypt)',
      statusColor: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    {
      id: 3,
      name: 'India Domestic & SAARC Portal',
      url: 'https://in.acme-industries.com',
      region: 'India & South Asia',
      status: 'Active Regional',
      ssl: 'Valid (DigiCert)',
      statusColor: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    {
      id: 4,
      name: 'Smart Telemetry Cloud Platform',
      url: 'https://telemetry.acme-industries.com',
      region: 'Global SaaS Infrastructure',
      status: 'Cloud Platform',
      ssl: 'Valid (Cloudflare Wildcard)',
      statusColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    }
  ]);

  // Social & Public Handles
  const [socials, setSocials] = useState({
    linkedin: 'https://www.linkedin.com/company/acme-industries-global',
    youtube: 'https://www.youtube.com/@AcmeIndustriesOfficial',
    twitter: 'https://x.com/AcmeIndustriesHQ',
    github: 'https://github.com/acme-industries-telemetry',
    knowledgeGraph: 'kg:/m/09k39x (Google Verified Enterprise Panel)',
    brandRegistryId: 'AMZ-BR-9842-ACME'
  });

  // Operating Territories
  const [territories] = useState([
    { region: 'Asia-Pacific', countries: 'India, Singapore, Japan, South Korea, Australia', hubs: 'Hyderabad & Singapore', share: '44% Global Distribution' },
    { region: 'Europe & UK', countries: 'Germany, France, United Kingdom, Italy, Netherlands', hubs: 'Munich Technology Center', share: '32% Global Distribution' },
    { region: 'North America', countries: 'United States, Canada, Mexico', hubs: 'Chicago Logistics Depot', share: '18% Global Distribution' },
    { region: 'Middle East & Africa', countries: 'United Arab Emirates, Saudi Arabia, South Africa', hubs: 'Dubai Commercial Hub', share: '6% Global Distribution' }
  ]);

  // B2B Marketplaces
  const [marketplaces] = useState([
    {
      name: 'WEBUOS Enterprise Marketplace',
      sellerId: 'VENDOR-ACME-019',
      badge: 'Certified Master Brand',
      tier: 'Tier 1 Prime Supplier',
      rating: '4.98 / 5.0'
    },
    {
      name: 'SAP Ariba Network',
      sellerId: 'AN0148920482',
      badge: 'Gold Enterprise Partner',
      tier: 'Pre-Approved Supplier',
      rating: '99.4% Fulfillment'
    },
    {
      name: 'ThomasNet Industrial Network',
      sellerId: 'TN-9842-IND',
      badge: 'Verified Manufacturer',
      tier: 'OEM & Precision Dies',
      rating: 'Top Rated'
    },
    {
      name: 'Amazon Business Direct',
      sellerId: 'AB-ACME-CORP',
      badge: 'Brand Registry 2.0',
      tier: 'Direct Manufacturer Store',
      rating: '4.9 (1.2k+ reviews)'
    }
  ]);

  // Flagship Facilities
  const [facilities] = useState([
    {
      name: 'Global Corporate HQ & Demonstration Facility',
      type: 'Headquarters & R&D Campus',
      city: 'Hyderabad, Telangana, India',
      address: 'Plot 42, H-Tech Zone, Madhapur, Hyderabad 500081',
      capacity: '48,000 sq.ft facility • 450+ employees'
    },
    {
      name: 'European Precision Engineering Experience Center',
      type: 'Regional Technical Center',
      city: 'Munich, Bavaria, Germany',
      address: 'Industriestraße 18, 80339 München, Germany',
      capacity: '22,000 sq.ft precision testing laboratory'
    },
    {
      name: 'North American Logistics & Client Operations Hub',
      type: 'Distribution & Assembly Depot',
      city: 'Chicago, Illinois, USA',
      address: '7400 North Austin Ave, Skokie, IL 60077',
      capacity: '35,000 sq.ft automated warehousing facility'
    },
    {
      name: 'Southeast Asia Telemetry Hub',
      type: 'APAC Fulfillment Center',
      city: 'Tuas, West Region, Singapore',
      address: '15 Tuas South Link 1, Singapore 636904',
      capacity: '18,000 sq.ft high-speed maritime logistics center'
    }
  ]);

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setSocials(prev => ({ ...prev, [name]: value }));
    setIsSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
            2. BRAND INFORMATION
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span>Brand Presence &amp; Global Footprint</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Active in 28 Countries
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Standardized record of official web domains, verified social media handles, global operating regions, and physical customer tech centers.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
            <Radio className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
            Global CDN Synced
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
                <span>Presence Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Presence</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase">
            <span>Operating Territories</span>
            <Globe className="w-4 h-4 text-sky-600" />
          </div>
          <div className="text-base font-bold text-slate-900 mt-1">28 Countries</div>
          <div className="text-xs text-emerald-600 mt-1 font-medium">4 Continental Hubs</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase">
            <span>Verified Domains</span>
            <Laptop className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-base font-bold text-slate-900 mt-1">{domains.length} Properties</div>
          <div className="text-xs text-indigo-600 mt-1 font-medium">100% EV SSL Protected</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase">
            <span>B2B Marketplaces</span>
            <Store className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-base font-bold text-slate-900 mt-1">4 Direct Portals</div>
          <div className="text-xs text-emerald-600 mt-1 font-medium">Tier-1 Pre-Approved Supplier</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase">
            <span>Physical Facilities</span>
            <Building2 className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-base font-bold text-slate-900 mt-1">4 Tech Campuses</div>
          <div className="text-xs text-amber-600 mt-1 font-medium">123,000 sq.ft Total Space</div>
        </div>
      </div>

      {/* SECTION 1: Official Web Domains & Regional Subdomains */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-4 h-4 text-sky-600" />
              <span>Official Digital Domains &amp; Online Properties</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Authorized domain names recognized for customer orders, API integrations, and legal notices.
            </p>
          </div>
          <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-lg flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            DNSSEC Verified
          </span>
        </div>

        <div className="space-y-3">
          {domains.map((d) => (
            <div
              key={d.id}
              className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-wrap items-center justify-between gap-3 hover:bg-white hover:border-sky-300 transition"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="font-bold text-sm text-slate-900">{d.name}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${d.statusColor}`}>
                    {d.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-sky-600 font-semibold">
                  <a href={d.url} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    <span>{d.url}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-500">
                <div className="text-right">
                  <div className="font-medium text-slate-700">{d.region}</div>
                  <div className="text-[11px] text-emerald-600 font-medium">SSL: {d.ssl}</div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs" title="DNS Online" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: Geographic Footprint & Regional Markets */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-sky-600" />
            <span>Geographic Distribution &amp; Operational Territories</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Active sales regions, authorized distribution routes, and regional logistics hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {territories.map((t, idx) => (
            <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-sm text-slate-900">{t.region}</span>
                <span className="text-[11px] font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-md font-mono">
                  {t.share}
                </span>
              </div>
              <div className="text-xs text-slate-600">
                <strong className="text-slate-800">Key Countries:</strong> {t.countries}
              </div>
              <div className="pt-1 text-xs text-slate-500 flex items-center gap-1.5 border-t border-slate-200/60">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                <span>Operating Hub: <strong className="text-slate-700">{t.hubs}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: B2B Procurement Networks & Direct Marketplace Listings */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Store className="w-4 h-4 text-sky-600" />
              <span>B2B Marketplaces &amp; Authorized Procurement Networks</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Verified corporate vendor profiles enabled for automated purchasing and purchase order routing.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400 font-bold">4 Verified Networks</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {marketplaces.map((m, idx) => (
            <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-slate-900">{m.name}</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {m.badge}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span>Vendor ID: <code className="font-mono text-slate-700 font-bold">{m.sellerId}</code></span>
                <span className="font-semibold text-emerald-600">{m.rating}</span>
              </div>
              <div className="text-[11px] text-slate-400">{m.tier}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: Official Social Channels & Public Knowledge Graph */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Share2 className="w-4 h-4 text-sky-600" />
            <span>Official Social Channels &amp; Public Search Authority</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Public social communication channels protected under official trademark verification programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
              LinkedIn Official Organization Page
            </label>
            <input
              type="text"
              name="linkedin"
              value={socials.linkedin}
              onChange={handleSocialChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
              YouTube Corporate Channel (Technical Series)
            </label>
            <input
              type="text"
              name="youtube"
              value={socials.youtube}
              onChange={handleSocialChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
              X / Twitter Corporate Communications Desk
            </label>
            <input
              type="text"
              name="twitter"
              value={socials.twitter}
              onChange={handleSocialChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
              GitHub Developer &amp; Telemetry SDK Organization
            </label>
            <input
              type="text"
              name="github"
              value={socials.github}
              onChange={handleSocialChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
              Google Knowledge Graph Verified Entity ID
            </label>
            <input
              type="text"
              name="knowledgeGraph"
              value={socials.knowledgeGraph}
              onChange={handleSocialChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
              Amazon Brand Registry 2.0 Token ID
            </label>
            <input
              type="text"
              name="brandRegistryId"
              value={socials.brandRegistryId}
              onChange={handleSocialChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>
        </div>
      </div>

      {/* SECTION 5: Physical Experience Centers & Technology Hubs */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-5">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-sky-600" />
              <span>Physical Demonstration Centers &amp; Flagship Hubs</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Global campuses equipped for customer factory audits, technical briefings, and live product demos.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400 font-bold">4 Campuses</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {facilities.map((f, idx) => (
            <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-sm text-slate-900">{f.name}</span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-sky-100 text-sky-800 rounded">
                  {f.type}
                </span>
              </div>
              <div className="text-xs text-slate-600 font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                <span>{f.city}</span>
              </div>
              <div className="text-xs text-slate-500">{f.address}</div>
              <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-200/60">
                {f.capacity}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Save Action */}
      <div className="flex justify-end pt-2">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white rounded-xl font-semibold text-sm shadow-md transition flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Save Brand Presence</span>
        </button>
      </div>
    </div>
  );
}

