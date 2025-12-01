# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ClipThreat Studio is a security education tool that demonstrates clipboard API exploitation techniques through an interactive web interface. The project is a static website demonstrating various clipboard-related security vulnerabilities for educational purposes.

## Architecture

The project consists of a single-page application with tab-based navigation:

- **index.html**: Main entry point with tab structure and UI elements
- **style.css**: Styling for cards, tabs, and warning elements
- **js/main.js**: Tab switching controller
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
- URL format: `https://ipusiron.github.io/weirdstring-inspector/?text={encoded}&source=clipthreat-studio&attack_type={type}`
- Attack types: ゼロ幅スペース攻撃, RTL文字拡張子偽装, スクリプト混在攻撃, 同形異義文字攻撃

## Development Commands

This is a static website with no build process required. To develop:

```bash
# Start a local server (using Python)
python -m http.server 8000

# Or using Node.js http-server
npx http-server

# The site will be available at http://localhost:8000
```

## Testing

No automated tests are configured. Manual testing involves:
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

## Code Style

- Vanilla JavaScript (no frameworks)
- Each feature is isolated in its own module
- Japanese comments and UI text are used throughout
- Functions are exposed to global scope via `window` object for HTML onclick handlers