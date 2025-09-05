#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { AnalyticsTools } from './tools.js';
import { AnalyticsConfig } from './config.js';
import { AnalyticsLogger } from './utils/logger.js';

class VendooraAnalyticsMCPServer {
  private server: Server;
  private analyticsTools: AnalyticsTools;
  private logger: AnalyticsLogger;

  constructor() {
    this.logger = new AnalyticsLogger();
    this.analyticsTools = new AnalyticsTools(this.logger);
    
    this.server = new Server(
      {
        name: 'vendoora-mcp-analytics',
        version: '1.0.0',
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
    this.setupErrorHandling();
  }

  private setupToolHandlers(): void {
    // List available analytics tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: await this.analyticsTools.getAvailableTools(),
      };
    });

    // Handle tool execution
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;
      
      this.logger.info(`Executing analytics tool: ${name}`, { 
        tool: name, 
        args: args,
        timestamp: new Date().toISOString()
      });

      try {
        const result = await this.analyticsTools.executeTool(name, args);
        
        this.logger.info(`Analytics tool completed: ${name}`, {
          tool: name,
          success: true,
          timestamp: new Date().toISOString()
        });

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      } catch (error) {
        this.logger.error(`Analytics tool failed: ${name}`, {
          tool: name,
          error: error instanceof Error ? error.message : String(error),
          stack: error instanceof Error ? error.stack : undefined,
          timestamp: new Date().toISOString()
        });

        throw error;
      }
    });
  }

  private setupErrorHandling(): void {
    process.on('uncaughtException', (error) => {
      this.logger.error('Uncaught exception in analytics server', {
        error: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
      });
      process.exit(1);
    });

    process.on('unhandledRejection', (reason, promise) => {
      this.logger.error('Unhandled rejection in analytics server', {
        reason: reason instanceof Error ? reason.message : String(reason),
        stack: reason instanceof Error ? reason.stack : undefined,
        timestamp: new Date().toISOString()
      });
    });
  }

  async run(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    
    this.logger.info('Vendoora Analytics MCP Server started', {
      version: '1.0.0',
      timestamp: new Date().toISOString()
    });
  }
}

// Start the server
const server = new VendooraAnalyticsMCPServer();
server.run().catch((error) => {
  console.error('Failed to start Vendoora Analytics MCP Server:', error);
  process.exit(1);
});
