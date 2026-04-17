import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  { name: "wp-mcp-server", version: "0.1.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "get_posts",
      description: "Fetch WordPress posts",
      inputSchema: {
        type: "object",
        properties: { url: { type: "string" } },
        required: ["url"]
      }
    },
    {
      name: "get_post_by_id",
      description: "Fetch a specific WordPress post by ID",
      inputSchema: {
        type: "object",
        properties: {
          url: { type: "string" },
          id: { type: "number" }
        },
        required: ["url", "id"]
      }
    },
    {
      name: "get_pages",
      description: "Fetch WordPress pages",
      inputSchema: {
        type: "object",
        properties: { url: { type: "string" } },
        required: ["url"]
      }
    },
    {
      name: "get_page_by_id",
      description: "Fetch a specific WordPress page by ID",
      inputSchema: {
        type: "object",
        properties: {
          url: { type: "string" },
          id: { type: "number" }
        },
        required: ["url", "id"]
      }
    },
    {
      name: "get_taxonomies",
      description: "Fetch WordPress taxonomies",
      inputSchema: {
        type: "object",
        properties: { url: { type: "string" } },
        required: ["url"]
      }
    },
    {
      name: "get_taxonomy_by_id",
      description: "Fetch a specific WordPress taxonomy by ID",
      inputSchema: {
        type: "object",
        properties: {
          url: { type: "string" },
          id: { type: "number" }
        },
        required: ["url", "id"]
      }
    },
    {
      name: "get_users",
      description: "Fetch WordPress users",
      inputSchema: {
        type: "object",
        properties: { url: { type: "string" } },
        required: ["url"]
      }
    },
    {
      name: "get_user_by_id",
      description: "Fetch a specific WordPress user by ID",
      inputSchema: {
        type: "object",
        properties: {
          url: { type: "string" },
          id: { type: "number" }
        },
        required: ["url", "id"]
      }
    },
    {
      name: "get_comments",
      description: "Fetch WordPress comments",
      inputSchema: {
        type: "object",
        properties: { url: { type: "string" } },
        required: ["url"]
      }
    },
    {
      name: "get_comment_by_id",
      description: "Fetch a specific WordPress comment by ID",
      inputSchema: {
        type: "object",
        properties: {
          url: { type: "string" },
          id: { type: "number" }
        },
        required: ["url", "id"]
      }
    },
    {
      name: "get_tags",
      description: "Fetch WordPress tags",
      inputSchema: {
        type: "object",
        properties: { url: { type: "string" } },
        required: ["url"]
      }
    },
    {
      name: "create_post",
      description: "Create a WordPress post (Requires Auth)",
      inputSchema: {
        type: "object",
        properties: {
          url: { type: "string" },
          token: { type: "string" },
          payload: { type: "object" }
        },
        required: ["url", "token", "payload"]
      }
    },
    {
      name: "update_post",
      description: "Update a WordPress post (Requires Auth)",
      inputSchema: {
        type: "object",
        properties: {
          url: { type: "string" },
          token: { type: "string" },
          id: { type: "number" },
          payload: { type: "object" }
        },
        required: ["url", "token", "id", "payload"]
      }
    },
    {
      name: "delete_post",
      description: "Delete a WordPress post (Requires Auth)",
      inputSchema: {
        type: "object",
        properties: {
          url: { type: "string" },
          token: { type: "string" },
          id: { type: "number" }
        },
        required: ["url", "token", "id"]
      }
    },
    {
      name: "get_wc_products",
      description: "Fetch WooCommerce products",
      inputSchema: {
        type: "object",
        properties: { url: { type: "string" } },
        required: ["url"]
      }
    },
    {
      name: "get_wc_orders",
      description: "Fetch WooCommerce orders (Requires Auth)",
      inputSchema: {
        type: "object",
        properties: {
          url: { type: "string" },
          token: { type: "string" }
        },
        required: ["url", "token"]
      }
    },
    {
      name: "create_wc_product",
      description: "Create a WooCommerce product (Requires Auth)",
      inputSchema: {
        type: "object",
        properties: {
          url: { type: "string" },
          token: { type: "string" },
          payload: { type: "object" }
        },
        required: ["url", "token", "payload"]
      }
    },
    {
      name: "update_wc_product",
      description: "Update a WooCommerce product (Requires Auth)",
      inputSchema: {
        type: "object",
        properties: {
          url: { type: "string" },
          token: { type: "string" },
          id: { type: "number" },
          payload: { type: "object" }
        },
        required: ["url", "token", "id", "payload"]
      }
    },
    {
      name: "delete_wc_product",
      description: "Delete a WooCommerce product (Requires Auth)",
      inputSchema: {
        type: "object",
        properties: {
          url: { type: "string" },
          token: { type: "string" },
          id: { type: "number" }
        },
        required: ["url", "token", "id"]
      }
    },
    {
      name: "create_wc_order",
      description: "Create a WooCommerce order (Requires Auth)",
      inputSchema: {
        type: "object",
        properties: {
          url: { type: "string" },
          token: { type: "string" },
          payload: { type: "object" }
        },
        required: ["url", "token", "payload"]
      }
    },
    {
      name: "update_wc_order",
      description: "Update a WooCommerce order (Requires Auth)",
      inputSchema: {
        type: "object",
        properties: {
          url: { type: "string" },
          token: { type: "string" },
          id: { type: "number" },
          payload: { type: "object" }
        },
        required: ["url", "token", "id", "payload"]
      }
    },
    {
      name: "delete_wc_order",
      description: "Delete a WooCommerce order (Requires Auth)",
      inputSchema: {
        type: "object",
        properties: {
          url: { type: "string" },
          token: { type: "string" },
          id: { type: "number" }
        },
        required: ["url", "token", "id"]
      }
    }
  ]
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  const { url, token } = args as { url: string, token?: string };
  const headers = {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
  };

  const endpoints: Record<string, string> = {
    get_posts: `${url}/wp-json/wp/v2/posts`,
    get_pages: `${url}/wp-json/wp/v2/pages`,
    get_taxonomies: `${url}/wp-json/wp/v2/taxonomies`,
    get_media: `${url}/wp-json/wp/v2/media`,
    get_users: `${url}/wp-json/wp/v2/users`,
    get_comments: `${url}/wp-json/wp/v2/comments`,
    get_tags: `${url}/wp-json/wp/v2/tags`,
    get_categories: `${url}/wp-json/wp/v2/categories`,
    get_wc_products: `${url}/wp-json/wc/v3/products`,
    get_wc_customers: `${url}/wp-json/wc/v3/customers`
  };

  if (endpoints[name]) {
    const response = await fetch(endpoints[name], { headers });
    return { content: [{ type: "text", text: await response.text() }] };
  }

  const idEndpoints: Record<string, string> = {
    get_post_by_id: `${url}/wp-json/wp/v2/posts`,
    get_page_by_id: `${url}/wp-json/wp/v2/pages`,
    get_taxonomy_by_id: `${url}/wp-json/wp/v2/taxonomies`,
    get_media_by_id: `${url}/wp-json/wp/v2/media`,
    get_user_by_id: `${url}/wp-json/wp/v2/users`,
    get_comment_by_id: `${url}/wp-json/wp/v2/comments`,
    get_wc_orders: `${url}/wp-json/wc/v3/orders`
  };

  if (idEndpoints[name] && (args as any).id) {
    const { id } = args as { id: number };
    const response = await fetch(`${idEndpoints[name]}/${id}`, { headers });
    return { content: [{ type: "text", text: await response.text() }] };
  } else if (name === "get_wc_orders") {
    const response = await fetch(idEndpoints.get_wc_orders, { headers });
    return { content: [{ type: "text", text: await response.text() }] };
  }

  if (name === "get_wc_product_variations") {
    const { product_id } = args as { product_id: number };
    const response = await fetch(`${url}/wp-json/wc/v3/products/${product_id}/variations`, { headers });
    return { content: [{ type: "text", text: await response.text() }] };
  }

  // Write tools
  const writeTools: Record<string, {endpoint: string, method: string}> = {
    create_post: { endpoint: `${url}/wp-json/wp/v2/posts`, method: 'POST' },
    update_post: { endpoint: `${url}/wp-json/wp/v2/posts`, method: 'PUT' },
    delete_post: { endpoint: `${url}/wp-json/wp/v2/posts`, method: 'DELETE' },
    create_wc_product: { endpoint: `${url}/wp-json/wc/v3/products`, method: 'POST' },
    update_wc_product: { endpoint: `${url}/wp-json/wc/v3/products`, method: 'PUT' },
    delete_wc_product: { endpoint: `${url}/wp-json/wc/v3/products`, method: 'DELETE' },
    create_wc_order: { endpoint: `${url}/wp-json/wc/v3/orders`, method: 'POST' },
    update_wc_order: { endpoint: `${url}/wp-json/wc/v3/orders`, method: 'PUT' },
    delete_wc_order: { endpoint: `${url}/wp-json/wc/v3/orders`, method: 'DELETE' }
  };

  if (writeTools[name]) {
    const { endpoint, method } = writeTools[name];
    const { id, payload } = args as { id?: number, payload?: any };
    const fetchUrl = id ? `${endpoint}/${id}` : endpoint;
    const options: RequestInit = { method, headers };
    if (payload) {
        options.body = JSON.stringify(payload);
    }

    const response = await fetch(fetchUrl, options);
    return { content: [{ type: "text", text: await response.text() }] };
  }

  throw new Error(`Tool ${name} not found`);
});

const transport = new StdioServerTransport();
server.connect(transport).catch(console.error);