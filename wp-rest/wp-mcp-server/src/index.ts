import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

const server = new Server(
  { name: "wp-mcp-server", version: "0.1.0" },
  { capabilities: { tools: {} } }
);

// Define tool schemas
const UrlProductIdSchema = z.object({ url: z.string().url(), product_id: z.number().int() });
const AuthUrlIdSchema = z.object({ url: z.string().url(), token: z.string(), id: z.number().int() });
const AuthUrlSchema = z.object({ url: z.string().url(), token: z.string() });
const UrlSchema = z.object({ url: z.string().url() });
const UrlIdSchema = z.object({ url: z.string().url(), id: z.number().int() });
const AuthUrlPayloadSchema = z.object({ url: z.string().url(), token: z.string(), payload: z.object({}).passthrough() });
const AuthUrlIdPayloadSchema = z.object({ url: z.string().url(), token: z.string(), id: z.number().int(), payload: z.object({}).passthrough() });

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    { name: "get_pages", description: "Fetch pages", inputSchema: { type: "object", properties: { url: { type: "string" } }, required: ["url"] } },
    { name: "get_page_by_id", description: "Fetch page by ID", inputSchema: { type: "object", properties: { url: { type: "string" }, id: { type: "number" } }, required: ["url", "id"] } },
    { name: "get_taxonomies", description: "Fetch taxonomies", inputSchema: { type: "object", properties: { url: { type: "string" } }, required: ["url"] } },
    { name: "get_taxonomy_by_id", description: "Fetch taxonomy by ID", inputSchema: { type: "object", properties: { url: { type: "string" }, id: { type: "number" } }, required: ["url", "id"] } },
    { name: "get_media", description: "Fetch media", inputSchema: { type: "object", properties: { url: { type: "string" } }, required: ["url"] } },
    { name: "get_media_by_id", description: "Fetch media by ID", inputSchema: { type: "object", properties: { url: { type: "string" }, id: { type: "number" } }, required: ["url", "id"] } },
    { name: "get_users", description: "Fetch users", inputSchema: { type: "object", properties: { url: { type: "string" }, token: { type: "string" } }, required: ["url", "token"] } },
    { name: "get_user_by_id", description: "Fetch user by ID", inputSchema: { type: "object", properties: { url: { type: "string" }, token: { type: "string" }, id: { type: "number" } }, required: ["url", "token", "id"] } },
    { name: "get_comments", description: "Fetch comments", inputSchema: { type: "object", properties: { url: { type: "string" } }, required: ["url"] } },
    { name: "get_comment_by_id", description: "Fetch comment by ID", inputSchema: { type: "object", properties: { url: { type: "string" }, id: { type: "number" } }, required: ["url", "id"] } },
    { name: "get_tags", description: "Fetch tags", inputSchema: { type: "object", properties: { url: { type: "string" } }, required: ["url"] } },
    { name: "get_categories", description: "Fetch categories", inputSchema: { type: "object", properties: { url: { type: "string" } }, required: ["url"] } },
    { name: "get_coupons", description: "Fetch coupons (Auth)", inputSchema: { type: "object", properties: { url: { type: "string" }, token: { type: "string" } }, required: ["url", "token"] } },
    { name: "get_webhooks", description: "Fetch webhooks (Auth)", inputSchema: { type: "object", properties: { url: { type: "string" }, token: { type: "string" } }, required: ["url", "token"] } },
    { name: "get_shipping_methods", description: "Fetch shipping methods", inputSchema: { type: "object", properties: { url: { type: "string" } }, required: ["url"] } },
    { name: "get_taxes", description: "Fetch taxes", inputSchema: { type: "object", properties: { url: { type: "string" } }, required: ["url"] } },
    { name: "get_reports", description: "Fetch reports (Auth)", inputSchema: { type: "object", properties: { url: { type: "string" }, token: { type: "string" } }, required: ["url", "token"] } },
    { name: "get_settings", description: "Fetch settings (Auth)", inputSchema: { type: "object", properties: { url: { type: "string" }, token: { type: "string" } }, required: ["url", "token"] } },
    { name: "get_post_by_id", description: "Fetch post by ID", inputSchema: { type: "object", properties: { url: { type: "string" }, id: { type: "number" } }, required: ["url", "id"] } },
    { name: "create_post", description: "Create post (Auth)", inputSchema: { type: "object", properties: { url: { type: "string" }, token: { type: "string" }, payload: { type: "object" } }, required: ["url", "token", "payload"] } },
    { name: "update_post", description: "Update post (Auth)", inputSchema: { type: "object", properties: { url: { type: "string" }, token: { type: "string" }, id: { type: "number" }, payload: { type: "object" } }, required: ["url", "token", "id", "payload"] } },
    { name: "delete_post", description: "Delete post (Auth)", inputSchema: { type: "object", properties: { url: { type: "string" }, token: { type: "string" }, id: { type: "number" } }, required: ["url", "token", "id"] } },
    { name: "get_wc_products", description: "Fetch products", inputSchema: { type: "object", properties: { url: { type: "string" } }, required: ["url"] } },
    { name: "create_wc_product", description: "Create product (Auth)", inputSchema: { type: "object", properties: { url: { type: "string" }, token: { type: "string" }, payload: { type: "object" } }, required: ["url", "token", "payload"] } },
    { name: "update_wc_product", description: "Update product (Auth)", inputSchema: { type: "object", properties: { url: { type: "string" }, token: { type: "string" }, id: { type: "number" }, payload: { type: "object" } }, required: ["url", "token", "id", "payload"] } },
    { name: "delete_wc_product", description: "Delete product (Auth)", inputSchema: { type: "object", properties: { url: { type: "string" }, token: { type: "string" }, id: { type: "number" } }, required: ["url", "token", "id"] } },
    { name: "get_wc_orders", description: "Fetch orders (Auth)", inputSchema: { type: "object", properties: { url: { type: "string" }, token: { type: "string" } }, required: ["url", "token"] } },
    { name: "create_wc_order", description: "Create order (Auth)", inputSchema: { type: "object", properties: { url: { type: "string" }, token: { type: "string" }, payload: { type: "object" } }, required: ["url", "token", "payload"] } },
    { name: "update_wc_order", description: "Update order (Auth)", inputSchema: { type: "object", properties: { url: { type: "string" }, token: { type: "string" }, id: { type: "number" }, payload: { type: "object" } }, required: ["url", "token", "id", "payload"] } },
    { name: "delete_wc_order", description: "Delete order (Auth)", inputSchema: { type: "object", properties: { url: { type: "string" }, token: { type: "string" }, id: { type: "number" } }, required: ["url", "token", "id"] } }
  ]
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  // Validation
  let validatedArgs;
  try {
    switch (name) {
      case "get_posts": validatedArgs = UrlSchema.parse(args); break;
      case "get_post_by_id": validatedArgs = UrlIdSchema.parse(args); break;
      case "create_post": validatedArgs = AuthUrlPayloadSchema.parse(args); break;
      case "update_post": validatedArgs = AuthUrlIdPayloadSchema.parse(args); break;
      case "delete_post": validatedArgs = AuthUrlIdSchema.parse(args); break;
      case "get_wc_products": validatedArgs = UrlSchema.parse(args); break;
      case "create_wc_product": validatedArgs = AuthUrlPayloadSchema.parse(args); break;
      case "update_wc_product": validatedArgs = AuthUrlIdPayloadSchema.parse(args); break;
      case "delete_wc_product": validatedArgs = AuthUrlIdSchema.parse(args); break;
      case "get_pages": validatedArgs = UrlSchema.parse(args); break;
      case "get_page_by_id": validatedArgs = UrlIdSchema.parse(args); break;
      case "get_taxonomies": validatedArgs = UrlSchema.parse(args); break;
      case "get_taxonomy_by_id": validatedArgs = UrlIdSchema.parse(args); break;
      case "get_media": validatedArgs = UrlSchema.parse(args); break;
      case "get_media_by_id": validatedArgs = UrlIdSchema.parse(args); break;
      case "get_users": validatedArgs = AuthUrlSchema.parse(args); break;
      case "get_user_by_id": validatedArgs = AuthUrlIdSchema.parse(args); break;
      case "get_comments": validatedArgs = UrlSchema.parse(args); break;
      case "get_comment_by_id": validatedArgs = UrlIdSchema.parse(args); break;
      case "get_tags": validatedArgs = UrlSchema.parse(args); break;
      case "get_categories": validatedArgs = UrlSchema.parse(args); break;
      case "get_wc_customers": validatedArgs = AuthUrlSchema.parse(args); break;
      case "get_wc_product_variations": validatedArgs = UrlProductIdSchema.parse(args); break;
      case "get_coupons": validatedArgs = AuthUrlSchema.parse(args); break;
      case "get_webhooks": validatedArgs = AuthUrlSchema.parse(args); break;
      case "get_shipping_methods": validatedArgs = UrlSchema.parse(args); break;
      case "get_taxes": validatedArgs = UrlSchema.parse(args); break;
      case "get_reports": validatedArgs = AuthUrlSchema.parse(args); break;
      case "get_settings": validatedArgs = AuthUrlSchema.parse(args); break;
      case "create_wc_order": validatedArgs = AuthUrlPayloadSchema.parse(args); break;
      case "update_wc_order": validatedArgs = AuthUrlIdPayloadSchema.parse(args); break;
      case "delete_wc_order": validatedArgs = AuthUrlIdSchema.parse(args); break;
      default: throw new Error("Unknown tool");
    }
  } catch (e) { throw new Error(`Invalid arguments: ${e}`); }

  const { url, token } = validatedArgs as any;
  const headers = { 'Content-Type': 'application/json', ...(token ? { 'Authorization': `Bearer ${token}` } : {}) };

  // Mapping
  const endpoints: Record<string, string> = {
    get_posts: `${url}/wp-json/wp/v2/posts`,
    get_wc_products: `${url}/wp-json/wc/v3/products`,
    get_wc_orders: `${url}/wp-json/wc/v3/orders`
  };

  if (endpoints[name]) {
    const response = await fetch(endpoints[name], { headers });
    return { content: [{ type: "text", text: await response.text() }] };
  }

  // Handle IDs
  const idEndpoints: Record<string, string> = {
    get_post_by_id: `${url}/wp-json/wp/v2/posts`
  };

  if (name === "get_post_by_id") {
      const response = await fetch(`${idEndpoints.get_post_by_id}/${(validatedArgs as any).id}`, { headers });
      return { content: [{ type: "text", text: await response.text() }] };
  }

  // Handle Write Operations
  const methods: Record<string, string> = { create: 'POST', update: 'PUT', delete: 'DELETE' };
  const action = name.split('_')[0];
  if (methods[action]) {
    const endpoint = name.includes("product") ? `${url}/wp-json/wc/v3/products` :
                     name.includes("order") ? `${url}/wp-json/wc/v3/orders` :
                     `${url}/wp-json/wp/v2/posts`;
    const fetchUrl = (validatedArgs as any).id ? `${endpoint}/${(validatedArgs as any).id}` : endpoint;
    const options: RequestInit = { method: methods[action], headers };
    if ((validatedArgs as any).payload) options.body = JSON.stringify((validatedArgs as any).payload);

    const response = await fetch(fetchUrl, options);
    return { content: [{ type: "text", text: await response.text() }] };
  }

  throw new Error(`Tool ${name} logic not implemented`);
});

const transport = new StdioServerTransport();
server.connect(transport).catch(console.error);