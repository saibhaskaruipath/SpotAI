import type { JobAnalysis } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Wrench } from 'lucide-react';

type AnalysisResultsProps = {
  analysis: JobAnalysis;
};

export function AnalysisResults({ analysis }: AnalysisResultsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Analysis of Job Description</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="flex items-center text-lg font-semibold mb-2">
            <Lightbulb className="w-5 h-5 mr-2 text-accent" />
            Key Requirements
          </h3>
          <div className="flex flex-wrap gap-2">
            {analysis.keyRequirements.map((req, index) => (
              <Badge key={index} variant="secondary" className="text-sm font-normal">{req}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="flex items-center text-lg font-semibold mb-2">
            <Wrench className="w-5 h-5 mr-2 text-accent" />
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {analysis.skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="text-sm font-normal">{skill}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
