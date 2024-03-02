import * as React from 'react';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { Sidebar } from '../navigation/sidebar';
import { Header } from '../navigation/header';
import { Footer } from '../navigation/footer';
export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className='h-screen w-screen flex flex-col'>
        <Header />
        <div className='flex h-[calc(100%-4rem)] w-full'>
          <aside className='w-0 overflow-hidden lg:w-64 h-full borde r-r'>
            <Sidebar />
          </aside>
          <ScrollArea className='h-full w-full scroll-smooth lg:w-[calc(100%-16rem)] bg-secondary lg:rounded-tl-lg'>
            <ScrollBar />
            <div className='h-full w-full'>
              <div className='min-h-[calc(100vh-7rem)]'>{children}</div>
              <Footer />
            </div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
}
