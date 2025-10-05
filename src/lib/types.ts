import type { AnalyzeJobDescriptionOutput } from '@/ai/flows/analyze-job-description';
import type { RankCandidatesOutput } from '@/ai/flows/rank-candidates-by-relevance';

export type Candidate = {
  id: string;
  name: string;
  avatarUrl: string;
  profileUrl: string;
  summary: string;
  source: string;
};

export type RankedCandidate = RankCandidatesOutput[0] & {
  id:string;
  name: string;
  avatarUrl: string;
  profileUrl: string;
  source: string;
};

export type JobPost = {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  postedAt: Date;
  tags: string[];
};

export type JobAnalysis = AnalyzeJobDescriptionOutput;

export type SearchHistoryItem = {
  id: string;
  jobDescription: string;
  searchedAt: Date;
  analysis: JobAnalysis;
};
