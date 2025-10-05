import { MOCK_SEARCH_HISTORY } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { HistoryCard } from "@/components/history/history-card";
import { History as HistoryIcon } from 'lucide-react';

export default function HistoryPage() {
  // In a real app, this might be a server component fetching from a DB.
  const searches = MOCK_SEARCH_HISTORY;

  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-8">
      <div className="max-w-4xl">
          <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
          Search History
          </h1>
          <p className="text-muted-foreground mt-2">
          Review your past searches and their AI analysis.
          </p>
      </div>

      <Separator />

      {searches.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground flex flex-col items-center gap-4 border-2 border-dashed rounded-lg">
            <div className="bg-muted rounded-full p-4">
              <HistoryIcon className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">No Searches Yet</h2>
            <p className="max-w-sm">Your search history is empty. Perform a candidate search on the main page to see your history here.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {searches.map((search) => (
            <HistoryCard key={search.id} search={search} />
          ))}
        </div>
      )}
    </main>
  );
}
