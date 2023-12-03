import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { albumTypes } from '@/types/lastfm-album-type'
import Image from 'next/image'



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

    useEffect(() => {
        async function getTopWeeklyAlbum() {
            const albumData = await fetch()
            setAlbum(albumData)
        }
        getTopWeeklyAlbum()
    }, [])


    return (
        <div className='grid grid-cols-3 grid-rows-3 w-[350px] lg:w-[750px] xl:w-[750px] overflow-visible'>
            {album.map((data, index) => (
                <div key={index} className='flex flex-col justify-center items-center hover:scale-110 duration-150 ease-in-out'>
                    <Image src={data.album.image} alt={data.album.name} width={250} height={250} />
                </div>
            ))}
        </div>
    )
}
