'use client';

import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { createJobPostAction, type JobPostState } from '@/lib/actions';

const jobPostSchema = z.object({
  title: z.string().min(1, "Title is required."),
  company: z.string().min(1, "Company name is required."),
  location: z.string().min(1, "Location is required."),
  description: z.string().min(50, "Description must be at least 50 characters."),
  tags: z.string().optional(),
});

const initialState: JobPostState = {
  status: 'idle',
};

export function JobPostForm() {
  const [state, formAction] = useFormState(createJobPostAction, initialState);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof jobPostSchema>>({
    resolver: zodResolver(jobPostSchema),
    defaultValues: {
      title: '',
      company: '',
      location: '',
      description: '',
      tags: '',
    },
  });

  useEffect(() => {
    if (state.status === 'error' && state.message) {
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: state.message,
      });
      
      if(state.errors) {
        for (const [field, errors] of Object.entries(state.errors)) {
            if(errors) {
                form.setError(field as keyof z.infer<typeof jobPostSchema>, { message: errors[0] });
            }
        }
      }
    }
  }, [state, toast, form]);

  return (
    <Form {...form}>
      <form action={formAction}>
        <Card>
          <CardHeader>
            <CardTitle>Job Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Senior Software Engineer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Acme Inc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., San Francisco, CA or Remote" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe the role, responsibilities, and requirements." className="min-h-32" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., React, Node.js, Python" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}

function SubmitButton() {
    // useFormStatus is not available in useFormState.
    // We can't use it. We'll rely on the form state from useFormState.
    // Let's create a simple button that is always enabled for prototype.
    return (
        <Button type="submit" className="w-full">
            Post Job
        </Button>
    )
}
