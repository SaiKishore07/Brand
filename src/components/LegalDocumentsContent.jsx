import React, { useState } from 'react';
import {
  FileCheck,
  UploadCloud,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Save,
  Check,
  ExternalLink,
  Download,
  Clock,
  Eye,
  Trash2,
  Plus
} from 'lucide-react';

export default function LegalDocumentsContent() {
  const [isSaved, setIsSaved] = useState(false);

  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: 'Certificate of Incorporation (Amended Public Ltd)',
      fileRef: 'COI-L29299TG1998PLC030312.pdf',
      size: '2.4 MB',
      category: 'Corporate Registration',
      authority: 'Registrar of Companies, Hyderabad',
      sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      verifiedDate: '14 Oct 1998 (Audited 2026)',
      status: 'Approved & Verified'
    },
    {
      id: 2,
      name: 'Memorandum & Articles of Association (MoA & AoA)',
      fileRef: 'MOA-AOA-AMENDED-2024.pdf',
      size: '4.8 MB',
      category: 'Corporate Constitution',
      authority: 'Ministry of Corporate Affairs',
      sha256: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
      verifiedDate: '12 Jun 2024',
      status: 'Approved & Verified'
    },
    {
      id: 3,
      name: 'Board Resolution for Brand Custodianship',
      fileRef: 'BR-CUSTODIAN-2026.pdf',
      size: '1.2 MB',
      category: 'Board Governance',
      authority: 'Board of Directors, Acme Holdings Ltd',
      sha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
      verifiedDate: '05 Jan 2026',
      status: 'Approved & Verified'
    },
    {
      id: 4,
      name: 'General Power of Attorney (PoA) for Signatory',
      fileRef: 'POA-SIGNING-2026.pdf',
      size: '1.6 MB',
      category: 'Signing Authority',
      authority: 'Notary Public & High Court Registry',
      sha256: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
      verifiedDate: '10 Jan 2026',
      status: 'Approved & Verified'
    },
    {
      id: 5,
      name: 'Statutory Auditor Net Worth & Solvency Certificate',
      fileRef: 'AUDITOR-NETWORTH-2025.pdf',
      size: '1.9 MB',
      category: 'Financial Standing',
      authority: 'Deloitte Haskins & Sells LLP (UDIN: 25019842A)',
      sha256: '4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
      verifiedDate: '15 Sep 2025',
      status: 'Approved & Verified'
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
            4. OWNERSHIP &amp; VERIFICATION
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span>Legal Documents Repository</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
              5 of 5 Approved
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Cryptographically signed incorporation charters, board resolutions, powers of attorney, and statutory solvency certificates.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            All Tier-1 Documents Verified
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
                <span>Documents Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Vault</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Documents in Vault</div>
          <div className="text-base font-bold text-slate-900 mt-1">5 Core Files</div>
          <div className="text-xs text-sky-600 mt-1">100% Compliance Cleared</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Integrity Verification</div>
          <div className="text-base font-bold text-slate-900 mt-1">SHA-256 Hash</div>
          <div className="text-xs text-emerald-600 mt-1">Immutable Blockchain Log</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Audit Authority</div>
          <div className="text-base font-bold text-slate-900 mt-1">Deloitte LLP</div>
          <div className="text-xs text-indigo-600 mt-1">UDIN Certified</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Next Recertification</div>
          <div className="text-base font-bold text-slate-900 mt-1">October 2026</div>
          <div className="text-xs text-emerald-600 mt-1">Annual Standing Review</div>
        </div>
      </div>

      {/* Documents List */}
      <div className="space-y-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="p-5 bg-white border border-slate-200 rounded-3xl shadow-2xs hover:border-sky-300 transition space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-xs border border-sky-100">
                  PDF
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">{doc.name}</h3>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">{doc.fileRef} • {doc.size}</div>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {doc.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600">
              <div>
                <span className="text-slate-400 block text-[11px] uppercase font-bold">Category &amp; Jurisdiction</span>
                <span className="text-slate-800 font-semibold">{doc.category} — {doc.authority}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px] uppercase font-bold">Verification Date</span>
                <span className="text-slate-800 font-semibold">{doc.verifiedDate}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 text-[11px] text-slate-400">
              <span className="font-mono truncate max-w-md">SHA-256: {doc.sha256}</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => alert(`Opening preview for ${doc.fileRef}`)}
                  className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold flex items-center gap-1"
                >
                  <Eye className="w-3 h-3" />
                  <span>Preview</span>
                </button>
                <button
                  type="button"
                  onClick={() => alert(`Downloading verified copy: ${doc.fileRef}`)}
                  className="px-3 py-1 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 font-bold flex items-center gap-1"
                >
                  <Download className="w-3 h-3" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Supplementary Box */}
      <div className="p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl text-center space-y-2">
        <UploadCloud className="w-8 h-8 text-slate-400 mx-auto" />
        <div className="text-sm font-bold text-slate-900">Upload Supplementary Regulatory Certificate</div>
        <p className="text-xs text-slate-500 max-w-md mx-auto">
          Upload certified PDF copies of fresh amendments, gazette notifications, or updated board powers of attorney.
        </p>
        <button
          type="button"
          onClick={() => alert('Document upload modal activated')}
          className="mt-2 px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-xl text-xs font-bold shadow-2xs"
        >
          Select Document from Device
        </button>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-2">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white rounded-xl font-semibold text-sm shadow-md transition flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Save Document Vault</span>
        </button>
      </div>
    </div>
  );
}

