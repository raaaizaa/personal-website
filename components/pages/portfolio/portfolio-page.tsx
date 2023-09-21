import { TextCutout } from '@/components/atoms/typography/text-cutout/text-cutout'
import { TextInter } from '@/components/atoms/typography/text-inter/text-inter'
import Link from 'next/link'
import React from 'react'

export default function PortfolioPage() {
  return (
    <div className="flex justify-center items-center h-[93%] p-32 text-center">
      <Link href="/portfolio/portfolio_raiza_rahman_may_2023.pdf" target="__blank">
        <TextInter className="text-2xl hover:scale-105 ease-linear duration-100">
          Click here to download my portfolio
        </TextInter>
      </Link>
    </div>
  )
}
