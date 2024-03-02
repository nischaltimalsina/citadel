'use client'
import { BellIcon } from '@radix-ui/react-icons';
import React from 'react';
import { Input } from '../ui/input';
import { ThemeSwitch } from '../common';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '@/lib/utils';
import { Logo } from '../common/logo';
import { MobileMenu } from './mobile-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LifeBuoy, LogOut, Settings, User } from 'lucide-react';
import { Search } from './search';
import { useAuth } from '@/context/auth-provider';
import userImage from "@/assets/images/user.jpg"

export const Header = () => {
  const { logout } = useAuth();
  return (
    <nav className='h-16 borde=r-b w-full flex justify-between items-center px-4'>
      <div className={cn('h-16  flex items-center gap-2 font-medium')}>
        <div className='lg:hidden'>
          <MobileMenu />
        </div>
        <Logo className='h-10 w-10' />
        <h2 className='hidden lg:block text-3xl'>Adsflow</h2>
      </div>
      <div className='w-48 sm:w-full max-w-96'>
        <Search />
      </div>
      <div className='flex gap-3 items-center'>
        <DropdownMenu>
          <DropdownMenuTrigger className='rounded-full'>
            <Avatar className='h-12 w-12'>
              <AvatarImage src={userImage.src} alt='User image' />
              <AvatarFallback>NT</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='mr-4 min-w-48'>
            <DropdownMenuLabel>General</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className='mr-2 h-4 w-4' />
              <span>My Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BellIcon className='mr-2 h-4 w-4' />
              <span>Notifications</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className='mr-2 h-4 w-4' />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ThemeSwitch className='mr-2 h-4 w-4' />
              <label htmlFor='theme-switch'>Theme</label>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LifeBuoy className='mr-2 h-4 w-4' />
              <span>Help & Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout}>
              <LogOut className='mr-2 h-4 w-4' />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
