'use server';

/**
 * @fileOverview Generates a summary of a candidate's qualifications.
 *
 * - generateCandidateSummary - A function that generates a summary of a candidate.
 * - GenerateCandidateSummaryInput - The input type for the generateCandidateSummary function.
 * - GenerateCandidateSummaryOutput - The return type for the generateCandidateSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCandidateSummaryInputSchema = z.string().describe('The candidate profile text to summarize.');
export type GenerateCandidateSummaryInput = z.infer<typeof GenerateCandidateSummaryInputSchema>;

const GenerateCandidateSummaryOutputSchema = z.object({
  summary: z.string().describe('A summary of the candidate profile.'),
});
export type GenerateCandidateSummaryOutput = z.infer<typeof GenerateCandidateSummaryOutputSchema>;

export async function generateCandidateSummary(input: GenerateCandidateSummaryInput): Promise<GenerateCandidateSummaryOutput> {
  return generateCandidateSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCandidateSummaryPrompt',
  input: {schema: GenerateCandidateSummaryInputSchema},
  output: {schema: GenerateCandidateSummaryOutputSchema},
  prompt: `You are an expert recruiter. Summarize the following candidate profile to highlight the key qualifications and experience. The summary should be concise and informative.

Candidate Profile: {{{$input}}}`,
});

const generateCandidateSummaryFlow = ai.defineFlow(
  {
    name: 'generateCandidateSummaryFlow',
    inputSchema: GenerateCandidateSummaryInputSchema,
    outputSchema: GenerateCandidateSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
