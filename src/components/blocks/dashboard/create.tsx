'use client';
import React, { useCallback, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlusCircleIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';

export const Create = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [campaign, setCampaign] = useState('');
  const [ad, setAd] = useState('');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className='w-full flex flex-wrap'>
      <div className='basis-full md:basis-1/2 md:pr-2'>
        <Card className='border- w-full bg-primary text-white'>
          <CardHeader className='pb-3'>
            <CardTitle className='flex gap-2 font-medium'>
              <PlusCircleIcon />
              Create a Campaign
            </CardTitle>
            <CardDescription className='text-white/90'>
              Create and manage campaigns for your business.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex gap-2 text-foreground'>
              <Input
                value={campaign}
                onKeyDown={(event) => {
                  if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                    event.preventDefault();
                    router.push(
                      `/campaign/create-campaign?${createQueryString(
                        'name',
                        campaign
                      )}`
                    );
                  }
                }}
                onChange={(e) => {
                  e.preventDefault();
                  setCampaign(e.target.value);
                }}
                placeholder='Enter a name for your campaign'
              />
              <Button
                variant={'outline'}
                onClick={() => {
                  router.push(
                    `/campaign/create-campaign?${createQueryString(
                      'name',
                      campaign
                    )}`
                  );
                }}>
                Continue
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='mt-4 md:mt-0 basis-full md:basis-1/2 md:pl-2'>
        <Card className='border-dashed w-full'>
          <CardHeader className='pb-3'>
            <CardTitle className='flex gap-2 font-medium'>
              <PlusCircleIcon />
              Create New Ad
            </CardTitle>
            <CardDescription>
              Create and manage ads for your business.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex gap-2 text-foreground'>
              <Input
                value={ad}
                onKeyDown={(event) => {
                  if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                    event.preventDefault();
                    router.push(
                      `/campaign/create-ad?${createQueryString('name', ad)}`
                    );
                  }
                }}
                onChange={(e) => {
                  e.preventDefault();
                  setAd(e.target.value);
                }}
                placeholder='Enter a name for your Ad'
              />
              <Button
                variant={'outline'}
                onClick={() => {
                  router.push(
                    `/campaign/create-ad?${createQueryString('name', ad)}`
                  );
                }}>
                Continue
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
