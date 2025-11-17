---
sidebar_position: 8
---

# SAGE MCP Server

The SAGE MCP Server provides natural language access to the SAGE cyberinfrastructure through the Model Context Protocol (MCP). It enables AI-powered IDEs and tools to query sensor data, submit jobs, search images, and manage edge applications using conversational commands.

## Features

The SAGE MCP Server provides access to:

- **Sensor Data Queries**: Query environmental, IIO, and other sensor data from SAGE nodes
- **Node Information**: Get detailed information about nodes, sensors, and hardware
- **Job Management**: Submit, monitor, and manage edge computing jobs
- **Plugin Discovery**: Search and discover plugins from the Edge Code Repository
- **Image Search**: Search SAGE images using natural language descriptions with semantic search
- **Geographic Queries**: Find nodes and query data by location (city, state, region)
- **Documentation**: Access SAGE documentation and FAQ through natural language queries

## Getting started

### Prerequisites

- A SAGE account (sign up at [portal.sagecontinuum.org](https://portal.sagecontinuum.org))
- An AI-powered IDE with MCP support (e.g. Cursor, VSCode, Cline, Warp)
- Your SAGE access token from [portal.sagecontinuum.org/account/access](https://portal.sagecontinuum.org/account/access)

### Configuration

Add the SAGE MCP server to your MCP client configuration. For Cursor IDE, add this to `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "sage": {
      "url": "https://mcp.sagecontinuum.org/mcp",
      "headers": {
        "Authorization": "Bearer {username}:{auth_token}"
      }
    }
  }
}
```

Replace `{username}` with your SAGE username and `{auth_token}` with your access token from the portal.

### Verification

Once configured, you can verify the connection by asking your AI assistant:

```
"List available SAGE nodes"
"Show me temperature readings from the last hour"
```

## Authentication

The SAGE MCP server supports multiple authentication methods for accessing protected data.

### Token format

Authentication tokens use the format: `username:access_token`

Example: `myusername:4d9473cb2a21cb7716e97e5fdafdbcbf4faea051`

### Authentication methods

The server supports authentication through HTTP headers and query parameters:

#### 1. Authorization header (recommended)

Basic authentication:
```bash
curl -H "Authorization: Basic $(echo -n 'username:token' | base64)" \
     "https://mcp.sagecontinuum.org/mcp/..."
```

Bearer token:
```bash
curl -H "Authorization: Bearer username:token" \
     "https://mcp.sagecontinuum.org/mcp/..."
```

#### 2. Custom header

Use the X-SAGE-Token header:
```bash
curl -H "X-SAGE-Token: username:token" \
     "https://mcp.sagecontinuum.org/mcp/..."
```

#### 3. Query parameter

Pass token as a query parameter:
```bash
curl "https://mcp.sagecontinuum.org/mcp/...?token=username:token"
```

### Getting your access token

1. Visit [portal.sagecontinuum.org/account/access](https://portal.sagecontinuum.org/account/access)
2. Sign in with your SAGE account
3. Copy your access token from the credentials section

For protected data access, ensure you have:
- A valid SAGE account
- Signed the Data Use Agreement
- Appropriate permissions for the data you are accessing

## Examples

### Querying sensor data

Get temperature data from a specific node:
```
"Show me temperature readings from node W023 in the last hour"
```

Get environmental data summary across all nodes:
```
"What's the current temperature, humidity, and pressure across all SAGE nodes?"
```

Search for specific measurements:
```
"Find all rainfall measurements from Chicago nodes in the last 24 hours"
```

### Geographic queries

Find nodes by location:
```
"List all SAGE nodes in Illinois"
"Show me nodes on the east coast"
```

Get statistics by location:
```
"What's the highest temperature in Chicago right now?"
"Show me the average humidity in California over the last hour"
```

### Image search

Search images using natural language:
```
"Show me images of cumulus clouds"
"Find pictures of cars on the road"
"Get images of snow-covered landscapes from node W06B"
```

Find nodes by visual features:
```
"Find nodes near rivers or bodies of water"
"Which nodes have cameras showing urban environments?"
```

### Plugin discovery

Find plugins for specific tasks:
```
"Find plugins for air quality monitoring"
"What plugins are available for bird sound detection?"
"Show me computer vision plugins for object detection"
```

### Job management

Submit jobs to nodes:
```
"Deploy air quality monitoring to nodes W019 and W020"
"Submit a camera sampling job to Chicago nodes"
```

Check job status:
```
"Check the status of job abc123"
"Show me data from my cloud monitoring job"
```

### Node information

Get detailed node information:
```
"Show me detailed information about node W023"
"List all sensors on node W019"
"What hardware does node W06B have?"
```

### Documentation queries

Access SAGE documentation:
```
"How do I create a SAGE plugin?"
"What is the SAGE data API?"
"Show me examples of job submission"
```

## Image proxy

The server includes an image proxy endpoint for authenticated access to SAGE images.

### Endpoint

```
GET /proxy/image?url=<encoded_sage_url>&token=<optional_token>
```

### Generating proxy URLs

Use the MCP tool to generate pre-signed URLs:

```python
# Get a proxy URL for a SAGE image (5 minute expiration)
proxy_url = get_image_proxy_url("https://storage.sagecontinuum.org/api/v1/data/...")
```

The generated URL can be accessed directly in any browser without authentication headers.

### Authentication priority

The proxy endpoint uses authentication in the following order:

1. Pre-signed token (pt parameter)
2. SAGE_USER and SAGE_PASS environment variables
3. Token parameter in username:password format
4. Authorization headers from the request


### Natural language plugin queries

Query plugin data using natural language:
```
"Show me cloud cover data from the last hour"
"Get temperature readings from nodes W019, W020 in the last 30 minutes"
"What's the latest rain data from Chicago nodes?"
```

## Available tools

The SAGE MCP server provides over 30 tools organized into categories:

### Sensor data tools
- `get_node_all_data` - Get all sensor data for a node
- `get_node_temperature` - Get temperature data
- `get_environmental_summary` - Get environmental data summary
- `search_measurements` - Search for specific measurements

### Node information tools
- `list_available_nodes` - List active SAGE nodes
- `get_node_info` - Get detailed node information
- `get_sensor_details` - Get sensor specifications

### Job management tools
- `submit_sage_job` - Submit custom jobs
- `submit_plugin_job` - Submit pre-configured plugin jobs
- `check_job_status` - Check job status
- `query_job_data` - Query job output data

### Geographic tools
- `get_nodes_by_location` - Find nodes by location
- `get_measurement_stat_by_location` - Get statistics by location

### Plugin tools
- `find_plugins_for_task` - Find plugins for a task
- `get_plugin_data` - Query plugin data
- `query_plugin_data_nl` - Natural language plugin queries

### Image tools
- `search_images` - Search images using natural language
- `search_images_by_node` - Search images from specific nodes
- `find_nodes_by_visual_features` - Find nodes by what cameras see
- `get_image_proxy_url` - Generate pre-signed image URLs

### Documentation tools
- `ask_sage_docs` - Ask questions about SAGE documentation
- `sage_faq` - Get FAQ answers
- `search_sage_docs` - Search documentation


### Protected data access

Some data types require additional permissions:
- Sign the Data Use Agreement in the SAGE portal
- Request access through the [SAGE contact form](/docs/contact-us)
- Verify your account has the necessary permissions


## Additional resources

- [SAGE Portal](https://portal.sagecontinuum.org)
- [SAGE Documentation](https://sagecontinuum.org/docs)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [Python Sage Data Client](https://pypi.org/project/sage-data-client/)
- [GitHub Repository](https://github.com/waggle-sensor/sage-mcp)
