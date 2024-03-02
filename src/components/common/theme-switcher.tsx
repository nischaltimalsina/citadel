'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { CircleIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

export function ThemeSwitch({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <CircleIcon className={cn('h-5 w-5', className)} />
    );

  if (resolvedTheme === 'dark') {
    return (
      <button id='theme-switch' onClick={() => setTheme('light')}>
        <SunIcon className={cn('h-5 w-5', className)} />
      </button>
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <button id='theme-switch' onClick={() => setTheme('dark')}>
        <MoonIcon className={cn('h-5 w-5', className)} />
      </button>
    );
  }
}
