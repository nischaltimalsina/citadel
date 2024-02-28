import type { Metadata } from "next";
import { Barlow } from 'next/font/google';
import './globals.css';
import { AppLayout } from '@/components/common/app-layout';
import { ThemeProvider } from '@/context/theme-provider';
import { AuthProvider } from '@/context/auth-provider';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Andromeda',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={barlow.className}>
        <AuthProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange>
            <AppLayout>{children}</AppLayout>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
