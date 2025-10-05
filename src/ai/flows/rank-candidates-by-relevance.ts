'use server';
/**
 * @fileOverview Ranks candidates based on their relevance to a job description.
 *
 * - rankCandidates - A function that ranks candidates based on relevance to a job description.
 * - RankCandidatesInput - The input type for the rankCandidates function.
 * - RankCandidatesOutput - The return type for the rankCandidates function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RankCandidatesInputSchema = z.object({
  jobDescription: z.string().describe('The job description to match candidates against.'),
  candidateSummaries: z.array(z.string()).describe('Summaries of the candidates to rank.'),
});
export type RankCandidatesInput = z.infer<typeof RankCandidatesInputSchema>;

const RankCandidatesOutputSchema = z.array(
  z.object({
    candidateSummary: z.string().describe('The summary of the candidate.'),
    relevanceScore: z.number().describe('A score indicating the relevance of the candidate to the job description (0-1).'),
    justification: z.string().describe('Explanation of why the candidate was given that relevancy score.'),
  })
);
export type RankCandidatesOutput = z.infer<typeof RankCandidatesOutputSchema>;

export async function rankCandidates(input: RankCandidatesInput): Promise<RankCandidatesOutput> {
  return rankCandidatesFlow(input);
}

const rankCandidatesPrompt = ai.definePrompt({
  name: 'rankCandidatesPrompt',
  input: {schema: RankCandidatesInputSchema},
  output: {schema: RankCandidatesOutputSchema},
  prompt: `You are an expert recruiter who ranks candidates based on their relevance to a job description.  You must return a relevance score between 0 and 1 for each candidate, along with justification.\n\nJob Description: {{{jobDescription}}}\n\nCandidate Summaries:\n{{#each candidateSummaries}}\n- {{{this}}}\n{{/each}}`,
});

const rankCandidatesFlow = ai.defineFlow(
  {
    name: 'rankCandidatesFlow',
    inputSchema: RankCandidatesInputSchema,
    outputSchema: RankCandidatesOutputSchema,
  },
  async input => {
    const {output} = await rankCandidatesPrompt(input);
    return output!;
  }
);
