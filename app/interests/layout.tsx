'use client'

import Reveal from '@/components/animations/reveal'
import LastFMCollage from '@/components/templates/last-fm-collage/last-fm-collage'
import MyAnimeListCollage from '@/components/templates/myanimelist-collage/myanimelist-collage'
import SpotifyCard from '@/components/templates/spotify-card/spotify-card'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function InterestsPage() {

  const MusicInterests = () => {
    return (
      <div className='scroll-smooth focus:scroll-auto scroll-'>
        <Reveal>
          <div className='flex xl:flex-row lg:flex-row flex-col h-[calc(100vh-72px)] items-center justify-evenly lg:justify-around xl:justify-around xl:text-start lg:text-start text-start'>
            <div>
              <p className='text-5xl lg:text-8xl xl:text-9xl tracking-tighter transition-all duration-150 mb-2'>A big fan of music</p>
              <p className=' text-base lg:text-xl xl:text-xl transition-all duration-150'>Connect with my <Link href='https://open.spotify.com/user/raaaizaa?si=410ab6b5bd9e44be' target='__blank' className='text-[#1DB954] hover:underline'>Spotify</Link></p>
            </div>
            <SpotifyCard />
          </div>
        </Reveal>
        <Reveal>
          <div className='flex xl:flex-row lg:flex-row flex-col h-screen items-center justify-evenly lg:justify-between xl:justify-between px-4 lg:px-4 xl:px-4 xl:text-start lg:text-start text-start'>
            <div>
              <Reveal>
                <p className='text-5xl lg:text-8xl xl:text-9xl tracking-tighter transition-all duration-150 mb-2 '>Weekly 3x3 album collage</p>
              </Reveal>
              <Reveal>
                <p className='text-base lg:text-xl xl:text-xl transition-all duration-150'>Connect with my <Link href='https://www.last.fm/user/Raaizar' target='__blank' className='text-[#c3000d] hover:underline'>LastFm</Link></p>
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

  const MangaInterests = () => {
    return (
      <div className='flex flex-col justify-evenly h-screen px-4'>
        <Reveal>
          <div className='space-y-16'>
            <div className='text-start'>
              <p className='mb-2 text-5xl lg:text-8xl xl:text-9xl tracking-tighter transition-all duration-150'>A part-time weeaboo</p>
              <p className='text-base lg:text-xl xl:text-xl transition-all duration-150'>Connect with my <Link href="https://myanimelist.net/profile/coneundeur" target="_blank" className='text-[#2F52A2] hover:underline'>MyAnimeList</Link></p>
            </div>
            <div className=''>
              <MyAnimeListCollage />
            </div>
          </div>
        </Reveal>
      </div>
    )
  }

  return (
    <div>
      <MusicInterests />
      <MangaInterests />
    </div>
  )
}
