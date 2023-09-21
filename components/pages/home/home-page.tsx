'use client'

import Title from '@/components/molecules/home/title'
import Spotify from '@/components/molecules/spotify-card/spotify'
import Image from 'next/image'
import portrait from '@/public/images/portrait.png'

export default function Homepage() {
  return (
    <div className="h-screen py-20 p-12 lg:p-28 xl:p-28 justify-center lg:flex lg:flex-row-reverse items-center space-y-4 lg:space-y-0 gap-48">
      <div className='flex justify-center'>
        <Image src={portrait} alt="portrait" width={450} height={450}/>
      </div>
      <Title />
    </div>
  )
}
  