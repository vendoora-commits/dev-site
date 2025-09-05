#!/bin/bash

# Vendoora MCP Tools Setup Script
# This script sets up the MCP (Model Context Protocol) tools for the Vendoora development site

set -e

echo "🚀 Setting up Vendoora MCP Tools..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install MCP dependencies
echo "📦 Installing MCP dependencies..."

# Install core MCP packages
npm install --save-dev @modelcontextprotocol/sdk
npm install --save-dev @modelcontextprotocol/server-filesystem
npm install --save-dev @supabase/mcp-server-supabase

# Install additional dependencies for MCP tools
npm install --save-dev playwright
npm install --save-dev openai
npm install --save-dev tsx
npm install --save-dev dotenv

echo "✅ MCP dependencies installed"

# Build MCP tools
echo "🔨 Building MCP tools..."

# Build visual analysis tool
if [ -d "mcp-tools/vendoora-mcp-visual-analysis" ]; then
    echo "Building visual analysis tool..."
    cd mcp-tools/vendoora-mcp-visual-analysis
    npm install
    npm run build
    cd ../..
    echo "✅ Visual analysis tool built"
fi

# Build AI coding tool
if [ -d "mcp-tools/vendoora-mcp-ai-coding" ]; then
    echo "Building AI coding tool..."
    cd mcp-tools/vendoora-mcp-ai-coding
    npm install
    npm run build
    cd ../..
    echo "✅ AI coding tool built"
fi

# Build analytics tool
if [ -d "mcp-tools/vendoora-mcp-analytics" ]; then
    echo "Building analytics tool..."
    cd mcp-tools/vendoora-mcp-analytics
    npm install
    npm run build
    cd ../..
    echo "✅ Analytics tool built"
fi

# Create environment file template
echo "📝 Creating environment file template..."
cat > .env.mcp.example << EOF
# MCP Tools Configuration
# Copy this file to .env.mcp and fill in your values

# OpenAI Configuration (for AI coding tools)
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_BASE_URL=https://api.openai.com/v1

# Supabase Configuration (for database tools)
SUPABASE_URL=your_supabase_url_here
SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Analytics Configuration
ANALYTICS_API_KEY=your_analytics_api_key_here
ANALYTICS_ENDPOINT=https://api.analytics.com/v1

# Performance Monitoring
PERFORMANCE_MONITORING=true
ACCESSIBILITY_MONITORING=true
EOF

echo "✅ Environment file template created"

# Create MCP runner script
echo "📝 Creating MCP runner script..."
cat > run-mcp.js << 'EOF'
#!/usr/bin/env node

/**
 * MCP Tools Runner for Vendoora Development Site
 * This script runs the MCP tools for development and testing
 */

import { spawn } from 'child_process';
import { readFileSync } from 'fs';
import { join } from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.mcp' });

const mcpConfig = JSON.parse(readFileSync('mcp-config.json', 'utf8'));

class MCPRunner {
  constructor() {
    this.processes = new Map();
  }

  async startServer(serverName, config) {
    console.log(`🚀 Starting MCP server: ${serverName}`);
    
    const process = spawn(config.command, config.args, {
      env: { ...process.env, ...config.env },
      stdio: ['pipe', 'pipe', 'pipe']
    });

    process.stdout.on('data', (data) => {
      console.log(`[${serverName}] ${data.toString()}`);
    });

    process.stderr.on('data', (data) => {
      console.error(`[${serverName}] ERROR: ${data.toString()}`);
    });

    process.on('close', (code) => {
      console.log(`[${serverName}] Process exited with code ${code}`);
      this.processes.delete(serverName);
    });

    this.processes.set(serverName, process);
    return process;
  }

  async startAllServers() {
    console.log('🌟 Starting all MCP servers...');
    
    for (const [serverName, config] of Object.entries(mcpConfig.mcpServers)) {
      try {
        await this.startServer(serverName, config);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second between starts
      } catch (error) {
        console.error(`Failed to start ${serverName}:`, error.message);
      }
    }
  }

  async stopAllServers() {
    console.log('🛑 Stopping all MCP servers...');
    
    for (const [serverName, process] of this.processes) {
      console.log(`Stopping ${serverName}...`);
      process.kill('SIGTERM');
    }
    
    // Wait for processes to exit
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Force kill if still running
    for (const [serverName, process] of this.processes) {
      if (!process.killed) {
        console.log(`Force killing ${serverName}...`);
        process.kill('SIGKILL');
      }
    }
  }

  listAvailableTools() {
    console.log('🛠️  Available MCP Tools:');
    console.log('');
    
    for (const [toolName, toolInfo] of Object.entries(mcpConfig.tools)) {
      console.log(`📦 ${toolName.toUpperCase()}`);
      console.log(`   ${toolInfo.description}`);
      console.log(`   Tools: ${toolInfo.tools.join(', ')}`);
      console.log('');
    }
  }
}

// CLI interface
const runner = new MCPRunner();

const command = process.argv[2];

switch (command) {
  case 'start':
    runner.startAllServers();
    break;
  case 'stop':
    runner.stopAllServers();
    break;
  case 'list':
    runner.listAvailableTools();
    break;
  case 'help':
  default:
    console.log('Vendoora MCP Tools Runner');
    console.log('');
    console.log('Usage: node run-mcp.js <command>');
    console.log('');
    console.log('Commands:');
    console.log('  start    Start all MCP servers');
    console.log('  stop     Stop all MCP servers');
    console.log('  list     List available tools');
    console.log('  help     Show this help message');
    console.log('');
    console.log('Make sure to:');
    console.log('1. Copy .env.mcp.example to .env.mcp');
    console.log('2. Fill in your API keys and configuration');
    console.log('3. Run "node run-mcp.js start" to start the servers');
    break;
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  await runner.stopAllServers();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  await runner.stopAllServers();
  process.exit(0);
});
EOF

chmod +x run-mcp.js
echo "✅ MCP runner script created"

# Create package.json scripts
echo "📝 Adding MCP scripts to package.json..."

# Read current package.json
PACKAGE_JSON=$(cat package.json)

# Add MCP scripts
PACKAGE_JSON=$(echo "$PACKAGE_JSON" | jq '.scripts += {
  "mcp:start": "node run-mcp.js start",
  "mcp:stop": "node run-mcp.js stop", 
  "mcp:list": "node run-mcp.js list",
  "mcp:setup": "bash setup-mcp.sh",
  "mcp:test": "node run-mcp.js start & sleep 5 && node run-mcp.js stop"
}')

# Write updated package.json
echo "$PACKAGE_JSON" > package.json

echo "✅ MCP scripts added to package.json"

# Create README for MCP tools
echo "📝 Creating MCP tools documentation..."
cat > MCP_TOOLS.md << 'EOF'
# Vendoora MCP Tools

This project includes a comprehensive set of MCP (Model Context Protocol) tools for enhanced development capabilities.

## Available Tools

### 🔍 Visual Analysis Tool
- **Purpose**: Analyze website pages for accessibility, performance, and best practices
- **Tools**: 
  - `renderAndAnalyzePage` - Render and analyze a page with enterprise best practices
  - `analyzeCrossDevice` - Analyze page across multiple devices and viewports
  - `crossReferenceBestPractices` - Cross-reference implementation with enterprise standards

### 🧠 AI Coding Assistant
- **Purpose**: AI-powered code generation, analysis, and optimization
- **Tools**:
  - `generateCode` - Generate production-ready code based on requirements
  - `analyzeCode` - Analyze code quality, complexity, and provide recommendations
  - `refactorCode` - Refactor code to improve maintainability and performance
  - `generateTests` - Generate comprehensive test suites
  - `optimizePerformance` - Analyze and optimize code performance
  - `securityAudit` - Perform security audit and identify vulnerabilities
  - `codeReview` - AI-powered code review with detailed feedback
  - `generateDocumentation` - Generate comprehensive documentation

### 📊 Analytics Tool
- **Purpose**: Website analytics and monitoring
- **Tools**:
  - `trackPageView` - Track page views and user interactions
  - `trackEvent` - Track custom events
  - `getAnalytics` - Retrieve analytics data
  - `generateReport` - Generate analytics reports

### 📁 Filesystem Tool
- **Purpose**: File system operations and management
- **Tools**:
  - `read_file` - Read files from the project
  - `write_file` - Write files to the project
  - `list_directory` - List directory contents
  - `search_files` - Search for files by pattern

### 🗄️ Supabase Tool
- **Purpose**: Database operations and real-time features
- **Tools**:
  - `query` - Execute database queries
  - `insert` - Insert data into database
  - `update` - Update database records
  - `delete` - Delete database records
  - `subscribe` - Subscribe to real-time updates

## Setup Instructions

1. **Install dependencies**:
   ```bash
   npm run mcp:setup
   ```

2. **Configure environment**:
   ```bash
   cp .env.mcp.example .env.mcp
   # Edit .env.mcp with your API keys and configuration
   ```

3. **Start MCP servers**:
   ```bash
   npm run mcp:start
   ```

4. **List available tools**:
   ```bash
   npm run mcp:list
   ```

## Usage Examples

### Visual Analysis
```bash
# Analyze your deployed site
node run-mcp.js start
# Then use the visual analysis tools to analyze your site
```

### AI Coding
```bash
# Generate code with AI assistance
# Use the AI coding tools to generate, analyze, and optimize code
```

### Analytics
```bash
# Track and analyze website performance
# Use analytics tools to monitor user behavior and site performance
```

## Configuration

The MCP tools are configured in `mcp-config.json`. You can customize:
- Server configurations
- Tool availability
- Environment variables
- RTL/LTR support settings

## RTL/LTR Support

The project includes comprehensive RTL (Right-to-Left) support for Arabic and other RTL languages:
- Automatic direction detection
- RTL-specific CSS styles
- Component-level RTL awareness
- Language-specific layouts

## Troubleshooting

1. **Servers won't start**: Check that all dependencies are installed and environment variables are set
2. **Tools not available**: Ensure servers are running and properly configured
3. **Permission errors**: Make sure scripts have execute permissions

## Development

To add new MCP tools:
1. Create a new tool in the `mcp-tools/` directory
2. Add configuration to `mcp-config.json`
3. Update this documentation
4. Test the new tool with `npm run mcp:test`
EOF

echo "✅ MCP tools documentation created"

echo ""
echo "🎉 MCP Tools setup complete!"
echo ""
echo "Next steps:"
echo "1. Copy .env.mcp.example to .env.mcp and fill in your API keys"
echo "2. Run 'npm run mcp:start' to start the MCP servers"
echo "3. Run 'npm run mcp:list' to see available tools"
echo "4. Read MCP_TOOLS.md for detailed usage instructions"
echo ""
echo "Your Vendoora development site now has:"
echo "✅ RTL/LTR language support (Arabic, English, Spanish, Portuguese)"
echo "✅ Visual analysis tools for accessibility and performance"
echo "✅ AI-powered coding assistance"
echo "✅ Analytics and monitoring tools"
echo "✅ Filesystem and database operations"
echo ""
echo "Happy coding! 🚀"
