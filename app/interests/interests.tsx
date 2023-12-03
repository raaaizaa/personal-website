'use client'

import Reveal from '@/components/animations/reveal'
import LastFMCollage from '@/components/templates/last-fm-collage/last-fm-collage'
import SpotifyCard from '@/components/templates/spotify-card/spotify-card'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function InterestsPage() {

  const MusicInterests = () => {
    return (
      <div>
        <Reveal>
          <div className='flex xl:flex-row lg:flex-row flex-col h-[calc(100vh-72px)] items-center justify-evenly lg:justify-around xl:justify-around'>
            <div>
              <p className='text-4xl'>Raiza is an avid music listener</p>
              <p className='text-xl'>Connect with my <Link href='https://open.spotify.com/user/raaaizaa?si=410ab6b5bd9e44be' target='__blank' className='text-[#1DB954]'>Spotify</Link></p>
            </div>
            <SpotifyCard />
          </div>
        </Reveal>
        <Reveal>
          <div className='flex xl:flex-row lg:flex-row flex-col h-screen items-center justify-evenly lg:justify-between xl:justify-between lg:px-4 xl:px-4'>
            <div>
              <Reveal>
                <p className='text-4xl'>Weekly 3x3 album collage</p>
              </Reveal>
              <Reveal>
                <p className='text-xl'>Connect with my <Link href='https://www.last.fm/user/Raaizar' target='__blank' className='text-[#c3000d]'>LastFm</Link></p>
              </Reveal>
            </div>
            <Reveal>
              <LastFMCollage />
            </Reveal>
          </div>
        </Reveal>
      </div>
    )
  }

  return (
    <div>
      <MusicInterests />
    </div>
  )
}
