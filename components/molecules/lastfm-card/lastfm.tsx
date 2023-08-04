'use client';
import {albumData} from '@/types/lastfm-album-data';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import LastFmCard from '@/components/atoms/lastfm-card/lastfm-card';

export default function LastFm() {
    const baseURL = 'https://ws.audioscrobbler.com/2.0';

    const [album, setAlbum] = useState<albumData[]>([]);

    const getTopAlbum = async () => {
        try {
            const response = await axios.get(
                `${baseURL}?method=user.gettopalbums&user=${process.env.LASTFM_USERNAME}&api_key=${process.env.LASTFM_API_KEY}&format=json&period=${process.env.LASTFM_PERIOD}`
            );

            const topAlbum = response.data.topalbums.album;
            const albumDataArray: albumData[] = topAlbum.slice(0, 10).map((album: any) => ({
                album: {
                    name: album.name,
                    artist: album.artist.name,
                    playcount: album.playcount,
                    image: album.image[3]['#text'],
                    url: album.url
                }
            }));
            setAlbum(albumDataArray);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getTopAlbum();
    }, []);

    return (
        <div className="grid md:grid-cols-5 grid-rows-2 grid-cols-2 gap-4">
            {album.map((album) => (
                <LastFmCard key={album.album.name} name={album.album.name} artist={album.album.artist} playcount={album.album.playcount} image={album.album.image} url={album.album.url}/>
            ))}
        </div>
    );
}
