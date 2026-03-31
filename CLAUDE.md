@AGENTS.md

# WR Content Versioner

World Relief U.S. Office Content Versioning App. Allows staff to paste content (emails, invitations) and get Claude-powered customized versions for each selected U.S. office, all while staying within the World Relief brand guide.

## Stack
- Next.js 16, React 19, Tailwind 4
- Anthropic SDK (`@anthropic-ai/sdk`) for AI-powered content versioning
- Vercel deployment

## Architecture
- Single-page app with password gate
- `/api/auth` - Password verification (cookie-based, 24hr expiry)
- `/api/version` - Claude API content versioning endpoint
- Office configs in `src/config/offices.ts` (4 placeholder offices, expandable to 16)
- Brand rules in `src/config/brand.ts` (World Relief brand guide voice/tone/terminology)

## Brand Colors
- Primary: #009DDC (World Relief Blue)
- Secondary: #E9C31E (yellow), #00AF9A (teal), #823D82 (purple)
- Grays: 50% (#808080) and 80% (#333333) black
- Font: Arial (digital), Gotham (design only)

## Environment Variables
- `ANTHROPIC_API_KEY` - Claude API key
- `APP_PASSWORD` - Shared password for access gate
