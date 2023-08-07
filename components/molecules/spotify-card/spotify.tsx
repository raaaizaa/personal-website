'use client'

import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { songMetadata } from '@/types/spotify-song-metadata'
import Image from 'next/image'
import Link from 'next/link'
import { TextInter } from '@/components/atoms/typography/text-inter/text-inter'
import { TextP5 } from '@/components/atoms/typography/text-p5/text-p5'

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

      const currentlyPlayingResponse = await axios.get(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            'Content-type': 'application/json',
          },
        }
      )

      if (currentlyPlayingResponse.status === USER_IS_CURRENTLY_PLAYING) {
        const isPlaying = currentlyPlayingResponse.data.is_playing
        setPlaying(isPlaying)
        setError(false)

        const metadata = currentlyPlayingResponse.data.item

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
        const isPlaying = currentlyPlayingResponse.data.is_playing
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
          metadata.album.images[0].url,
          metadata.name,
          metadata.album.uri,
          metadata.external_urls.spotify
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

  return (
    <div className="block justify-center items-center space-y-4 hover:scale-105 ease-in-out duration-75">
      {playing == true && error == false}
      {
        <div>
          <div className="flex text-sm md:text-base lg:text-xl justify-center gap-2">
            <TextP5 className="text-[#ffb800] text-4xl xl:text-5xl text-center">
              {playing ? 'Currently Listening to: ' : 'Last Played: '}
            </TextP5>
          </div>
          <div className="flex justify-center">
            <Link href={song.albumLink} target="_blank">
              <Image
                priority={true}
                src={song.albumImage}
                width={400}
                height={400}
                alt="img"
              />
            </Link>
          </div>
          <div className="text-sm lg:text-base xl:text-base text-center">
            <Link
              href={song.songLink}
              target="_blank"
              className="hover:underline">
              <TextInter>
                {song.songName.length > 50
                  ? `${song.songName.substring(0, 50)}...`
                  : song.songName}
              </TextInter>
            </Link>
            <Link
              href={song.artistLink}
              target="_blank"
              className="hover:underline">
              <TextInter>
                {song.artistName.length > 50
                  ? `${song.artistName.substring(0, 50)}...`
                  : song.artistName}
              </TextInter>
            </Link>
          </div>
        </div>
      }

      {error == true}
      {<div></div>}
    </div>
  )
}
