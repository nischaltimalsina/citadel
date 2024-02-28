'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';

import {
  HelpingHand,
  MessageSquare,
  Newspaper,
  Scale,
  Wallet,
} from 'lucide-react';
import { ClockIcon, DashboardIcon, GearIcon } from '@radix-ui/react-icons';
import { BsDiscord, BsTwitter } from 'react-icons/bs';

export const  MobileMenu = () => {
  const router = useRouter();
  const segment = useSelectedLayoutSegment();
  return (
    <div className='h-[calc(100%-64px)]'>
      <div className='h-full pt-6 pb-12 flex flex-col justify-between gap-0.5 '>
        <Link
          className={`${
            segment === 'app' || segment === null
              ? 'text-orange-50 border-transparent bg-[#E06D1F]/80 gap-2 hover:bg-[#E06D1F] rounded-sm font-semibold'
              : 'border-transparent  hover:text-orange-400 hover:border-orange-400'
          } flex items-center gap-3 border p-3 ease-in-out duration-200 `}
          href={'/app'}>
          <DashboardIcon height={5} width={5} className='w-5 h-5' />
          <span>Blaze Dash</span>
        </Link>
        <Link
          className={`${
            segment === 'wallet' ||
            segment === 'balance' ||
            segment === 'deposit' ||
            segment === 'withdraw' ||
            segment === 'swap' ||
            segment === 'transactions'
              ? 'text-orange-50 border-transparent bg-[#E06D1F]/80 gap-2 hover:bg-[#E06D1F] rounded-sm font-semibold'
              : 'border-transparent  hover:text-orange-400 hover:border-orange-400'
          } flex items-center gap-3 border p-3 ease-in-out duration-200 `}
          href={'/app/wallet/balance'}>
          <Wallet strokeWidth={1.3} height={5} width={5} className='w-5 h-5' />
          <span>Wallet</span>
        </Link>
        <Link
          className={`${
            segment === 'activity'
              ? 'text-orange-50 border-transparent bg-[#E06D1F]/80 gap-2 hover:bg-[#E06D1F] rounded-sm font-semibold'
              : 'border-transparent  hover:text-orange-400 hover:border-orange-400'
          } flex items-center gap-3 border p-3 ease-in-out duration-200 `}
          href={'/app/wallet'}>
          <ClockIcon height={5} width={5} className='w-5 h-5' />
          <span>Activity</span>
        </Link>{' '}
        <Link
          className={`${
            segment === 'settings'
              ? 'text-orange-50 border-transparent bg-[#E06D1F]/80 gap-2 hover:bg-[#E06D1F] rounded-sm font-semibold'
              : 'border-transparent  hover:text-orange-400 hover:border-orange-400'
          } flex items-center gap-3 border p-3 ease-in-out duration-200 `}
          href={'/app'}>
          <GearIcon height={5} width={5} className='w-5 h-5' />
          <span>Settings</span>
        </Link>{' '}
        <Link
          className={`rounded-sm mt-20 hover:text-orange-400 flex items-center gap-3 py-2 px-3 ease-in-out duration-200 `}
          href={'/app'}>
          <Scale strokeWidth={1.3} height={5} width={5} className='w-5 h-5' />
          <span>Provably Fair</span>
        </Link>{' '}
        <Link
          className={` rounded-sm  hover:text-orange-400 flex items-center gap-3 py-2 px-3 ease-in-out duration-200 `}
          href={'/app'}>
          <MessageSquare
            strokeWidth={1.3}
            height={5}
            width={5}
            className='w-5 h-5'
          />
          <span>Forum</span>
        </Link>{' '}
        <Link
          className={` rounded-sm  hover:text-orange-400 flex items-center gap-3 py-2 px-3 ease-in-out duration-200 `}
          href={'/app'}>
          <Newspaper
            strokeWidth={1.3}
            height={5}
            width={5}
            className='w-5 h-5'
          />
          <span>Blog</span>
        </Link>{' '}
        <Link
          className={` rounded-sm hover:text-orange-400 flex items-center gap-3 py-2 px-3 ease-in-out duration-200 `}
          href={'/app'}>
          <HelpingHand
            strokeWidth={1.3}
            height={5}
            width={5}
            className='w-5 h-5'
          />
          <span>Help Center</span>
        </Link>{' '}
        <Link
          href={'/blog'}
          className='text-sm mt-auto hover:text-orange-400 py-2 px-3 flex items-center gap-3 ease-in-out duration-200 '>
          <BsTwitter height={5} width={5} className='w-5 h-5' />
          <span>Follow @TerraBlazeX</span>
        </Link>{' '}
        <Link
          href={'/blog'}
          className='text-sm hover:text-orange-400 py-2 px-3 flex items-center gap-3 ease-in-out duration-200 '>
          <BsDiscord height={5} width={5} className='w-5 h-5' />
          <span>Join TerraBlazeX</span>
        </Link>{' '}
        <button
          className='text-sm mt-0 hover:text-orange-400 py-2 px-3 flex items-center gap-3 ease-in-out duration-200 '
          onClick={() => {
            // dispatch(removeToken());
            router.push('');
          }}>
          Logout
        </button>
      </div>
    </div>
  );
};
