# Brand Business Portal | WEBUOS Suite

A production-ready implementation of the **Organization / Business Registration**, **Brand Login**, and **Brand Workspace Sidebar** matching your reference design.

---

## 📁 File Structure

```text
Brand/
├── index.html                           # Vite entry point
├── preview.html                         # Standalone interactive suite with full sidebar & demo
├── register.html                        # Dedicated standalone registration page
├── login.html                           # Dedicated standalone brand login page
├── package.json                         # Scripts & dependencies (Vite, React 18, Tailwind, Lucide)
├── vite.config.js                       # Vite configuration
├── tailwind.config.js                   # Tailwind configuration
└── src/
    ├── main.jsx                         # React entry point
    ├── App.jsx                          # Main view switcher (Register, Login, Workspace, Split)
    ├── index.css                        # Tailwind directives and base typography
    └── components/
        ├── RegisterCard.jsx             # Organization & Business Registration card
        ├── LoginCard.jsx                # Brand Login card (triggers workspace on sign-in)
        ├── BrandSidebar.jsx             # 6-section sidebar matching reference with search & theme
        ├── WorkspaceContent.jsx         # Dynamic content view for each selected section
        └── BrandWorkspace.jsx           # Complete authenticated dashboard layout
```

---

## 🗂️ 6 Sidebar Modules Included

1. **1. OVERVIEW & IDENTITY**
   - Overview
   - Personal Information
   - Communication *(Verified badge)*
2. **2. BRAND INFORMATION**
   - Brand Profile *(Active badge)*
   - Brand Identity
   - Brand Description
   - Brand History
   - Brand Presence
3. **3. BUSINESS & CLASSIFICATION**
   - Company Information
   - Industry Hierarchy
   - Category Hierarchy
   - Business Activities
   - Business Locations
4. **4. OWNERSHIP & VERIFICATION**
   - Brand Ownership *(Verified badge)*
   - Trademark Information
   - Legal & Tax Information *(Verified badge)*
   - Legal Documents *(5 Docs badge)*
   - Brand Verification *(Certified badge)*
5. **5. BUSINESS NETWORK**
   - Parent Company
   - Associated Companies
   - Authorized Representatives
   - Business Partnerships
   - Authorized Distributors
6. **6. ACCOUNT SETTINGS**
   - Team Management *(6 Members badge)*
   - Notifications *(3 New badge)*
   - Privacy Settings
   - Account Settings

---

## 🎨 Reference Design Features
- **Search Settings Bar**: Filter items across all 6 sections in real-time.
- **Pill Active State**: Rounded card pill with dedicated icon badge, subtle border, and custom brand color palette.
- **Color Accent Switcher**: Choose between Brand Royal Blue, Reference Cyan/Aqua, Deep Indigo, and Emerald.
- **Appearance Widget**: Segmented Light / Dark / System mode controller.
- **Back to WEBUOS**: Quick button to return to login or portal.

---

## 🚀 Running the App
In your terminal, run:
```bash
pnpm run dev
```
Then open `http://localhost:5173`.
You can sign in from the Brand Login page to enter the workspace, or click the **"Brand Workspace (Sidebar)"** button in the top navigation bar.
