import React from 'react';
import './globals.css'
import { GeistSans } from 'geist/font/sans';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expense Tracker',
  description: 'Track and manage your shared expenses',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-gray-50">{children}</body>
    </html>
  )
} 