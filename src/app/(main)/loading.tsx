import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-8">
      <div className="max-w-4xl space-y-4">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-full" />
      </div>
      
      <Separator />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
        <div className="xl:col-span-1 space-y-4 p-4 border rounded-lg">
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="xl:col-span-2 space-y-8">
          <div className="p-4 border rounded-lg space-y-4">
             <Skeleton className="h-8 w-1/3" />
             <Skeleton className="h-20 w-full" />
          </div>
          <div className="p-4 border rounded-lg space-y-4">
            <Skeleton className="h-8 w-1/3" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </div>
    </main>
  );
}
