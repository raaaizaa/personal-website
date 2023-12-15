import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { albumTypes } from '@/types/lastfm-album-type'
import Image from 'next/image'
import clsx from 'clsx'

const baseURL = 'https://ws.audioscrobbler.com/2.0'
const period = '7day'

interface AlbumCover {
    isHover: boolean
    index: number
}

async function fetch() {
    try {
        const response = await axios.get(
            `${baseURL}?method=user.gettopalbums&user=Raaizar&api_key=37e39e71571eeb1b07cd1ef7d444582c&format=json&period=${period}`
        )

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

        return albumArray
    } catch (error) {
        console.error(error)
        return []
    }
}

export default function LastFMCollage() {
    const [album, setAlbum] = useState<albumTypes[]>([])
    const [cover, setCover] = useState<AlbumCover>({ isHover: false, index: -1 })

    useEffect(() => {
        async function getTopWeeklyAlbum() {
            const albumData = await fetch()
            setAlbum(albumData)
        }
        getTopWeeklyAlbum()
    }, [])


    return (
        <div className='grid grid-cols-3 grid-rows-3 w-[350px] h-[350px] md:w-[500px]  md:h-[500px] lg:w-[550px] lg:h-[550px] xl:w-[750px] xl:h-[750px] overflow-visible'>
            {album.map((data, index) => (
                <div
                    key={index}
                    className='flex flex-col justify-center items-center'
                    onMouseEnter={(e) => {
                        e.preventDefault()
                        setCover({ isHover: true, index: index })
                    }}
                    onMouseLeave={(e) => {
                        e.preventDefault()
                        setCover({ isHover: false, index: index })
                    }}>
                    <Image
                        src={data.album.image}
                        alt={data.album.name}
                        width={300}
                        height={300}
                        className='noselect pointer-events-none w-[250px] h-[250px] transition-all duration-150'
                        style={{
                            filter: cover.isHover && cover.index === index
                                ? "brightness(50%) blur(8px)"
                                : "brightness(100%) blur(0px)",
                        }} />
                    <div className={clsx('absolute h-auto w-auto overflow-hidden text-center text-white',
                        `opacity-${cover.isHover && cover.index === index ? 100 : 0}`
                    )}>
                        <p className='text-small lg:text-base xl:text-base'>{data.album.name.length > 25 ? `${data.album.name.substring(0, 25)}...` : data.album.name}</p>
                        <p className='text-small lg:text-base xl:text-base'>{data.album.artist.length > 25 ? `${data.album.artist.substring(0, 25)}...` : data.album.artist}</p>
                        <p className='text-small lg:text-base xl:text-base'>{data.album.playcount} Scrobbles</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
