import InfoSection from '@/components/templates/about/info-section/info-section'
import TopAlbum from '@/components/templates/about/top-album/top-album'
import React from 'react'

export default function AboutPage() {
  return (
    <div className='scroll-smooth'>
        <InfoSection />
        <TopAlbum />
    </div>
  )
}
