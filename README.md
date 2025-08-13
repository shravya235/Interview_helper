## Interview Helper – Frontend (Next.js App Router)

- TypeScript, TailwindCSS
- React Hook Form + Zod validation
- SWR-ready, no server calls by default
- PDF export (html2canvas + jsPDF)

### Folder structure (inside `src/`)

```
src/
  app/
    about/page.tsx
    contact/page.tsx
    faq/page.tsx
    login/page.tsx
    layout.tsx
    page.tsx
    globals.css
  components/
    Header.tsx
    Footer.tsx
    HomeClient.tsx
    forms/UserInputForm.tsx
    dashboard/Dashboard.tsx
    dashboard/PDFButton.tsx
  lib/
    pipeline.ts
    validators.ts
  types/
    pipeline.ts
```

### Install and run

```bash
# from repository root
pnpm i   # or: npm i  |  yarn
pnpm dev # http://localhost:3000
```

### Build

```bash
pnpm build && pnpm start
```

### Notes
- Static marketing pages (About, FAQ, Contact) are pre-rendered.
- Heavy dashboard is client-only and code-split via dynamic import.
- Form validation is strict but lightweight.
- Replace `runPipeline` with your real API integration later.
