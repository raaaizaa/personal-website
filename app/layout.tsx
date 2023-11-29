import '../styles/globals.css'
import type { Metadata } from 'next'
import { siteConfiguration } from '@/components/constants/site-configuration'
import NavigationBar from '@/components/organisms/navigation-bar/navigation-bar'

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
      <body className="h-screen">
          <NavigationBar />
          {children}
      </body>
    </html>
  )
}
