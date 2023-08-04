import Image from 'next/image'
import React from 'react'

interface cardProps {
  date: string,
  status: string,
  chapters_read: number,
  title: string,
  image: string,
  url: string
}

export default function MangaCard({date, status, chapters_read, title, image, url} : cardProps) {
  return (
    <div>
      <p>{date} - {status} - {chapters_read} - {title}</p>
      <Image src={image} width={250} height={250} alt='manga' />
    </div>
  )
}
