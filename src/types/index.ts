export type MarketTrend = 'BULLISH' | 'BEARISH' | 'NEUTRAL';
export type UserRole = 'GUEST' | 'REGISTERED_USER' | 'PREMIUM_USER' | 'ADMINISTRATOR';

export interface MarketIndexData {
  symbol: string;
  currentValue: number;
  previousClose: number;
  high: number;
  low: number;
  netChange: number;
  percentageChange: number;
  timestamp: string;
}

export interface StockDetails {
  id: string;
  ticker: string;
  companyName: string;
  logoUrl: string;
  currentPrice: number;
  open: number;
  high: number;
  low: number;
  volume: number;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  peRatio: number;
  marketCap: number;
  dividendYield: number;
  eps: number;
  historicalData: { date: string; open: number; high: number; low: number; close: number; volume: number }[];
  brokerDeepLinks: {
    zerodha: string;
    groww: string;
    upstox: string;
  };
}

export interface IPOMetadata {
  id: string;
  companyName: string;
  priceBand: string;
  lotSize: number;
  openingDate: string;
  closingDate: string;
  listingDate: string;
  issueSize: string;
  subscriptionMeter: number; // e.g., 4.2 for 4.2x subscription
  gmpEstimated: number | null;
  prospectusUrl: string;
}

export interface AISentimentAggregation {
  overallSentiment: MarketTrend;
  confidenceScore: number; // 0.00 to 1.00
  aiSummary: string;
  technicalIndicators: {
    rsi: number;
    macd: 'BUY' | 'SELL' | 'NEUTRAL';
    movingAverage50: number;
  };
  sourcesAttributed: string[];
  lastUpdated: string;
}

export interface UserSessionProfile {
  uid: string;
  email: string;
  displayName: string | null;
  role: UserRole;
  token: string;
}