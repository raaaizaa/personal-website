'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import AnimeCard from '@/components/atoms/myanimelist-card/anime-card'
import MangaCard from '@/components/atoms/myanimelist-card/manga-card'
import { animeData, mangaData } from '@/types/animanga-data'

const username = 'coneundeur'

async function fetchAnimangaData() {
  try {
    const updateResponse = await axios.get(
      `https://api.jikan.moe/v4/users/${username}/userupdates`
    )

    const animeResponse = updateResponse.data.data.anime[0]
    const mangaResponse = updateResponse.data.data.manga[0]

    const anime: animeData = {
      date: animeResponse.date,
      episodes_seen: animeResponse.episodes_seen,
      title: animeResponse.entry.title,
      image: animeResponse.entry.images.jpg.large_image_url,
      url: animeResponse.entry.url
    }

    const manga: mangaData = {
      date: mangaResponse.date,
      chapters_read: mangaResponse.chapters_read,
      title: mangaResponse.entry.title,
      image: mangaResponse.entry.images.jpg.large_image_url,
      url: mangaResponse.entry.url
    }

    return { anime, manga }
  } catch (error) {
    console.error('Error fetching data:', error)
    return { anime: null, manga: null }
  }
}

export default function MyAnimelistUpdate() {
  const [animangaData, setAnimangaData] = useState<{
    anime: animeData | null
    manga: mangaData | null
  }>({
    anime: null,
    manga: null,
  })

  useEffect(() => {
    async function getAnimangaData() {
      const data = await fetchAnimangaData()
      setAnimangaData(data)
    }
    getAnimangaData()
  }, [])

  return (
    <div className="block lg:flex lg:justify-between space-y-8 lg:space-y-0">
      {animangaData.manga && (
        <MangaCard
          date={animangaData.manga.date}
          chapters_read={animangaData.manga.chapters_read}
          title={animangaData.manga.title}
          url={animangaData.manga.url}
          image={animangaData.manga.image}
        />
      )}
      {animangaData.anime && (
        <AnimeCard
          date={animangaData.anime.date}
          episodes_seen={animangaData.anime.episodes_seen}
          title={animangaData.anime.title}
          url={animangaData.anime.url}
          image={animangaData.anime.image}
        />
      )}
    </div>
  )
}
