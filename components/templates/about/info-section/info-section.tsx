import { TextCutout } from '@/components/atoms/typography/text-cutout/text-cutout'
import { TextInter } from '@/components/atoms/typography/text-inter/text-inter'
import { TextTooDrunk } from '@/components/atoms/typography/text-linotype/text-linotype'
import { TextP5 } from '@/components/atoms/typography/text-p5/text-p5'
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import React from 'react'
import Link from 'next/link';

export default function InfoSection() {
  return (
    <div className='bg-[#FFB800] px-12 pt-24 pb-12 lg:p-36 xl:p-48 space-y-4'>
      <div className='space-y-12'>
        <TextTooDrunk className='text-black text-3xl lg:text-4xl xl:text-5xl'>About...</TextTooDrunk>
        <TextInter className='text-black text-base lg:text-2xl xl:text-3xl'>A Leo INTJ person who studied computer science at Bina Nusantara University. Currently trying to figure it out how front-end development and mobile app development works. This website are made just for fun.</TextInter>
      </div>
      <div className='block text-center xl:pt-4'>
        <TextP5 className='text-3xl lg:text-4xl xl:text-5xl text-black'>get to know me more!</TextP5>
        <div className='flex justify-center items-center pt-4 xl:pt-12'>
        <Link href='#current-obsession' scroll={true} style={{scrollBehavior:'smooth', animationDuration:'300'}}>
          <BsFillArrowDownCircleFill className="hover:scale-125 ease-linear duration-75 fill-black" style={{width:36, height:36}}/>
        </Link>
        </div>
      </div>
    </div>
  )
}
