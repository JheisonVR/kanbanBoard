"use client"
// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './ui'
import { EntriesProvider } from '@/context/entries'
import { UIProvider } from '@/context/UI/UiProvider'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Technical Test',
//   description: 'Select Insurance',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EntriesProvider>
          <UIProvider>
            <Navbar/>
            {children}
          </UIProvider>
        </EntriesProvider>
      </body>
    </html>
  )
}
