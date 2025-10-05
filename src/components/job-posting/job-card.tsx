import { Briefcase, MapPin } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { JobPost } from "@/lib/types";

type JobCardProps = {
  job: JobPost;
};

export function JobCard({ job }: JobCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
            <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> {job.company}</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {job.location}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
            {job.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
        </div>
        <p className="text-xs text-muted-foreground whitespace-nowrap">
          Posted {formatDistanceToNow(job.postedAt, { addSuffix: true })}
        </p>
      </CardFooter>
    </Card>
  );
}
