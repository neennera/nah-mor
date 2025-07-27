import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'
import Image from 'next/image'

const kanit = Kanit({ 
  subsets: ['latin', 'thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic']
})

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
        <body className={`${kanit.className} w-full bg-[#77856b] flex items-center justify-center`}>
            <div className='w-full md:max-w-[390px] bg-white min-h-screen flex flex-col'>
                {/* <nav className="bg-black text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">Nah-Mor</h1>
                    <div className="space-x-4">
                    <a href="/vote" className="hover:text-blue-200">Vote</a>
                    <a href="/result" className="hover:text-blue-200">Results</a>
                    <a href="/analysis" className="hover:text-blue-200">Analysis</a>
                    </div>
                </div>
                  </nav> */}
                  <nav className='w-full bg-white flex items-center justify-center'>
                      <a href='/analysis/upload/1'>
                          <Image src='/logo.png' alt='logo' width={400} height={400} className='w-16 h-16' />
                      </a>
                  </nav>
                {children}
        </div>
      </body>
    </html>
  )
}
