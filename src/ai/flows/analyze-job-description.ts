'use server';

/**
 * @fileOverview Analyzes a job description to extract key requirements and skills.
 *
 * - analyzeJobDescription - A function that analyzes the job description.
 * - AnalyzeJobDescriptionInput - The input type for the analyzeJobDescription function.
 * - AnalyzeJobDescriptionOutput - The return type for the analyzeJobDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeJobDescriptionInputSchema = z.string().describe('The job description to analyze.');
export type AnalyzeJobDescriptionInput = z.infer<typeof AnalyzeJobDescriptionInputSchema>;

const AnalyzeJobDescriptionOutputSchema = z.object({
  keyRequirements: z.array(z.string()).describe('Key requirements extracted from the job description.'),
  skills: z.array(z.string()).describe('Skills extracted from the job description.'),
});
export type AnalyzeJobDescriptionOutput = z.infer<typeof AnalyzeJobDescriptionOutputSchema>;

export async function analyzeJobDescription(input: AnalyzeJobDescriptionInput): Promise<AnalyzeJobDescriptionOutput> {
  return analyzeJobDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeJobDescriptionPrompt',
  input: {schema: AnalyzeJobDescriptionInputSchema},
  output: {schema: AnalyzeJobDescriptionOutputSchema},
  prompt: `You are an expert recruiter. Analyze the following job description and extract the key requirements and skills needed for the job.\n\nJob Description: {{{$input}}}\n\nFormat your output as a JSON object with \"keyRequirements\" and \"skills\" fields. Each field should contain an array of strings.  Do not include any additional information in the response.`, 
});

const analyzeJobDescriptionFlow = ai.defineFlow(
  {
    name: 'analyzeJobDescriptionFlow',
    inputSchema: AnalyzeJobDescriptionInputSchema,
    outputSchema: AnalyzeJobDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
