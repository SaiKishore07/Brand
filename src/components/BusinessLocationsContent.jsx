import React, { useState } from 'react';
import {
  MapPin,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Save,
  Check,
  Compass,
  Phone,
  Mail,
  User,
  Layers,
  ExternalLink,
  Plus
} from 'lucide-react';

export default function BusinessLocationsContent() {
  const [isSaved, setIsSaved] = useState(false);

  const [locations] = useState([
    {
      id: 1,
      name: 'Global Corporate Headquarters & R&D Campus',
      code: 'LOC-HQ-01',
      type: 'Corporate Registered Office & Design Center',
      status: 'Owned • Primary',
      address: 'Plot 42, H-Tech Zone, Madhapur, Hyderabad, Telangana 500081, India',
      area: '48,000 sq.ft Built-up Area',
      workforce: '450+ Personnel',
      contact: 'Rajesh Varma (VP Facilities)',
      email: 'facilities.hyd@acme-industries.com',
      coordinates: '17.4483° N, 78.3915° E',
      certifications: 'ISO 9001:2015, ISO 14001:2015'
    },
    {
      id: 2,
      name: 'Unit 1: Sanathnagar Precision Tooling & Assembly Hub',
      code: 'LOC-MFG-01',
      type: 'Heavy Industrial Fabrication & CNC Suite',
      status: 'Owned Industrial Facility',
      address: 'B-14, Sanathnagar Industrial Estate, Hyderabad, Telangana 500018, India',
      area: '62,000 sq.ft Factory Floor',
      workforce: '320+ Engineers & Machinists',
      contact: 'K. S. Narayanan (Plant Head)',
      email: 'plant.hyd@acme-industries.com',
      coordinates: '17.4571° N, 78.4384° E',
      certifications: 'AS9100D, CE Marking, Factory Lic #0914'
    },
    {
      id: 3,
      name: 'Unit 2: Chakan Foundry & Valve Forging Division',
      code: 'LOC-MFG-02',
      type: 'High-Pressure Metallurgical Foundry',
      status: 'Owned Industrial Facility',
      address: 'Plot G-22, MIDC Phase II, Chakan, Pune, Maharashtra 410501, India',
      area: '85,000 sq.ft Foundry & Testing Basin',
      workforce: '280+ Foundry Staff',
      contact: 'Vikas Deshmukh (General Manager)',
      email: 'foundry.pune@acme-industries.com',
      coordinates: '18.7584° N, 73.8643° E',
      certifications: 'API 6A, IATF 16949:2016'
    },
    {
      id: 4,
      name: 'European Engineering & Client Test Center',
      code: 'LOC-EUR-01',
      type: 'Offshore Subsidiary & Telemetry Lab',
      status: 'Leased Subsidiary Facility',
      address: 'Industriestraße 18, 80339 München, Bavaria, Germany',
      area: '22,000 sq.ft Testing Lab & Warehouse',
      workforce: '65+ European Technical Team',
      contact: 'Hans-Peter Schmidt (Managing Director EU)',
      email: 'munich.hub@acme-industries.com',
      coordinates: '48.1351° N, 11.5820° E',
      certifications: 'TÜV Rheinland, CE, DIN EN ISO 9001'
    },
    {
      id: 5,
      name: 'North American Logistics Depot & Assembly Hub',
      code: 'LOC-USA-01',
      type: 'Regional Distribution & Staging Yard',
      status: 'Leased Distribution Facility',
      address: '7400 North Austin Ave, Skokie, IL 60077, United States',
      area: '35,000 sq.ft Automated Warehouse',
      workforce: '40+ Logistics Staff',
      contact: 'Marcus Vance (Director of Supply Chain)',
      email: 'us.operations@acme-industries.com',
      coordinates: '42.0163° N, 87.7797° W',
      certifications: 'C-TPAT Tier 2, OSHA Compliant'
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
            3. BUSINESS &amp; CLASSIFICATION
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span>Business Locations &amp; Facilities</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              5 Operating Sites
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Verified corporate offices, manufacturing plants, metallurgical foundries, and international distribution hubs.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            252,000 sq.ft Total Capacity
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
                <span>Locations Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Locations</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Operating Sites</div>
          <div className="text-base font-bold text-slate-900 mt-1">5 Global Sites</div>
          <div className="text-xs text-sky-600 mt-1">India, Germany, USA</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Total Industrial Area</div>
          <div className="text-base font-bold text-slate-900 mt-1">252,000 sq.ft</div>
          <div className="text-xs text-emerald-600 mt-1">Foundry, CNC, Cleanrooms</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Workforce on Site</div>
          <div className="text-base font-bold text-slate-900 mt-1">1,150+ Employees</div>
          <div className="text-xs text-indigo-600 mt-1">Engineering &amp; Operations</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Compliance Standard</div>
          <div className="text-base font-bold text-slate-900 mt-1">100% Audited</div>
          <div className="text-xs text-emerald-600 mt-1">ISO 14001 &amp; Pollution CTO</div>
        </div>
      </div>

      {/* Locations Directory */}
      <div className="space-y-4">
        {locations.map((loc) => (
          <div
            key={loc.id}
            className="p-6 bg-white border border-slate-200 rounded-3xl shadow-2xs hover:border-sky-300 transition space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded">
                    {loc.code}
                  </span>
                  <h3 className="font-extrabold text-base text-slate-900">{loc.name}</h3>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{loc.type}</div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                {loc.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
              <div className="space-y-1.5">
                <div className="flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-800">{loc.address}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px] pl-5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>{loc.coordinates}</span>
                </div>
              </div>

              <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Facility Size:</span>
                  <strong className="text-slate-800 font-semibold">{loc.area}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Site Head:</span>
                  <strong className="text-slate-800 font-semibold">{loc.contact}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Direct Contact:</span>
                  <span className="font-mono text-sky-600 font-medium">{loc.email}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 text-[11px] text-slate-500">
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Certifications: {loc.certifications}
              </span>
              <span className="text-slate-400 font-mono">Workforce: {loc.workforce}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-2">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white rounded-xl font-semibold text-sm shadow-md transition flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Save Locations</span>
        </button>
      </div>
    </div>
  );
}
