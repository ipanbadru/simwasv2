import React from 'react';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import 'simplebar-react/dist/simplebar.min.css';
import { Flowbite, ThemeModeScript } from 'flowbite-react';
import customTheme from '@/utils/theme/custom-theme';
import './css/globals.css';
import { Analytics } from '@vercel/analytics/react';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simwas Kota Tasikmalaya',
  description: 'Aplikasi pengawasan terpusat Kota Tasikmalaya',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <ThemeModeScript />
      </head>
      <body className={`${manrope.className}`}>
        <Analytics />
        <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>
      </body>
    </html>
  );
}
