import React, { useState } from 'react';
import BrandSidebar from './BrandSidebar';
import WorkspaceContent from './WorkspaceContent';
import {
  Bell,
  Search,
  ChevronDown,
  Building,
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';

export default function BrandWorkspace({ onLogout }) {
  const [activeItemId, setActiveItemId] = useState('overview');
  const [activeItemLabel, setActiveItemLabel] = useState('Overview');
  const [activeSectionTitle, setActiveSectionTitle] = useState('1. OVERVIEW & IDENTITY');
  const [themeMode, setThemeMode] = useState('system');
  const [colorScheme, setColorScheme] = useState('brand-blue'); // 'brand-blue' | 'reference-cyan' | 'indigo' | 'emerald'
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleSelectItem = (id, label, sectionTitle) => {
    setActiveItemId(id);
    setActiveItemLabel(label);
    setActiveSectionTitle(sectionTitle);
    setMobileSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 antialiased">
      {/* Top Main Brand Header Bar */}
      <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 shadow-2xs">
        
        {/* Left: Hamburger & Brand Identity */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="md:hidden p-2 text-slate-500 hover:text-slate-900 rounded-lg"
          >
            {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-sky-500 flex items-center justify-center text-white font-black text-lg shadow-sm">
              W
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-slate-900 tracking-tight leading-none">WEBUOS</span>
                <span className="text-[10px] font-bold text-sky-700 bg-sky-50 border border-sky-200 px-1.5 py-0.5 rounded uppercase tracking-wider">
                  Brand Portal
                </span>
              </div>
              <span className="text-xs text-slate-400 font-medium leading-none block mt-0.5">
                Acme Industries • ID: BR-9842
              </span>
            </div>
          </div>
        </div>

        {/* Center: Breadcrumbs on desktop */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-slate-500">
          <span>Brand Workspace</span>
          <span>/</span>
          <span className="text-slate-700">{activeSectionTitle}</span>
          <span>/</span>
          <span className="text-sky-600 font-bold">{activeItemLabel}</span>
        </div>

        {/* Right: Quick actions & User Pill */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition">
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500" />
          </button>

          {/* User Profile Pill */}
          <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
            <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold">
              JD
            </div>
            <div className="hidden sm:block text-left">
              <div className="text-xs font-bold text-slate-900 leading-tight">John Doe</div>
              <div className="text-[11px] text-slate-400 leading-tight">Brand Administrator</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Workspace Body: Sidebar + Dynamic Content */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Desktop Sidebar */}
        <div className="hidden md:block h-[calc(100vh-4rem)] flex-shrink-0">
          <BrandSidebar
            activeItemId={activeItemId}
            onSelectItem={handleSelectItem}
            onBackToWebuos={onLogout}
            themeMode={themeMode}
            onThemeChange={setThemeMode}
            colorScheme={colorScheme}
            onColorChange={setColorScheme}
          />
        </div>

        {/* Mobile Drawer Sidebar */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex">
            <div className="w-80 h-full bg-white shadow-xl z-50">
              <BrandSidebar
                activeItemId={activeItemId}
                onSelectItem={handleSelectItem}
                onBackToWebuos={onLogout}
                themeMode={themeMode}
                onThemeChange={setThemeMode}
                colorScheme={colorScheme}
                onColorChange={setColorScheme}
              />
            </div>
            <div
              className="flex-1 bg-black/40 backdrop-blur-xs"
              onClick={() => setMobileSidebarOpen(false)}
            />
          </div>
        )}

        {/* Right Content View */}
        <main className="flex-1 h-[calc(100vh-4rem)] overflow-y-auto p-4 sm:p-8 bg-slate-50">
          <WorkspaceContent
            activeItemId={activeItemId}
            activeSectionTitle={activeSectionTitle}
          />
        </main>
      </div>
    </div>
  );
}
