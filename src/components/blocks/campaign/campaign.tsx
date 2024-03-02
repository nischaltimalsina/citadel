import React from 'react';
import { Create } from '../dashboard/create';
import { CampaignStats } from './campaign-stats';

export const Campaign = () => {
  return (
    <div className='p-6'>
      <div className='pt-4 pb-8 flex justify-between items-end gap-4 flex-wrap'>
        <div className=''>
          <p className=' text-3xl font-semibold'>Ads and Campaigns</p>
          <p className=''>
            Your central hub for managing and tracking ad campaigns.
          </p>
        </div>
        <div className=''></div>
      </div>
      <Create />
      <CampaignStats />
    </div>
  );
};
