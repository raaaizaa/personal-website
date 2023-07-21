import { TextMontserrat } from '@/components/atoms/typography/text-montserrat/text-montserrat';
import React from 'react';

export default function Homepage() {
  return (
    <div className='flex flex-col h-[93%] justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-32 flex-grow transition-all'>
      <TextMontserrat className='text-5xl font-bold'>Hi!</TextMontserrat>
      <TextMontserrat className='text-4xl'>My name is Raiza</TextMontserrat>
      <TextMontserrat className='text-2xl'>Currently studying as an undergraduate computer science</TextMontserrat>
      <TextMontserrat className='text-2xl'>student at Binus University</TextMontserrat>
    </div>
  );
}
