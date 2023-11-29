'use client'
import PortfolioButton from '@/components/atoms/portfolio-button/portfolio-button'
import PortfolioGrid from '@/components/templates/portfolio/portfolio-grid'
import portfolio from '@/public/images/portfolio/portfolio.png'
import { NextUIProvider } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PortfolioPage() {
  return (
    <NextUIProvider>
      <div className="h-[93%] px-12 md:px-24 lg:px-32 xl:px-32 pt-32 text-center">
        <div className="flex justify-center items-center pb-12">
          <Link href={`/portfolio/detail`}>
            <Image src={portfolio} alt="portfolio" width={500} height={500} />
          </Link>
        </div>
        <PortfolioGrid />
        <div className="flex justify-center items-center py-12">
          <PortfolioButton />
        </div>
      </div>
    </NextUIProvider>
  )
}
