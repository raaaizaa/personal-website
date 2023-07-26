import { TextCutout } from '@/components/atoms/typography/text-cutout/text-cutout'
import { TextInter } from '@/components/atoms/typography/text-roboto/text-roboto'
import React from 'react'

export default function InfoSection() {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
        <TextCutout className='text-[#ffb800] text-5xl'>About me</TextCutout>
        <TextInter className='text-2xl py-6'>A Leo INTJ person who studied computer science at Bina Nusantara University. Currently trying to figure it out how front-end development and mobile app development works. This website are made just for fun.</TextInter>
    </div>
  )
}
