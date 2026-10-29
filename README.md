# Vishesh Kumar Modanwal — Interactive Portfolio

A responsive React + TypeScript portfolio built with Vite, Framer Motion and Lucide icons. The navigation switches between dedicated page views (Home, About, Work & Experience, Skills, Projects, Contact) rather than scrolling one long page. Includes a dark/light theme, motion transitions, a 3-state portrait placeholder slider, domain filters, searchable project cards, project report-card modals, and responsive mobile navigation.

## Run on Windows

1. Install Node.js 20+ (current LTS recommended).
2. Extract the ZIP.
3. Open PowerShell inside `vishesh-portfolio`.
4. Run:

   ```powershell
   npm install
   npm run dev
   ```

5. Open the localhost URL printed by Vite (normally `http://localhost:5173`).
6. Check the production build before deployment:

   ```powershell
   npm run build
   npm run preview
   ```

## Main files

- `src/App.tsx` — pages, content, domain filters, project records and report-card modal.
- `src/styles.css` — theme tokens, responsive layout, motion styling and breakpoints.
- `index.html` — page title and metadata.

## Important edits before publishing

- Replace the stylized portrait placeholders on the About page with 2–3 of your own photos. Place the images in `public/images` and update the `photo-slide` markup in `src/App.tsx` to use them. Do not use another person's portrait as your own.
- Add your college name, verify the B.Tech year range (`2022–2026` is currently marked expected), and add earlier education if desired.
- Replace `mailto:your.email@example.com` with your actual professional email.
- Replace LinkedIn, GitHub and Instagram homepages with your real profile URLs.
- Replace the `'#'` GitHub and live-project URLs in the `projects` array with your actual repositories and deployments. The app explicitly warns when these are placeholders.
- Add certificate files/URLs and verify exact titles, issuers, and internship dates against your own documents.
- Review project status labels. Some entries are clearly marked as concepts, practice work, or in progress; don't describe those as completed until the implementation exists.
- Verify all results and metrics against your final notebooks. In particular, the diabetes metrics are prior recorded values and should be re-checked against the final split before public use.
- Skill lists are a toolkit inventory, not a claim of expert proficiency. Remove any technology you have not actually used.

## Content accuracy note

Internship/program entries reflect information previously shared in conversation: Bluestock Fintech (Data Analyst, 2 months), Robokwik/Prabandhan IIT Kanpur (Machine Learning with Python; sales-forecast project), IBM (Cyber Security virtual internship), and TechSaksham/Edunet Foundation (AI Transformative Learning with Microsoft and SAP collaboration). Certificate links and exact dates are intentionally not fabricated.

## Deployment

Build with `npm run build`; deploy the generated `dist/` directory to Vercel, Netlify, or another static host. Use `npm run preview` to inspect the production build locally first.
