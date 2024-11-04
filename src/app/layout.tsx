 
import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { StoreProvider } from './store/StoreProvider';

// Import the Inter font
const inter = Inter({ subsets: ['latin'] });

// Metadata for the root layout
export const metadata = {
  title: 'My Website',
  description: 'A Next.js website with a root layout',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
    <html lang="en">
      <body className={inter.className}>{children} </body>
    </html>
    </StoreProvider>
  );
}
