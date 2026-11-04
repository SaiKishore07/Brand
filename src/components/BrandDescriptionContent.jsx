import React, { useState } from 'react';
import {
  FileText,
  Sparkles,
  Compass,
  Target,
  Heart,
  Award,
  CheckCircle2,
  Copy,
  Save,
  Check,
  AlertCircle,
  CheckCheck,
  Layers,
  Quote,
  Zap,
  Clock
} from 'lucide-react';

export default function BrandDescriptionContent() {
  const [isSaved, setIsSaved] = useState(false);
  const [copiedBoilerplate, setCopiedBoilerplate] = useState(false);

  const [formData, setFormData] = useState({
    // Short Pitch
    shortDescription: 'Acme Industries is a global pioneer in advanced industrial automation, precision engineering components, and smart telemetry solutions. Engineered for mission-critical supply chains, Acme powers industrial manufacturing across 28 countries with verifiable quality and ISO 9001 certification.',

    // Full Long Narrative
    longDescription: `Founded on the principles of mechanical excellence and uncompromising industrial reliability, Acme Industries has evolved into a global benchmark for precision engineering and next-generation smart manufacturing. 

Our comprehensive portfolio spans high-performance robotics components, industrial sensor suites, and automated telemetry hardware designed to withstand the world's most demanding operational environments. Headquartered in Hyderabad with advanced manufacturing centers in Germany and Singapore, Acme bridges foundational engineering rigor with real-time digital intelligence.

Every Acme component is manufactured to micro-tolerance specifications, cryptographically cataloged, and backed by a comprehensive global distribution network. We partner with tier-1 automotive manufacturers, aerospace developers, and renewable energy grids to ensure continuous uptime and resilient supply chain performance.`,

    // Mission, Vision, Purpose
    mission: 'To accelerate global industrial efficiency through uncompromising engineering precision, zero-defect manufacturing, and sustainable automation.',
    vision: 'To be the foundational benchmark for smart industrial infrastructure and resilient global supply chains by 2030.',
    corePurpose: 'Empowering engineers and industrial manufacturers with precision-grade components they can depend on without fail.',

    // Standard PR Boilerplate
    boilerplate: 'About Acme Industries: Acme Industries is a multinational leader in industrial automation, telemetry systems, and precision mechanical engineering. With active operations across 28 countries, Acme provides certified components and IoT-enabled infrastructure to aerospace, automotive, and renewable energy enterprises worldwide. For more information, visit https://www.acme-industries.com.',

    // Primary Value Propositions
    usp1: 'ISO 9001:2015, CE & AS9100D Certified Manufacturing Facilities',
    usp2: 'Proprietary IoT Telemetry embedded directly into mechanical componentry',
    usp3: 'Global 48-Hour critical spare dispatch guarantee across all operating territories',
    usp4: '100% cryptographically audited and counterfeit-resistant batch tracking'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setIsSaved(false);
  };

  const handleCopyBoilerplate = () => {
    navigator.clipboard.writeText(formData.boilerplate);
    setCopiedBoilerplate(true);
    setTimeout(() => setCopiedBoilerplate(false), 2000);
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
            Brand Description &amp; Narrative
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Standardized brand story, elevator pitch, mission, vision, core values, and public press boilerplate copy.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Approved for Public Distribution
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
          <div className="text-xs font-bold text-slate-400 uppercase">Short Pitch</div>
          <div className="text-base font-bold text-slate-900 mt-1">42 Words</div>
          <div className="text-xs text-sky-600 mt-1">Optimized for Meta &amp; Catalogs</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Brand Narrative</div>
          <div className="text-base font-bold text-slate-900 mt-1">168 Words</div>
          <div className="text-xs text-emerald-600 mt-1">Corporate Profile Ready</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Press Boilerplate</div>
          <div className="text-base font-bold text-slate-900 mt-1">64 Words</div>
          <div className="text-xs text-indigo-600 mt-1">Approved for Media Releases</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Core Values</div>
          <div className="text-base font-bold text-slate-900 mt-1">4 Pillars</div>
          <div className="text-xs text-emerald-600 mt-1">Enterprise Standard</div>
        </div>
      </div>

      {/* Main Content Form */}
      <form onSubmit={handleSave} className="space-y-6">

        {/* SECTION 1: Short Pitch & Executive Summary */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>Short Brand Description / Elevator Pitch</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Used for marketplace partner profiles, search engine snippets, and retail catalog headers (under 100 words).</p>
            </div>
            <span className="text-xs font-mono text-slate-400 font-medium">
              {formData.shortDescription.length} characters
            </span>
          </div>

          <div>
            <textarea
              name="shortDescription"
              rows={3}
              value={formData.shortDescription}
              onChange={handleChange}
              className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 leading-relaxed focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition resize-none"
            />
          </div>
        </div>

        {/* SECTION 2: Full Brand Narrative & Heritage Story */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-sky-600" />
                <span>Comprehensive Long Brand Narrative</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">The complete brand backstory, technological heritage, manufacturing footprint, and market problem solved.</p>
            </div>
            <span className="text-xs font-mono text-slate-400 font-medium">
              {formData.longDescription.split(/\s+/).filter(Boolean).length} words
            </span>
          </div>

          <div>
            <textarea
              name="longDescription"
              rows={8}
              value={formData.longDescription}
              onChange={handleChange}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 leading-relaxed focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
            />
          </div>
        </div>

        {/* SECTION 3: Mission, Vision & Core Purpose Statements */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-4 h-4 text-sky-600" />
              <span>Mission, Vision &amp; Purpose Framework</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Foundational corporate philosophy guiding partner onboarding and corporate governance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Mission */}
            <div className="p-5 bg-slate-50/80 border border-slate-200 rounded-2xl flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider mb-2">
                  <Target className="w-4 h-4" />
                  <span>Mission Statement</span>
                </div>
                <textarea
                  name="mission"
                  rows={4}
                  value={formData.mission}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-800 leading-relaxed focus:border-sky-500 focus:ring-1 focus:ring-sky-200 transition resize-none font-medium"
                />
              </div>
              <div className="text-[11px] text-slate-400">What we do every day for our customers.</div>
            </div>

            {/* Vision */}
            <div className="p-5 bg-slate-50/80 border border-slate-200 rounded-2xl flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Vision Statement</span>
                </div>
                <textarea
                  name="vision"
                  rows={4}
                  value={formData.vision}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-800 leading-relaxed focus:border-sky-500 focus:ring-1 focus:ring-sky-200 transition resize-none font-medium"
                />
              </div>
              <div className="text-[11px] text-slate-400">Where we will lead the industry by 2030.</div>
            </div>

            {/* Core Purpose */}
            <div className="p-5 bg-slate-50/80 border border-slate-200 rounded-2xl flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                  <Heart className="w-4 h-4" />
                  <span>Core Purpose</span>
                </div>
                <textarea
                  name="corePurpose"
                  rows={4}
                  value={formData.corePurpose}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-800 leading-relaxed focus:border-sky-500 focus:ring-1 focus:ring-sky-200 transition resize-none font-medium"
                />
              </div>
              <div className="text-[11px] text-slate-400">Why Acme exists in the global ecosystem.</div>
            </div>
          </div>
        </div>

        {/* SECTION 4: Core Brand Values & Cultural Pillars */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Layers className="w-4 h-4 text-sky-600" />
            <span>Core Values &amp; Operational Pillars</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5">
              <div className="text-xs font-bold text-slate-400 uppercase">Pillar 01</div>
              <div className="text-base font-bold text-slate-900">Uncompromising Precision</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero-tolerance engineering standards with 100% digital optical audit on every production batch.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5">
              <div className="text-xs font-bold text-slate-400 uppercase">Pillar 02</div>
              <div className="text-base font-bold text-slate-900">Sustainable Manufacturing</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Circular metallurgical recycling and 40% renewable energy reliance in all global fabrication hubs.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5">
              <div className="text-xs font-bold text-slate-400 uppercase">Pillar 03</div>
              <div className="text-base font-bold text-slate-900">Verified Integrity</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full transparency across supply chains with cryptographically signed certificates of conformance.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5">
              <div className="text-xs font-bold text-slate-400 uppercase">Pillar 04</div>
              <div className="text-base font-bold text-slate-900">Mission-Critical Uptime</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Engineered for continuous 24/7/365 harsh-environment duty cycles without degradation.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5: Official Press Release Boilerplate */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Quote className="w-4 h-4 text-sky-600" />
                <span>Standard Press Release Boilerplate (About Acme)</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Mandatory copy required at the footer of official corporate releases and financial disclosures.</p>
            </div>
            <button
              type="button"
              onClick={handleCopyBoilerplate}
              className="px-3.5 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition"
            >
              {copiedBoilerplate ? <CheckCheck className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedBoilerplate ? 'Copied to Clipboard!' : 'Copy Boilerplate'}</span>
            </button>
          </div>

          <div>
            <textarea
              name="boilerplate"
              rows={3}
              value={formData.boilerplate}
              onChange={handleChange}
              className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 leading-relaxed focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition font-mono resize-none"
            />
          </div>
        </div>

        {/* SECTION 6: Key Unique Value Propositions (USPs) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-5">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Zap className="w-4 h-4 text-sky-600" />
            <span>Key Differentiators &amp; Value Propositions (USPs)</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <input
                type="text"
                name="usp1"
                value={formData.usp1}
                onChange={handleChange}
                className="w-full bg-transparent border-none text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none"
              />
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <input
                type="text"
                name="usp2"
                value={formData.usp2}
                onChange={handleChange}
                className="w-full bg-transparent border-none text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none"
              />
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <input
                type="text"
                name="usp3"
                value={formData.usp3}
                onChange={handleChange}
                className="w-full bg-transparent border-none text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none"
              />
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <input
                type="text"
                name="usp4"
                value={formData.usp4}
                onChange={handleChange}
                className="w-full bg-transparent border-none text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none"
              />
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
            <span>Save Brand Description</span>
          </button>
        </div>

      </form>
    </div>
  );
}
