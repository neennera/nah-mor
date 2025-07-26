import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nah-Mor',
  description: 'A voting and analysis application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Nah-Mor</h1>
            <div className="space-x-4">
              <a href="/vote" className="hover:text-blue-200">Vote</a>
              <a href="/result" className="hover:text-blue-200">Results</a>
              <a href="/analysis" className="hover:text-blue-200">Analysis</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
