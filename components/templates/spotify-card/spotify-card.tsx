import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { songTypes } from '@/types/spotify-song-type'
import Image from 'next/image'
import Link from 'next/link'

const USER_IS_CURRENTLY_PLAYING = 200

).toString('base64')

export default function SpotifyCard() {
    const [playing, setPlaying] = useState(Boolean)
    const [error, setError] = useState(Boolean)
    const [song, setSong] = useState<songTypes>({
        artistName: '',
        artistLink: '',
        albumImage: '',
        songName: ' ',
        albumLink: '',
        songLink: '',
    })
    const [date, setDate] = useState('')

    function insertSong(artistName: string, artistLink: string, songName: string, songLink: string, albumImage: string, albumLink: string) {
        const song: songTypes = {
            artistName: artistName,
            artistLink: artistLink,
            songName: songName,
            songLink: songLink,
            albumImage: albumImage,
            albumLink: albumLink,
        }

        return song
    }


            const ACCESS_TOKEN = accessTokenResponse.data.access_token

            const playingResponse = await axios.get(
                'https://api.spotify.com/v1/me/player/currently-playing',
                {
                    headers: {
                        Authorization: `Bearer ${ACCESS_TOKEN}`,
                        'Content-Type': 'application/json',
                    },
                }
            )

            if (playingResponse.status === USER_IS_CURRENTLY_PLAYING) {
                setPlaying(playingResponse.data.is_playing)
                setError(false)

                const data = playingResponse.data.item

                const song = insertSong(
                    data.artists[0].name,
                    data.artists[0].external_urls.spotify,
                    data.name,
                    data.external_urls.spotify,
                    data.album.images[0].url,
                    data.album.uri
                )

                setSong(song)
            } else {
                const lastPlayedResponse = await axios.get(
                    'https://api.spotify.com/v1/me/player/recently-played',
                    {
                        headers: {
                            Authorization: `Bearer ${ACCESS_TOKEN}`,
                            'Content-type': 'application/json',
                        },
                    }
                )

                const lastPlayedString = lastPlayedResponse.data.items[0].played_at
                const lastPlayedDate = `${new Date(lastPlayedString).toLocaleTimeString()} at ${new Date(lastPlayedString).toLocaleDateString()}`
                setDate(lastPlayedDate)

                const data = lastPlayedResponse.data.items[0].track
                const song = insertSong(
                    data.artists[0].name,
                    data.artists[0].external_urls.spotify,
                    data.name,
                    data.external_urls.spotify,
                    data.album.images[0].url,
                    data.album.uri
                )

                setSong(song)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getPlayingStatus()
        }, 1000)

        return () => clearInterval(interval)
    })

    return (
        <div className='flex justify-center items-center'>
            {error === false && (
                <div className='text-center hover:scale-110 duration-150 ease-in-out'>
                    {playing ? (
                        <p className='antialiased text-2xl'>Currently playing: </p>

                    ) : (
                        <p className='antialiased text-2xl'>Last played as {date}</p>
                    )}
                    <div>
                        <div className='flex justify-center items-center'>
                            <Link href={song.albumLink} target='__blank'>
                                <Image src={song.albumImage} width={350} height={350} alt='album-cover' priority={true} />
                            </Link>
                        </div>
                        <div>
                            <Link href={song.songLink} target='__blank'>
                                <p className='text-xl hover:underline ease-in duration-75'>{song.songName.length > 50
                                    ? `${song.songName.substring(0, 50)}...`
                                    : song.songName}</p>
                            </Link>
                            <Link href={song.artistLink} target='__blank'>
                                <p className='text-xl hover:underline ease-in duration-75'>{song.artistName.length > 50
                                    ? `${song.artistName.substring(0, 50)}...`
                                    : song.artistName}</p>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            {error && (
                <div className='text-center'>
                    <p className='text-2xl'>Fetching data from Spotify...</p>
                </div>
            )}
        </div>
    )
}
