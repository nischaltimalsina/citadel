import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/auth-provider';
import {
  DownloadIcon,
  EyeIcon,
  Monitor,
  MousePointerClick,
  PlusCircleIcon,
  Wallet,
} from 'lucide-react';

export const StatCards = () => {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthIndex = new Date().getMonth();
  return (
    <div className='w-full flex mt-4 flex-wrap xl:flex-nowrap'>
      <div className='basis-full sm:basis-1/2 xl:basis-1/4 py-2 sm:pr-2'>
        {' '}
        <Card className='w-full'>
          <CardHeader  className='pb-3'>
            <CardTitle className='flex gap-2 justify-between'>
              Impressions
              <EyeIcon />
            </CardTitle>
            <CardDescription>
              Total reach this {month[monthIndex - 1]}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex items-baseline gap-1'>
              <p className='text-2xl font-semibold'>24,500</p>
              <span className='text-sm'>Impressions</span>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='basis-full sm:basis-1/2 xl:basis-1/4 py-2 sm:pl-2  xl:px-2'>
        {' '}
        <Card className=' w-full'>
          <CardHeader  className='pb-3'>
            <CardTitle className='flex gap-2 justify-between'>
              Clicks
              <MousePointerClick />
            </CardTitle>
            <CardDescription>Total clicks on your ads</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex items-baseline gap-1'>
              <p className='text-2xl font-semibold'>3,200</p>
              <span className='text-sm'>Click on {month[monthIndex - 1]}</span>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='basis-full sm:basis-1/2 xl:basis-1/4 py-2 sm:pr-2 xl:px-2'>
        <Card className=' w-full'>
          <CardHeader  className='pb-3'>
            <CardTitle className='flex gap-2 justify-between'>
              Amount
              <Wallet />
            </CardTitle>
            <CardDescription>Total amount spent on ads</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex items-baseline gap-1'>
              <p className='text-2xl font-semibold'>$120</p>
              <span className='text-sm'>Spent on {month[monthIndex - 1]}</span>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='basis-full sm:basis-1/2 xl:basis-1/4 py-2 sm:pl-2 xl:pl-2'>
        <Card className=' w-full'>
          <CardHeader  className='pb-3'>
            <CardTitle className='flex gap-2 justify-between'>
              Campaigns
              <Monitor />
            </CardTitle>
            <CardDescription className='whitespace-nowrap'>Active Campaigns on your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex items-baseline gap-1'>
              <p className='text-2xl font-semibold'>24</p>
              <span className='text-sm'>Active Campaigns</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
