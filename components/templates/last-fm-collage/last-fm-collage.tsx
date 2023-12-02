import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { albumTypes } from '@/types/lastfm-album-type'
import Image from 'next/image'
import Link from 'next/link'

const baseURL = 'https://ws.audioscrobbler.com/2.0'
const period = '7day'

async function fetch() {
    try {


        const albumsResponse = response.data.topalbums.album

        const albumArray: albumTypes[] = albumsResponse.slice(0, 9).map((album: any) => ({
            album: {
                name: album.name,
                artist: album.artist.name,
                playcount: album.playcount,
                image: album.image[3]['#text'],
                url: album.url,
            },
        }))

        console.log("Weekly 3x3: ")
        console.log(albumArray)

        return albumArray
    } catch (error) {
        console.error(error)
        return []
    }
}

export default function LastFMCollage() {
    const [album, setAlbum] = useState<albumTypes[]>([])

    useEffect(() => {
        async function getTopWeeklyAlbum() {
            const albumData = await fetch()
            setAlbum(albumData)
        }
        getTopWeeklyAlbum()
    }, [])
    return (
        <div className='grid grid-cols-3 grid-rows-3 w-[750px]'>
            {album.map((data, index) => (
                <div key={index} className='flex flex-col justify-center items-center'>
                    <Image src={data.album.image} alt={data.album.name} width={250} height={250} />
                    <p className='text-center'>{data.album.name.length > 25
                        ? `${data.album.name.substring(0, 25)}...`
                        : data.album.name}</p>
                </div>
            ))}
        </div>
    )
}
