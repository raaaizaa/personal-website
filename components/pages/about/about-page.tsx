import InfoSection from '@/components/templates/about/info-section/info-section'
import LastListenedSection from '@/components/templates/about/last-listened-section/last-listened-section'
import React from 'react'

export default function AboutPage() {
  return (
    <div className='p-28'>
        <InfoSection />
        <LastListenedSection />
    </div>
  )
}
