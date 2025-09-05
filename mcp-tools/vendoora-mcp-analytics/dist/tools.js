import { UserBehaviorAnalytics } from './services/user-behavior-analytics.js';
import { PerformanceMonitor } from './services/performance-monitor.js';
import { BusinessIntelligence } from './services/business-intelligence.js';
import { DataVisualization } from './services/data-visualization.js';
import { TrendAnalysis } from './services/trend-analysis.js';
import { CustomDashboard } from './services/custom-dashboard.js';
export class AnalyticsTools {
    logger;
    userBehaviorAnalytics;
    performanceMonitor;
    businessIntelligence;
    dataVisualization;
    trendAnalysis;
    customDashboard;
    constructor(logger) {
        this.logger = logger;
        this.userBehaviorAnalytics = new UserBehaviorAnalytics(logger);
        this.performanceMonitor = new PerformanceMonitor(logger);
        this.businessIntelligence = new BusinessIntelligence(logger);
        this.dataVisualization = new DataVisualization(logger);
        this.trendAnalysis = new TrendAnalysis(logger);
        this.customDashboard = new CustomDashboard(logger);
    }
    async getAvailableTools() {
        return [
            {
                name: 'analyzeUserBehavior',
                description: 'Analyze user behavior patterns, engagement metrics, and user journey insights',
                inputSchema: {
                    type: 'object',
                    properties: {
                        dataSource: {
                            type: 'string',
                            description: 'Source of user behavior data',
                            default: 'application'
                        },
                        timeRange: {
                            type: 'string',
                            enum: ['1h', '24h', '7d', '30d', '90d'],
                            description: 'Time range for analysis',
                            default: '7d'
                        },
                        metrics: {
                            type: 'array',
                            items: { type: 'string' },
                            description: 'Specific metrics to analyze',
                            default: ['engagement', 'retention', 'conversion']
                        },
                        includeInsights: {
                            type: 'boolean',
                            description: 'Include AI-generated insights',
                            default: true
                        }
                    },
                    required: ['dataSource']
                }
            },
            {
                name: 'monitorPerformance',
                description: 'Monitor application performance, system metrics, and real-time analytics',
                inputSchema: {
                    type: 'object',
                    properties: {
                        metricType: {
                            type: 'string',
                            enum: ['application', 'system', 'database', 'network', 'all'],
                            description: 'Type of performance metrics to monitor',
                            default: 'all'
                        },
                        interval: {
                            type: 'string',
                            enum: ['1m', '5m', '15m', '1h'],
                            description: 'Monitoring interval',
                            default: '5m'
                        },
                        includeAlerts: {
                            type: 'boolean',
                            description: 'Include performance alerts',
                            default: true
                        },
                        threshold: {
                            type: 'number',
                            description: 'Performance threshold for alerts',
                            default: 0.8
                        }
                    },
                    required: ['metricType']
                }
            },
            {
                name: 'generateBusinessIntelligence',
                description: 'Generate business intelligence reports, KPIs, and strategic insights',
                inputSchema: {
                    type: 'object',
                    properties: {
                        reportType: {
                            type: 'string',
                            enum: ['executive', 'operational', 'financial', 'customer', 'comprehensive'],
                            description: 'Type of business intelligence report',
                            default: 'comprehensive'
                        },
                        timeRange: {
                            type: 'string',
                            enum: ['1d', '7d', '30d', '90d', '1y'],
                            description: 'Time range for the report',
                            default: '30d'
                        },
                        includeForecasting: {
                            type: 'boolean',
                            description: 'Include predictive analytics',
                            default: true
                        },
                        format: {
                            type: 'string',
                            enum: ['json', 'csv', 'pdf', 'dashboard'],
                            description: 'Output format',
                            default: 'json'
                        }
                    },
                    required: ['reportType']
                }
            },
            {
                name: 'createDataVisualization',
                description: 'Create charts, graphs, and interactive data visualizations',
                inputSchema: {
                    type: 'object',
                    properties: {
                        chartType: {
                            type: 'string',
                            enum: ['line', 'bar', 'pie', 'scatter', 'heatmap', 'dashboard'],
                            description: 'Type of chart to create',
                            default: 'dashboard'
                        },
                        dataSource: {
                            type: 'string',
                            description: 'Source of data for visualization',
                            required: true
                        },
                        dimensions: {
                            type: 'array',
                            items: { type: 'string' },
                            description: 'Dimensions to include in visualization'
                        },
                        metrics: {
                            type: 'array',
                            items: { type: 'string' },
                            description: 'Metrics to visualize'
                        },
                        interactive: {
                            type: 'boolean',
                            description: 'Make visualization interactive',
                            default: true
                        }
                    },
                    required: ['chartType', 'dataSource']
                }
            },
            {
                name: 'analyzeTrends',
                description: 'Analyze trends, patterns, and predictive analytics',
                inputSchema: {
                    type: 'object',
                    properties: {
                        trendType: {
                            type: 'string',
                            enum: ['user', 'business', 'technical', 'market', 'comprehensive'],
                            description: 'Type of trend analysis',
                            default: 'comprehensive'
                        },
                        timeRange: {
                            type: 'string',
                            enum: ['30d', '90d', '180d', '1y', '2y'],
                            description: 'Time range for trend analysis',
                            default: '90d'
                        },
                        includePredictions: {
                            type: 'boolean',
                            description: 'Include future predictions',
                            default: true
                        },
                        confidenceLevel: {
                            type: 'number',
                            description: 'Confidence level for predictions (0-1)',
                            default: 0.95
                        }
                    },
                    required: ['trendType']
                }
            },
            {
                name: 'createCustomDashboard',
                description: 'Create custom analytics dashboards with configurable widgets and metrics',
                inputSchema: {
                    type: 'object',
                    properties: {
                        dashboardName: {
                            type: 'string',
                            description: 'Name of the dashboard',
                            required: true
                        },
                        widgets: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    type: { type: 'string' },
                                    title: { type: 'string' },
                                    dataSource: { type: 'string' },
                                    config: { type: 'object' }
                                }
                            },
                            description: 'Dashboard widgets configuration'
                        },
                        refreshInterval: {
                            type: 'string',
                            enum: ['30s', '1m', '5m', '15m', 'manual'],
                            description: 'Dashboard refresh interval',
                            default: '5m'
                        },
                        includeFilters: {
                            type: 'boolean',
                            description: 'Include interactive filters',
                            default: true
                        }
                    },
                    required: ['dashboardName']
                }
            }
        ];
    }
    async executeTool(name, args) {
        const startTime = Date.now();
        this.logger.info(`Starting analytics tool execution: ${name}`, {
            tool: name,
            args: args,
            timestamp: new Date().toISOString()
        });
        try {
            let result;
            switch (name) {
                case 'analyzeUserBehavior':
                    result = await this.userBehaviorAnalytics.analyze(args);
                    break;
                case 'monitorPerformance':
                    result = await this.performanceMonitor.monitor(args);
                    break;
                case 'generateBusinessIntelligence':
                    result = await this.businessIntelligence.generate(args);
                    break;
                case 'createDataVisualization':
                    result = await this.dataVisualization.create(args);
                    break;
                case 'analyzeTrends':
                    result = await this.trendAnalysis.analyze(args);
                    break;
                case 'createCustomDashboard':
                    result = await this.customDashboard.create(args);
                    break;
                default:
                    throw new Error(`Unknown analytics tool: ${name}`);
            }
            const duration = Date.now() - startTime;
            return {
                success: true,
                data: result,
                metadata: {
                    timestamp: new Date().toISOString(),
                    tool: name,
                    duration,
                    dataPoints: result.dataPoints || 0,
                    insights: result.insights || []
                }
            };
        }
        catch (error) {
            const duration = Date.now() - startTime;
            this.logger.error(`Analytics tool execution failed: ${name}`, {
                tool: name,
                error: error instanceof Error ? error.message : String(error),
                duration,
                timestamp: new Date().toISOString()
            });
            return {
                success: false,
                data: { error: error instanceof Error ? error.message : String(error) },
                metadata: {
                    timestamp: new Date().toISOString(),
                    tool: name,
                    duration,
                    dataPoints: 0,
                    insights: []
                }
            };
        }
    }
}
