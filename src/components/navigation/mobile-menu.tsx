import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '../ui/sheet';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { Logo } from '../common/logo';
import { Sidebar } from './sidebar';

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon className='h-6 w-6' />
      </SheetTrigger>
      <SheetContent side={'left'} className='w-64 p-0 h-full'>
        <div className={'h-16 px-4 flex items-center gap-2 font-medium'}>
          <Logo className='h-10 w-10' />
          <h2 className=' text-3xl'>Adsflow</h2>
        </div>
        <div className='h-[calc(100%-4rem)]'>
          <Sidebar />
        </div>
      </SheetContent>
    </Sheet>
  );
};
