'use client';

import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {songMetadata} from '@/types/spotify-song-metadata';
import Image from 'next/image';
import Link from 'next/link';
import {TextInter} from '@/components/atoms/typography/text-inter/text-inter';

export default function Spotify() {
    const [playing, setPlaying] = useState<boolean | null>(null);
    const [song, setSong] = useState<songMetadata>({
        artistName: '',
        artistLink: '',
        albumLink: '',
        songName: '',
        songLink: ''
    });

    const token = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString(
        'base64'
    );

    const getPlayingStatus = async () => {
        try {
            const accessTokenResponse = await axios.post(
                'https://accounts.spotify.com/api/token',
                `grant_type=refresh_token&refresh_token=${process.env.SPOTIFY_REFRESH_TOKEN}`,
                {
                    headers: {
                        Authorization: `Basic ${token}`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            );

            const accessToken = accessTokenResponse.data.access_token;

            const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-type': 'application/json'
                }
            });

            if (response.status === 200) {
                const isPlaying = response.data.is_playing;
                setPlaying(isPlaying);

                if (isPlaying) {
                    const song = {
                        artistName: response.data.item.artists[0].name,
                        artistLink: response.data.item.artists[0].external_urls.spotify,
                        songName: response.data.item.name,
                        songLink: response.data.item.external_urls.spotify,
                        albumLink: response.data.item.album.images[0].url
                    };
                    setSong(song);
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    getPlayingStatus();

    return (
        <div className="block justify-center items-center space-y-4">
            {playing !== null}
            {
                <div className="flex text-sm md:text-base lg:text-xl justify-center gap-2">
                    <TextInter>{playing ? 'Currently Listening to: ' : 'Last Played: '}</TextInter>
                    <Link href={song.songLink} className="hover:underline">
                        <TextInter>
                            {song.songName.length > 25 ? `${song.songName.substring(0, 25)}...` : song.songName}
                        </TextInter>
                    </Link>
                </div>
            }
            <div className="flex justify-center">
                <Image priority={true} src={song.albumLink} width={400} height={400} alt="img" />
            </div>
        </div>
    );
}
