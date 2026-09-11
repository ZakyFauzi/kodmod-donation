# 💙 KODMOD Open Donation Platform

> **Supporting Indonesian Student Innovation for hackAstone 2026 Grand Final in Amsterdam**  
> KODMOD is an **Agentic AI Learning Assistant** designed to empower visually impaired students in Indonesia. Born from **hackAstone**, KODMOD has advanced through intense national selection stages to become a Grand Finalist representing Indonesia.

---

## 🚀 Features

- **Clean Minimalist Design System**: Built with modern typography (Poppins), elegant white space, subtle blue accents, and responsive UI components.
- **Real-Time Live Counter**: Tracks target vs. current raised funds with a live progress bar percentage.
- **Supabase Backend Integration**:
  - Direct real-time aggregation of confirmed donations.
  - Automatic updates on the total funds collected and total donor count.
  - Live **Donor Board / Wall of Appreciation** showing donor names, messages, and timestamps.
- **Interactive Donation Form**:
  - Support for **QRIS Payment** (with quick-copy capabilities and QR scan view).
  - Support for **Bank Transfer** (BCA account details with one-click copy buttons for account number and amount).
  - Payment proof upload feature powered by **Supabase Storage**.
- **Interactive Progress Timeline**: Showcases KODMOD's journey from Ideation & Development, hackAstone Grand Final, to Post-Grand Final Expansion.
- **Sponsorship & Partnership Tiers**: Clear tier breakdown (Gold, Silver, Bronze) and strategic collaboration benefits for organizations.
- **Team Showcase ("People Behind KODMOD")**: Highlights key members of Team KODMOD.

---

## 📁 Project Structure

```text
kodmod-donation/
├── index.html          # Main single-page web application (HTML, CSS, JS)
├── config.js.example   # Configuration template for environment variables & settings
├── config.js           # Local environment configuration (Git-ignored)
├── logo.png            # KODMOD official brand logo
├── qris.jpg            # QRIS payment code image
└── README.md           # Project documentation
```

---

## 🛠️ Setup & Configuration

### 1. Configure Local Environment
1. Duplicate `config.js.example` and rename it to `config.js`:
   ```bash
   cp config.js.example config.js
   ```
2. Open `config.js` and insert your credentials and campaign details:
   ```javascript
   window.KODMOD_CONFIG = {
     SUPABASE_URL: "https://your-supabase-project.supabase.co",
     SUPABASE_ANON_KEY: "your-supabase-anon-key",
     
     // Campaign Settings
     CAMPAIGN_TARGET: 25000000,
     GRAND_FINAL_DATE: "2026-10-29",
     
     // Bank Information
     BANK_NAME: "BCA",
     BANK_ACCOUNT_NUMBER: "1234567890",
     BANK_ACCOUNT_NAME: "Gabriel Edbert Liandrew",
     
     // Contact Information
     WHATSAPP_NUMBER: "6281328777891",
     EMAIL: "gabrieledbert@student.telkomuniversity.ac.id"
   };
   ```

---

## 🗄️ Supabase Database Schema

To enable real-time tracking and proof uploads, set up the following database table and storage bucket in your Supabase Dashboard:

### 1. `donations` Table
Create a table named `donations` with RLS (Row Level Security) enabled:

```sql
CREATE TABLE public.donations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT,
    amount NUMERIC NOT NULL,
    payment_method TEXT NOT NULL, -- 'qris' or 'bank'
    message TEXT,
    proof_url TEXT,
    is_verified BOOLEAN DEFAULT FALSE -- Set to true in Supabase dashboard to include in public total & donor board
);

-- Enable Read access for everyone (for verified donations)
CREATE POLICY "Allow public read access to verified donations"
ON public.donations FOR SELECT
USING (is_verified = true);

-- Enable Insert access for public (donors submitting form)
CREATE POLICY "Allow public insert donations"
ON public.donations FOR INSERT
WITH CHECK (true);
```

### 2. Storage Bucket (`payment-proofs`)
1. Go to **Supabase Dashboard** -> **Storage**.
2. Create a **Public Bucket** named `payment-proofs`.
3. Add a policy allowing public upload (`INSERT` access).

---

## 🌐 Running Locally

Since this is a lightweight static web app built with Vanilla JS, HTML, and CSS, you can run it using any local web server.

### Option A: VS Code Live Server
Open `index.html` with the **Live Server** extension in VS Code.

### Option B: Python HTTP Server
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 📩 Contact & Inquiry

For sponsorship inquiries, partnerships, or more information regarding KODMOD:
- **WhatsApp**: [+62 813-2877-7891](https://wa.me/6281328777891)
- **Email**: gabrieledbert@student.telkomuniversity.ac.id
- **Instagram**: [@kodmod.ai](https://instagram.com/kodmod.ai)
