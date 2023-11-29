'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { albumData } from '@/types/lastfm-album-data'
import LastFmCard from '@/components/atoms/lastfm-card/lastfm-card'

const baseURL = 'https://ws.audioscrobbler.com/2.0'
const period = '1month'

async function fetch() {
  try {
    const response = await axios.get(
      `${baseURL}?method=user.gettopalbums&user=${process.env.NEXT_PUBLIC_LASTFM_USERNAME}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&period=${period}`
    )

    const responseAlbum = response.data.topalbums.album

    const albumDataArray: albumData[] = responseAlbum
      .slice(0, 10)
      .map((album: any) => ({
        album: {
          name: album.name,
          artist: album.artist.name,
          playcount: album.playcount,
          image: album.image[3]['#text'],
          url: album.url,
        },
      }))

    return albumDataArray
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}

export default function LastFm() {
  const [album, setAlbum] = useState<albumData[]>([])

  useEffect(() => {
    async function getTopAlbumsData() {
      const albumsData = await fetch()
      setAlbum(albumsData)
    }
    getTopAlbumsData()
  }, [])

  return (
    <div className="grid md:grid-cols-5 grid-rows-2 grid-cols-2 gap-4">
      {album.map((album) => (
        <LastFmCard
          key={album.album.name}
          name={album.album.name}
          artist={album.album.artist}
          playcount={album.album.playcount}
          image={album.album.image}
          url={album.album.url}
        />
      ))}
    </div>
  )
}
