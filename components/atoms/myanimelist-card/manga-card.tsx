import Image from 'next/image'
import React from 'react'
import { TextP5 } from '../typography/text-p5/text-p5'
import { TextInter } from '../typography/text-inter/text-inter'
import Link from 'next/link'

interface cardProps {
  date: string
  chapters_read: number
  title: string
  image: string
  url: string
}

export default function MangaCard({
  date,
  chapters_read,
  title,
  image,
  url,
}: cardProps) {
  return (
    <div className="flex items-center gap-8">
      <Link href={url} target="_blank">
        <Image
          src={image}
          width={300}
          height={300}
          alt="manga"
          className="hover:scale-105 ease-in-out duration-100"
        />
      </Link>
      <div className="space-y-2 lg:space-y-6 xl:space-y-8">
        <TextP5 className="text-3xl lg:text-4xl xl:text-5xl text-black">
          Last manga update:{' '}
        </TextP5>
        <div>
          <TextInter className="text-base lg:text-xl xl:text-2xl text-black">
            {title} - Chapter {chapters_read}
          </TextInter>
          <TextInter className="text-base lg:text-xl xl:text-2xl text-black">
            {date.substring(0, 10)}
          </TextInter>
        </div>
      </div>
    </div>
  )
}
