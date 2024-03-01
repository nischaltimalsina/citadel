import * as React from 'react';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { Sidebar } from '../navigation/sidebar';
import { Header } from '../navigation/header';
export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className='h-screen w-screen flex'>
        <aside className='w-64 h-full border-r'>
          <Sidebar />
        </aside>
        <div className='flex flex-col h-full w-[calc(100%-16rem)]'>
          <Header />
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
