export interface PortfolioRow {
  touchpoint: string;
  icon: string;
  portfolioPartners: string[];
  capabilitiesDelivered: string[];
  outcomesEnabled: string[];
}

export interface JourneyStep {
  stepNumber: number;
  title: string;
  description: string;
  keyExperiences: string[];
  poweredBySolutions: string[];
}

export interface OutcomeCard {
  icon: string;
  title: string;
  description: string;
}

export interface Industry {
  id: string;
  name: string;
  accentColor: string;
  tagline: string;
  description: string;
  heroStats: string[];
  journey: JourneyStep[];
  businessOutcomes: OutcomeCard[];
  portfolioTable: PortfolioRow[];
  solutionDescriptions: Record<string, string>;
}
