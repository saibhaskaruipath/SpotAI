import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Lightbulb, Wrench } from 'lucide-react';
import type { SearchHistoryItem } from "@/lib/types";

type HistoryCardProps = {
  search: SearchHistoryItem;
};

export function HistoryCard({ search }: HistoryCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Search from {formatDistanceToNow(search.searchedAt, { addSuffix: true })}</CardTitle>
        <CardDescription className="pt-2">
          <p className="font-semibold text-foreground/90">Job Description Snippet:</p>
          <blockquote className="mt-1 border-l-2 pl-4 italic text-muted-foreground line-clamp-2">
            {search.jobDescription}
          </blockquote>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>View AI Analysis</AccordionTrigger>
                <AccordionContent className="space-y-6 pt-4">
                    <div>
                        <h3 className="flex items-center text-md font-semibold mb-3">
                            <Lightbulb className="w-5 h-5 mr-2 text-accent" />
                            Key Requirements
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {search.analysis.keyRequirements.map((req, index) => (
                            <Badge key={index} variant="secondary" className="text-sm font-normal">{req}</Badge>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="flex items-center text-md font-semibold mb-3">
                            <Wrench className="w-5 h-5 mr-2 text-accent" />
                            Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {search.analysis.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-sm font-normal">{skill}</Badge>
                            ))}
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
