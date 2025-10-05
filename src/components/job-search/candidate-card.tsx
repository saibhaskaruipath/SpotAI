import Image from 'next/image';
import { ExternalLink, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import type { RankedCandidate } from '@/lib/types';

type CandidateCardProps = {
  candidate: RankedCandidate;
};

export function CandidateCard({ candidate }: CandidateCardProps) {
  const relevancePercentage = Math.round(candidate.relevanceScore * 100);

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={candidate.avatarUrl} alt={candidate.name} />
              <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{candidate.name}</CardTitle>
              <CardDescription>Relevance Score: {relevancePercentage}%</CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">From {candidate.source}</Badge>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={candidate.profileUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div>
          <Progress value={relevancePercentage} className="h-2" />
        </div>
        <p className="text-sm text-muted-foreground">{candidate.summary}</p>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground flex items-start gap-2">
            <Star className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-500" />
            <p className="font-medium text-foreground/80">
              <span className="font-semibold text-foreground">AI Justification:</span> {candidate.justification}
            </p>
        </div>
      </CardFooter>
    </Card>
  );
}
