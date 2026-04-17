# WP REST MCP

Lightweight WordPress REST API wrapper using the Model Context Protocol (MCP).

## Architecture

This server provides an interface to interact with WordPress sites using the MCP, allowing agents to fetch posts, pages, taxonomies, media, users, comments, tags, categories, and manage WooCommerce products/orders.

## Capabilities

### Read Operations
- `get_posts(url)`: Fetch all posts.
- `get_post_by_id(url, id)`: Fetch specific post.
- `get_pages(url)`: Fetch all pages.
- `get_page_by_id(url, id)`: Fetch specific page.
- `get_taxonomies(url)`: Fetch all taxonomies.
- `get_taxonomy_by_id(url, id)`: Fetch specific taxonomy.
- `get_media(url)`: Fetch all media.
- `get_media_by_id(url, id)`: Fetch specific media.
- `get_users(url)`: Fetch all users.
- `get_user_by_id(url, id)`: Fetch specific user.
- `get_comments(url)`: Fetch all comments.
- `get_comment_by_id(url, id)`: Fetch specific comment.
- `get_tags(url)`: Fetch all tags.
- `get_categories(url)`: Fetch all categories.
- `get_wc_products(url)`: Fetch WooCommerce products.
- `get_wc_orders(url, token)`: Fetch WooCommerce orders.
- `get_wc_customers(url, token)`: Fetch WooCommerce customers.
- `get_wc_product_variations(url, product_id)`: Fetch WooCommerce product variations.

### Write Operations (Requires Auth Token)
- `create_post(url, token, payload)`
- `update_post(url, token, id, payload)`
- `delete_post(url, token, id)`
- `create_wc_product(url, token, payload)`
- `update_wc_product(url, token, id, payload)`
- `delete_wc_product(url, token, id)`
- `create_wc_order(url, token, payload)`
- `update_wc_order(url, token, id, payload)`
- `delete_wc_order(url, token, id)`

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hasanabbassorathiya/wp-mcp-server.git
   cd wp-mcp-server
   npm install
   npm run build
   ```

2. **Integrate with Claude Code CLI:**
   Add this to your `~/.claude/settings.json`:
   ```json
   {
     "mcpServers": {
       "wp-mcp": {
         "command": "node",
         "args": ["/absolute/path/to/wp-mcp-server/dist/index.js"]
       }
     }
   }
   ```
   *Replace `/absolute/path/to/` with the actual path to the cloned repository.*

3. **Restart Claude Code.**
