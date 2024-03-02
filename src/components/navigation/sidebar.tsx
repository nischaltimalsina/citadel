import React from 'react';
import { AccountSwitcher } from '../common';
import { accounts } from '@/assets/data/data';
import { menu } from '@/assets/data/menu';
import Link from 'next/link';
import { CircleUser, HandHelping, InfoIcon, LogOut } from 'lucide-react';

export const Sidebar = () => {
  return (
    <>
      <div className='h-full flex flex-col justify-between'>
        <ul className='px-2 py-8'>
          <div className='px-4 pb-2'>
            <p className='text-sm'>Menu</p>
          </div>
          {menu.map((item, i) => (
            <li
              key={i}
              className=' hover:bg-secondary ease-in-out duration-300 rounded-lg'>
              <Link
                href={item.link}
                className='flex px-4 py-3 items-center gap-3 font-medium'>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className='px-2 py-6 mt-auto'>
          <div className='px-4'>
            <p className='text-sm'>Support</p>
          </div>
          <ul className='mt-2'>
            <li className=' hover:bg-secondary ease-in-out duration-300 rounded-lg'>
              <Link href={''} className='flex px-4 py-2 items-center gap-3 '>
                <CircleUser className='h-5 w-5' />
                <span>My Account</span>
              </Link>
            </li>
            <li className=' hover:bg-secondary ease-in-out duration-300 rounded-lg'>
              <Link href={''} className='flex px-4 py-2 items-center gap-3 '>
                <InfoIcon className='h-5 w-5' />
                <span>Guide</span>
              </Link>
            </li>
            <li className=' hover:bg-secondary ease-in-out duration-300 rounded-lg'>
              <Link href={''} className='flex px-4 py-2 items-center gap-3 '>
                <HandHelping className='h-5 w-5' />
                <span>Help & Support</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className='px-2 py-6'>
          <div className='px-4'>
            <p className='text-sm'>Switch Profiles</p>
          </div>
          <div className='px-4 mt-4'>
            <AccountSwitcher isCollapsed={false} accounts={accounts} />
          </div>
        </div>
      </div>
    </>
  );
};
