'use client'

import PortfolioPage from '@/components/pages/portfolio/portfolio-page'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    router.push('/portfolio')
  }, [])

  return <PortfolioPage />
}
