import Link from 'next/link'
import React from 'react'
import { TextInter } from '../typography/text-inter/text-inter'

export default function PortfolioButton() {
  return (
    <div className="flex items-center gap-4">
      <Link
        // href="/portfolio/portfolio-raiza-rahman-juni-2023.pdf"
        href="/portfolio/portfolio"
        target="__blank">
        <TextInter className="hover:underline md:text-xl lg:text-2xl xl:text-3xl">
          Click here to view the portfolio as PDF
        </TextInter>
      </Link>
    </div>
  )
}
