import React, { useState } from 'react';
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  Save,
  Check,
  UserPlus,
  Mail,
  Shield,
  Key,
  MoreVertical,
  Trash2,
  UserCheck
} from 'lucide-react';

export default function TeamManagementContent() {
  const [isSaved, setIsSaved] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('Brand Manager');

  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@acme-industries.com',
      role: 'Brand Administrator (Owner)',
      department: 'Corporate Executive Desk',
      accessLevel: 'Full Master Access',
      status: 'Active',
      lastActive: 'Active Now'
    },
    {
      id: 2,
      name: 'Dr. Raghavendra Rao',
      email: 'raghavendra.rao@acme-industries.com',
      role: 'Executive Custodian',
      department: 'Board of Directors',
      accessLevel: 'Legal Signoff & Approvals',
      status: 'Active',
      lastActive: 'Today at 09:15 AM'
    },
    {
      id: 3,
      name: 'Anand Kumar',
      email: 'anand.kumar@acme-industries.com',
      role: 'Operations Administrator',
      department: 'Operations & Procurement',
      accessLevel: 'Commercial & Distr. Rights',
      status: 'Active',
      lastActive: 'Yesterday at 04:30 PM'
    },
    {
      id: 4,
      name: 'Suhasini Mehta',
      email: 'suhasini.m@acme-industries.com',
      role: 'Technical Lead',
      department: 'R&D / Telemetry Software',
      accessLevel: 'IP & Cloud Platform API',
      status: 'Active',
      lastActive: '2 days ago'
    },
    {
      id: 5,
      name: 'Rajesh Varma',
      email: 'rajesh.varma@acme-industries.com',
      role: 'Supply Chain Manager',
      department: 'Global Facilities & Logistics',
      accessLevel: 'Distributors & Customs Portal',
      status: 'Active',
      lastActive: '3 days ago'
    },
    {
      id: 6,
      name: 'Alisha Chen',
      email: 'alisha.chen@acme-industries.com',
      role: 'Compliance Specialist',
      department: 'Legal & Regulatory Audit',
      accessLevel: 'Audit & Documents Vault',
      status: 'Active',
      lastActive: '1 week ago'
    }
  ]);

  const handleInvite = (e) => {
    e.preventDefault();
    if (!inviteEmail) return;
    const newMember = {
      id: Date.now(),
      name: inviteEmail.split('@')[0].replace('.', ' '),
      email: inviteEmail,
      role: inviteRole,
      department: 'General Corporate',
      accessLevel: 'Departmental Standard',
      status: 'Invited',
      lastActive: 'Invitation Pending'
    };
    setMembers([...members, newMember]);
    setInviteEmail('');
    setShowInviteModal(false);
    setIsSaved(false);
  };

  const handleRemove = (id) => {
    setMembers(members.filter(m => m.id !== id));
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
            6. ACCOUNT SETTINGS
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span>Team Management &amp; Permissions</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-mono">
              {members.length} Members
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage user roles, multi-factor authentication requirements, and role-based access control (RBAC) across the WEBUOS Brand Workspace.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowInviteModal(true)}
            className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs transition"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Invite Team Member</span>
          </button>
        </div>
      </div>

      {/* Overview Stat Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Active Members</div>
          <div className="text-base font-bold text-slate-900 mt-1">{members.length} Users</div>
          <div className="text-xs text-emerald-600 mt-1">100% MFA Enforced</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Administrators</div>
          <div className="text-base font-bold text-slate-900 mt-1">2 Master Admins</div>
          <div className="text-xs text-sky-600 mt-1">Board Signoff Rights</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Access Protocol</div>
          <div className="text-base font-bold text-slate-900 mt-1">SAML 2.0 / Okta</div>
          <div className="text-xs text-indigo-600 mt-1">Enterprise SSO Active</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase">Session Policy</div>
          <div className="text-base font-bold text-slate-900 mt-1">Hardware Token</div>
          <div className="text-xs text-emerald-600 mt-1">FIDO2 / YubiKey Ready</div>
        </div>
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="p-5 bg-sky-50/70 border border-sky-200 rounded-2xl space-y-3">
          <div className="text-xs font-bold text-sky-900 uppercase">Invite Brand Workspace Member</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="email"
              placeholder="colleague@company.com"
              value={inviteEmail}
              onChange={e => setInviteEmail(e.target.value)}
              className="h-10 px-3 bg-white border border-slate-200 rounded-xl text-xs font-semibold sm:col-span-2"
            />
            <select
              value={inviteRole}
              onChange={e => setInviteRole(e.target.value)}
              className="h-10 px-3 bg-white border border-slate-200 rounded-xl text-xs font-semibold"
            >
              <option>Brand Manager</option>
              <option>Operations Specialist</option>
              <option>Legal Counsel</option>
              <option>Read-Only Auditor</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowInviteModal(false)}
              className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-200 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleInvite}
              className="px-4 py-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg shadow-xs"
            >
              Send Invitation
            </button>
          </div>
        </div>
      )}

      {/* Team Member Table */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider">
                <th className="pb-3 px-2">Member</th>
                <th className="pb-3 px-2">Role &amp; Department</th>
                <th className="pb-3 px-2">Permissions Scope</th>
                <th className="pb-3 px-2">Status</th>
                <th className="pb-3 px-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {members.map((m) => (
                <tr key={m.id} className="hover:bg-slate-50/70 transition">
                  <td className="py-3.5 px-2">
                    <div className="font-bold text-slate-900">{m.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{m.email}</div>
                  </td>
                  <td className="py-3.5 px-2">
                    <div className="font-semibold text-slate-800">{m.role}</div>
                    <div className="text-[11px] text-slate-400">{m.department}</div>
                  </td>
                  <td className="py-3.5 px-2 font-mono text-[11px] text-sky-700">{m.accessLevel}</td>
                  <td className="py-3.5 px-2">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                      {m.status}
                    </span>
                    <div className="text-[10px] text-slate-400 mt-0.5">{m.lastActive}</div>
                  </td>
                  <td className="py-3.5 px-2 text-right">
                    {m.id !== 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemove(m.id)}
                        className="text-slate-400 hover:text-red-500 transition p-1"
                        title="Remove member"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-2">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white rounded-xl font-semibold text-sm shadow-md transition flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Save Team Changes</span>
        </button>
      </div>
    </div>
  );
}

