'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useMultiStep } from '@/hooks/use-multistep';
import { useState } from 'react';
import { TTag, TagInput } from '@/components/ui/tag';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  campaign: z.string().min(1, {
    message: 'Campaign Name is required.',
  }),
  description: z.string().optional(),
  action: z
    .string({
      required_error: 'Action Url is required',
    })
    .trim()
    .min(1, { message: 'Action Url is required' }),
  goal: z
    .string()
    .min(1, { message: 'Please Select a goal for your Campaign' }),
  keywords: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
    })
  ).optional(),
});

export function CampaignForm({ campaign_name }: { campaign_name?: string }) {
  const [tags, setTags] = useState<TTag[]>([]);
  const campaignGoals = [
    { name: 'Brand Awareness', value: 'brand-awareness' },
    { name: 'Lead Generation', value: 'lead-generation' },
    { name: 'Website Traffic', value: 'website-traffic' },
    { name: 'Sales or Conversions', value: 'sales-conversions' },
    { name: 'Engagement', value: 'engagement' },
    { name: 'App Installs', value: 'app-installs' },
    { name: 'Event Attendance', value: 'event-attendance' },
    { name: 'Social Media Followers', value: 'social-media-followers' },
    { name: 'Email Subscriptions', value: 'email-subscriptions' },
    { name: 'Local Awareness', value: 'local-awareness' },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: {
      campaign: campaign_name,
      description: '',
      action: '',
      goal: '',
    },
  });
  const {
    formState: { isValid },
    setValue,
  } = form;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const { previousStep, nextStep, currentStepIndex, steps } = useMultiStep(3);

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <div className=''>
            {currentStepIndex === 0 && (
              <div key={'step1'} className=''>
                <div className='pb-8'>
                  <h3 className='text-xl font-medium'>General Information</h3>
                  <p className='text-sm text-muted-foreground'>
                    Enter the general information for your campaign.
                  </p>
                </div>
                <div className='space-y-4'>
                  <FormField
                    control={form.control}
                    name='campaign'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Campaign Name</FormLabel>
                        <FormControl>
                          <Input placeholder='Enter campaign name' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='description'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder='Enter campaign description (optional)'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='action'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Action URL</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Set a destination url'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='keywords'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Keywords</FormLabel>
                        <FormControl>
                          <TagInput
                            tags={tags}
                            placeholder='Enter Keywords for the Campaign'
                            {...field}
                            setTags={(newTags) => {
                              setTags(newTags);
                              setValue(
                                'keywords',
                                newTags as [TTag, ...TTag[]]
                              );
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='goal'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Campaign Goal</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className='text-muted-foreground'>
                              <SelectValue placeholder='Select a goal for your campaign' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Goal Options</SelectLabel>
                              {campaignGoals.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                  {item.name}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}
            {currentStepIndex === 1 && (
              <div>
                <div className='pb-8'>
                  <h3 className='text-xl font-medium'>General Information</h3>
                  <p className='text-sm text-muted-foreground'>
                    Enter the general information for your campaign.
                  </p>
                </div>
              </div>
            )}
            {currentStepIndex === 2 && <div className=''>Hellow</div>}
            <div
              key={'step2'}
              className='flex justify-between py-8 items-center'>
              <Button
                onClick={previousStep}
                type='button'
                className={cn(currentStepIndex === 0 && 'invisible')}>
                Prev Step
              </Button>
              <p className='text-muted-foreground text-sm'>
                Step {currentStepIndex + 1} of 3
              </p>
              {currentStepIndex !== steps - 1 && (
                <Button
                  id='nextButton'
                  disabled={!isValid}
                  onClick={nextStep}
                  type='button'>
                  Next Step
                </Button>
              )}
              {currentStepIndex === steps - 1 && (
                <Button type='submit'>Submit</Button>
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
