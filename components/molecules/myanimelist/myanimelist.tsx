'use client';
import AnimeCard from '@/components/atoms/myanimelist-card/anime-card';
import MangaCard from '@/components/atoms/myanimelist-card/manga-card';
import {animeData, mangaData} from '@/types/animanga-data';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Icon } from '@iconify/react';

export default function MyAnimelist() {
    const username = 'coneundeur';
    const [anime, setAnime] = useState<animeData>({
        date: '',
        status: '',
        episodes_seen: 0,
        title: '',
        image: '',
        url: ''
    });
    const [manga, setManga] = useState<mangaData>({
        date: '',
        status: '',
        chapters_read: 0,
        title: '',
        image: '',
        url: ''
    });

    const getAnimanga = async () => {
        try {
            const response = await axios.get(`https://api.jikan.moe/v4/users/${username}/userupdates`);
            console.log(response.data);
            console.log('teesss');

            const animeResponse = response.data.data.anime[0];
            const mangaResponse = response.data.data.manga[0];

            const anime = {
                date: animeResponse.date,
                status: animeResponse.status,
                episodes_seen: animeResponse.episodes_seen,
                title: animeResponse.entry.title,
                image: animeResponse.entry.images.jpg.large_image_url,
                url: animeResponse.entry.url
            };
            setAnime(anime);
            console.log(anime);

            const manga = {
                date: mangaResponse.date,
                status: mangaResponse.status,
                chapters_read: mangaResponse.chapters_read,
                title: mangaResponse.entry.title,
                image: mangaResponse.entry.images.jpg.large_image_url,
                url: mangaResponse.entry.url
            };

            setManga(manga);
            console.log(manga);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAnimanga();
    }, []);
    return (
        <div>
            <MangaCard date={manga.date} status={manga.status} chapters_read={manga.chapters_read} title={manga.title} url={manga.url} image={manga.image}/>
            <AnimeCard date={anime.date} status={anime.status} episodes_seen={anime.episodes_seen} title={anime.title} url={anime.url} image={anime.image} />
            <Icon icon="simple-icons:myanimelist" style={{width:'56', height:'56'}} className=' hover:text-[#2e51a2] active:text-[#2e51a2] ease-in duration-75' />
        </div>
    );
}
