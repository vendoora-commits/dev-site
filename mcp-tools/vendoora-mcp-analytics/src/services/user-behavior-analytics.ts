import { AnalyticsLogger } from '../utils/logger.js';
import { AnalyticsConfig } from '../config.js';

export interface UserBehavior {
  userId: string;
  sessionId: string;
  timestamp: string;
  action: string;
  category: string;
  page?: string;
  duration?: number;
  properties: Record<string, any>;
}

export interface UserJourney {
  userId: string;
  sessionId: string;
  steps: UserJourneyStep[];
  startTime: string;
  endTime: string;
  duration: number;
  conversion: boolean;
  conversionValue?: number;
}

export interface UserJourneyStep {
  action: string;
  timestamp: string;
  page?: string;
  duration: number;
  properties: Record<string, any>;
}

export interface EngagementMetrics {
  dailyActiveUsers: number;
  weeklyActiveUsers: number;
  monthlyActiveUsers: number;
  averageSessionDuration: number;
  pagesPerSession: number;
  bounceRate: number;
  retentionRate: number;
}

export interface UserBehaviorAnalysis {
  dataSource: string;
  timeRange: string;
  timestamp: string;
  userBehaviors: UserBehavior[];
  userJourneys: UserJourney[];
  engagementMetrics: EngagementMetrics;
  insights: string[];
  recommendations: string[];
  dataPoints: number;
}

export class UserBehaviorAnalytics {
  private logger: AnalyticsLogger;
  private config: AnalyticsConfig;

  constructor(logger: AnalyticsLogger) {
    this.logger = logger;
    this.config = AnalyticsConfig.getInstance();
  }

  async analyze(args: {
    dataSource: string;
    timeRange: string;
    metrics: string[];
    includeInsights: boolean;
  }): Promise<UserBehaviorAnalysis> {
    const { dataSource, timeRange, metrics, includeInsights } = args;
    const startTime = Date.now();

    this.logger.info('Starting user behavior analysis', {
      dataSource,
      timeRange,
      metrics,
      includeInsights,
      timestamp: new Date().toISOString()
    });

    try {
      // Simulate data collection
      const userBehaviors = await this.collectUserBehaviors(dataSource, timeRange);
      const userJourneys = await this.analyzeUserJourneys(userBehaviors);
      const engagementMetrics = await this.calculateEngagementMetrics(userBehaviors, userJourneys);
      
      const insights = includeInsights ? await this.generateInsights(userBehaviors, userJourneys, engagementMetrics) : [];
      const recommendations = includeInsights ? await this.generateRecommendations(engagementMetrics, insights) : [];

      const result: UserBehaviorAnalysis = {
        dataSource,
        timeRange,
        timestamp: new Date().toISOString(),
        userBehaviors,
        userJourneys,
        engagementMetrics,
        insights,
        recommendations,
        dataPoints: userBehaviors.length
      };

      const analysisDuration = Date.now() - startTime;

      this.logger.info('User behavior analysis completed', {
        dataSource,
        timeRange,
        totalBehaviors: userBehaviors.length,
        totalJourneys: userJourneys.length,
        insightsGenerated: insights.length,
        analysisDuration
      });

      // Log analytics events
      this.logger.logDataProcessing(
        'user_behavior_analysis',
        userBehaviors.length,
        analysisDuration,
        { dataSource, timeRange, metrics }
      );

      return result;

    } catch (error) {
      const analysisDuration = Date.now() - startTime;
      
      this.logger.error('User behavior analysis failed', {
        dataSource,
        timeRange,
        error: error instanceof Error ? error.message : String(error),
        analysisDuration
      });

      throw error;
    }
  }

  private async collectUserBehaviors(dataSource: string, timeRange: string): Promise<UserBehavior[]> {
    // Simulate collecting user behavior data
    const behaviors: UserBehavior[] = [];
    const now = new Date();
    const timeRangeMs = this.parseTimeRange(timeRange);
    const startTime = new Date(now.getTime() - timeRangeMs);

    // Generate sample user behaviors
    const sampleUsers = ['user1', 'user2', 'user3', 'user4', 'user5'];
    const sampleActions = ['page_view', 'click', 'scroll', 'form_submit', 'purchase'];
    const samplePages = ['home', 'products', 'cart', 'checkout', 'profile'];

    for (let i = 0; i < 100; i++) {
      const userId = sampleUsers[Math.floor(Math.random() * sampleUsers.length)];
      const sessionId = `session_${userId}_${Math.floor(Math.random() * 1000)}`;
      const timestamp = new Date(startTime.getTime() + Math.random() * timeRangeMs).toISOString();
      const action = sampleActions[Math.floor(Math.random() * sampleActions.length)];
      const page = samplePages[Math.floor(Math.random() * samplePages.length)];

      behaviors.push({
        userId,
        sessionId,
        timestamp,
        action,
        category: this.categorizeAction(action),
        page,
        duration: Math.floor(Math.random() * 300) + 10,
        properties: {
          userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          referrer: 'https://google.com',
          screenResolution: '1920x1080',
          language: 'en-US'
        }
      });
    }

    return behaviors.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
  }

  private async analyzeUserJourneys(userBehaviors: UserBehavior[]): Promise<UserJourney[]> {
    const journeys: UserJourney[] = [];
    const sessions = new Map<string, UserBehavior[]>();

    // Group behaviors by session
    userBehaviors.forEach(behavior => {
      if (!sessions.has(behavior.sessionId)) {
        sessions.set(behavior.sessionId, []);
      }
      sessions.get(behavior.sessionId)!.push(behavior);
    });

    // Analyze each session as a journey
    sessions.forEach((sessionBehaviors, sessionId) => {
      const sortedBehaviors = sessionBehaviors.sort((a, b) => 
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      );

      const steps: UserJourneyStep[] = sortedBehaviors.map((behavior, index) => {
        const nextBehavior = sortedBehaviors[index + 1];
        const duration = nextBehavior 
          ? new Date(nextBehavior.timestamp).getTime() - new Date(behavior.timestamp).getTime()
          : behavior.duration || 0;

        return {
          action: behavior.action,
          timestamp: behavior.timestamp,
          page: behavior.page,
          duration,
          properties: behavior.properties
        };
      });

      const startTime = sortedBehaviors[0].timestamp;
      const endTime = sortedBehaviors[sortedBehaviors.length - 1].timestamp;
      const duration = new Date(endTime).getTime() - new Date(startTime).getTime();
      const conversion = sortedBehaviors.some(b => b.action === 'purchase');
      const conversionValue = conversion ? Math.floor(Math.random() * 1000) + 50 : undefined;

      journeys.push({
        userId: sortedBehaviors[0].userId,
        sessionId,
        steps,
        startTime,
        endTime,
        duration,
        conversion,
        conversionValue
      });
    });

    return journeys;
  }

  private async calculateEngagementMetrics(
    userBehaviors: UserBehavior[], 
    userJourneys: UserJourney[]
  ): Promise<EngagementMetrics> {
    const uniqueUsers = new Set(userBehaviors.map(b => b.userId));
    const uniqueSessions = new Set(userBehaviors.map(b => b.sessionId));
    
    // Calculate daily active users (simplified)
    const dailyActiveUsers = uniqueUsers.size;
    
    // Calculate session metrics
    const totalSessions = uniqueSessions.size;
    const totalSessionDuration = userJourneys.reduce((sum, journey) => sum + journey.duration, 0);
    const averageSessionDuration = totalSessions > 0 ? totalSessionDuration / totalSessions : 0;
    
    // Calculate pages per session
    const totalPages = userBehaviors.filter(b => b.action === 'page_view').length;
    const pagesPerSession = totalSessions > 0 ? totalPages / totalSessions : 0;
    
    // Calculate bounce rate (sessions with only one page view)
    const singlePageSessions = userJourneys.filter(j => j.steps.length === 1).length;
    const bounceRate = totalSessions > 0 ? (singlePageSessions / totalSessions) * 100 : 0;
    
    // Calculate retention rate (simplified)
    const retentionRate = 75 + Math.random() * 20; // Simulated retention rate

    return {
      dailyActiveUsers,
      weeklyActiveUsers: Math.floor(dailyActiveUsers * 1.5),
      monthlyActiveUsers: Math.floor(dailyActiveUsers * 3),
      averageSessionDuration,
      pagesPerSession,
      bounceRate,
      retentionRate
    };
  }

  private async generateInsights(
    userBehaviors: UserBehavior[], 
    userJourneys: UserJourney[], 
    engagementMetrics: EngagementMetrics
  ): Promise<string[]> {
    const insights: string[] = [];

    // Analyze user behavior patterns
    const actionCounts = userBehaviors.reduce((acc, behavior) => {
      acc[behavior.action] = (acc[behavior.action] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const mostCommonAction = Object.entries(actionCounts)
      .sort(([,a], [,b]) => b - a)[0];

    if (mostCommonAction) {
      insights.push(`Most common user action: ${mostCommonAction[0]} (${mostCommonAction[1]} times)`);
    }

    // Analyze conversion patterns
    const conversionJourneys = userJourneys.filter(j => j.conversion);
    const conversionRate = userJourneys.length > 0 ? (conversionJourneys.length / userJourneys.length) * 100 : 0;
    
    insights.push(`Conversion rate: ${conversionRate.toFixed(2)}%`);
    
    if (conversionRate > 5) {
      insights.push('High conversion rate indicates effective user experience');
    } else if (conversionRate < 2) {
      insights.push('Low conversion rate suggests need for UX improvements');
    }

    // Analyze session duration
    if (engagementMetrics.averageSessionDuration > 300000) { // 5 minutes
      insights.push('Long average session duration indicates high user engagement');
    } else if (engagementMetrics.averageSessionDuration < 60000) { // 1 minute
      insights.push('Short session duration may indicate poor user experience');
    }

    // Analyze bounce rate
    if (engagementMetrics.bounceRate < 30) {
      insights.push('Low bounce rate indicates effective landing pages');
    } else if (engagementMetrics.bounceRate > 70) {
      insights.push('High bounce rate suggests need for landing page optimization');
    }

    return insights;
  }

  private async generateRecommendations(
    engagementMetrics: EngagementMetrics, 
    insights: string[]
  ): Promise<string[]> {
    const recommendations: string[] = [];

    // Session duration recommendations
    if (engagementMetrics.averageSessionDuration < 120000) { // 2 minutes
      recommendations.push('Improve content quality and user experience to increase session duration');
    }

    // Bounce rate recommendations
    if (engagementMetrics.bounceRate > 50) {
      recommendations.push('Optimize landing pages and improve page load times to reduce bounce rate');
    }

    // Pages per session recommendations
    if (engagementMetrics.pagesPerSession < 2) {
      recommendations.push('Add internal linking and improve navigation to encourage more page views');
    }

    // Conversion rate recommendations
    const conversionRate = insights.find(i => i.includes('Conversion rate'));
    if (conversionRate) {
      const rate = parseFloat(conversionRate.match(/(\d+\.?\d*)%/)![1]);
      if (rate < 3) {
        recommendations.push('Implement A/B testing and optimize conversion funnels');
      }
    }

    // General recommendations
    recommendations.push('Implement user feedback collection to understand pain points');
    recommendations.push('Add personalized content recommendations to increase engagement');
    recommendations.push('Optimize mobile experience for better user retention');

    return recommendations;
  }

  private categorizeAction(action: string): string {
    const actionCategories: Record<string, string> = {
      'page_view': 'navigation',
      'click': 'interaction',
      'scroll': 'engagement',
      'form_submit': 'conversion',
      'purchase': 'conversion',
      'search': 'discovery',
      'filter': 'discovery',
      'add_to_cart': 'conversion',
      'remove_from_cart': 'conversion',
      'login': 'authentication',
      'logout': 'authentication',
      'signup': 'conversion'
    };

    return actionCategories[action] || 'other';
  }

  private parseTimeRange(timeRange: string): number {
    const timeRangeMap: Record<string, number> = {
      '1h': 60 * 60 * 1000,
      '24h': 24 * 60 * 60 * 1000,
      '7d': 7 * 24 * 60 * 60 * 1000,
      '30d': 30 * 24 * 60 * 60 * 1000,
      '90d': 90 * 24 * 60 * 60 * 1000
    };

    return timeRangeMap[timeRange] || 7 * 24 * 60 * 60 * 1000; // Default to 7 days
  }

  // Get user behavior patterns
  getUserBehaviorPatterns(userId: string, timeRange: string): {
    patterns: Record<string, number>;
    preferences: string[];
    peakActivityTime: string;
  } {
    // Simulate user behavior patterns
    const patterns = {
      'page_view': Math.floor(Math.random() * 50) + 10,
      'click': Math.floor(Math.random() * 30) + 5,
      'scroll': Math.floor(Math.random() * 20) + 3,
      'form_submit': Math.floor(Math.random() * 5) + 1,
      'purchase': Math.floor(Math.random() * 3) + 0
    };

    const preferences = ['mobile', 'desktop', 'tablet'].slice(0, Math.floor(Math.random() * 3) + 1);
    const peakActivityTime = ['morning', 'afternoon', 'evening', 'night'][Math.floor(Math.random() * 4)];

    return {
      patterns,
      preferences,
      peakActivityTime
    };
  }

  // Get user segmentation
  getUserSegmentation(userBehaviors: UserBehavior[]): {
    segments: Record<string, string[]>;
    segmentMetrics: Record<string, any>;
  } {
    const segments: Record<string, string[]> = {
      'high_engagement': [],
      'medium_engagement': [],
      'low_engagement': [],
      'converters': [],
      'browsers': []
    };

    const userMetrics = new Map<string, { sessions: number; actions: number; conversions: number }>();

    // Calculate user metrics
    userBehaviors.forEach(behavior => {
      if (!userMetrics.has(behavior.userId)) {
        userMetrics.set(behavior.userId, { sessions: 0, actions: 0, conversions: 0 });
      }
      const metrics = userMetrics.get(behavior.userId)!;
      metrics.actions++;
      if (behavior.action === 'purchase') {
        metrics.conversions++;
      }
    });

    // Segment users
    userMetrics.forEach((metrics, userId) => {
      if (metrics.conversions > 0) {
        segments.converters.push(userId);
      } else if (metrics.actions > 20) {
        segments.high_engagement.push(userId);
      } else if (metrics.actions > 10) {
        segments.medium_engagement.push(userId);
      } else {
        segments.low_engagement.push(userId);
      }

      if (metrics.conversions === 0 && metrics.actions > 5) {
        segments.browsers.push(userId);
      }
    });

    const segmentMetrics = {
      high_engagement: { count: segments.high_engagement.length, avgActions: 25 },
      medium_engagement: { count: segments.medium_engagement.length, avgActions: 15 },
      low_engagement: { count: segments.low_engagement.length, avgActions: 5 },
      converters: { count: segments.converters.length, conversionRate: 100 },
      browsers: { count: segments.browsers.length, avgActions: 12 }
    };

    return { segments, segmentMetrics };
  }
}
