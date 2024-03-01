'use client';

import { Metadata } from 'next';
import Link from 'next/link';

import { RegisterForm, LoginForm } from '@/components/blocks/auth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/auth-provider';
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Register or Login to continue',
};

export function Authentication() {
  const { user } = useAuth();
  console.log(user);
  const router = useRouter();

  if (!user)
    return (
      <main className='container relative h-screen w-screen flex-col items-center justify-center flex lg:max-w-none lg:px-0'>
        <div className='lg:p-8'>
          <Tabs defaultValue='login'>
            <TabsList className='grid w-full grid-cols-2 mb-16'>
              <TabsTrigger
                value='login'
                className='data-[state=active]:shadow-none'>
                Login
              </TabsTrigger>
              <TabsTrigger value='register'>Register</TabsTrigger>
            </TabsList>
            <TabsContent value='login'>
              <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
                <div className='flex flex-col space-y-2 text-center'>
                  <h1 className='text-2xl font-semibold tracking-tight'>
                    Log in to your account
                  </h1>
                  <p className='text-sm text-muted-foreground'>
                    Enter your email and password below to access your files
                  </p>
                </div>
                <LoginForm />
                <p className='px-8 text-center text-sm text-muted-foreground'>
                  By clicking continue, you agree to our{' '}
                  <Link
                    href='/terms'
                    className='underline underline-offset-4 hover:text-primary'>
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link
                    href='/privacy'
                    className='underline underline-offset-4 hover:text-primary'>
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </TabsContent>
            <TabsContent value='register'>
              <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
                <div className='flex flex-col space-y-2 text-center'>
                  <h1 className='text-2xl font-semibold tracking-tight'>
                    Create an account
                  </h1>
                  <p className='text-sm text-muted-foreground'>
                    Enter your email below to create your account
                  </p>
                </div>
                <RegisterForm />
                <p className='px-8 text-center text-sm text-muted-foreground'>
                  By clicking continue, you agree to our{' '}
                  <Link
                    href='/terms'
                    className='underline underline-offset-4 hover:text-primary'>
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link
                    href='/privacy'
                    className='underline underline-offset-4 hover:text-primary'>
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    );
  router.push('/dashboard');
}
