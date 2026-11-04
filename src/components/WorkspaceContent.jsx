import React from 'react';
import {
  CheckCircle2,
  Clock,
  Shield,
  FileText,
  Building,
  Users,
  Award,
  ExternalLink,
  UploadCloud,
  ChevronRight,
  Globe,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import PersonalInfoContent from './PersonalInfoContent';
import CommunicationContent from './CommunicationContent';
import BrandProfileContent from './BrandProfileContent';
import BrandIdentityContent from './BrandIdentityContent';
import BrandDescriptionContent from './BrandDescriptionContent';
import BrandHistoryContent from './BrandHistoryContent';
import BrandPresenceContent from './BrandPresenceContent';

// Section 3: Business & Classification
import CompanyInfoContent from './CompanyInfoContent';
import IndustryHierarchyContent from './IndustryHierarchyContent';
import CategoryHierarchyContent from './CategoryHierarchyContent';
import BusinessActivitiesContent from './BusinessActivitiesContent';
import BusinessLocationsContent from './BusinessLocationsContent';

// Section 4: Ownership & Verification
import BrandOwnershipContent from './BrandOwnershipContent';
import TrademarkInfoContent from './TrademarkInfoContent';
import LegalTaxInfoContent from './LegalTaxInfoContent';
import LegalDocumentsContent from './LegalDocumentsContent';
import BrandVerificationContent from './BrandVerificationContent';

// Section 5: Business Network
import ParentCompanyContent from './ParentCompanyContent';
import AssociatedCompaniesContent from './AssociatedCompaniesContent';
import AuthorizedRepresentativesContent from './AuthorizedRepresentativesContent';
import BusinessPartnershipsContent from './BusinessPartnershipsContent';
import AuthorizedDistributorsContent from './AuthorizedDistributorsContent';

// Section 6: Account Settings
import TeamManagementContent from './TeamManagementContent';
import NotificationsContent from './NotificationsContent';
import PrivacySettingsContent from './PrivacySettingsContent';
import AccountSettingsContent from './AccountSettingsContent';

export default function WorkspaceContent({ activeItemId = 'overview', activeSectionTitle = '1. OVERVIEW & IDENTITY' }) {
  // 1. Overview Page
  if (activeItemId === 'overview') {
    return (
      <div className="space-y-6 max-w-5xl">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 text-white p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              Brand Account Verified
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Welcome to Acme Industries Workspace
            </h2>
            <p className="text-sky-100 text-sm mt-1 max-w-xl">
              Manage your brand identity, corporate classification, legal documentation, and business network across the WEBUOS ecosystem.
            </p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 flex items-center justify-center pointer-events-none">
            <Building className="w-64 h-64" />
          </div>
        </div>

        {/* Status Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              <span>Verification Status</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl font-bold text-slate-900">Certified Level 2</div>
            <p className="text-xs text-emerald-600 mt-1 font-medium">● 5 of 5 Legal Docs Approved</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              <span>Active Brand Profile</span>
              <Globe className="w-4 h-4 text-sky-500" />
            </div>
            <div className="text-2xl font-bold text-slate-900">Acme Global</div>
            <p className="text-xs text-slate-500 mt-1 font-medium">Domain: acme-industries.webuos</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              <span>Business Network</span>
              <Users className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-2xl font-bold text-slate-900">14 Partners</div>
            <p className="text-xs text-indigo-600 mt-1 font-medium">● 6 Authorized Distributors</p>
          </div>
        </div>

        {/* Quick Review Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center justify-between">
              <span>Identity &amp; Compliance Checklist</span>
              <span className="text-xs font-semibold text-sky-600">85% Complete</span>
            </h3>
            <div className="space-y-3">
              {[
                { label: 'Corporate Entity Registration', status: 'Completed', done: true },
                { label: 'Brand Trademark Filing (USPTO / Madrid)', status: 'Approved', done: true },
                { label: 'Communication Channels Verified', status: 'Active', done: true },
                { label: 'Authorized Distributors Agreement', status: 'Pending Review', done: false }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl text-sm">
                  <div className="flex items-center gap-2.5">
                    {item.done ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    ) : (
                      <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    )}
                    <span className="font-medium text-slate-700">{item.label}</span>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
                    item.done ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Presence Summary */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
            <h3 className="text-base font-bold text-slate-900 mb-4">
              Registered Brand Assets
            </h3>
            <div className="space-y-3 text-sm">
              <div className="p-3.5 bg-slate-50 rounded-xl flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-900">Acme Industries Corporate Trademark</div>
                  <div className="text-xs text-slate-500">Reg #98234-A • Class 09, 35, 42</div>
                </div>
                <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2 py-1 rounded-md border border-sky-200">
                  Registered
                </span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-900">Legal Tax Identifier (GSTIN / EIN)</div>
                  <div className="text-xs text-slate-500">Verified via Ministry of Corporate Affairs</div>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Personal Information Page
  if (activeItemId === 'personal-info') {
    return <PersonalInfoContent />;
  }

  // 3. Communication Page
  if (activeItemId === 'communication') {
    return <CommunicationContent />;
  }

  // 4. Brand Profile Page
  if (activeItemId === 'brand-profile') {
    return <BrandProfileContent />;
  }

  // 5. Brand Identity Page
  if (activeItemId === 'brand-identity') {
    return <BrandIdentityContent />;
  }

  // 6. Brand Description Page
  if (activeItemId === 'brand-description') {
    return <BrandDescriptionContent />;
  }

  // 7. Brand History Page
  if (activeItemId === 'brand-history') {
    return <BrandHistoryContent />;
  }

  // 8. Brand Presence Page
  if (activeItemId === 'brand-presence') {
    return <BrandPresenceContent />;
  }

  // Section 3: Business & Classification
  if (activeItemId === 'company-info' || activeItemId === 'company-information') {
    return <CompanyInfoContent />;
  }
  if (activeItemId === 'industry-hierarchy') {
    return <IndustryHierarchyContent />;
  }
  if (activeItemId === 'category-hierarchy') {
    return <CategoryHierarchyContent />;
  }
  if (activeItemId === 'business-activities') {
    return <BusinessActivitiesContent />;
  }
  if (activeItemId === 'business-locations') {
    return <BusinessLocationsContent />;
  }

  // Section 4: Ownership & Verification
  if (activeItemId === 'brand-ownership') {
    return <BrandOwnershipContent />;
  }
  if (activeItemId === 'trademark-info' || activeItemId === 'trademark-information') {
    return <TrademarkInfoContent />;
  }
  if (activeItemId === 'legal-tax-info' || activeItemId === 'legal-tax-information') {
    return <LegalTaxInfoContent />;
  }
  if (activeItemId === 'legal-documents') {
    return <LegalDocumentsContent />;
  }
  if (activeItemId === 'brand-verification') {
    return <BrandVerificationContent />;
  }

  // Section 5: Business Network
  if (activeItemId === 'parent-company') {
    return <ParentCompanyContent />;
  }
  if (activeItemId === 'associated-companies') {
    return <AssociatedCompaniesContent />;
  }
  if (activeItemId === 'authorized-representatives') {
    return <AuthorizedRepresentativesContent />;
  }
  if (activeItemId === 'business-partnerships') {
    return <BusinessPartnershipsContent />;
  }
  if (activeItemId === 'authorized-distributors') {
    return <AuthorizedDistributorsContent />;
  }

  // Section 6: Account Settings
  if (activeItemId === 'team-management') {
    return <TeamManagementContent />;
  }
  if (activeItemId === 'notifications') {
    return <NotificationsContent />;
  }
  if (activeItemId === 'privacy-settings') {
    return <PrivacySettingsContent />;
  }
  if (activeItemId === 'account-settings') {
    return <AccountSettingsContent />;
  }

  // Generic fallback rendering for all other 24 items
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 max-w-4xl shadow-2xs">
      <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
        <div>
          <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
            {activeSectionTitle}
          </div>
          <h2 className="text-2xl font-bold text-slate-900 capitalize">
            {activeItemId.replace(/-/g, ' ')}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Configure, manage and update the specifications for {activeItemId.replace(/-/g, ' ')}.
          </p>
        </div>
        <button className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-1.5 transition">
          <UploadCloud className="w-3.5 h-3.5" />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Dynamic Content Preview Cards */}
      <div className="space-y-5">
        <div className="p-4 bg-sky-50/60 border border-sky-100 rounded-2xl flex items-start gap-3 text-sm text-sky-900">
          <AlertCircle className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold">Section Active in WEBUOS Brand Registry</div>
            <div className="text-xs text-sky-700 mt-0.5">
              Any changes made to {activeItemId.replace(/-/g, ' ')} will automatically synchronize across your connected parent entities and authorized distribution networks.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="border border-slate-200 rounded-2xl p-4">
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Primary Record Identifier</label>
            <input
              type="text"
              readOnly
              value={`REC-${activeItemId.toUpperCase().slice(0, 4)}-2026-99`}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 font-mono text-xs"
            />
          </div>
          <div className="border border-slate-200 rounded-2xl p-4">
            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Verification Tier</label>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="font-semibold text-slate-800">Tier 1 Verified Entity</span>
            </div>
          </div>
        </div>

        <div className="border border-slate-200 rounded-2xl p-5">
          <h4 className="font-bold text-slate-900 mb-2">Detailed Configuration</h4>
          <p className="text-xs text-slate-500 mb-4 leading-relaxed">
            All records under this module are cryptographically signed and stored in compliance with WEBUOS enterprise regulatory frameworks.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-xs text-slate-400">Last Audited</div>
              <div className="text-sm font-semibold text-slate-800 mt-0.5">Today at 10:45 IST</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-xs text-slate-400">Managing Representative</div>
              <div className="text-sm font-semibold text-slate-800 mt-0.5">John Doe (Acme Industries)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}