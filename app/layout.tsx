import '../styles/globals.css'
import type { Metadata } from 'next'
import { siteConfiguration } from '@/components/constants/site-configuration'
import NavigationBar from '@/components/ui/navigation-bar/navigation-bar'

export const metadata: Metadata = {
  title: siteConfiguration.title,
  description: siteConfiguration.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-[#100c0c] dark:text-white'>
        <NavigationBar />
        <div className='flex justify-center'>
          <div className='w-screen lg:w-[1800px] xl:w-[1800px] mx-6'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
