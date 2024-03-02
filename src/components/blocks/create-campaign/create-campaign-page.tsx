'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { CampaignForm } from './campaign-form';

export const CreateCampaignPage = () => {
  const searchParams = useSearchParams();
  const campaign_name = searchParams.get('name');
  return (
    <div className='p-6'>
      <div className='pt-4 pb-8 flex justify-between items-end gap-4 flex-wrap'>
        <div className=''>
          <p className=' text-3xl font-semibold'>
            Let&apos;s setup a new campaign!
          </p>
          <p className=''>
            Enter details and answer the questions to create your campaign
          </p>
        </div>
      </div>
      <div className=''>
        <CampaignForm campaign_name={campaign_name ? campaign_name : ''} />
      </div>
    </div>
  );
};
