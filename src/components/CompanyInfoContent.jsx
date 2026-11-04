import React, { useState } from 'react';
import {
  Building2,
  Calendar,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Save,
  Check,
  Briefcase,
  Users,
  Coins,
  MapPin,
  ExternalLink,
  Award,
  Hash,
  Scale
} from 'lucide-react';

export default function CompanyInfoContent() {
  const [isSaved, setIsSaved] = useState(false);
  const [formData, setFormData] = useState({
    legalName: 'Acme Industries Holdings Ltd.',
    tradeName: 'Acme Industries',
    cin: 'L29299TG1998PLC030312',
    pan: 'AAACA9842K',
    gstin: '36AAACA9842K1Z5',
    companyType: 'Public Limited Company (Indian Non-Government)',
    companyClass: 'Company limited by Shares',
    incorporationDate: '14 October 1998',
    rocJurisdiction: 'ROC Hyderabad, Telangana',
    authorizedCapital: '₹100,00,00,000 (INR 1.0 Billion)',
    paidUpCapital: '₹42,50,00,000 (INR 425 Million)',
    registeredOffice: 'Plot 42, H-Tech Zone, Madhapur, Hyderabad, Telangana 500081, India',
    annualTurnoverTier: 'Tier 1 Enterprise (> ₹500 Cr / $60M+)',
    listingStatus: 'Listed (BSE: 543210 | NSE: ACMEIND)',
    statutoryAuditor: 'Deloitte Haskins & Sells LLP',
    internalAuditFirm: 'Ernst & Young LLP'
  });

  const [directors] = useState([
    { din: '00192842', name: 'Dr. Raghavendra Rao', designation: 'Chairman & Managing Director', appointmentDate: '14/10/1998', status: 'Active' },
    { din: '00192843', name: 'Anand Kumar', designation: 'Joint Managing Director & COO', appointmentDate: '14/10/1998', status: 'Active' },
    { din: '08420199', name: 'Dr. Evelyn Weber', designation: 'Independent Director (Munich Hub)', appointmentDate: '12/03/2018', status: 'Active' },
    { din: '09124801', name: 'Suhasini Mehta', designation: 'Executive Director & Chief Technology Officer', appointmentDate: '01/06/2020', status: 'Active' }
  ]);

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
            3. BUSINESS &amp; CLASSIFICATION
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span>Company Information</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              ROC Active
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Statutory legal entity details, MCA/ROC corporate registry data, share capital structure, and active board of directors.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            MCA Ministry Verified
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
                <span>Information Saved!</span>
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
          <div className="text-xs font-bold text-slate-400 uppercase">Entity Classification</div>
          <div className="text-base font-bold text-slate-900 mt-1">Public Limited</div>
          <div className="text-xs text-sky-600 mt-1">NSE &amp; BSE Listed</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Paid-up Capital</div>
          <div className="text-base font-bold text-slate-900 mt-1">₹42.50 Cr</div>
          <div className="text-xs text-emerald-600 mt-1">Authorized ₹100.00 Cr</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Board Composition</div>
          <div className="text-base font-bold text-slate-900 mt-1">{directors.length} Directors</div>
          <div className="text-xs text-indigo-600 mt-1">DIN Verified on MCA</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Annual Compliance</div>
          <div className="text-base font-bold text-slate-900 mt-1">FY 2025-26 Filed</div>
          <div className="text-xs text-emerald-600 mt-1">Audit: Deloitte Haskins</div>
        </div>
      </div>

      {/* SECTION 1: Statutory Legal Identifiers */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-sky-600" />
            <span>Statutory Legal Identifiers &amp; Corporate Registration</span>
          </h2>
          <span className="text-xs font-mono text-slate-400 font-bold">MCA Portal Verified</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Full Registered Corporate Legal Name</label>
            <input
              type="text"
              name="legalName"
              value={formData.legalName}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Corporate Identification Number (CIN)</label>
            <input
              type="text"
              name="cin"
              value={formData.cin}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Permanent Account Number (PAN)</label>
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">GST Identification Number (GSTIN)</label>
            <input
              type="text"
              name="gstin"
              value={formData.gstin}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Company Constitution Type</label>
            <input
              type="text"
              name="companyType"
              value={formData.companyType}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Registrar of Companies Jurisdiction</label>
            <input
              type="text"
              name="rocJurisdiction"
              value={formData.rocJurisdiction}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Registered Corporate Office Address</label>
            <input
              type="text"
              name="registeredOffice"
              value={formData.registeredOffice}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm font-semibold focus:bg-white focus:border-sky-500 transition"
            />
          </div>
        </div>
      </div>

      {/* SECTION 2: Capital Structure & Stock Market Status */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Coins className="w-4 h-4 text-sky-600" />
            <span>Share Capital Structure &amp; Stock Exchange Listing</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">Authorised equity base, paid up capital, and public exchange trading symbols.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase">Authorized Share Capital</div>
            <div className="text-sm font-bold text-slate-900">{formData.authorizedCapital}</div>
            <div className="text-[11px] text-slate-500">100,000,000 Equity Shares @ ₹10</div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase">Paid-Up Capital</div>
            <div className="text-sm font-bold text-slate-900">{formData.paidUpCapital}</div>
            <div className="text-[11px] text-emerald-600 font-medium">42,500,000 Equity Shares @ ₹10</div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase">Market Listings</div>
            <div className="text-sm font-bold text-slate-900">BSE &amp; NSE Active</div>
            <div className="text-[11px] text-sky-600 font-mono">BSE: 543210 • NSE: ACMEIND</div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Board of Directors & Key Managerial Personnel */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-sky-600" />
              <span>Board of Directors &amp; Key Managerial Personnel (KMP)</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Verified Director Identification Numbers (DIN) on Ministry of Corporate Affairs portal.</p>
          </div>
          <span className="text-xs font-mono text-slate-400 font-bold">{directors.length} Directors Active</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider">
                <th className="pb-3 px-2">Director Name</th>
                <th className="pb-3 px-2">Designation</th>
                <th className="pb-3 px-2">DIN Number</th>
                <th className="pb-3 px-2">Appointed On</th>
                <th className="pb-3 px-2">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {directors.map((d, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition">
                  <td className="py-3 px-2 font-bold text-slate-900">{d.name}</td>
                  <td className="py-3 px-2 text-slate-600">{d.designation}</td>
                  <td className="py-3 px-2 font-mono font-bold text-sky-600">{d.din}</td>
                  <td className="py-3 px-2">{d.appointmentDate}</td>
                  <td className="py-3 px-2">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                      {d.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Save Action */}
      <div className="flex justify-end pt-2">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white rounded-xl font-semibold text-sm shadow-md transition flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Save Company Information</span>
        </button>
      </div>
    </div>
  );
}
