import React, { useState } from 'react';

export default function RegisterCard({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    alert(`Account registration submitted for ${formData.email}! Verifying with one-time code.`);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm max-w-2xl mx-auto">
      {/* Pill Badge */}
      <div className="mb-4">
        <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-sky-50 text-sky-600 border border-sky-200">
          ORGANIZATION / BUSINESS REGISTRATION
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-2xl sm:text-[26px] font-bold text-slate-900 tracking-tight">
        Account details
      </h1>
      <p className="text-sm text-slate-500 mt-1 mb-6">
        Fill in your information to create your WEBUOS account.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1.5" htmlFor="fullName">
              Full Name
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" strokeWidth="1.8" />
                </svg>
              </span>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>
          </div>

          {/* Company / Organization */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1.5" htmlFor="company">
              Company / Organization
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect width="16" height="20" x="4" y="2" rx="2" strokeWidth="1.8" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
                </svg>
              </span>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Acme Industries"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1.5" htmlFor="email">
              Email
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect width="20" height="16" x="2" y="4" rx="2" strokeWidth="1.8" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>
          </div>

          {/* Phone No */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1.5" htmlFor="phone">
              Phone No
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1.5" htmlFor="password">
              Password
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect width="18" height="11" x="3" y="11" rx="2" strokeWidth="1.8" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={handleChange}
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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1.5" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect width="18" height="11" x="3" y="11" rx="2" strokeWidth="1.8" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full h-12 pl-11 pr-11 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3.5 text-slate-400 hover:text-slate-700 p-1"
                title="Toggle password"
              >
                {showConfirmPassword ? (
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
        </div>

        {/* Verification banner */}
        <div className="bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 flex items-center gap-3">
          <span className="text-blue-600 flex-shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v-4M12 8h.01" />
            </svg>
          </span>
          <span className="text-xs sm:text-sm text-slate-700">
            After registration you'll verify your email and phone with a one-time code.
          </span>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2.5 pt-1">
          <input
            id="terms"
            name="agreeTerms"
            type="checkbox"
            required
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="w-4 h-4 mt-0.5 rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
          />
          <label htmlFor="terms" className="text-xs sm:text-sm text-slate-600 leading-snug cursor-pointer">
            I agree to the <a href="#terms" className="text-sky-600 font-semibold hover:underline">Terms &amp; Conditions</a> and <a href="#privacy" className="text-sky-600 font-semibold hover:underline">Privacy Policy</a> of WEBUOS.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-12 bg-sky-600 hover:bg-sky-700 text-white rounded-xl sm:rounded-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition duration-150"
        >
          <span>Create Business Account</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </form>

      {/* Footer */}
      <div className="text-center mt-5 text-sm text-slate-500">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-sky-600 font-semibold hover:underline inline-flex items-center gap-1"
        >
          Sign in &rarr;
        </button>
      </div>
    </div>
  );
}
