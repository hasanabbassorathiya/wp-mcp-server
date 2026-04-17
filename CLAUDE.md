# CLAUDE.md

## Purpose
MCP server for WordPress REST API interactions.

## Architecture
- SDK: `@modelcontextprotocol/sdk`
- Build: TypeScript/Node.js
- Communication: Stdio transport

## Key Files
- `src/index.ts`: Main entry point and tool definitions.
- `package.json`: Dependencies.
- `tsconfig.json`: Build configuration.

## Development
1. Edit `src/index.ts`.
2. `npm run build`.
3. Test locally with `node dist/index.js`.
