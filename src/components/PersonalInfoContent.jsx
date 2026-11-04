import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  ShieldCheck,
  CheckCircle2,
  Camera,
  FileCheck,
  Lock,
  Clock,
  Key,
  AlertCircle,
  Save,
  Globe,
  Briefcase,
  IdCard,
  Check
} from 'lucide-react';

export default function PersonalInfoContent() {
  const [isSaved, setIsSaved] = useState(false);
  const [formData, setFormData] = useState({
    // Basic Details
    fullName: 'John Doe',
    preferredName: 'John',
    designation: 'Chief Brand Officer & Managing Representative',
    employeeId: 'ACME-REP-0842',
    department: 'Brand Governance & Legal Affairs',

    // Contact
    workEmail: 'john.doe@acme-industries.com',
    altEmail: 'compliance@acme-industries.com',
    phone: '+91 98765 43210',
    officeLine: '+91 40 2345 6789',
    timezone: 'Asia/Kolkata (GMT+05:30)',

    // Authority & Legal
    brandRole: 'Authorized Corporate Representative',
    signingAuthority: 'Tier 1 - Full Legal & Operational Authority',
    kycType: 'Director Identification Number (DIN)',
    kycNumber: 'DIN-••••-8842',
    poaReference: 'POA-ACME-2026-V3.pdf',

    // Office Address
    streetAddress: 'Plot 42, Acme Heights, Cyber Park',
    city: 'Hyderabad',
    state: 'Telangana',
    postalCode: '500081',
    country: 'India'
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
      {/* Header with Title and Save Button */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
            1. OVERVIEW &amp; IDENTITY
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Personal Information
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Primary brand custodian and legally authorized representative credentials for Acme Industries.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            KYC Verified
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

      {/* Compliance Notice Banner */}
      <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-2xl flex items-start gap-3.5 text-slate-800">
        <AlertCircle className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm">
          <span className="font-bold text-sky-950">Official Representative Record:</span>{' '}
          These details represent the verified legal custodian of this brand account. Any changes to primary identification, legal authority, or registered contact channels will trigger an automated one-time security re-verification.
        </div>
      </div>

      {/* Main Form */}
      <form onSubmit={handleSave} className="space-y-6">

        {/* SECTION 1: Representative Identity & Avatar */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <User className="w-4 h-4 text-sky-600" />
            <span>Brand Custodian &amp; Representative Profile</span>
          </h2>

          {/* Avatar and Basic Metadata */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-4 border-b border-slate-100">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-700 text-white flex items-center justify-center font-black text-2xl shadow-sm">
                JD
              </div>
              <button
                type="button"
                onClick={() => alert('Photo upload dialog: Select a professional portrait.')}
                className="absolute -bottom-1 -right-1 w-7 h-7 bg-white border border-slate-200 text-slate-700 hover:text-sky-600 rounded-full flex items-center justify-center shadow-xs transition"
                title="Change Photo"
              >
                <Camera className="w-3.5 h-3.5" />
              </button>
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900">{formData.fullName}</div>
              <div className="text-xs text-slate-500 font-medium">{formData.designation}</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[11px] font-mono font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                  {formData.employeeId}
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                  Active Custodian
                </span>
              </div>
            </div>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Full Legal Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Official Designation / Title</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Internal Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Employee / Signatory ID</label>
              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 font-mono focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Preferred Timezone</label>
              <select
                name="timezone"
                value={formData.timezone}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              >
                <option value="Asia/Kolkata (GMT+05:30)">Asia/Kolkata (GMT+05:30)</option>
                <option value="America/New_York (GMT-05:00)">America/New_York (GMT-05:00)</option>
                <option value="Europe/London (GMT+00:00)">Europe/London (GMT+00:00)</option>
                <option value="Asia/Singapore (GMT+08:00)">Asia/Singapore (GMT+08:00)</option>
                <option value="Asia/Dubai (GMT+04:00)">Asia/Dubai (GMT+04:00)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Entity Verification Tier</label>
              <div className="h-11 px-3.5 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-800">Tier 1 Representative</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Official Contact & Communication Channels */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Mail className="w-4 h-4 text-sky-600" />
            <span>Direct Official Contact Information</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Work Email */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">Primary Corporate Email</label>
                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verified
                </span>
              </div>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className="w-full h-11 pl-10 pr-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">Direct Mobile / Phone</label>
                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> OTP Verified
                </span>
              </div>
              <div className="relative flex items-center">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-11 pl-10 pr-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
                />
              </div>
            </div>

            {/* Alternate Email */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Compliance &amp; Legal Alternate Email</label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="email"
                  name="altEmail"
                  value={formData.altEmail}
                  onChange={handleChange}
                  className="w-full h-11 pl-10 pr-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
                />
              </div>
            </div>

            {/* Direct Office Desk Line */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Office Desk Line</label>
              <div className="relative flex items-center">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="tel"
                  name="officeLine"
                  value={formData.officeLine}
                  onChange={handleChange}
                  className="w-full h-11 pl-10 pr-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: Brand Authority & Governance Verification */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>Brand Authority &amp; Legal Governance</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Relationship to Brand</label>
              <select
                name="brandRole"
                value={formData.brandRole}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              >
                <option value="Brand Owner / Founder">Brand Owner / Founder</option>
                <option value="Authorized Corporate Representative">Authorized Corporate Representative</option>
                <option value="Legal Counsel / Trademark Attorney">Legal Counsel / Trademark Attorney</option>
                <option value="Managing Agency Partner">Managing Agency Partner</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Signing Authority Level</label>
              <input
                type="text"
                readOnly
                value={formData.signingAuthority}
                className="w-full h-11 px-3.5 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-800 font-medium cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">KYC Identification Type</label>
              <input
                type="text"
                readOnly
                value={formData.kycType}
                className="w-full h-11 px-3.5 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-800 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Government ID Ref (Masked)</label>
              <input
                type="text"
                readOnly
                value={formData.kycNumber}
                className="w-full h-11 px-3.5 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-800 font-mono cursor-not-allowed"
              />
            </div>

            {/* Power of Attorney attachment */}
            <div className="sm:col-span-2 p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-sky-600 flex-shrink-0" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Power of Attorney (POA) Record</div>
                  <div className="text-xs text-slate-500">File: {formData.poaReference} • Signed &amp; Notarized</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => alert(`Opening ${formData.poaReference}`)}
                className="text-xs font-semibold text-sky-600 hover:text-sky-800 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs"
              >
                View Document
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 4: Official Representative Business Address */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <MapPin className="w-4 h-4 text-sky-600" />
            <span>Official Office Location of the Representative</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="sm:col-span-2 lg:col-span-3">
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Office Street Address</label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">State / Province</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Postal / PIN Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>
          </div>
        </div>

        {/* SECTION 5: Security & Verification Badges */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Lock className="w-4 h-4 text-sky-600" />
            <span>Security &amp; Representative Audit Logs</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="text-slate-400 font-bold uppercase">Two-Factor Authentication</div>
              <div className="text-sm font-bold text-emerald-700 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Enforced (Hardware Key)
              </div>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="text-slate-400 font-bold uppercase">Last Identity Audit</div>
              <div className="text-sm font-bold text-slate-800 mt-1">Today at 10:45 IST</div>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="text-slate-400 font-bold uppercase">Signatory Certificate</div>
              <div className="text-sm font-bold text-sky-700 mt-1">Valid until Nov 2028</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="submit"
            className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white rounded-xl font-semibold text-sm shadow-md transition flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Personal Information</span>
          </button>
        </div>

      </form>
    </div>
  );
}
