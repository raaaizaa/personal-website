'use client'
import { TextMontserrat } from '@/components/atoms/typography/text-montserrat/text-montserrat';
import Image from 'next/image';
import React from 'react';
import portrait from 'public/images/portrait.png'
import Title from '@/components/molecules/home/title';

export default function Homepage() {
  return (
    <div className=' lg:inline-flex h-[93%] w-screen'>
        <div className='flex flex-col lg:w-[50%] justify-center ps-4 sm:ps-8 md:ps-12 lg:ps-20 xl:ps-32 py-32 flex-grow transition-all '>
          <Title />
        </div>
        <div className='flex flex-grow justify-center items-center lg:w-[50%]'>
            <Image src={portrait} width={600} height={600} alt='' />
        </div>
    </div>
  );
}
