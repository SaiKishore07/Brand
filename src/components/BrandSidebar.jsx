import React, { useState, useMemo } from 'react';
import {
  Search,
  Home,
  User,
  Mail,
  Briefcase,
  Palette,
  FileText,
  History,
  Globe,
  Building2,
  GitFork,
  Layers,
  Activity,
  MapPin,
  ShieldCheck,
  Award,
  Receipt,
  FileCheck,
  CheckCircle2,
  Landmark,
  Link2,
  UserCheck,
  Handshake,
  Truck,
  Users,
  Bell,
  Lock,
  Settings,
  Sun,
  Moon,
  Monitor,
  LogOut,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const SIDEBAR_SECTIONS = [
  {
    id: 'sec-overview',
    title: '1. OVERVIEW & IDENTITY',
    items: [
      { id: 'overview', label: 'Overview', icon: Home, badge: null },
      { id: 'personal-info', label: 'Personal Information', icon: User, badge: null },
      { id: 'communication', label: 'Communication', icon: Mail, badge: { text: 'Verified', type: 'success' } }
    ]
  },
  {
    id: 'sec-brand-info',
    title: '2. BRAND INFORMATION',
    items: [
      { id: 'brand-profile', label: 'Brand Profile', icon: Briefcase, badge: { text: 'Active', type: 'success' } },
      { id: 'brand-identity', label: 'Brand Identity', icon: Palette, badge: null },
      { id: 'brand-description', label: 'Brand Description', icon: FileText, badge: null },
      { id: 'brand-history', label: 'Brand History', icon: History, badge: null },
      { id: 'brand-presence', label: 'Brand Presence', icon: Globe, badge: null }
    ]
  },
  {
    id: 'sec-business-class',
    title: '3. BUSINESS & CLASSIFICATION',
    items: [
      { id: 'company-info', label: 'Company Information', icon: Building2, badge: null },
      { id: 'industry-hierarchy', label: 'Industry Hierarchy', icon: GitFork, badge: null },
      { id: 'category-hierarchy', label: 'Category Hierarchy', icon: Layers, badge: null },
      { id: 'business-activities', label: 'Business Activities', icon: Activity, badge: null },
      { id: 'business-locations', label: 'Business Locations', icon: MapPin, badge: null }
    ]
  },
  {
    id: 'sec-ownership-verification',
    title: '4. OWNERSHIP & VERIFICATION',
    items: [
      { id: 'brand-ownership', label: 'Brand Ownership', icon: ShieldCheck, badge: { text: 'Verified', type: 'success' } },
      { id: 'trademark-info', label: 'Trademark Information', icon: Award, badge: null },
      { id: 'legal-tax-info', label: 'Legal & Tax Information', icon: Receipt, badge: { text: 'Verified', type: 'success' } },
      { id: 'legal-documents', label: 'Legal Documents', icon: FileCheck, badge: { text: '5 Docs', type: 'info' } },
      { id: 'brand-verification', label: 'Brand Verification', icon: CheckCircle2, badge: { text: 'Certified', type: 'info' } }
    ]
  },
  {
    id: 'sec-business-network',
    title: '5. BUSINESS NETWORK',
    items: [
      { id: 'parent-company', label: 'Parent Company', icon: Landmark, badge: null },
      { id: 'associated-companies', label: 'Associated Companies', icon: Link2, badge: null },
      { id: 'authorized-representatives', label: 'Authorized Representatives', icon: UserCheck, badge: null },
      { id: 'business-partnerships', label: 'Business Partnerships', icon: Handshake, badge: null },
      { id: 'authorized-distributors', label: 'Authorized Distributors', icon: Truck, badge: null }
    ]
  },
  {
    id: 'sec-account-settings',
    title: '6. ACCOUNT SETTINGS',
    items: [
      { id: 'team-management', label: 'Team Management', icon: Users, badge: { text: '6 Members', type: 'neutral' } },
      { id: 'notifications', label: 'Notifications', icon: Bell, badge: { text: '3 New', type: 'accent' } },
      { id: 'privacy-settings', label: 'Privacy Settings', icon: Lock, badge: null },
      { id: 'account-settings', label: 'Account Settings', icon: Settings, badge: null }
    ]
  }
];

export default function BrandSidebar({
  activeItemId = 'overview',
  onSelectItem,
  onBackToWebuos,
  themeMode = 'system',
  onThemeChange,
  colorScheme = 'brand-blue', // 'brand-blue' | 'reference-cyan' | 'indigo' | 'emerald'
  onColorChange
}) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter sections and items based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return SIDEBAR_SECTIONS;
    const q = searchQuery.toLowerCase();
    return SIDEBAR_SECTIONS.map(sec => {
      const matchingItems = sec.items.filter(item =>
        item.label.toLowerCase().includes(q) ||
        (item.badge && item.badge.text.toLowerCase().includes(q))
      );
      if (matchingItems.length > 0) {
        return { ...sec, items: matchingItems };
      }
      return null;
    }).filter(Boolean);
  }, [searchQuery]);

  // Color scheme style tokens
  const colors = useMemo(() => {
    switch (colorScheme) {
      case 'reference-cyan':
        return {
          activeBg: 'bg-[#e0f7fa] bg-opacity-70',
          activeBorder: 'border-[#80deea]',
          activeText: 'text-[#00838f]',
          activeIconBg: 'bg-white text-[#00838f] shadow-xs',
          pillRing: 'ring-[#80deea]',
          badgeInfoBg: 'bg-[#e0f7fa] text-[#00838f]'
        };
      case 'indigo':
        return {
          activeBg: 'bg-indigo-50',
          activeBorder: 'border-indigo-200',
          activeText: 'text-indigo-700',
          activeIconBg: 'bg-white text-indigo-600 shadow-xs',
          pillRing: 'ring-indigo-300',
          badgeInfoBg: 'bg-indigo-50 text-indigo-700'
        };
      case 'emerald':
        return {
          activeBg: 'bg-emerald-50',
          activeBorder: 'border-emerald-200',
          activeText: 'text-emerald-700',
          activeIconBg: 'bg-white text-emerald-600 shadow-xs',
          pillRing: 'ring-emerald-300',
          badgeInfoBg: 'bg-emerald-50 text-emerald-700'
        };
      case 'brand-blue':
      default:
        return {
          activeBg: 'bg-sky-50',
          activeBorder: 'border-sky-300',
          activeText: 'text-sky-700',
          activeIconBg: 'bg-white text-sky-600 shadow-xs',
          pillRing: 'ring-sky-200',
          badgeInfoBg: 'bg-sky-100 text-sky-800'
        };
    }
  }, [colorScheme]);

  return (
    <aside className="w-80 h-full flex flex-col bg-white border-r border-slate-200 text-slate-800 select-none">
      
      {/* Top Search Input Box */}
      <div className="p-4 pb-2">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search settings..."
            className="w-full h-10 pl-10 pr-4 bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-sm text-slate-800 placeholder-slate-400 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 focus:outline-none transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 text-xs text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Navigation Groups List */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-6 scrollbar-thin scrollbar-thumb-slate-200">
        {filteredSections.length === 0 ? (
          <div className="text-center py-8 text-sm text-slate-400">
            No matching settings found
          </div>
        ) : (
          filteredSections.map((section) => (
            <div key={section.id} className="space-y-1.5">
              {/* Section Header Title */}
              <div className="px-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                {section.title}
              </div>

              {/* Items in Section */}
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeItemId === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => onSelectItem && onSelectItem(item.id, item.label, section.title)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-2xl transition duration-150 text-left ${
                        isActive
                          ? `${colors.activeBg} border ${colors.activeBorder} ${colors.activeText} shadow-xs font-semibold`
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      }`}
                    >
                      {/* Left: Icon Badge & Label */}
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition ${
                            isActive
                              ? colors.activeIconBg
                              : 'bg-slate-100 text-slate-500 group-hover:text-slate-700'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[13.5px] truncate">{item.label}</span>
                      </div>

                      {/* Right: Badge Pill (if present) */}
                      {item.badge && (
                        <span
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded-md flex-shrink-0 ${
                            item.badge.type === 'success'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : item.badge.type === 'info'
                              ? `${colors.badgeInfoBg} border border-sky-200`
                              : item.badge.type === 'accent'
                              ? 'bg-rose-50 text-rose-600 border border-rose-200'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {item.badge.text}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Bottom Pinned Controls */}
      <div className="p-4 pt-2 border-t border-slate-100 space-y-3 bg-white">
        
        {/* Appearance Control Box */}
        <div className="flex items-center justify-between p-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
          <span className="text-xs font-semibold text-slate-700">Appearance</span>
          
          <div className="flex items-center bg-white border border-slate-200 p-0.5 rounded-full shadow-2xs">
            <button
              type="button"
              onClick={() => onThemeChange && onThemeChange('light')}
              title="Light Mode"
              className={`w-7 h-7 rounded-full flex items-center justify-center transition ${
                themeMode === 'light'
                  ? 'bg-sky-100 text-sky-700 font-bold'
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onThemeChange && onThemeChange('dark')}
              title="Dark Mode"
              className={`w-7 h-7 rounded-full flex items-center justify-center transition ${
                themeMode === 'dark'
                  ? 'bg-slate-800 text-white font-bold'
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onThemeChange && onThemeChange('system')}
              title="System Default"
              className={`w-7 h-7 rounded-full flex items-center justify-center transition ${
                themeMode === 'system'
                  ? 'bg-sky-100 text-sky-700 font-bold'
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Color Palette Switcher (allowing user to change active color) */}
        {onColorChange && (
          <div className="flex items-center justify-between px-1 text-[11px] text-slate-500 font-medium">
            <span>Sidebar Theme</span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => onColorChange('brand-blue')}
                className={`w-4 h-4 rounded-full bg-sky-600 transition ${colorScheme === 'brand-blue' ? 'ring-2 ring-offset-1 ring-sky-600' : 'opacity-60 hover:opacity-100'}`}
                title="Brand Royal Blue"
              />
              <button
                type="button"
                onClick={() => onColorChange('reference-cyan')}
                className={`w-4 h-4 rounded-full bg-[#00acc1] transition ${colorScheme === 'reference-cyan' ? 'ring-2 ring-offset-1 ring-[#00acc1]' : 'opacity-60 hover:opacity-100'}`}
                title="Reference Cyan / Aqua"
              />
              <button
                type="button"
                onClick={() => onColorChange('indigo')}
                className={`w-4 h-4 rounded-full bg-indigo-600 transition ${colorScheme === 'indigo' ? 'ring-2 ring-offset-1 ring-indigo-600' : 'opacity-60 hover:opacity-100'}`}
                title="Deep Indigo"
              />
              <button
                type="button"
                onClick={() => onColorChange('emerald')}
                className={`w-4 h-4 rounded-full bg-emerald-600 transition ${colorScheme === 'emerald' ? 'ring-2 ring-offset-1 ring-emerald-600' : 'opacity-60 hover:opacity-100'}`}
                title="Emerald"
              />
            </div>
          </div>
        )}

        {/* Back to WEBUOS Button */}
        <button
          onClick={onBackToWebuos}
          className="w-full flex items-center gap-2.5 px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 rounded-xl transition text-xs font-semibold"
        >
          <LogOut className="w-4 h-4 text-slate-500" />
          <span>Back to WEBUOS</span>
        </button>
      </div>

    </aside>
  );
}
