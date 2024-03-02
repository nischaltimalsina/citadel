import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import React from 'react';
import waiwai from '@/assets/images/waiwai.jpeg';

export const CampaignStats = () => {
  return (
    <div className='py-6'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-medium'>Recent Campaigns</h2>
        <Button variant={'link'} className='text-base'>
          View All
        </Button>
      </div>
      <div className='w-full flex mt-2 flex-wrap xl:flex-nowrap'>
        <div className='basis-full sm:basis-1/2 xl:basis-1/4 py-2 sm:pr-2'>
          <Card>
            <CardHeader className='pb-1'>
              <CardTitle className='flex gap-2 items-center font-medium '>
                <Avatar>
                  <AvatarImage src={waiwai.src} alt='User' />
                  <AvatarFallback className='text-sm'>LOGO</AvatarFallback>
                </Avatar>
                <p className='text-xl truncate'>Wai Wai Noodles</p>
              </CardTitle>
              <CardDescription className='text-base'>
                New Year Special: Enjoy 50% off on all Products
              </CardDescription>
            </CardHeader>
            <CardContent className='pt-1'>
              <div className='space-y-2'>
                <div className='flex justify-start items-baseline flex-wrap gap-x-2'>
                  <p className='text-xs text-muted-foreground'>Duration:</p>
                  <p className='text-sm whitespace-nowrap'>
                    12/12/2024
                    <span> - </span>
                    17/12/2024
                  </p>
                </div>
                <div>
                  <Progress className='h-1.5' value={40} />
                </div>
                <div className='flex justify-start items-baseline flex-wrap gap-x-2'>
                  <p className='text-sm text-muted-foreground'>Status:</p>
                  <p className='text-sm whitespace-nowrap'>Active</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='basis-full sm:basis-1/2 xl:basis-1/4 py-2 sm:pl-2  xl:px-2'>
          <Card>
            <CardHeader className='pb-1'>
              <CardTitle className='flex gap-2 items-center font-medium '>
                <Avatar>
                  <AvatarImage src={waiwai.src} alt='User' />
                  <AvatarFallback className='text-sm'>LOGO</AvatarFallback>
                </Avatar>
                <p className='text-xl truncate'>Wai Wai Noodles</p>
              </CardTitle>
              <CardDescription className='text-base'>
                New Year Special: Enjoy 50% off on all Products
              </CardDescription>
            </CardHeader>
            <CardContent className='pt-1'>
              <div className='space-y-2'>
                <div className='flex justify-start items-baseline flex-wrap gap-x-2'>
                  <p className='text-xs text-muted-foreground'>Duration:</p>
                  <p className='text-sm whitespace-nowrap'>
                    12/12/2024
                    <span> - </span>
                    17/12/2024
                  </p>
                </div>
                <div>
                  <Progress className='h-1.5' value={20} />
                </div>
                <div className='flex justify-start items-baseline flex-wrap gap-x-2'>
                  <p className='text-sm text-muted-foreground'>Status:</p>
                  <p className='text-sm whitespace-nowrap'>Active</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='basis-full sm:basis-1/2 xl:basis-1/4 py-2 sm:pr-2  xl:px-2'>
          <Card>
            <CardHeader className='pb-1'>
              <CardTitle className='flex gap-2 items-center font-medium '>
                <Avatar>
                  <AvatarImage src={waiwai.src} alt='User' />
                  <AvatarFallback className='text-sm'>LOGO</AvatarFallback>
                </Avatar>
                <p className='text-xl truncate'>Wai Wai Noodles</p>
              </CardTitle>
              <CardDescription className='text-base'>
                New Year Special: Enjoy 50% off on all Products
              </CardDescription>
            </CardHeader>
            <CardContent className='pt-1'>
              <div className='space-y-2'>
                <div className='flex justify-start items-baseline flex-wrap gap-x-2'>
                  <p className='text-xs text-muted-foreground'>Duration:</p>
                  <p className='text-sm whitespace-nowrap'>
                    12/12/2024
                    <span> - </span>
                    17/12/2024
                  </p>
                </div>
                <div>
                  <Progress className='h-1.5' value={60} />
                </div>
                <div className='flex justify-start items-baseline flex-wrap gap-x-2'>
                  <p className='text-sm text-muted-foreground'>Status:</p>
                  <p className='text-sm whitespace-nowrap'>Active</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='basis-full sm:basis-1/2 xl:basis-1/4 py-2 sm:pl-2 xl:pl-2'>
          <Card>
            <CardHeader className='pb-1'>
              <CardTitle className='flex gap-2 items-center font-medium '>
                <Avatar>
                  <AvatarImage src={waiwai.src} alt='User' />
                  <AvatarFallback className='text-sm'>LOGO</AvatarFallback>
                </Avatar>
                <p className='text-xl truncate'>Wai Wai Noodles</p>
              </CardTitle>
              <CardDescription className='text-base'>
                New Year Special: Enjoy 50% off on all Products
              </CardDescription>
            </CardHeader>
            <CardContent className='pt-1'>
              <div className='space-y-2'>
                <div className='flex justify-start items-baseline flex-wrap gap-x-2'>
                  <p className='text-xs text-muted-foreground'>Duration:</p>
                  <p className='text-sm whitespace-nowrap'>
                    12/12/2024
                    <span> - </span>
                    17/12/2024
                  </p>
                </div>
                <div>
                  <Progress className='h-1.5' value={90} />
                </div>
                <div className='flex justify-start items-baseline flex-wrap gap-x-2'>
                  <p className='text-sm text-muted-foreground'>Status:</p>
                  <p className='text-sm whitespace-nowrap'>Active</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
