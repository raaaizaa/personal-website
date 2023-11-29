'use client'

import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { songMetadata } from '@/types/spotify-song-metadata'
import Image from 'next/image'
import Link from 'next/link'
import { TextInter } from '@/components/atoms/typography/text-inter/text-inter'
import currently from '@/public/images/homepage/spotify/currently.png'
import play from '@/public/images/homepage/spotify/playing.png'
import last from '@/public/images/homepage/spotify/last.png'
import played from '@/public/images/homepage/spotify/played.png'

const USER_IS_CURRENTLY_PLAYING = 200
const TOKEN = Buffer.from(
  `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`
).toString('base64')

export default function Spotify() {
  const [playing, setPlaying] = useState<boolean | null>(null)
  const [error, setError] = useState(Boolean)
  const [song, setSong] = useState<songMetadata>({
    artistName: '',
    artistLink: '',
    albumImage: '',
    songName: ' ',
    albumLink: '',
    songLink: '',
  })

  function insertSong(
    artistName: string,
    artistLink: string,
    songName: string,
    songLink: string,
    albumImage: string,
    albumLink: string
  ) {
    const song: songMetadata = {
      artistName: artistName,
      artistLink: artistLink,
      songName: songName,
      songLink: songLink,
      albumImage: albumImage,
      albumLink: albumLink,
    }

    return song
  }

  const getPlayingStatus = async () => {
    try {
      const accessTokenResponse = await axios.post(
        'https://accounts.spotify.com/api/token',
        `grant_type=refresh_token&refresh_token=${process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN}`,
        {
          headers: {
            Authorization: `Basic ${TOKEN}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )

      const ACCESS_TOKEN = accessTokenResponse.data.access_token
      const currentPlayResponse = await axios.get(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            'Content-type': 'application/json',
          },
        }
      )

      if (currentPlayResponse.status === USER_IS_CURRENTLY_PLAYING) {
        const isPlaying = currentPlayResponse.data.is_playing
        setPlaying(isPlaying)
        setError(false)

        const metadata = currentPlayResponse.data.item

        const song = insertSong(
          metadata.artists[0].name,
          metadata.artists[0].external_urls.spotify,
          metadata.name,
          metadata.external_urls.spotify,
          metadata.album.images[0].url,
          metadata.album.uri
        )

        setSong(song)
      } else {
        const isPlaying = currentPlayResponse.data.is_playing
        setPlaying(isPlaying)

        const recentlyPlayedResponse = await axios.get(
          'https://api.spotify.com/v1/me/player/recently-played',
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              'Content-type': 'application/json',
            },
          }
        )

        const metadata = recentlyPlayedResponse.data.items[0].track

        const song = insertSong(
          metadata.artists[0].name,
          metadata.artists[0].uri,
          metadata.name,
          metadata.external_urls.spotify,
          metadata.album.images[0].url,
          metadata.album.uri
        )

        setSong(song)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPlayingStatus()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      getPlayingStatus()
    }, 1000)
    return () => clearInterval(interval)
  })

  return (
    <div className="flex items-center px-12 pt-12 pb-12 lg:px-36 xl:px-48 ">
      {error === false && (
        <div className="lg:flex xl:flex block justify-between w-full">
          <div className="flex justify-center items-center">
            {playing ? (
              <div className="flex items-center justify-center pb-4">
                <div className="block">
                  <Image
                    src={currently}
                    alt="currently"
                    width={450}
                    height={200}
                  />
                  <Image src={play} alt="play" width={450} height={200} />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center pb-4">
                <div className="block">
                  <div className="flex justify-center items-center">
                    <Image src={last} alt="last" width={350} height={200} />
                  </div>
                  <Image src={played} alt="played" width={450} height={200} />
                </div>
              </div>
            )}
          </div>
          <div className="block text-center lg:flex lg:flex-row-reverse lg:text-start xl:flex xl:flex-row-reverse xl:text-start items-center ease-linear duration-150 hover:scale-[1.05]">
            <div className="flex justify-center">
              <Link href={song.albumLink} target="_blank">
                <Image
                  priority={true}
                  src={song.albumImage}
                  width={350}
                  height={350}
                  alt="img"
                />
              </Link>
            </div>
            <div className="text-sm lg:text-base xl:text-base text-center">
                <Link href={song.songLink} target="_blank" className="hover:underline">
                    <TextInter>
                        {song.songName.length > 50 ? `${song.songName.substring(0, 50)}...` : song.songName}
                    </TextInter>
                </Link>
                <Link href={song.artistLink} target="_blank" className="hover:underline">
                    <TextInter>
                        {song.artistName.length > 50 ? `${song.artistName.substring(0, 50)}...` : song.artistName}
                    </TextInter>
                </Link>
            </div>
          </div>
        </div>
      )}
      {error}
      {<></>}
    </div>
  )
}
