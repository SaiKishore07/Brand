import React, { useState } from 'react';
import {
  Palette,
  Sparkles,
  Type,
  Image as ImageIcon,
  Download,
  CheckCircle2,
  ShieldCheck,
  Save,
  Check,
  AlertCircle,
  Eye,
  Copy,
  FileText,
  Layers,
  UploadCloud,
  Sliders,
  CheckCheck
} from 'lucide-react';

export default function BrandIdentityContent() {
  const [isSaved, setIsSaved] = useState(false);
  const [copiedColor, setCopiedColor] = useState(null);

  const [identityData, setIdentityData] = useState({
    // Typography
    headingFont: 'Plus Jakarta Sans',
    bodyFont: 'Plus Jakarta Sans',
    codeFont: 'JetBrains Mono',

    // Voice & Tone
    brandArchetype: 'The Pioneer / The Architect',
    toneAttributes: 'Authoritative, Precision-driven, Forward-thinking, Transparent',
    readingLevel: 'Professional Enterprise B2B',

    // Guidelines metadata
    guidelinesVersion: 'v2.4 (2026 Edition)',
    lastUpdated: '12 Oct 2026',
    brandAssetLicense: 'Proprietary Trademark of Acme Industries'
  });

  const colors = [
    { name: 'Primary Royal Blue', hex: '#0076E6', pms: 'Pantone 2935 C', rgb: 'rgb(0, 118, 230)', cmyk: '85, 55, 0, 0', role: 'Main CTA & Brand Badges' },
    { name: 'Cyan Sky Accent', hex: '#0284C7', pms: 'Pantone 306 C', rgb: 'rgb(2, 132, 199)', cmyk: '80, 20, 0, 5', role: 'Highlights & Active States' },
    { name: 'Deep Slate Neutral', hex: '#0F172A', pms: 'Pantone 433 C', rgb: 'rgb(15, 23, 42)', cmyk: '85, 75, 55, 70', role: 'Headings & Core Typography' },
    { name: 'Surface Background', hex: '#F8FAFC', pms: 'Cool Gray 1 C', rgb: 'rgb(248, 250, 252)', cmyk: '2, 1, 0, 1', role: 'App Surfaces & Cards' },
    { name: 'Verification Emerald', hex: '#10B981', pms: 'Pantone 7481 C', rgb: 'rgb(16, 185, 129)', cmyk: '75, 0, 60, 0', role: 'Verified Certifications' }
  ];

  const handleCopyColor = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
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
            Brand Identity &amp; Visual Design System
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Official logos, vector trademarks, standardized color palettes, typography hierarchy, and brand voice guidelines.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Styleguide Verified
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

      {/* Top Highlights Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Logo Variations</div>
          <div className="text-base font-bold text-slate-900 mt-1">4 Official Lockups</div>
          <div className="text-xs text-sky-600 mt-1">Vector SVG, EPS, PNG</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Pantone Matched</div>
          <div className="text-base font-bold text-slate-900 mt-1">PMS 2935 C</div>
          <div className="text-xs text-emerald-600 mt-1">Certified Color Accuracy</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Primary Typography</div>
          <div className="text-base font-bold text-slate-900 mt-1">Plus Jakarta Sans</div>
          <div className="text-xs text-slate-500 mt-1">Geometric Sans-Serif</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Guidelines Kit</div>
          <div className="text-base font-bold text-slate-900 mt-1">Version 2.4</div>
          <div className="text-xs text-indigo-600 mt-1">Synchronized across partners</div>
        </div>
      </div>

      {/* Main Identity Content */}
      <div className="space-y-6">

        {/* SECTION 1: Logo Suite & Trademark Assets */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-sky-600" />
                <span>Trademarked Logo Variations &amp; Lockups</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Approved vector assets for packaging, digital products, and print reproduction.</p>
            </div>
            <button
              type="button"
              onClick={() => alert('Downloading Acme_Vector_Logo_Pack_2026.zip')}
              className="px-3.5 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download All Logos (.ZIP)</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Primary Horizontal Lockup */}
            <div className="border border-slate-200 rounded-2xl p-4 flex flex-col justify-between bg-slate-50/50 hover:bg-white hover:shadow-xs transition">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-3">
                  <span>Primary Lockup</span>
                  <span className="text-[10px] bg-sky-50 text-sky-700 px-1.5 py-0.5 rounded">Default</span>
                </div>
                <div className="h-28 bg-white border border-slate-100 rounded-xl flex items-center justify-center p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-600 to-sky-400 flex items-center justify-center text-white font-black text-sm">W</div>
                    <span className="font-extrabold text-base tracking-tight text-slate-900">WEBUOS</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <span>Color • Light Bg</span>
                <button onClick={() => alert('Downloading Primary Logo SVG')} className="text-sky-600 hover:underline font-semibold">SVG</button>
              </div>
            </div>

            {/* Dark / Reversed Lockup */}
            <div className="border border-slate-200 rounded-2xl p-4 flex flex-col justify-between bg-slate-50/50 hover:bg-white hover:shadow-xs transition">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-3">
                  <span>Reversed Lockup</span>
                  <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">Dark Bg</span>
                </div>
                <div className="h-28 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-sky-300 flex items-center justify-center text-white font-black text-sm">W</div>
                    <span className="font-extrabold text-base tracking-tight text-white">WEBUOS</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <span>White on Dark</span>
                <button onClick={() => alert('Downloading Dark Logo SVG')} className="text-sky-600 hover:underline font-semibold">SVG</button>
              </div>
            </div>

            {/* Monogram / Logomark */}
            <div className="border border-slate-200 rounded-2xl p-4 flex flex-col justify-between bg-slate-50/50 hover:bg-white hover:shadow-xs transition">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-3">
                  <span>Brand Monogram</span>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">Icon</span>
                </div>
                <div className="h-28 bg-white border border-slate-100 rounded-xl flex items-center justify-center p-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-600 to-sky-400 flex items-center justify-center text-white font-black text-xl shadow-xs">
                    W
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <span>App Icon / Favicon</span>
                <button onClick={() => alert('Downloading Icon Mark SVG')} className="text-sky-600 hover:underline font-semibold">SVG</button>
              </div>
            </div>

            {/* Monochrome Black Mark */}
            <div className="border border-slate-200 rounded-2xl p-4 flex flex-col justify-between bg-slate-50/50 hover:bg-white hover:shadow-xs transition">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-3">
                  <span>Monochrome</span>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">1-Color</span>
                </div>
                <div className="h-28 bg-white border border-slate-100 rounded-xl flex items-center justify-center p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-black text-sm">W</div>
                    <span className="font-extrabold text-base tracking-tight text-black">WEBUOS</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <span>Solid Black Print</span>
                <button onClick={() => alert('Downloading Mono Logo SVG')} className="text-sky-600 hover:underline font-semibold">SVG</button>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Official Color Palette System */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Palette className="w-4 h-4 text-sky-600" />
                <span>Standardized Brand Color Palette</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Click any HEX code to copy. Pantone and CMYK specs for digital and print integrity.</p>
            </div>
            <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
              WCAG AAA Compliant
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {colors.map((c, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs bg-white">
                <div
                  className="h-24 w-full relative transition hover:opacity-95"
                  style={{ backgroundColor: c.hex }}
                >
                  <button
                    onClick={() => handleCopyColor(c.hex)}
                    className="absolute top-2 right-2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-md text-[10px] flex items-center gap-1 backdrop-blur-xs transition"
                    title="Copy HEX"
                  >
                    {copiedColor === c.hex ? <CheckCheck className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <div className="p-3.5 space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs truncate">{c.name}</div>
                  <div className="font-mono text-xs font-semibold text-sky-600 flex items-center justify-between">
                    <span>{c.hex}</span>
                    {copiedColor === c.hex && <span className="text-[10px] text-emerald-600 font-bold">Copied!</span>}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">{c.pms}</div>
                  <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-100">
                    {c.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: Typography Hierarchy & Font System */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Type className="w-4 h-4 text-sky-600" />
            <span>Brand Typography &amp; Font Stack</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Display / Headings */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase">Headings &amp; Display</span>
                <span className="text-xs font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded">Primary</span>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Plus Jakarta Sans
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-bold">
                Aa Bb Cc Dd Ee Ff Gg Hh 0123456789
              </p>
              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-200">
                Weights: SemiBold (600), Bold (700), ExtraBold (800)
              </div>
            </div>

            {/* Body Typography */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase">Body &amp; Interfaces</span>
                <span className="text-xs font-bold text-slate-600 bg-slate-200 px-2 py-0.5 rounded">General</span>
              </div>
              <div className="text-xl font-bold text-slate-900">
                Plus Jakarta Sans
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear legibility at small scale, clean optical kerning across high-density enterprise displays.
              </p>
              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-200">
                Weights: Regular (400), Medium (500)
              </div>
            </div>

            {/* Monospace Code */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 font-mono">
              <div className="flex items-center justify-between font-sans">
                <span className="text-xs font-bold text-slate-500 uppercase">Code &amp; GTIN Barcode</span>
                <span className="text-xs font-bold text-slate-600 bg-slate-200 px-2 py-0.5 rounded">Mono</span>
              </div>
              <div className="text-lg font-bold text-slate-900">
                JetBrains Mono
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                REC-BRAN-2026-9842 • 089012345678
              </p>
              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-200 font-sans">
                Used for Serial Numbers, Tokens &amp; SKU IDs
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: Brand Voice, Tone & Messaging Architecture */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>Brand Voice, Tone &amp; Messaging Archetype</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="text-xs font-bold text-slate-400 uppercase">Archetype</div>
              <div className="text-base font-bold text-slate-900 mt-1">{identityData.brandArchetype}</div>
              <div className="text-xs text-slate-500 mt-1">Grounded in technical mastery and industrial dependability.</div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="text-xs font-bold text-slate-400 uppercase">Tone Pillars</div>
              <div className="text-sm font-bold text-slate-900 mt-1">{identityData.toneAttributes}</div>
              <div className="text-xs text-slate-500 mt-1">Avoid hype; emphasize verified metrics and performance.</div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="text-xs font-bold text-slate-400 uppercase">Reading Grade</div>
              <div className="text-base font-bold text-slate-900 mt-1">{identityData.readingLevel}</div>
              <div className="text-xs text-slate-500 mt-1">Direct communication for procurement officers &amp; engineers.</div>
            </div>
          </div>
        </div>

        {/* SECTION 5: Official Brand Styleguide PDF & Assets */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-100 rounded-2xl">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold shadow-xs">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Official Brand Identity Styleguide 2026.pdf</div>
                <div className="text-xs text-slate-500">42 Pages • Vector Specifications, Clearspace Rules &amp; Co-Branding Policies</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => alert('Opening preview of Acme Brand Guidelines PDF...')}
                className="px-3.5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold shadow-2xs transition"
              >
                View PDF
              </button>
              <button
                type="button"
                onClick={() => alert('Downloading Acme_Brand_Identity_Guidelines_2026.pdf')}
                className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-1.5 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Kit</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Save Action */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            onClick={handleSave}
            className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white rounded-xl font-semibold text-sm shadow-md transition flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Brand Identity Settings</span>
          </button>
        </div>

      </div>
    </div>
  );
}
