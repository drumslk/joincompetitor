# Competitor — Landing Page

Landing page for **Competitor**, *The Worldwide Fitness League* — "The World Competes Here".

Built from the provided mockup: the entire page is static/visual, and the **only dynamic
element is the "Join the Waitlist" flow**, which opens a modal asking for an email address
and stores it in a simple SQLite database.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (Dialog, Input, Button, Sonner toasts)
- **lucide-react** icons + custom SVGs
- **better-sqlite3** for the waitlist database (no external service required)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

## Waitlist

- The "Join the Waitlist" buttons (header, hero, founding section, mobile menu) all open the
  same modal (`src/components/waitlist.tsx`).
- Submitting posts to `POST /api/waitlist`, which validates the email and inserts it into
  SQLite. Duplicate emails are handled idempotently.
- The database lives at `./data/waitlist.db` (created automatically, git-ignored).
- `GET /api/waitlist` returns the current sign-up count.

Inspect sign-ups:

```bash
node -e "const db=require('better-sqlite3')('data/waitlist.db'); console.table(db.prepare('SELECT * FROM waitlist').all());"
```

## Structure

```
src/
  app/
    layout.tsx            # fonts, metadata, WaitlistProvider, Toaster
    page.tsx              # assembles all sections
    api/waitlist/route.ts # POST (sign up) + GET (count)
  components/
    waitlist.tsx          # modal + context + reusable CTA button
    logo.tsx              # angular red "C" mark + wordmark
    sections/             # header, hero, how-it-works, challenges, road, founding, faq, footer
  lib/
    db.ts                 # better-sqlite3 connection + schema
```
