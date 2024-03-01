import {
  BellIcon,
  GearIcon,
  InfoCircledIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import React from 'react';
import { Input } from '../ui/input';
import { ThemeSwitch } from '../common';
import { Avatar, AvatarFallback } from '../ui/avatar';

export const Header = () => {
  return (
    <nav className='h-16 border-b w-full flex justify-between items-center px-3.5'>
      <div className='text-lg font-semibold'>Dashboard</div>
      <form className='w-full max-w-96'>
        <div className='relative'>
          <MagnifyingGlassIcon className='absolute left-2 top-2 h-5 w-5 text-muted-foreground' />
          <Input placeholder='Search' className='pl-8 shadow-none' />
        </div>
      </form>
      <div className='flex gap-3 items-center'>
        <ThemeSwitch />
        <InfoCircledIcon className='h-5 w-5' />
        <GearIcon className='h-5 w-5' />
        <BellIcon className='h-5 w-5' />
        <Avatar className='h-12 w-12'>
          <AvatarFallback>NT</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};
