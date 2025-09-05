export interface AnalyticsConfig {
  // Server Configuration
  serverName: string;
  serverVersion: string;
  
  // Data Sources Configuration
  dataSources: {
    application: DataSourceConfig;
    database: DataSourceConfig;
    external: DataSourceConfig;
    realtime: DataSourceConfig;
  };
  
  // Analytics Settings
  analytics: {
    retentionPeriod: number; // days
    aggregationIntervals: string[];
    maxDataPoints: number;
    enableRealTime: boolean;
    enablePredictiveAnalytics: boolean;
  };
  
  // Visualization Configuration
  visualization: {
    defaultChartType: string;
    supportedChartTypes: string[];
    colorPalette: string[];
    maxDataPointsPerChart: number;
    enableInteractivity: boolean;
    exportFormats: string[];
  };
  
  // Performance Monitoring
  performanceMonitoring: {
    enabled: boolean;
    metrics: string[];
    alertThresholds: Record<string, number>;
    monitoringIntervals: string[];
    retentionPolicy: string;
  };
  
  // Business Intelligence
  businessIntelligence: {
    kpis: KPIConfig[];
    reportTemplates: ReportTemplate[];
    forecastingModels: string[];
    dataRefreshInterval: string;
  };
  
  // Logging Configuration
  logging: {
    level: 'debug' | 'info' | 'warn' | 'error';
    format: 'json' | 'text';
    output: 'console' | 'file' | 'both';
    filePath?: string;
  };
}

export interface DataSourceConfig {
  name: string;
  type: 'database' | 'api' | 'file' | 'stream';
  connectionString?: string;
  credentials?: Record<string, string>;
  refreshInterval: string;
  enabled: boolean;
}

export interface KPIConfig {
  id: string;
  name: string;
  description: string;
  category: string;
  calculation: string;
  target: number;
  unit: string;
  alertThreshold: number;
}

export interface ReportTemplate {
  id: string;
  name: string;
  description: string;
  type: string;
  sections: ReportSection[];
  schedule?: string;
}

export interface ReportSection {
  title: string;
  type: 'chart' | 'table' | 'metric' | 'text';
  dataSource: string;
  config: Record<string, any>;
}

export class AnalyticsConfig {
  private static instance: AnalyticsConfig;
  
  private constructor() {
    // Initialize with default values
  }
  
  static getInstance(): AnalyticsConfig {
    if (!AnalyticsConfig.instance) {
      AnalyticsConfig.instance = AnalyticsConfig.loadFromEnvironment();
    }
    return AnalyticsConfig.instance;
  }
  
  private static loadFromEnvironment(): AnalyticsConfig {
    return {
      serverName: 'vendoora-mcp-analytics',
      serverVersion: '1.0.0',
      
      dataSources: {
        application: {
          name: 'Application Data',
          type: 'database',
          connectionString: process.env.APP_DATABASE_URL || 'postgresql://localhost:5432/analytics',
          refreshInterval: process.env.APP_REFRESH_INTERVAL || '5m',
          enabled: process.env.APP_DATA_ENABLED === 'true' || true
        },
        database: {
          name: 'Database Metrics',
          type: 'database',
          connectionString: process.env.DB_METRICS_URL || 'postgresql://localhost:5432/metrics',
          refreshInterval: process.env.DB_REFRESH_INTERVAL || '1m',
          enabled: process.env.DB_METRICS_ENABLED === 'true' || true
        },
        external: {
          name: 'External APIs',
          type: 'api',
          refreshInterval: process.env.EXTERNAL_REFRESH_INTERVAL || '15m',
          enabled: process.env.EXTERNAL_DATA_ENABLED === 'true' || false
        },
        realtime: {
          name: 'Real-time Streams',
          type: 'stream',
          refreshInterval: process.env.REALTIME_INTERVAL || '30s',
          enabled: process.env.REALTIME_ENABLED === 'true' || true
        }
      },
      
      analytics: {
        retentionPeriod: parseInt(process.env.DATA_RETENTION_DAYS || '90'),
        aggregationIntervals: ['1m', '5m', '15m', '1h', '1d'],
        maxDataPoints: parseInt(process.env.MAX_DATA_POINTS || '10000'),
        enableRealTime: process.env.ENABLE_REALTIME === 'true' || true,
        enablePredictiveAnalytics: process.env.ENABLE_PREDICTIVE === 'true' || true
      },
      
      visualization: {
        defaultChartType: process.env.DEFAULT_CHART_TYPE || 'line',
        supportedChartTypes: ['line', 'bar', 'pie', 'scatter', 'heatmap', 'area', 'gauge'],
        colorPalette: ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#06B6D4'],
        maxDataPointsPerChart: parseInt(process.env.MAX_CHART_POINTS || '1000'),
        enableInteractivity: process.env.ENABLE_INTERACTIVITY === 'true' || true,
        exportFormats: ['png', 'svg', 'pdf', 'csv', 'json']
      },
      
      performanceMonitoring: {
        enabled: process.env.PERFORMANCE_MONITORING_ENABLED === 'true' || true,
        metrics: ['cpu', 'memory', 'disk', 'network', 'response_time', 'throughput'],
        alertThresholds: {
          cpu: parseFloat(process.env.CPU_THRESHOLD || '0.8'),
          memory: parseFloat(process.env.MEMORY_THRESHOLD || '0.85'),
          disk: parseFloat(process.env.DISK_THRESHOLD || '0.9'),
          response_time: parseFloat(process.env.RESPONSE_TIME_THRESHOLD || '2000')
        },
        monitoringIntervals: ['1m', '5m', '15m', '1h'],
        retentionPolicy: process.env.PERFORMANCE_RETENTION || '30d'
      },
      
      businessIntelligence: {
        kpis: AnalyticsConfig.getDefaultKPIs(),
        reportTemplates: AnalyticsConfig.getDefaultReportTemplates(),
        forecastingModels: ['linear', 'exponential', 'seasonal', 'arima'],
        dataRefreshInterval: process.env.BI_REFRESH_INTERVAL || '1h'
      },
      
      logging: {
        level: (process.env.LOG_LEVEL as any) || 'info',
        format: (process.env.LOG_FORMAT as any) || 'json',
        output: (process.env.LOG_OUTPUT as any) || 'console',
        filePath: process.env.LOG_FILE_PATH
      }
    };
  }
  
  private static getDefaultKPIs(): KPIConfig[] {
    return [
      {
        id: 'user_engagement',
        name: 'User Engagement',
        description: 'Daily active users and session duration',
        category: 'User',
        calculation: 'COUNT(DISTINCT user_id) / COUNT(DISTINCT DATE(timestamp))',
        target: 1000,
        unit: 'users/day',
        alertThreshold: 800
      },
      {
        id: 'conversion_rate',
        name: 'Conversion Rate',
        description: 'Percentage of users who complete desired actions',
        category: 'Business',
        calculation: 'COUNT(conversions) / COUNT(sessions) * 100',
        target: 5.0,
        unit: '%',
        alertThreshold: 3.0
      },
      {
        id: 'response_time',
        name: 'Response Time',
        description: 'Average application response time',
        category: 'Performance',
        calculation: 'AVG(response_time)',
        target: 200,
        unit: 'ms',
        alertThreshold: 500
      },
      {
        id: 'error_rate',
        name: 'Error Rate',
        description: 'Percentage of requests that result in errors',
        category: 'Quality',
        calculation: 'COUNT(errors) / COUNT(requests) * 100',
        target: 1.0,
        unit: '%',
        alertThreshold: 5.0
      },
      {
        id: 'revenue',
        name: 'Revenue',
        description: 'Total revenue generated',
        category: 'Financial',
        calculation: 'SUM(amount)',
        target: 10000,
        unit: 'USD',
        alertThreshold: 8000
      }
    ];
  }
  
  private static getDefaultReportTemplates(): ReportTemplate[] {
    return [
      {
        id: 'executive_summary',
        name: 'Executive Summary',
        description: 'High-level business metrics for executives',
        type: 'executive',
        sections: [
          {
            title: 'Key Performance Indicators',
            type: 'metric',
            dataSource: 'kpis',
            config: { display: 'cards', metrics: ['user_engagement', 'conversion_rate', 'revenue'] }
          },
          {
            title: 'User Growth Trend',
            type: 'chart',
            dataSource: 'user_metrics',
            config: { chartType: 'line', timeRange: '30d' }
          },
          {
            title: 'Revenue Analysis',
            type: 'chart',
            dataSource: 'financial_metrics',
            config: { chartType: 'bar', groupBy: 'product' }
          }
        ]
      },
      {
        id: 'operational_dashboard',
        name: 'Operational Dashboard',
        description: 'Real-time operational metrics',
        type: 'operational',
        sections: [
          {
            title: 'System Performance',
            type: 'chart',
            dataSource: 'performance_metrics',
            config: { chartType: 'line', metrics: ['cpu', 'memory', 'response_time'] }
          },
          {
            title: 'Error Rates',
            type: 'chart',
            dataSource: 'error_metrics',
            config: { chartType: 'area', timeRange: '24h' }
          },
          {
            title: 'Active Users',
            type: 'metric',
            dataSource: 'user_metrics',
            config: { display: 'gauge', metric: 'active_users' }
          }
        ]
      },
      {
        id: 'customer_analytics',
        name: 'Customer Analytics',
        description: 'Customer behavior and satisfaction metrics',
        type: 'customer',
        sections: [
          {
            title: 'User Journey',
            type: 'chart',
            dataSource: 'user_behavior',
            config: { chartType: 'funnel', steps: ['visit', 'signup', 'purchase'] }
          },
          {
            title: 'Customer Satisfaction',
            type: 'chart',
            dataSource: 'feedback_metrics',
            config: { chartType: 'pie', metric: 'satisfaction_score' }
          },
          {
            title: 'Retention Analysis',
            type: 'chart',
            dataSource: 'retention_metrics',
            config: { chartType: 'heatmap', timeRange: '90d' }
          }
        ]
      }
    ];
  }
}
