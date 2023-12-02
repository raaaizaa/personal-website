'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import React from 'react'
import InterestsPage from './interests'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    router.push('/interests')
  }, [])
  
    return <InterestsPage />
}
