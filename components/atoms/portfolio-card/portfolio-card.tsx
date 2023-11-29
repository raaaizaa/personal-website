'use client'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { TextInter } from '../typography/text-inter/text-inter'
import Link from 'next/link'

interface cardProps {
  id: number
  name: string
  date: string
  description: string
  role: string
  technology: string
  publication: string
  image: string | StaticImageData
}

export default function PortfolioCard({
  id,
  name,
  date,
  description,
  role,
  technology,
  publication,
  image,
}: cardProps) {
  return (
    <Card isPressable className="bg-[#2c2c2c] text-white items-center">
      <Link href={`portfolio/detail/${id}`}>
        <CardHeader>
          <div className="block text-start px-2 pt-2 ">
            <TextInter className="text-base md:text-xl lg:text-2xl xl:text-2xl font-bold">
              {name}
            </TextInter>
            <TextInter className="text-sm md:text-base lg:text-xl xl:text-xl">
              {date.split(' - ', )[0]} - {role}
            </TextInter>
          </div>
        </CardHeader>
        <CardBody className="flex justify-center items-center overflow-visible ">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            
            style={{ borderRadius: '16px' }}
          />
        </CardBody>
      </Link>
    </Card>
  )
}
