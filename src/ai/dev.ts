import { config } from 'dotenv';
config();

import '@/ai/flows/analyze-job-description.ts';
import '@/ai/flows/rank-candidates-by-relevance.ts';
import '@/ai/flows/generate-candidate-summary.ts';