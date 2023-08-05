import {TextInter} from '@/components/atoms/typography/text-inter/text-inter';
import {TextTooDrunk} from '@/components/atoms/typography/text-linotype/text-linotype';
import LastFm from '@/components/molecules/lastfm-card/lastfm';
import Link from 'next/link';
import React from 'react';
import {FaSpotify, FaLastfm} from 'react-icons/fa';

export default function TopAlbum() {
    return (
        <div
            className="lg:px-48 lg:py-24 px-12 py-16 space-y-12"
            id="current-obsession"
            style={{scrollBehavior: 'smooth'}}
        >
            <TextTooDrunk className="text-[#ffb800] text-3xl lg:text-4xl xl:text-5xl">Current obsession</TextTooDrunk>
            <TextInter className="text-base lg:text-xl xl:text-2xl text-justify">
                Akhir-akhir ini (atau lebih tepatnya tujuh hari terakhir) lagi obsessed sama album-album yang ada
                disini. Sebenernya dipikir-pikir aneh juga ya yang diliat satu album padahal bisa aja dari album itu
                cuman ngedenger satu-dua track doang. Disclaimer juga jumlah scrobble-nya bisa juga gak akurat karena
                entah kenapa Last.fm kadang suka ngaco.
            </TextInter>
            <div>
                <LastFm />
            </div>
            <div className="flex justify-end gap-4 items-center">
                <Link href="https://open.spotify.com/user/raaaizaa" target="_blank">
                    <FaSpotify
                        style={{width: '40', height: '40'}}
                        className="hover:fill-[#1DB954] active:fill-[#1DB954] ease-in duration-75"
                    />
                </Link>
                <Link href="https://www.last.fm/user/Raaizar" target="_blank">
                    <FaLastfm
                        style={{width: '40', height: '40'}}
                        className="hover:fill-[#c3000d] active:fill-[#c3000d] ease-in duration-75"
                    />
                </Link>
            </div>
        </div>
    );
}
