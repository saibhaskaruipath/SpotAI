import { JobPostForm } from "@/components/job-posting/job-post-form";
import { Separator } from "@/components/ui/separator";

export default function PostJobPage() {
  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-8">
      <div className="max-w-4xl">
        <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
          Post a New Job
        </h1>
        <p className="text-muted-foreground mt-2">
          Fill out the form below to post a new job opening to our platform.
        </p>
      </div>
      
      <Separator />
      
      <div className="max-w-2xl">
        <JobPostForm />
      </div>
    </main>
  );
}
