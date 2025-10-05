import { Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { RankedCandidate } from '@/lib/types';
import { CandidateCard } from './candidate-card';
import { Skeleton } from '../ui/skeleton';

type CandidateResultsProps = {
  candidates: RankedCandidate[] | null | undefined;
  status: 'idle' | 'loading' | 'success' | 'error';
};

const LoadingSkeleton = () => (
    <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
            <Card key={i}>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-3 w-24" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Skeleton className="h-2 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                </CardContent>
            </Card>
        ))}
    </div>
);

export function CandidateResults({ candidates, status }: CandidateResultsProps) {
  if (status === 'loading') {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Ranked Candidates</CardTitle>
            </CardHeader>
            <CardContent>
                <LoadingSkeleton />
            </CardContent>
        </Card>
    );
  }

  if (status === 'idle' || !candidates) {
    return (
      <Card className="flex flex-col items-center justify-center py-12 text-center">
        <CardHeader>
          <div className="mx-auto bg-secondary p-3 rounded-full">
            <Bot className="w-8 h-8 text-muted-foreground" />
          </div>
          <CardTitle className="mt-4">Waiting for Search</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Your candidate results will appear here once you start a search.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ranked Candidates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {candidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
