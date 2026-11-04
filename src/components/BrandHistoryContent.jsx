import React, { useState } from 'react';
import {
  History,
  Calendar,
  Award,
  CheckCircle2,
  Building2,
  Sparkles,
  ExternalLink,
  Save,
  Check,
  AlertCircle,
  FileText,
  TrendingUp,
  Landmark,
  ShieldCheck,
  Milestone,
  Plus,
  Trash2,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function BrandHistoryContent() {
  const [isSaved, setIsSaved] = useState(false);

  const [foundingData, setFoundingData] = useState({
    foundedDate: 'October 14, 1998',
    foundingLocation: 'Hyderabad, Telangana, India',
    originalEntityName: 'Acme Precision Tooling Works Pvt. Ltd.',
    founders: 'Dr. Raghavendra Rao & Anand Kumar',
    initialCapital: '₹50,00,000 (INR 5.0 Million)',
    incorporationNumber: 'U29299TG1998PTC030312',
    operatingYears: '28 Years of Continuous Operation',
    foundingThesis: 'Pioneering high-precision mechanical tooling and zero-defect components for mission-critical industrial manufacturing.'
  });

  const [milestones, setMilestones] = useState([
    {
      id: 1,
      year: '1998',
      title: 'Company Inception & First Tooling Facility',
      tag: 'Foundational',
      tagColor: 'bg-slate-100 text-slate-700 border-slate-200',
      description: 'Founded with a 12,000 sq.ft fabrication workshop in Sanathnagar Industrial Estate, producing micro-precision dies and mechanical tooling.',
      documentRef: 'DOC-HIST-1998-01'
    },
    {
      id: 2,
      year: '2005',
      title: 'CNC Automation & ISO 9001:2000 Certification',
      tag: 'Quality Benchmark',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Commissioned first multi-axis CNC robotics suite and secured ISO 9001:2000 quality certification, expanding into tier-1 automotive supply chains.',
      documentRef: 'DOC-HIST-2005-14'
    },
    {
      id: 3,
      year: '2012',
      title: 'European Expansion & Munich Hub Launch',
      tag: 'Internationalization',
      tagColor: 'bg-sky-50 text-sky-700 border-sky-200',
      description: 'Established first offshore subsidiary and R&D engineering liaison center in Munich, Germany, achieving CE mark conformance across product lines.',
      documentRef: 'DOC-HIST-2012-88'
    },
    {
      id: 4,
      year: '2017',
      title: 'Corporate Rebranding & Smart Telemetry IoT Series',
      tag: 'Digital Innovation',
      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      description: 'Rebranded entity from Acme Tooling Ltd to Acme Industries. Unveiled patented IoT telemetry sensors embedded directly into industrial valve systems.',
      documentRef: 'DOC-HIST-2017-33'
    },
    {
      id: 5,
      year: '2021',
      title: 'Strategic Cross-Border Acquisition of SensorTech GmbH',
      tag: 'M&A Consolidation',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
      description: 'Acquired 100% equity in German industrial sensor pioneer SensorTech GmbH, adding 18 proprietary telemetry patents and European distribution routes.',
      documentRef: 'DOC-HIST-2021-09'
    },
    {
      id: 6,
      year: '2024',
      title: 'WEBUOS Registry Onboarding & Tier-1 Certification',
      tag: 'Regulatory & Trust',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Achieved Tier-1 verified enterprise classification on WEBUOS registry with cryptographic provenance tracing and GS1 verified global barcodes.',
      documentRef: 'DOC-HIST-2024-99'
    }
  ]);

  const [newYear, setNewYear] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const handleFoundingChange = (e) => {
    const { name, value } = e.target;
    setFoundingData(prev => ({ ...prev, [name]: value }));
    setIsSaved(false);
  };

  const handleAddMilestone = (e) => {
    e.preventDefault();
    if (!newYear || !newTitle) return;
    const item = {
      id: Date.now(),
      year: newYear,
      title: newTitle,
      tag: 'New Milestone',
      tagColor: 'bg-sky-50 text-sky-700 border-sky-200',
      description: newDesc || 'Milestone documented for corporate archives.',
      documentRef: `DOC-HIST-${newYear}-REC`
    };
    setMilestones([item, ...milestones]);
    setNewYear('');
    setNewTitle('');
    setNewDesc('');
    setShowAddModal(false);
    setIsSaved(false);
  };

  const handleDeleteMilestone = (id) => {
    setMilestones(milestones.filter(m => m.id !== id));
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
            <span>Brand History &amp; Heritage</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 font-mono">
              EST. 1998
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Auditable corporate lineage, founding milestones, historical rebrandings, corporate M&amp;A history, and archived legal charters.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            28 Years Audited Lineage
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
                <span>History Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save History</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase">
            <span>Incorporation</span>
            <Calendar className="w-4 h-4 text-sky-600" />
          </div>
          <div className="text-base font-bold text-slate-900 mt-1">Oct 14, 1998</div>
          <div className="text-xs text-emerald-600 mt-1 font-medium">28 Years Continuous Operation</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase">
            <span>Milestones Recorded</span>
            <Milestone className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-base font-bold text-slate-900 mt-1">{milestones.length} Key Eras</div>
          <div className="text-xs text-indigo-600 mt-1 font-medium">100% Cryptographically Logged</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase">
            <span>Identity Transitions</span>
            <History className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-base font-bold text-slate-900 mt-1">2 Brand Evolutions</div>
          <div className="text-xs text-amber-600 mt-1 font-medium">Trademark Lineage Preserved</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase">
            <span>Corporate Acquisitions</span>
            <Building2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-base font-bold text-slate-900 mt-1">3 Entities Integrated</div>
          <div className="text-xs text-emerald-600 mt-1 font-medium">SensorTech GmbH &amp; Apex</div>
        </div>
      </div>

      {/* SECTION 1: Foundational Pedigree & Inception Records */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Landmark className="w-4 h-4 text-sky-600" />
              <span>Foundational Pedigree &amp; Inception Record</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Verified details from the initial Certificate of Incorporation filed with the Registrar of Companies.
            </p>
          </div>
          <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-lg flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            ROC Certified
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Official Founding Date</label>
            <input
              type="text"
              name="foundedDate"
              value={foundingData.foundedDate}
              onChange={handleFoundingChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Place &amp; City of Origin</label>
            <input
              type="text"
              name="foundingLocation"
              value={foundingData.foundingLocation}
              onChange={handleFoundingChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Original Entity Name at Inception</label>
            <input
              type="text"
              name="originalEntityName"
              value={foundingData.originalEntityName}
              onChange={handleFoundingChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Founders &amp; Original Promoters</label>
            <input
              type="text"
              name="founders"
              value={foundingData.founders}
              onChange={handleFoundingChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Initial Paid-Up Capital (1998)</label>
            <input
              type="text"
              name="initialCapital"
              value={foundingData.initialCapital}
              onChange={handleFoundingChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Corporate Identification Number (CIN)</label>
            <input
              type="text"
              name="incorporationNumber"
              value={foundingData.incorporationNumber}
              onChange={handleFoundingChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Original Founding Mission &amp; Thesis</label>
            <textarea
              name="foundingThesis"
              rows={2}
              value={foundingData.foundingThesis}
              onChange={handleFoundingChange}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 leading-relaxed focus:bg-white focus:border-sky-500 transition resize-none font-medium"
            />
          </div>
        </div>
      </div>

      {/* SECTION 2: Interactive Chronological Timeline */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-600" />
              <span>Historical Milestones &amp; Evolution Timeline</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Key technological breakthroughs, facility commissioning, and international market certifications.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="px-3.5 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Milestone</span>
          </button>
        </div>

        {/* Modal for adding a new milestone */}
        {showAddModal && (
          <div className="p-5 bg-sky-50/70 border border-sky-200 rounded-2xl space-y-3">
            <div className="text-xs font-bold text-sky-900 uppercase">Record New Historical Milestone</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="Year (e.g. 2026)"
                value={newYear}
                onChange={e => setNewYear(e.target.value)}
                className="h-10 px-3 bg-white border border-slate-200 rounded-xl text-xs font-bold"
              />
              <input
                type="text"
                placeholder="Milestone Title"
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
                className="h-10 px-3 bg-white border border-slate-200 rounded-xl text-xs font-semibold sm:col-span-2"
              />
            </div>
            <textarea
              placeholder="Detailed description of what occurred and operational impact..."
              rows={2}
              value={newDesc}
              onChange={e => setNewDesc(e.target.value)}
              className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs"
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-200 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddMilestone}
                className="px-4 py-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg shadow-xs"
              >
                Insert Milestone
              </button>
            </div>
          </div>
        )}

        {/* Timeline list */}
        <div className="relative border-l-2 border-slate-100 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          {milestones.map((m) => (
            <div key={m.id} className="relative group">
              {/* Dot Icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-white border-4 border-sky-500 shadow-xs flex items-center justify-center" />

              <div className="bg-slate-50/80 hover:bg-slate-50 border border-slate-200 rounded-2xl p-5 transition space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-0.5 bg-sky-600 text-white rounded-lg text-xs font-mono font-bold">
                      {m.year}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">{m.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${m.tagColor}`}>
                      {m.tag}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleDeleteMilestone(m.id)}
                      className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition p-1"
                      title="Remove milestone"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {m.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Audit Archive: {m.documentRef}</span>
                  <span className="text-emerald-600 font-medium flex items-center gap-1 font-sans">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Event
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: Brand Identity & Trademark Evolution */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-600" />
            <span>Trademark &amp; Brand Lineage Evolution</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Previous registered commercial names and trademark migration history recognized in the IP registry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Era 1 */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 relative">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
              1998 – 2004 (Era 1)
            </div>
            <div className="text-sm font-extrabold text-slate-900">Acme Precision Tooling</div>
            <div className="text-xs text-slate-500 font-medium">Mechanical Gear Badge</div>
            <p className="text-[11px] text-slate-600 leading-relaxed pt-1">
              Initial registered trademark used for automotive dies and mechanical components.
            </p>
            <div className="pt-2 text-[10px] font-mono text-slate-400 border-t border-slate-200/60">
              TM Reg: #1998-TG-04192 (Retired)
            </div>
          </div>

          {/* Era 2 */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 relative">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
              2005 – 2016 (Era 2)
            </div>
            <div className="text-sm font-extrabold text-slate-900">Acme Tooling &amp; Controls Ltd</div>
            <div className="text-xs text-slate-500 font-medium">Dual Polygon Hexagon Mark</div>
            <p className="text-[11px] text-slate-600 leading-relaxed pt-1">
              Adopted during CNC transition and European market export expansion.
            </p>
            <div className="pt-2 text-[10px] font-mono text-slate-400 border-t border-slate-200/60">
              TM Reg: #2005-IN-08114 (Superceded)
            </div>
          </div>

          {/* Era 3 */}
          <div className="p-5 bg-sky-50/70 border border-sky-200 rounded-2xl space-y-2 relative">
            <span className="absolute top-3 right-3 px-2 py-0.5 bg-sky-600 text-white rounded text-[10px] font-bold">
              CURRENT
            </span>
            <div className="text-[10px] font-bold text-sky-700 uppercase tracking-wider font-mono">
              2017 – Present (Era 3)
            </div>
            <div className="text-sm font-extrabold text-slate-900">Acme Industries</div>
            <div className="text-xs text-sky-700 font-medium">Geometric Minimal Monogram "A"</div>
            <p className="text-[11px] text-slate-600 leading-relaxed pt-1">
              Global master brand identity for telemetry, robotics, and industrial engineering.
            </p>
            <div className="pt-2 text-[10px] font-mono text-sky-700 border-t border-sky-200">
              TM Reg: #2017-GL-19842 (Active Master)
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: Corporate Mergers, Acquisitions & Integration */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-5">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-sky-600" />
              <span>Historical Corporate Acquisitions &amp; Consolidations</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Operating entities integrated into the Acme Industries brand portfolio.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400 font-bold">3 Entities</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">SensorTech GmbH</span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded">2021</span>
            </div>
            <div className="text-xs text-slate-500">Munich, Germany</div>
            <div className="text-xs text-slate-700 font-medium">100% Wholly Owned Subsidiary</div>
            <p className="text-[11px] text-slate-500 pt-1">Integrated for industrial IoT telemetry and sensor patent portfolio.</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">Apex Hydraulics India</span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded">2014</span>
            </div>
            <div className="text-xs text-slate-500">Pune, Maharashtra</div>
            <div className="text-xs text-slate-700 font-medium">100% Statutory Merger</div>
            <p className="text-[11px] text-slate-500 pt-1">Merged into Acme Heavy Industrial Valve division.</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">Nordic Telematics AS</span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-sky-100 text-sky-800 rounded">2019</span>
            </div>
            <div className="text-xs text-slate-500">Oslo, Norway</div>
            <div className="text-xs text-slate-700 font-medium">51% Controlling Joint Venture</div>
            <p className="text-[11px] text-slate-500 pt-1">Provides subsea and offshore harsh environment telemetry equipment.</p>
          </div>
        </div>
      </div>

      {/* SECTION 5: Archived Legal Charters & Historical Deeds */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-4 h-4 text-sky-600" />
            <span>Archived Historical Incorporation Charters</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Permanent cryptographic archives of founding instruments preserved for corporate compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                PDF
              </div>
              <div>
                <div className="font-bold text-slate-900">Certificate of Incorporation (1998)</div>
                <div className="text-[11px] text-slate-500">COI-1998-HYD-04192.pdf • 1.4 MB</div>
              </div>
            </div>
            <button type="button" className="text-sky-600 hover:text-sky-800 font-bold flex items-center gap-1">
              <span>View</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                PDF
              </div>
              <div>
                <div className="font-bold text-slate-900">Original Memorandum of Association</div>
                <div className="text-[11px] text-slate-500">MOA-1998-ARCHIVE.pdf • 3.2 MB</div>
              </div>
            </div>
            <button type="button" className="text-sky-600 hover:text-sky-800 font-bold flex items-center gap-1">
              <span>View</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                PDF
              </div>
              <div>
                <div className="font-bold text-slate-900">ROC Public Conversion Gazette (2005)</div>
                <div className="text-[11px] text-slate-500">ROC-GAZETTE-2005.pdf • 840 KB</div>
              </div>
            </div>
            <button type="button" className="text-sky-600 hover:text-sky-800 font-bold flex items-center gap-1">
              <span>View</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                PDF
              </div>
              <div>
                <div className="font-bold text-slate-900">Fresh Certificate of Incorporation (2017)</div>
                <div className="text-[11px] text-slate-500">ROC-NAME-CHANGE-2017.pdf • 920 KB</div>
              </div>
            </div>
            <button type="button" className="text-sky-600 hover:text-sky-800 font-bold flex items-center gap-1">
              <span>View</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Save Action */}
      <div className="flex justify-end pt-2">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white rounded-xl font-semibold text-sm shadow-md transition flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Save Brand History</span>
        </button>
      </div>
    </div>
  );
}
