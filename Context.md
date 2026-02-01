

### **Project Overview: Cerelon Partner Digital Platform**

**Cerelon Partner** is a business consultancy firm targeting exporters, startups, and SMEs. The primary objective of this website is to establish professional credibility and act as a lead-generation engine. The platform must be "fast, scalable, and easy to manage" for a non-technical owner.

---

### **Core Architecture: The "Lean-MERN" Hybrid**

Instead of a traditional MongoDB setup, you are using a Serverless-to-Sheet architecture to keep the backend simple and accessible for the client.

* 
**Frontend:** React (Vite) + Tailwind CSS (for "clean, professional, corporate design" ).


* **Backend:** Vercel Serverless Functions (Node.js) for handling form logic.
* **Storage:** Google Sheets API (replaces MongoDB for non-tech "Excel-style" lead management).
* **Notifications:** Resend or SendGrid API (for instant email alerts).

---

### **Project Roadmap**

#### **Phase 1: Foundation & Lead Engine**

* **Step 1: Environment Setup**
* 
**Action:** Initialize a React project using **Vite**; install **Tailwind CSS** and **Framer Motion** for "minimal animations".


* 
**Result:** A high-speed frontend boilerplate optimized for "fast loading".




* **Step 2: Google Sheets Integration**
* 
**Action:** Set up a Google Cloud Service Account and a dedicated Google Sheet with headers for "Name," "Email," and "Inquiry".


* **Result:** A "database" that the client can manage like an Excel file without any tech knowledge.


* **Step 3: The Vercel Function**
* **Action:** Create a serverless function (`/api/contact`) to receive form data, append it to the Google Sheet, and trigger a notification email.
* 
**Result:** A functional "lead-generation platform" ready for the UI.





#### **Phase 2: Frontend Construction (The Five Pages)**

* **Step 1: Home & Hero Section**
* 
**Action:** Implement the hero text: "Cerelon Partner helps businesses grow through technology solutions, digital branding, and export communication support".


* 
**Result:** A clear "First impression" for visitors.




* **Step 2: The Three Service Pillars**
* 
**Action:** Create a responsive grid layout for **Technology Solutions**, **Digital & Creative**, and **Export Growth Support**.


* 
**Result:** Clarity on core business offerings.




* **Step 3: About & Why Choose Us**
* 
**Action:** Detail the "process-driven approach" and "confidentiality". Include a placeholder for the ISO 9001 certification.


* 
**Result:** Established business "trust and credibility".




* **Step 4: Contact & WhatsApp Integration**
* 
**Action:** Build the "Simple contact form" and a floating WhatsApp button.


* 
**Result:** Direct support for lead generation.





#### **Phase 3: Optimization & Launch**

* **Step 1: SEO & Analytics**
* 
**Action:** Add metadata for each page and integrate **Google Analytics**.


* 
**Result:** A site that is "SEO-friendly" and ready to track traffic.




* **Step 2: SSL & Domain Deployment**
* 
**Action:** Deploy the build to **Vercel** and point `cerelonpartner.com` to the Vercel DNS.


* **Result:** A secure, live site at the client’s preferred domain.


* **Step 3: Final Handover**
* 
**Action:** Provide the client with the URL to their Google Sheet and their Google Business Profile integration.


* 
**Result:** A "flawless" delivery that is "easy to manage" for the non-tech owner.





---

### **Technical & Content Constraints Checklist**

* 
**Design:** Maintain a "Corporate" feel—no "exaggerated claims" or "fake testimonials".


* 
**Responsiveness:** Must work perfectly on Mobile, Tablet, and Desktop.


* 
**Language:** Use "Clear, outcome-focused language" throughout.


* 
**Scope:** Strictly avoid adding "Client login/dashboard" or "Complex product features".



**Important Instructions**
Write full code wherever needed, Explain each step and function you are using as if you are teaching to someone, explain what have you done in a particular step and why you have done it this way, mention file name along with its extentions and folder structure each time a new file is created, Proceed step by step, dont mix things from next step in any previous step. Complete a step, inform me that the step is completed, move onto next step and so on. Dont proceed without me telling to, Whenever there is a need to modify a file, inform me what file needs it and then ask for its latest version by mentioning its name and path. Dont assume anything, ue high industry level standards.