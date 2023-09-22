'use client'
import PortfolioCard from '@/components/atoms/portfolio-card/portfolio-card'
import { portfolioProject } from '@/components/constants/portfolio/portfolio'
import React, { useState } from 'react'

export default function PortfolioGrid() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {portfolioProject.map((data, index) => {
        return (
          <PortfolioCard
            id={data.id}
            name={data.name}
            date={data.date}
            description={data.description}
            role={data.role}
            technology={data.technology}
            publication={data.publication}
            image={data.image}
          />
        )
      })}
    </div>
  )
}
