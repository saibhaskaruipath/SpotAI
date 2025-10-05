'use server';

import { z } from 'zod';
import { analyzeJobDescription } from '@/ai/flows/analyze-job-description';
import { rankCandidates } from '@/ai/flows/rank-candidates-by-relevance';
import { MOCK_CANDIDATES, addMockJob, addSearchToHistory } from '@/lib/data';
import type { JobAnalysis, RankedCandidate } from '@/lib/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const searchSchema = z.object({
  jobDescription: z.string().min(50, { message: 'Job description must be at least 50 characters.' }),
});

export type SearchState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
  analysis?: JobAnalysis | null;
  candidates?: RankedCandidate[] | null;
};

export async function findCandidatesAction(prevState: SearchState, formData: FormData): Promise<SearchState> {
  const validatedFields = searchSchema.safeParse({
    jobDescription: formData.get('jobDescription'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: validatedFields.error.flatten().fieldErrors.jobDescription?.[0] || 'Invalid input.',
      analysis: null,
      candidates: null,
    };
  }

  const { jobDescription } = validatedFields.data;

  try {
    const analysis = await analyzeJobDescription(jobDescription);
    
    addSearchToHistory(jobDescription, analysis);
    revalidatePath('/history');
    
    // Return all mock candidates directly, adding a placeholder score and justification.
    const candidatesWithDetails: RankedCandidate[] = MOCK_CANDIDATES.map(candidate => ({
      ...candidate,
      relevanceScore: Math.random() * (0.95 - 0.7) + 0.7, // Fake score for display
      justification: "This is a sample candidate from our talent pool.",
    })).sort((a, b) => b.relevanceScore - a.relevanceScore);


    return {
      status: 'success',
      analysis,
      candidates: candidatesWithDetails,
    };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return {
      status: 'error',
      message: `An unexpected error occurred: ${errorMessage}`,
      analysis: null,
      candidates: null,
    };
  }
}


const jobPostSchema = z.object({
    title: z.string().min(1, "Title is required."),
    company: z.string().min(1, "Company name is required."),
    location: z.string().min(1, "Location is required."),
    description: z.string().min(50, "Description must be at least 50 characters."),
    tags: z.string().optional(),
});

type JobPostErrors = z.inferFlattenedErrors<typeof jobPostSchema>['fieldErrors'];

export type JobPostState = {
    status: 'idle' | 'success' | 'error';
    message?: string;
    errors?: JobPostErrors;
};

export async function createJobPostAction(prevState: JobPostState, formData: FormData): Promise<JobPostState> {
    const validatedFields = jobPostSchema.safeParse({
        title: formData.get('title'),
        company: formData.get('company'),
        location: formData.get('location'),
        description: formData.get('description'),
        tags: formData.get('tags'),
    });

    if (!validatedFields.success) {
        return {
            status: 'error',
            message: "Please correct the errors below.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    // In a real app, you would save this data to a database.
    // For this prototype, we'll add it to our in-memory mock data.
    addMockJob(validatedFields.data);

    revalidatePath('/jobs');
    redirect('/jobs');
}
