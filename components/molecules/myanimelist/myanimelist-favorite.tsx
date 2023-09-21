
import FavoriteAnime from '@/components/atoms/myanimelist-card/favorite-anime-card'
import FavoriteManga from '@/components/atoms/myanimelist-card/favorite-manga-card'
import { TextInter } from '@/components/atoms/typography/text-inter/text-inter'
import { animeData, mangaData } from '@/types/animanga-data'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const username = 'coneundeur'

async function fetchAnimangaData() {
  const favoriteResponse = await axios.get(
    `https://api.jikan.moe/v4/users/${username}/favorites`
  )

  const favoriteAnimeResponse = favoriteResponse.data.data.anime
  const favoriteMangaResponse = favoriteResponse.data.data.manga

  console.log(favoriteMangaResponse)

  const mangaArray: mangaData[] = favoriteMangaResponse
    .slice(0, 6)
    .map((favoriteMangaResponse: any) => ({
      date: null,
      chapters_read: null,
      title: favoriteMangaResponse.title,
      image: favoriteMangaResponse.images.jpg.large_image_url,
      url: favoriteMangaResponse.url,
    }))

  const animeArray: animeData[] = favoriteAnimeResponse
    .slice(0, 6)
    .map((favoriteAnimeResponse: any) => ({
      date: null,
      episodes_seen: null,
      title: favoriteAnimeResponse.title,
      image: favoriteAnimeResponse.images.jpg.large_image_url,
      url: favoriteAnimeResponse.url,
    }))

  console.log(mangaArray)
  console.log(animeArray)

  const anime = animeArray
  const manga = mangaArray

  return { anime, manga }
}

export default function MyAnimeListFavorite() {
  const [animangaData, setAnimangaData] = useState<{
    anime: animeData[] | null
    manga: mangaData[] | null
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
    <div className='text-black'>
        <TextInter className='text-xl lg:text-3xl xl:text-3xl font-bold'>Favorites:</TextInter>
      <div className="xl:flex xl:justify-center lg:flex lg:justify-center grid md:grid-cols-5 grid-rows-2 grid-cols-2 gap-4 justify-center ">
        {animangaData.anime?.map((animangaData, index) => (
          <FavoriteAnime
          key={index}
            title={animangaData.title}
            url={animangaData.url}
            image={animangaData.image}
          />
        ))}
      </div>
      <div className="xl:flex xl:justify-center lg:flex lg:justify-center grid md:grid-cols-5 grid-rows-2 grid-cols-2 gap-4 justify-center ">
        {animangaData.manga?.map((animangaData, index) => (
          <FavoriteManga
          key={index}
            title={animangaData.title}
            url={animangaData.url}
            image={animangaData.image}
          />
        ))}
      </div>
    </div>
  )
}
