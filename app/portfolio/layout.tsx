import Link from 'next/link'
import React from 'react'

export default function PortfolioPage() {

  return (
    <div className='h-[calc(100vh-72px)] flex justify-start items-center'>
      <div className='text-start space-y-6 px-4 '>
        <p className='text-5xl lg:text-9xl xl:text-9xl transition-all duration-150 tracking-tighter'>Currently work in progress!</p>
        <p className='text-xl transition-all duration-150'>But you can view my portfolio <Link href='/portfolio/portfolio-raiza-rahman-juni-2023.pdf' target='_blank' className='hover:underline font-bold text-[#1DB954]'>here</Link></p>
      </div>
    </div>
  )
}
