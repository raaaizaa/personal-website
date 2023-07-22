import { TextFatface } from '@/components/atoms/typography/text-fatface/text-fatface'
import React from 'react'

export default function PortfolioPage() {
  return (
    <div className='flex justify-center items-center h-[93%] p-32 text-center'>
        <div className='block'>
            <TextFatface className='text-5xl py-4'>:/</TextFatface>
            <TextFatface className='text-5xl py-4'>Coming soon</TextFatface>
        </div>
    </div>
  )
}
