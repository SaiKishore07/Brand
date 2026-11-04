import React, { useState } from 'react';

export default function LoginCard({ onSwitchToRegister, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [orgCode, setOrgCode] = useState('');
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLoginSuccess) {
      onLoginSuccess({ email, orgCode });
    } else {
      alert(`Signing into WEBUOS Brand Workspace with ${email}...`);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm max-w-xl mx-auto">
      {/* Pill Badge */}
      <div className="mb-4">
        <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-sky-50 text-sky-600 border border-sky-200">
          ORGANIZATION / BRAND LOGIN
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-2xl sm:text-[26px] font-bold text-slate-900 tracking-tight">
        Brand account login
      </h1>
      <p className="text-sm text-slate-500 mt-1 mb-6">
        Enter your credentials to access your WEBUOS Brand workspace.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Work Email / Brand ID */}
        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-1.5" htmlFor="loginEmail">
            Work Email or Brand ID
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-slate-400 pointer-events-none">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect width="20" height="16" x="2" y="4" rx="2" strokeWidth="1.8" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <input
              id="loginEmail"
              type="email"
              placeholder="you@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="block text-sm font-semibold text-slate-800" htmlFor="loginPassword">
              Password
            </label>
            <a
              href="#forgot"
              onClick={(e) => {
                e.preventDefault();
                alert(`Password reset link will be sent to ${email || 'your email'}`);
              }}
              className="text-xs font-semibold text-sky-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-slate-400 pointer-events-none">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect width="18" height="11" x="3" y="11" rx="2" strokeWidth="1.8" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <input
              id="loginPassword"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 pl-11 pr-11 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 text-slate-400 hover:text-slate-700 p-1"
              title="Toggle password"
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.88 9.88a3 3 0 1 0 4.24 4.24M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61M2 2l20 20" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Company / Workspace Code */}
        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-1.5" htmlFor="loginOrgCode">
            <span className="flex justify-between items-center">
              <span>Company / Workspace Code</span>
              <span className="text-xs font-normal text-slate-400">Optional</span>
            </span>
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-slate-400 pointer-events-none">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect width="16" height="20" x="4" y="2" rx="2" strokeWidth="1.8" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
              </svg>
            </span>
            <input
              id="loginOrgCode"
              type="text"
              placeholder="e.g. acme-brand"
              value={orgCode}
              onChange={(e) => setOrgCode(e.target.value)}
              className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition"
            />
          </div>
        </div>

        {/* Security Banner */}
        <div className="bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 flex items-center gap-3">
          <span className="text-blue-600 flex-shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v-4M12 8h.01" />
            </svg>
          </span>
          <span className="text-xs sm:text-sm text-slate-700">
            Protected by WEBUOS enterprise Single Sign-On (SSO) &amp; multi-factor verification.
          </span>
        </div>

        {/* Remember */}
        <div className="flex items-center gap-2.5 pt-1">
          <input
            id="remember"
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
          />
          <label htmlFor="remember" className="text-xs sm:text-sm text-slate-600 cursor-pointer">
            Keep this device trusted for 30 days
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-12 bg-sky-600 hover:bg-sky-700 text-white rounded-xl sm:rounded-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition duration-150"
        >
          <span>Sign In to Brand Account</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </form>

      {/* Footer */}
      <div className="text-center mt-5 text-sm text-slate-500">
        Don't have a business account?{' '}
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="text-sky-600 font-semibold hover:underline inline-flex items-center gap-1"
        >
          Register organization &rarr;
        </button>
      </div>
    </div>
  );
}