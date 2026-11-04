import React, { useState } from 'react';
import RegisterCard from './components/RegisterCard';
import LoginCard from './components/LoginCard';
import BrandWorkspace from './components/BrandWorkspace';

export default function App() {
  const [view, setView] = useState('login'); // 'register' | 'login' | 'split' | 'workspace'
  const [userSession, setUserSession] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUserSession(userData);
    setView('workspace');
  };

  const handleLogout = () => {
    setUserSession(null);
    setView('login');
  };

  // If in Brand Workspace mode (after login)
  if (view === 'workspace') {
    return <BrandWorkspace onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 antialiased">
      {/* Top Bar Navigation */}
      <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-30 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-600 to-sky-400 flex items-center justify-center text-white font-black text-base shadow-sm">
            W
          </div>
          <span className="font-bold text-lg text-slate-900 tracking-tight">WEBUOS</span>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded tracking-wide uppercase">
            Brand Suite
          </span>
        </div>

        {/* View Switcher */}
        <div className="flex bg-slate-100 p-1 rounded-xl gap-1 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => setView('register')}
            className={`px-3 py-1.5 rounded-lg transition ${view === 'register' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Registration
          </button>
          <button
            onClick={() => setView('login')}
            className={`px-3 py-1.5 rounded-lg transition ${view === 'login' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Brand Login
          </button>
          <button
            onClick={() => setView('workspace')}
            className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${view === 'workspace' ? 'bg-sky-600 text-white shadow-xs' : 'text-sky-700 bg-sky-50 hover:bg-sky-100'}`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Brand Workspace (Sidebar)</span>
          </button>
          <button
            onClick={() => setView('split')}
            className={`hidden md:block px-3 py-1.5 rounded-lg transition ${view === 'split' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Split Compare
          </button>
        </div>
      </header>

      {/* Main Auth View Area */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-10">
        {view === 'split' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
            <RegisterCard onSwitchToLogin={() => setView('login')} />
            <LoginCard
              onSwitchToRegister={() => setView('register')}
              onLoginSuccess={handleLoginSuccess}
            />
          </div>
        ) : view === 'register' ? (
          <div className="w-full">
            <RegisterCard onSwitchToLogin={() => setView('login')} />
          </div>
        ) : (
          <div className="w-full">
            <LoginCard
              onSwitchToRegister={() => setView('register')}
              onLoginSuccess={handleLoginSuccess}
            />
          </div>
        )}
      </main>
    </div>
  );
}