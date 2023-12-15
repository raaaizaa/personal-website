'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import PortfolioPage from './layout'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    router.push('/portfolio')
  }, [])

  return <PortfolioPage />
}
