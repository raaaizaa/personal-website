import { TextCutout } from '@/components/atoms/typography/text-cutout/text-cutout'
import { TextInter } from '@/components/atoms/typography/text-inter/text-inter'
import { TextTooDrunk } from '@/components/atoms/typography/text-linotype/text-linotype'
import { TextP5 } from '@/components/atoms/typography/text-p5/text-p5'
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import React from 'react'
import Link from 'next/link';

export default function InfoSection() {
  return (
    <div className='bg-[#FFB800] p-48 space-y-12 '>
        <TextTooDrunk className='text-black text-5xl'>About...</TextTooDrunk>
        <TextInter className='text-black text-3xl'>A Leo INTJ person who studied computer science at Bina Nusantara University. Currently trying to figure it out how front-end development and mobile app development works. This website are made just for fun.</TextInter>
      <div className='block text-center pt-12 space-y-6'>
        <TextP5 className='text-5xl text-black'>get to know me more!</TextP5>
        
        <Link href='#current-obsession' scroll={true} style={{scrollBehavior:'smooth', animationDuration:'300'}}>
        <div className='flex justify-center items-center'>
          <BsFillArrowDownCircleFill style={{color:'black', width:'50', height:'50'}}/>
        </div>
        </Link>
      </div>
    </div>
  )
}
