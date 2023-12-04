'use client'
import { mangaData } from '@/types/animanga-data'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const USERNAME = 'coneundeur'

async function fetchData() {
    const response = await axios.get(
        `https://api.jikan.moe/v4/users/${USERNAME}/favorites`
    )

    const mangaResponse = response.data.data.manga

    console.log(mangaResponse)

    const mangaArray: mangaData[] = mangaResponse.slice(0, 9).map((mangaResponse: any) => ({
        date: null,
        chapters_read: null,
        title: mangaResponse.title,
        image: mangaResponse.images.jpg.large_image_url,
        url: mangaResponse.url
    }))

    const manga = mangaArray

    return manga
}

export default function MyAnimeListCollage() {
    const [manga, setManga] = useState<mangaData[]>()

    useEffect(() => {
        async function getMangaData() {
            const data = await fetchData()
            setManga(data)
        }

        getMangaData()
    }, [])

    return (
        <div>

        </div>
    )
}
