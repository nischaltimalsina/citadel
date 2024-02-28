'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AccountSwitcher } from '../common/account-switcher';
import { accounts } from '@/assets/data/data';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { Input } from '../ui/input';
import {
  BellIcon,
  GearIcon,
  InfoCircledIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import { Avatar, AvatarFallback } from '../ui/avatar';
import ThemeSwitch from '../common/theme-switcher';
import { useAuth } from '@/context/auth-provider';
export function AppLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  if (!user) return <main>{children}</main>;
  return (
    <main>
      <div className='h-screen w-screen flex'>
        <aside className='w-64 h-full border-r'>
          <div className={cn('h-16 flex items-center p-4 font-medium')}>
            <h2 className='text-2xl'>Filedec</h2>
          </div>
          <TooltipProvider delayDuration={0}>
            <div
              className={cn('flex h-[52px] items-center justify-center p-4')}>
              <AccountSwitcher isCollapsed={false} accounts={accounts} />
            </div>
          </TooltipProvider>
        </aside>
        <div className='flex flex-col h-full w-[calc(100%-16rem)]'>
          <nav className='h-16 border-b w-full flex justify-between items-center px-3.5'>
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
          <div className='w-full h-[calc(100%-4rem)]'>
            <ScrollArea className='h-full w-full scroll-smooth'>
              <ScrollBar />
              {children}
            </ScrollArea>
          </div>
        </div>
      </div>
    </main>
  );
}
