'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
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
import { Create } from './create';
import { StatCards } from './stat-cards';
import { Report } from './report';

export const Dashboard = () => {
  const { user } = useAuth();
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
    <div className='p-6'>
      <div className='pt-4 pb-8 flex justify-between items-end gap-4 flex-wrap'>
        <div className=''>
          <p className=' text-3xl font-semibold'>
            Hi {user && user?.username} ! 👋
          </p>
          <p className=''>
            Welcome to your Adsflow Dashboard, here&apos;s what&apos;s happening
            today!
          </p>
        </div>
        <div className=''>
          <Button size={'lg'} className='bg-primary gap-2'>
            {' '}
            <DownloadIcon className='h-4 w-4' /> <span>Download Report</span>{' '}
          </Button>
        </div>
      </div>
      <Create />
      <StatCards />
      <Report/>
    </div>
  );
};
