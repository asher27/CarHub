import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import {Footer, Navbar} from "@/components";


export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover best cars in the world.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}
            className={'relative'}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
