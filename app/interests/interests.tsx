'use client'

import LastFMCollage from '@/components/templates/last-fm-collage/last-fm-collage'
import SpotifyCard from '@/components/templates/spotify-card/spotify-card'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function InterestsPage() {

  const MusicInterests = () => {
    return (
      <div>
        <div className='flex xl:flex-row lg:flex-row flex-col items-center justify-around'>
          <p className='text-4xl'>Raiza is an avid music listener</p>
          <SpotifyCard />
        </div>
        <div className='flex xl:flex-row lg:flex-row flex-col items-center justify-between'>
          <p className='text-4xl'>Weekly 3x3 from <span className='font-bold'>
            <Link href='https://www.last.fm/user/Raaizar' target='__blank'>LastFm</Link>
          </span></p>
          <LastFMCollage />
        </div>
      </div>
    )
  }

  return (
    <div>
      <MusicInterests />
    </div>
  )
}
