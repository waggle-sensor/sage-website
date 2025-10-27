# Sage MCP: AI-Powered Edge Computing Interface

In the rapidly evolving landscape of AI and edge computing, accessing complex cyberinfrastructure shouldn't require memorizing APIs or writing custom scripts. What if you could simply *ask* for what you need in plain English? That's the vision behind **SAGE MCP**, a **Model Context Protocol** server that bridges the gap between Large Language Models and the SAGE edge computing ecosystem, making advanced sensor networks accessible through natural conversation.

> **SAGE MCP** transforms how researchers, developers, and data scientists interact with 100+ edge nodes worldwide, enabling natural language queries, intelligent plugin discovery, and automated job submission, all through your favorite AI-powered IDE.

Let's explore what it does, how it works, and where it's headed next.

## What We're Building

This project demonstrates the power of **protocol-driven AI integration**, using the Model Context Protocol (MCP) to connect LLMs directly to scientific cyberinfrastructure. At its core, the system:

* **Exposes SAGE capabilities** as MCP tools that LLMs can invoke intelligently
* **Queries real-time sensor data** from edge nodes across the globe
* **Searches images semantically** using hybrid vector + keyword search with reranking
* **Discovers and recommends plugins** from the Edge Code Repository
* **Submits and monitors jobs** with natural language commands
* **Caches results** using Redis for performance optimization
* **Generates pre-signed URLs** for secure, browser-accessible image access
* Provides **comprehensive documentation** through conversational Q&A

Why MCP? Because it creates a **standardized interface** between AI models and tools, enabling seamless integration across different LLM providers and AI-powered IDEs like Cursor, while maintaining security and flexibility.

## The Tech Stack & Architecture

Here's how the system is architected:

### Layer 1: FastMCP Framework

We built on **[FastMCP](https://github.com/jlowin/fastmcp)**, a Python framework for creating MCP servers with elegant decorators and type safety. FastMCP handles the protocol complexity, letting us focus on exposing SAGE capabilities as intuitive tools.

Key features:
- **Automatic tool registration** with type hints and docstrings
- **HTTP transport** for public access (https://mcp.sagecontinuum.org/mcp)
- **Custom endpoints** for image proxying and health checks
- **Authentication middleware** supporting Basic, Bearer, and token-based auth

### Layer 2: Service Architecture

The server is organized into modular services:

```
sage_mcp_server/
├── data_service.py          # SAGE data client wrapper
├── job_service.py           # Job submission & management
├── plugin_registry.py       # ECR plugin metadata & search
├── image_search_service.py  # Hybrid image search with embeddings
├── cache_service.py         # Redis caching layer
└── docs_helper.py           # Documentation search & FAQ
```

Each service is independently testable and maintainable, with clear separation of concerns.

### Layer 3: Intelligent Caching

We use **Redis** as a caching layer to optimize performance:

* **Plugin metadata** cached for quick discovery (TTL: 1 hour)
* **Node information** cached to reduce API calls (TTL: 1 hour)
* **Query results** cached with intelligent invalidation
* **Image search embeddings** cached for instant retrieval

Cache hit ratios typically exceed 70%, dramatically reducing response times and API load.

### Layer 4: Hybrid Image Search

The image search capability integrates our [hybrid vector + keyword search system](./sage-image-search.md) directly into the MCP interface. This allows LLMs to semantically search through thousands of SAGE images using natural language queries. The MCP layer adds:

- **Node-based filtering** to find images from specific locations
- **Visual feature discovery** to identify nodes by what their cameras can see
- **Pre-signed URL generation** for secure, authentication-free image access

For details on the underlying search architecture (Florence 2, ImageBind, Weaviate, and reranking), see the [Image Search Labs page](./sage-image-search.md).

### Layer 5: Authentication & Security

Security is built-in at multiple levels:

* **Token-based authentication** embedded in MCP requests
* **HMAC-signed pre-signed URLs** for time-limited image access
* **Environment variable credentials** for production deployments
* **Query parameter fallbacks** for legacy compatibility

## Key Capabilities in Action

### Natural Language Data Queries

```
User: "What's the highest temperature in Chicago right now?"

MCP: [Automatically finds Chicago nodes, queries temperature data, 
     computes statistics, and returns formatted results]
```

### Intelligent Plugin Discovery

```
User: "I need to detect flowering plants with computer vision"

MCP: [Searches ECR registry, matches against keywords and descriptions,
     recommends relevant plugins with parameters and usage examples]
```

### Visual Node Discovery

```
User: "Find nodes near rivers or bodies of water"

MCP: [Searches image database semantically, groups by node,
     returns nodes where cameras capture water features]
```

### Automated Job Submission

```
User: "Deploy cloud cover detection to nodes W019 and W020"

MCP: [Generates complete job configuration, submits to scheduler,
     returns job ID and monitoring instructions]
```

## The Developer Experience

For IDE integration (e.g., Cursor), users simply add to their `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "sage": {
      "url": "https://mcp.sagecontinuum.org/mcp",
      "headers": {
        "Authorization": "Bearer {username}:{token}"
      }
    }
  }
}
```

Then they can ask questions naturally:

* *"Show me temperature readings from prairie nodes in the last hour"*
* *"Find plugins for bird sound detection"*
* *"Get me images of cumulus clouds from node W06B"*
* *"Submit an air quality monitoring job to Chicago nodes"*

The LLM automatically selects and invokes the appropriate tools, formats responses, and maintains conversation context.

## Technical Innovations

### 1. Tool Chaining & Context Awareness

The MCP protocol enables LLMs to chain multiple tool calls intelligently:

```
Query: "Deploy cloud monitoring to all nodes in Illinois"

Tool chain:
1. get_nodes_by_location("Illinois") → [W019, W020, W023, ...]
2. find_plugins_for_task("cloud monitoring") → Plugin recommendations
3. submit_plugin_job("cloud_cover", "IL-Cloud-Monitor", "W019,W020,...")
```

### 2. Pre-Signed URL System

Traditional image access required authentication headers, making browser viewing impossible. Our solution:

```python
def generate_proxy_token(sage_url, auth_token, expires_in=300):
    # Create cryptographically signed token with embedded auth
    payload = {"url": sage_url, "auth": auth_token, "exp": expires_at}
    signature = hmac.new(secret, payload, sha256).digest()
    return f"{b64encode(payload)}.{b64encode(signature)}"
```

Result: Browser-accessible URLs that work for 5 minutes without any authentication headers.

### 3. Smart Query Enhancement

The system intelligently enhances queries:

```python
# User asks for "rain data from Chicago"
# System automatically:
1. Expands "Chicago" → [all Chicago node IDs]
2. Maps "rain" → ["env.raingauge.rint", "env.raingauge.event_acc", ...]
3. Adds sensor filters and proper time ranges
4. Formats results with units and descriptions
```

### 4. Adaptive Caching Strategy

Cache TTLs are tuned based on data volatility:

* **Static data** (node info, plugin metadata): 1 hour
* **Recent sensor data**: 5 minutes
* **Image search results**: 30 minutes
* **Errors**: 5 minutes (allow retry)

## Next Steps

There's exciting potential for expanding this platform:

* **Custom frontend integration** for web-based interfaces and dashboards
* **VSCode extension** and other IDE integrations beyond Cursor
* **Open source LLM support** with tool calling capabilities (Llama, GPT-oss, Qwen)
* **End-to-end plugin workflow** from generation to testing to ECR publishing
* **Multi-platform integration** (Slack, Discord, Jupyter notebooks, custom apps)

## Why This Matters

Scientific cyberinfrastructure is becoming increasingly complex. SAGE operates 100+ nodes with thousands of sensors, tens of plugins, and terabytes of data. Traditional access methods require:

* **Learning specialized APIs** and authentication systems
* **Writing custom scripts** for even simple queries
* **Understanding data schemas** and measurement naming conventions
* **Managing credentials** and access tokens
* **Parsing complex responses** and handling errors

**SAGE MCP eliminates these barriers** by providing a natural language interface that:

* **Understands intent** rather than requiring exact syntax
* **Handles complexity** automatically (auth, filtering, formatting)
* **Provides context** through conversational interaction
* **Enables exploration** without prior knowledge
* **Accelerates research** by reducing time-to-insight

For researchers, this means spending less time fighting with APIs and more time discovering insights. For developers, it means rapid prototyping and experimentation. For the SAGE community, it means democratizing access to cutting-edge edge computing infrastructure.

## Real-World Impact

Since deployment, SAGE MCP has:

* **Reduced onboarding time** for new users from days to minutes
* **Enabled non-programmers** to access complex sensor data
* **Accelerated plugin discovery** through semantic search
* **Simplified job submission** with natural language commands
* **Improved data accessibility** through pre-signed image URLs

The system processes thousands of queries monthly, with users ranging from undergraduate students to senior researchers.

## Open Source & Community

SAGE MCP is built on open standards and open source:

* **MCP Protocol**: [modelcontextprotocol.io](https://modelcontextprotocol.io)
* **FastMCP Framework**: [github.com/jlowin/fastmcp](https://github.com/jlowin/fastmcp)
* **SAGE Ecosystem**: [sagecontinuum.org](https://sagecontinuum.org)

We welcome contributions, feedback, and collaboration. Whether you're building similar infrastructure integration tools or exploring AI-powered interfaces for scientific computing, we'd love to hear from you.

[Browse the project code on GitHub](https://github.com/waggle-sensor/sage-mcp)

