'use client'

import Title from '@/components/molecules/home/title'
import Spotify from '@/components/molecules/spotify-card/spotify'

export default function Homepage() {
  return (
    <div className="h-screen py-20 p-12 lg:p-28 xl:p-28 justify-center lg:flex lg:flex-row-reverse items-center space-y-4 lg:space-y-0 gap-48">
      <Spotify />
      <Title />
    </div>
  )
}
