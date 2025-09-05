export class AnalyticsLogger {
    logLevel;
    logFormat;
    logOutput;
    logFilePath;
    analyticsEvents = [];
    metrics = new Map();
    constructor() {
        this.logLevel = process.env.LOG_LEVEL || 'info';
        this.logFormat = process.env.LOG_FORMAT || 'json';
        this.logOutput = process.env.LOG_OUTPUT || 'console';
        this.logFilePath = process.env.LOG_FILE_PATH;
    }
    shouldLog(level) {
        const levels = { debug: 0, info: 1, warn: 2, error: 3 };
        return levels[level] >= levels[this.logLevel];
    }
    formatLog(entry) {
        if (this.logFormat === 'json') {
            return JSON.stringify(entry);
        }
        else {
            const { timestamp, level, message, metadata } = entry;
            const metadataStr = Object.keys(metadata).length > 0
                ? ` ${JSON.stringify(metadata)}`
                : '';
            return `[${timestamp}] ${level.toUpperCase()}: ${message}${metadataStr}`;
        }
    }
    writeLog(entry) {
        const formattedLog = this.formatLog(entry);
        if (this.logOutput === 'console' || this.logOutput === 'both') {
            console.log(formattedLog);
        }
        if (this.logOutput === 'file' || this.logOutput === 'both') {
            this.writeToFile(formattedLog);
        }
    }
    writeToFile(logEntry) {
        // In a production environment, you would implement file writing
        // For now, we'll simulate file logging
        if (this.logFilePath) {
            console.log(`[FILE LOG] ${logEntry}`);
        }
    }
    createLogEntry(level, message, metadata = {}, analyticsEvent) {
        return {
            timestamp: new Date().toISOString(),
            level,
            message,
            metadata,
            analyticsEvent
        };
    }
    debug(message, metadata = {}) {
        if (this.shouldLog('debug')) {
            const entry = this.createLogEntry('debug', message, metadata);
            this.writeLog(entry);
        }
    }
    info(message, metadata = {}) {
        if (this.shouldLog('info')) {
            const entry = this.createLogEntry('info', message, metadata);
            this.writeLog(entry);
        }
    }
    warn(message, metadata = {}) {
        if (this.shouldLog('warn')) {
            const entry = this.createLogEntry('warn', message, metadata);
            this.writeLog(entry);
        }
    }
    error(message, metadata = {}) {
        if (this.shouldLog('error')) {
            const entry = this.createLogEntry('error', message, metadata);
            this.writeLog(entry);
        }
    }
    // Analytics-specific logging methods
    logAnalyticsEvent(eventType, category, action, value, dimensions = {}, userId, sessionId) {
        const analyticsEvent = {
            eventType,
            category,
            action,
            value,
            dimensions,
            userId,
            sessionId,
            timestamp: new Date().toISOString()
        };
        this.analyticsEvents.push(analyticsEvent);
        const metadata = {
            analyticsEvent,
            eventType,
            category,
            action,
            value,
            userId,
            sessionId
        };
        this.info(`Analytics event: ${category} - ${action}`, metadata);
    }
    logUserAction(category, action, userId, sessionId, dimensions = {}) {
        this.logAnalyticsEvent('user_action', category, action, undefined, dimensions, userId, sessionId);
    }
    logPerformanceMetric(metric, value, dimensions = {}) {
        this.logAnalyticsEvent('performance', 'performance', metric, value, dimensions);
        // Store metric for aggregation
        if (!this.metrics.has(metric)) {
            this.metrics.set(metric, []);
        }
        this.metrics.get(metric).push(value);
    }
    logBusinessMetric(metric, value, category, dimensions = {}) {
        this.logAnalyticsEvent('business_metric', category, metric, value, dimensions);
        // Store metric for aggregation
        const metricKey = `${category}_${metric}`;
        if (!this.metrics.has(metricKey)) {
            this.metrics.set(metricKey, []);
        }
        this.metrics.get(metricKey).push(value);
    }
    logDataProcessing(operation, recordsProcessed, duration, dimensions = {}) {
        this.logAnalyticsEvent('data_processing', 'data_processing', operation, recordsProcessed, {
            ...dimensions,
            duration,
            throughput: recordsProcessed / (duration / 1000)
        });
    }
    logVisualization(chartType, dataPoints, dimensions = {}) {
        this.logAnalyticsEvent('visualization', 'visualization', chartType, dataPoints, dimensions);
    }
    // Get analytics events for analysis
    getAnalyticsEvents(filter) {
        let events = [...this.analyticsEvents];
        if (filter) {
            if (filter.eventType) {
                events = events.filter(e => e.eventType === filter.eventType);
            }
            if (filter.category) {
                events = events.filter(e => e.category === filter.category);
            }
            if (filter.action) {
                events = events.filter(e => e.action === filter.action);
            }
            if (filter.userId) {
                events = events.filter(e => e.userId === filter.userId);
            }
            if (filter.startDate) {
                events = events.filter(e => new Date(e.timestamp) >= filter.startDate);
            }
            if (filter.endDate) {
                events = events.filter(e => new Date(e.timestamp) <= filter.endDate);
            }
        }
        return events;
    }
    // Get analytics metrics
    getAnalyticsMetrics() {
        const events = this.analyticsEvents;
        const eventsByType = events.reduce((acc, event) => {
            acc[event.eventType] = (acc[event.eventType] || 0) + 1;
            return acc;
        }, {});
        const eventsByCategory = events.reduce((acc, event) => {
            acc[event.category] = (acc[event.category] || 0) + 1;
            return acc;
        }, {});
        const metrics = {};
        this.metrics.forEach((values, key) => {
            const sum = values.reduce((a, b) => a + b, 0);
            metrics[key] = {
                count: values.length,
                sum,
                average: sum / values.length,
                min: Math.min(...values),
                max: Math.max(...values)
            };
        });
        return {
            totalEvents: events.length,
            eventsByType,
            eventsByCategory,
            metrics
        };
    }
    // Get performance metrics
    getPerformanceMetrics() {
        const responseTimes = this.metrics.get('performance_response_time') || [];
        const throughputs = this.metrics.get('performance_throughput') || [];
        const errors = this.metrics.get('performance_errors') || [];
        const total = this.metrics.get('performance_total') || [];
        const sortedResponseTimes = [...responseTimes].sort((a, b) => a - b);
        const p95Index = Math.floor(sortedResponseTimes.length * 0.95);
        const p99Index = Math.floor(sortedResponseTimes.length * 0.99);
        return {
            responseTime: {
                average: responseTimes.length > 0 ? responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length : 0,
                p95: sortedResponseTimes[p95Index] || 0,
                p99: sortedResponseTimes[p99Index] || 0
            },
            throughput: {
                average: throughputs.length > 0 ? throughputs.reduce((a, b) => a + b, 0) / throughputs.length : 0,
                max: throughputs.length > 0 ? Math.max(...throughputs) : 0
            },
            errorRate: total.length > 0 ? (errors.length / total.length) * 100 : 0,
            availability: total.length > 0 ? ((total.length - errors.length) / total.length) * 100 : 100
        };
    }
    // Get business metrics
    getBusinessMetrics() {
        const userEngagement = this.metrics.get('business_user_engagement') || [];
        const conversions = this.metrics.get('business_conversions') || [];
        const sessions = this.metrics.get('business_sessions') || [];
        const revenue = this.metrics.get('business_revenue') || [];
        const satisfaction = this.metrics.get('business_satisfaction') || [];
        return {
            userEngagement: userEngagement.length > 0 ? userEngagement[userEngagement.length - 1] : 0,
            conversionRate: sessions.length > 0 ? (conversions.length / sessions.length) * 100 : 0,
            revenue: revenue.length > 0 ? revenue.reduce((a, b) => a + b, 0) : 0,
            customerSatisfaction: satisfaction.length > 0 ? satisfaction.reduce((a, b) => a + b, 0) / satisfaction.length : 0
        };
    }
    // Clear analytics events (useful for testing)
    clearAnalyticsEvents() {
        this.analyticsEvents = [];
        this.metrics.clear();
    }
    // Export analytics data
    exportAnalyticsData(format = 'json') {
        if (format === 'csv') {
            const headers = ['timestamp', 'eventType', 'category', 'action', 'value', 'userId', 'sessionId'];
            const rows = this.analyticsEvents.map(event => [
                event.timestamp || new Date().toISOString(),
                event.eventType,
                event.category,
                event.action,
                event.value || '',
                event.userId || '',
                event.sessionId || ''
            ]);
            return [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
        }
        else {
            return JSON.stringify({
                events: this.analyticsEvents,
                metrics: Object.fromEntries(this.metrics),
                summary: this.getAnalyticsMetrics()
            }, null, 2);
        }
    }
}
