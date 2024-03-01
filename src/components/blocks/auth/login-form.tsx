'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Icons } from '@/assets/data/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { IoWalletOutline } from 'react-icons/io5';
import { useAuth } from '@/context/auth-provider';
import { useRouter } from 'next/navigation';

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { user, login, logout } = useAuth();
  const router = useRouter();
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn('grid gap-4', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
              id='email'
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              disabled={isLoading}
            />
          </div>
          <div className='grid gap-1'>
            <Label className='sr-only' htmlFor='password'>
              Password
            </Label>
            <Input
              id='password'
              placeholder='password'
              type='password'
              autoCorrect='off'
              disabled={isLoading}
            />
          </div>
          <Button
            disabled={isLoading}
            onClick={() => {
              router.push('/dashboard');
              login({ username: 'exampleUser' });
            }}>
            {isLoading && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            Log In
          </Button>
        </div>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            or login via wallet
          </span>
        </div>
      </div>
      <Button variant='outline' type='button' disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
        ) : (
          <IoWalletOutline className='mr-2 h-4 w-4' />
        )}{' '}
        Connect Wallet
      </Button>
    </div>
  );
}
