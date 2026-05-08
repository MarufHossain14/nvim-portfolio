# Terminal Portfolio

A compact portfolio site with a terminal-style interface. Visitors type commands into the prompt to view profile content, projects, links, and contact information.

## Features

- Terminal prompt UI with command history, autocomplete, loading output, and keyboard shortcuts.
- Theme switching between `kanagawa`, `catppuccin`, and `rosepine`.
- Commands for `about`, `education`, `skills`, `projects`, `experience`, `resume`, `contact`, and `links`.
- API routes for projects, contacts, and links.
- Fallback contact and link data built into the codebase, so local development does not need external services.
- Cloudflare Workers deployment configuration through OpenNext.

## Stack

- Next.js 15 App Router
- React 19
- CSS Modules
- Geist Mono
- OpenNext for Cloudflare
- Wrangler

## Setup

Install dependencies:

```bash
pnpm install
```

Run the dev server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

No environment variables are required for normal local development.

## Commands

| Command | Description |
| --- | --- |
| `help` | List commands and key bindings |
| `keys` | Show key bindings |
| `theme` | Cycle the active theme |
| `about` | Show the profile summary |
| `education` | Show education details |
| `skills` | Show technical skills |
| `projects` | Load projects from `/api/projects` |
| `experience` | Show work experience |
| `resume` | Open the external resume URL |
| `contact` | Load contacts from `/api/contacts` |
| `links` | Load links from `/api/links` |
| `clear` / `q` | Clear the terminal output |

## Keyboard Shortcuts

| Key | Action |
| --- | --- |
| `i` | Focus the terminal input |
| `Enter` | Run the typed command |
| `Tab` | Autocomplete the typed command |
| `Up` / `Down` | Move through command history |
| `Esc` | Clear the input, or blur when already empty |

## Routes

| Route | Description |
| --- | --- |
| `/` | Terminal portfolio UI |
| `/api/projects` | Returns project data defined in `app/api/projects/route.js` |
| `/api/contacts` | Returns KV-backed contacts when available, otherwise fallback contacts |
| `/api/links` | Returns KV-backed links when available, otherwise fallback links |
| `/s/[shortlink]` | Redirect route that uses Airtable env vars if the route is used |

## Data

Projects are defined directly in `app/api/projects/route.js`.

Contacts and links are loaded through `utils/contacts.js` and `utils/links.js`. Those helpers try Cloudflare KV first:

- `CONTACTS_KV`, key `contacts`
- `LINKS_KV`, key `links`

If KV is unavailable or empty, the app uses the fallback arrays in those files.

The `/s/[shortlink]` route is separate from the main portfolio flow. It reads these variables only when that redirect route is requested:

- `AIRTABLE_BASE_ID`
- `AIRTABLE_TABLE_ID`
- `AIRTABLE_TOKEN`

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Next.js dev server |
| `pnpm build` | Build the app |
| `pnpm start` | Start the production Next.js server after a build |
| `pnpm lint` | Run `next lint` |
| `pnpm preview` | Build and preview with OpenNext Cloudflare |
| `pnpm deploy` | Build and deploy with OpenNext Cloudflare |
| `pnpm upload` | Build and upload with OpenNext Cloudflare |
| `pnpm cf-typegen` | Generate Cloudflare environment types |

`pnpm lint` currently passes, but `next lint` prints a deprecation warning in Next.js 15.

## Structure

```text
app/
  api/
    contacts/       Contact API route
    links/          Links API route
    projects/       Projects API route
  s/[shortlink]/    Airtable-backed redirect route
  layout.js         Root layout and metadata
  page.js           Home page
components/         Terminal UI components
utils/
  commandHelper.js  Command definitions and output renderers
  contacts.js       Contact data loader
  links.js          Link data loader
  kv.js             Cloudflare KV helper
public/             Static assets
```

## Deployment

Cloudflare deployment is configured with `open-next.config.ts` and `wrangler.jsonc`.

```bash
pnpm deploy
```

`wrangler.jsonc` contains placeholder KV namespace IDs for `CONTACTS_KV` and `LINKS_KV`. Replace them if production should read contacts and links from Cloudflare KV.
