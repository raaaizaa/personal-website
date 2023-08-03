import { TextCutout } from '@/components/atoms/typography/text-cutout/text-cutout'
import { TextInter } from '@/components/atoms/typography/text-inter/text-inter'
import React from 'react'

export default function PortfolioPage() {
  return (
    <div className='flex justify-center items-center h-[93%] p-32 text-center'>
        <div className='block'>
            <TextInter className='text-5xl py-4 font-bold'>:/</TextInter>
            <TextCutout className='text-5xl py-4 text-[#FFB800]'>Coming soon</TextCutout>
            <TextInter className='font-bold'>((sebenernya lagi males masukinnya sih))</TextInter>
        </div>
    </div>
  )
}
