'use client';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Calculator,
  Calendar,
  Clock3,
  CreditCard,
  PlusCircleIcon,
  SearchIcon,
  Settings,
  Smile,
  User,
} from 'lucide-react';

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { ThemeSwitch } from '../common';

export const Search = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant='outline'
        className={cn(
          'relative h-8 w-48 sm:w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12'
        )}
        onClick={() => setOpen(true)}>
        <span className='hidden lg:inline-flex'>
          Search campaigns or more...
        </span>
        <span className='inline-flex lg:hidden'>Search...</span>
        <kbd className='pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex'>
          <span className='text-xs'>⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a Menu or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            <CommandItem>
              <PlusCircleIcon className='mr-2 h-4 w-4' />
              <span>Create New Ad</span>
            </CommandItem>
            <CommandItem>
              <PlusCircleIcon className='mr-2 h-4 w-4' />
              <span>Add New Campaign</span>
            </CommandItem>
            <CommandItem>
              <Calendar className='mr-2 h-4 w-4' />
              <span>Schedule a Campaign</span>
            </CommandItem>
            <CommandItem>
              <Clock3 className='mr-2 h-4 w-4' />
              <span>View Campaign History</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Settings'>
            <CommandItem>
              <User className='mr-2 h-4 w-4' />
              <span>My Profile</span>
            </CommandItem>
            <CommandItem>
              <ThemeSwitch className='mr-2 h-4 w-4' />
              <label htmlFor='theme-switch'>Theme</label>
            </CommandItem>

            <CommandItem>
              <Settings className='mr-2 h-4 w-4' />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
