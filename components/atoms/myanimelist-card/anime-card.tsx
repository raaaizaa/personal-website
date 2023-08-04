import Image from 'next/image'
import React from 'react'

interface cardProps {
    date: string,
    status: string,
    episodes_seen: number,
    title: string,
    image: string,
    url: string
}

export default function AnimeCard({date, status, episodes_seen, title, image, url} : cardProps) {
  return (
    <div>
        <p>{date} - {status} - {episodes_seen} - {title} - {url}</p>
        <Image src={image} width={400} height={400} alt='anime' />
    </div>
  )
}
