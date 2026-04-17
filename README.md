# WP MCP Server

Lightweight WordPress REST API wrapper using the Model Context Protocol (MCP).

## Architecture

This server provides an interface to interact with WordPress sites using the MCP, allowing agents to fetch posts, pages, taxonomies, and media.

## Commands

- `get_posts(url)`
- `get_post_by_id(url, id)`
- `get_pages(url)`
- `get_page_by_id(url, id)`
- `get_taxonomies(url)`
- `get_taxonomy_by_id(url, id)`
- `get_media(url)`
- `get_media_by_id(url, id)`

## Installation

```bash
git clone https://github.com/hasanabbassorathiya/wp-mcp-server.git
cd wp-mcp-server
npm install
npm run build
```

## Usage & Integration

### Standard MCP
Connect via your MCP client using:
`node /absolute/path/to/wp-mcp-server/dist/index.js`

### Claude Code CLI
To use this MCP server in Claude Code:

1. Edit or create `~/.claude/settings.json`.
2. Add the `mcpServers` configuration:

```json
{
  "mcpServers": {
    "wp-mcp": {
      "command": "node",
      "args": ["/Users/macbookm1pro/Downloads/Razavi Store/site/wp-rest/wp-mcp-server/dist/index.js"]
    }
  }
}
```

3. Restart Claude Code.

