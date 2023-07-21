import { TextMontserrat } from '@/components/atoms/typography/text-montserrat/text-montserrat';
import Image from 'next/image';
import React from 'react';
import portrait from 'public/images/portrait.png'

export default function Homepage() {
  return (
    <div className=' lg:inline-flex h-[93%] w-screen'>
        <div className='flex flex-col lg:w-[50%] justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-32 flex-grow transition-all '>
        <TextMontserrat className='text-5xl font-bold leading-snug'>Hi!</TextMontserrat>
        <TextMontserrat className='text-4xl leading-normal'>My name is Raiza</TextMontserrat>
        <TextMontserrat className='text-2xl leading-normal'>Currently studying as an Undergraduated Computer Science</TextMontserrat>
        <TextMontserrat className='text-2xl leading-normal'>Student at Binus University</TextMontserrat>
        </div>
        <div className='flex flex-grow justify-center items-center lg:w-[50%]'>
            <Image src={portrait} width={700} height={700} alt='' />
        </div>
    </div>
  );
}
