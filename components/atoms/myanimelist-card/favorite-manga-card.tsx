import Image from 'next/image'
import React from 'react'
import { TextInter } from '../typography/text-inter/text-inter'
import Link from 'next/link'

interface props {
  title: string
  image: string
  url: string
}

export default function FavoriteManga({ title, image, url }: props) {
  return (
    <div className="text-center flex justify-center hover:scale-105 ease-in-out duration-100 items-center">
      <Link href={url} target='__blank'>
        <div className="flex justify-center">
          <Image src={image} width={300} height={300} alt={title} />
        </div>
      </Link>
    </div>
  )
}
