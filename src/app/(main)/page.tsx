'use client';

import { useFormState } from 'react-dom';
import { findCandidatesAction, type SearchState } from '@/lib/actions';
import { SearchForm } from '@/components/job-search/search-form';
import { AnalysisResults } from '@/components/job-search/analysis-results';
import { CandidateResults } from '@/components/job-search/candidate-results';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

const initialState: SearchState = {
  status: 'idle',
  message: '',
  analysis: null,
  candidates: null,
};

export default function SearchPage() {
  const [state, formAction] = useFormState(findCandidatesAction, initialState);
  const { toast } = useToast();
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status === 'error' && state.message) {
      toast({
        variant: 'destructive',
        title: 'Search Failed',
        description: state.message,
      });
    }
    if (state.status === 'success') {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [state, toast]);

  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-8">
      <div className="max-w-4xl">
        <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
          Find Your Next Hire
        </h1>
        <p className="text-muted-foreground mt-2">
          Use AI to analyze your job description and find the most relevant candidates from our talent pool.
        </p>
      </div>
      
      <Separator />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
        <div className="xl:col-span-1 xl:sticky top-6">
          <SearchForm formAction={formAction} isPending={state.status === 'loading'} />
        </div>
        <div className="xl:col-span-2 space-y-8" ref={resultsRef}>
          {state.status === 'success' && state.analysis && (
            <AnalysisResults analysis={state.analysis} />
          )}
          <CandidateResults candidates={state.candidates} status={state.status} />
        </div>
      </div>
    </main>
  );
}
