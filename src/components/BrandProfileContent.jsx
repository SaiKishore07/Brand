import React, { useState } from 'react';
import {
  Briefcase,
  Globe,
  Building,
  Award,
  CheckCircle2,
  ShieldCheck,
  Barcode,
  Tag,
  Layers,
  UploadCloud,
  ExternalLink,
  Save,
  Check,
  AlertCircle,
  Calendar,
  MapPin,
  Image as ImageIcon,
  Sparkles,
  TrendingUp,
  FileCheck
} from 'lucide-react';

export default function BrandProfileContent() {
  const [isSaved, setIsSaved] = useState(false);
  const [formData, setFormData] = useState({
    // Core Brand Identifiers
    brandName: 'Acme Industries',
    displayName: 'Acme',
    brandId: 'BR-9842',
    gs1Prefix: '089012345678',
    parentEntity: 'Acme Industries Holdings Ltd.',
    brandStatus: 'Active & Certified',

    // Positioning & Commercial Profile
    tagline: "Engineering Tomorrow's Industrial Standards",
    brandType: 'Corporate Master Brand',
    commercialStage: 'Established Global Enterprise',
    targetSegment: 'B2B Enterprise & Industrial Supply Chains',
    brandOriginCountry: 'India',
    launchYear: '1998',

    // Digital & Web Footprint
    officialWebsite: 'https://www.acme-industries.com',
    brandPortalUrl: 'acme.webuos.com',
    brandContactEmail: 'brand@acme-industries.com',

    // Markets & Territories
    primaryMarkets: 'Asia-Pacific, North America, European Union, Middle East',
    totalSkus: '1,420 Active Registered SKUs',
    trademarkClasses: 'Class 07 (Machines), Class 09 (Electronics), Class 42 (R&D)',
    brandIntegrityScore: '98.8% Compliance'
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
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
            2. BRAND INFORMATION
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Brand Profile
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Master corporate registry, commercial positioning, global trade prefixes, and market presence for Acme.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Active Brand Record
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

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Registry Status</div>
          <div className="text-base font-bold text-slate-900 mt-1 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span>Active Verified</span>
          </div>
          <div className="text-xs text-emerald-600 mt-1">ID: {formData.brandId}</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">GS1 Global Prefix</div>
          <div className="text-base font-bold text-slate-900 mt-1 font-mono">089012345</div>
          <div className="text-xs text-sky-600 mt-1">Licensed for Barcoding / GTIN</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Active Catalog</div>
          <div className="text-base font-bold text-slate-900 mt-1">1,420 SKUs</div>
          <div className="text-xs text-indigo-600 mt-1">Across 3 Trademark Classes</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Brand Integrity</div>
          <div className="text-base font-bold text-slate-900 mt-1">98.8%</div>
          <div className="text-xs text-emerald-600 mt-1">Zero Trademark Disputes</div>
        </div>
      </div>

      {/* Main Profile Form */}
      <form onSubmit={handleSave} className="space-y-6">

        {/* SECTION 1: Master Brand Identity & Logo Asset */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Briefcase className="w-4 h-4 text-sky-600" />
            <span>Master Brand Entity &amp; Logo Asset</span>
          </h2>

          {/* Logo & Commercial Name Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-4 border-b border-slate-100">
            <div className="relative group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-sky-600 to-sky-400 text-white flex items-center justify-center font-black text-3xl shadow-sm">
                W
              </div>
              <button
                type="button"
                onClick={() => alert('Brand logo upload dialog: Select a high-res SVG or PNG (min 512x512).')}
                className="absolute -bottom-1 -right-1 w-7 h-7 bg-white border border-slate-200 text-slate-700 hover:text-sky-600 rounded-full flex items-center justify-center shadow-xs transition"
                title="Update Brand Logo"
              >
                <UploadCloud className="w-3.5 h-3.5" />
              </button>
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span>{formData.brandName}</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 border border-sky-200">
                  DBA: {formData.displayName}
                </span>
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Parent Entity: {formData.parentEntity}</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[11px] font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md">
                  WEBUOS ID: {formData.brandId}
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                  Global Trademark Verified
                </span>
              </div>
            </div>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Official Brand Name</label>
              <input
                type="text"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Trade / DBA Display Name</label>
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Parent Corporate Entity</label>
              <input
                type="text"
                name="parentEntity"
                value={formData.parentEntity}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">GS1 Company Prefix (Barcode / UPC)</label>
              <div className="relative flex items-center">
                <Barcode className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  name="gs1Prefix"
                  value={formData.gs1Prefix}
                  onChange={handleChange}
                  className="w-full h-11 pl-10 pr-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 font-mono focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Brand Type / Architecture</label>
              <select
                name="brandType"
                value={formData.brandType}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              >
                <option value="Corporate Master Brand">Corporate Master Brand</option>
                <option value="Product Line Brand">Product Line Brand</option>
                <option value="Umbrella Brand">Umbrella Brand</option>
                <option value="Licensed Sub-Brand">Licensed Sub-Brand</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Commercial Lifecycle Stage</label>
              <select
                name="commercialStage"
                value={formData.commercialStage}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              >
                <option value="Established Global Enterprise">Established Global Enterprise</option>
                <option value="High-Growth / Scaling Brand">High-Growth / Scaling Brand</option>
                <option value="Emerging Direct-to-Consumer (D2C)">Emerging Direct-to-Consumer (D2C)</option>
                <option value="Mature Industrial Legacy">Mature Industrial Legacy</option>
              </select>
            </div>
          </div>
        </div>

        {/* SECTION 2: Brand Tagline & Commercial Positioning */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>Brand Positioning &amp; Commercial Scope</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Brand Slogan / Tagline</label>
              <input
                type="text"
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 font-medium focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Target Market Segment</label>
              <input
                type="text"
                name="targetSegment"
                value={formData.targetSegment}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Year of First Commercial Use</label>
              <div className="relative flex items-center">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  name="launchYear"
                  value={formData.launchYear}
                  onChange={handleChange}
                  className="w-full h-11 pl-10 pr-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 font-mono focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Country of Brand Origin</label>
              <div className="relative flex items-center">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  name="brandOriginCountry"
                  value={formData.brandOriginCountry}
                  onChange={handleChange}
                  className="w-full h-11 pl-10 pr-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Active Trademark Classes (Nice Classification)</label>
              <input
                type="text"
                name="trademarkClasses"
                value={formData.trademarkClasses}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 font-mono focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>
          </div>
        </div>

        {/* SECTION 3: Official Digital & Web Presence */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Globe className="w-4 h-4 text-sky-600" />
            <span>Digital Brand Footprint &amp; Portal Addressing</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Primary Brand Website</label>
              <div className="relative flex items-center">
                <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="url"
                  name="officialWebsite"
                  value={formData.officialWebsite}
                  onChange={handleChange}
                  className="w-full h-11 pl-10 pr-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">WEBUOS Brand Subdomain</label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  name="brandPortalUrl"
                  value={formData.brandPortalUrl}
                  onChange={handleChange}
                  className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 font-mono focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Official Brand Inquiries Alias</label>
              <input
                type="email"
                name="brandContactEmail"
                value={formData.brandContactEmail}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Active Regional Operating Territories</label>
              <input
                type="text"
                name="primaryMarkets"
                value={formData.primaryMarkets}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>
          </div>
        </div>

        {/* SECTION 4: Brand Governance & Catalog Metrics */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <FileCheck className="w-4 h-4 text-sky-600" />
            <span>Catalog Governance &amp; Brand Registry Verification</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="text-slate-400 font-bold uppercase">Authorized Product Lines</div>
              <div className="text-sm font-bold text-slate-900 mt-1">1,420 Active SKUs</div>
              <div className="text-emerald-600 mt-1">● Synced with Global GS1 Registry</div>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="text-slate-400 font-bold uppercase">Distributor Network</div>
              <div className="text-sm font-bold text-slate-900 mt-1">14 Authorized Partners</div>
              <div className="text-sky-600 mt-1">● Active Distribution Agreements</div>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="text-slate-400 font-bold uppercase">Counterfeit Protection</div>
              <div className="text-sm font-bold text-emerald-700 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 98.8% Integrity Score
              </div>
              <div className="text-slate-400 mt-1">Zero Trademark Infringements</div>
            </div>
          </div>
        </div>

        {/* Bottom Save Action */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white rounded-xl font-semibold text-sm shadow-md transition flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Brand Profile</span>
          </button>
        </div>

      </form>
    </div>
  );
}
