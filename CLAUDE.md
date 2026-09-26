# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ClipThreat Studio is a security education tool that demonstrates clipboard API exploitation techniques through an interactive web interface. The project is a static website demonstrating various clipboard-related security vulnerabilities for educational purposes.

## Architecture

The project consists of a single-page application with tab-based navigation:

- **index.html**: Main entry point with tab structure and UI elements
- **style.css**: Styling for cards, tabs, and warning elements
- **js/main.js**: Tab switching controller
- **js/shared.js**: Pure classification, escaping, Unicode, fragment URL and redaction helpers
- **js/clipthreat-messages.js**: Japanese UI dictionary; fixed HTML templates only
- **js/clipboard-access.js**: Serialized writes, reset cleanup and cancellable demo timers
- **js/ui.js**: Display changes through CSS classes
- **test/**: Six dependency-free Node test files
- **.github/workflows/test.yml**: Node 22 tests on push and pull_request
- **js/*.js**: Individual modules for each security demonstration:
  - `clipboard.js`: Basic clipboard read/write operations
  - `watch.js`: Clipboard monitoring functionality
  - `sniff.js`: Paste event interception
  - `clickfix.js`: ClickFix attack simulation
  - `autopaste.js`: Automatic paste and submit demonstration
  - `weirdchar.js`: Unicode manipulation demonstrations (integrates with WeirdString Inspector)
  - `tips.js`: Security tips and educational content

## External Integration

The weirdchar.js module integrates with WeirdString Inspector for detailed Unicode analysis:
- URL format: `https://ipusiron.github.io/weirdstring-inspector/#text={encoded}&source=clipthreat-studio&attack_type={type}`
- The receiver supports the fragment. It is not sent in the HTTP request, but the receiver's JavaScript can read it.
- Open the receiver with `noopener,noreferrer`; never pass private data.
- Attack types: ゼロ幅スペース攻撃, RTL文字拡張子偽装, スクリプト混在攻撃, 同形異義文字攻撃

## Development Commands

This is a static website with no build process required. To develop:

```bash
# Start a local server (using Python)
python -m http.server 8000 --bind 127.0.0.1

# The site will be available at http://localhost:8000
```

## Testing

Run `npm test` with Node 22 or newer. No dependencies or installation required.
Tests cover pure helpers, harmless ClickFix text, cleanup sequencing, HTML, contrast, formatting and README data.
Use HTTP, not file://, because scripts are ES modules. Browser testing also involves:
1. Opening the site in a modern browser
2. Testing each tab's functionality
3. Verifying clipboard operations work as expected
4. Ensuring all security demonstrations function correctly

## Deployment

The project is deployed via GitHub Pages. Any commit to the main branch automatically updates the live site at https://ipusiron.github.io/clipthreat-studio/

## Security Considerations

This is an educational tool demonstrating security vulnerabilities. When modifying:
- Ensure demonstrations remain educational and not harmful
- All clipboard operations require user interaction
- The tool should clearly indicate it's for educational purposes
- Avoid implementing actual malicious functionality
- ClickFix writes only the fixed harmless explanation from the dictionary, never an executable command.
- Render its masked example with textContent, not innerHTML.
- Clear the clipboard after ClickFix completion and on every demo reset/tab departure; cancel pending timers.
- Serialize pending writes so reset cleanup comes last; report denied/unavailable access through aria-live.
- Clipboard history/cloud synchronization and cleanup after closing the page cannot be guaranteed.
- Do not log pasted content or perform external requests. Inspector navigation is user initiated.
- Meta CSP restricts scripts/styles to self and connect-src to none; no inline handlers or style attributes.
- Use escaped data with fixed HTML templates, or textContent. Dynamic Inspector buttons use dataset and listeners.
- The separate legacy 404.html is outside this iteration. Do not claim meta frame-ancestors or X-Frame-Options work.

## Code Style

- Vanilla JavaScript (no frameworks)
- Each feature is isolated in its own module
- Japanese comments and UI text are used throughout
- Functions remain on `window` for the fixed data-action bindings in main.js, not inline handlers.
- Preserve keyboard tab navigation, 11 aria-expanded accordions and the modal focus trap.
- Publish through a work branch and PR only after explicit user approval; never push directly to main.
