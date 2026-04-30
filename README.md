# Pamela Morejon — Portfolio

A small Next.js site. Public pages live at `/`, the password-protected portfolio lives at `/oscar`.

## What's here

- `app/page.tsx` — minimal public homepage at `/` (no portfolio content).
- `app/oscar/page.tsx` — the actual portfolio (header, project grid, about, contact).
- `app/oscar/projects.ts` — **edit this file** to change projects.
- `app/oscar/login/` — the password gate (uses a server action + cookie).
- `middleware.ts` — redirects unauthenticated visitors from `/oscar/*` to `/oscar/login`.
- `public/projects/` — drop your screenshots here.

## Run locally

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000/oscar`. The default password is `Oscar`.

## Add your real screenshots

1. Export screenshots from Figma (PNG, ~1600px on the long edge looks great).
2. Save them to `public/projects/`, e.g. `public/projects/01-benefits-config.png`.
3. Open `app/oscar/projects.ts` and set the `image` field for each project to its path:

   ```ts
   image: "/projects/01-benefits-config.png",
   ```

4. Adjust copy (titles, summaries, year) in the same file.

## Deploy to Vercel (with pamelamorejon.com/oscar)

You said you're hosting your domain on Vercel already, so this is the path.

### 1. Push the code to GitHub

From inside the `portfolio/` folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
gh repo create pamela-portfolio --private --source=. --push
```

(If you don't have the `gh` CLI: create a new private repo on github.com, then `git remote add origin <url>` and `git push -u origin main`.)

### 2. Import the repo into Vercel

- Go to https://vercel.com/new and import the GitHub repo you just pushed.
- Framework preset: **Next.js** (auto-detected).
- Leave the build/output settings as default.
- Click **Deploy**. You'll get a temporary URL like `pamela-portfolio.vercel.app`.

### 3. Set the password env var

In the Vercel project: **Settings → Environment Variables → Add**

| Name            | Value   | Environments                    |
| --------------- | ------- | ------------------------------- |
| `SITE_PASSWORD` | `Oscar` | Production, Preview, Development |

After saving, hit **Deployments → ⋯ → Redeploy** so the new env var takes effect.

### 4. Attach pamelamorejon.com

If `pamelamorejon.com` is currently pointed at a different Vercel project, you'll need to **remove it from that project first** (Settings → Domains → remove). Then in this project:

- **Settings → Domains → Add → `pamelamorejon.com`**
- Add `www.pamelamorejon.com` too if you want it to work with www.
- Vercel will tell you the DNS records are already correct (since the domain is already on Vercel).

### 5. Visit pamelamorejon.com/oscar

You'll see the login screen. Type `Oscar`. The cookie persists for 30 days.

If you want to share access with someone, just send them the URL and the password — no per-user account setup.

## Changing the password

Update `SITE_PASSWORD` in Vercel and redeploy. (The current sessions stay logged in for 30 days; if you want to force everyone out, change the cookie name in `middleware.ts` and `app/oscar/login/actions.ts`.)

## A note on what "password protected" means here

This is a single shared password gate — fine for limiting your work to people you've sent the password to, but it's not real per-user auth. Anyone with the password can read it, and they could share it. Treat it like a hotel keycard: convenient, not a vault.

## Where things live (mental map)

```
portfolio/
├── app/
│   ├── page.tsx                   ← public "/" homepage
│   ├── layout.tsx
│   ├── globals.css
│   └── oscar/
│       ├── page.tsx               ← /oscar  (the portfolio)
│       ├── projects.ts            ← edit this to change projects
│       ├── ProjectTile.tsx
│       └── login/
│           ├── page.tsx           ← /oscar/login
│           └── actions.ts         ← server action (sets cookie)
├── middleware.ts                  ← protects /oscar/*
├── public/projects/               ← your screenshots go here
├── tailwind.config.ts
└── package.json
```
