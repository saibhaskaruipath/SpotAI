import { JobCard } from "@/components/job-posting/job-card";
import { MOCK_JOBS } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

export default function JobsPage() {
  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="max-w-4xl">
            <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            Current Job Openings
            </h1>
            <p className="text-muted-foreground mt-2">
            Browse the latest job postings on our platform.
            </p>
        </div>
        <Button asChild>
            <Link href="/post-job">
                <span><PlusCircle />Post a New Job</span>
            </Link>
        </Button>
      </div>

      <Separator />

      <div className="grid gap-6">
        {MOCK_JOBS.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        {MOCK_JOBS.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
                <p>No job postings available at the moment.</p>
            </div>
        )}
      </div>
    </main>
  );
}
