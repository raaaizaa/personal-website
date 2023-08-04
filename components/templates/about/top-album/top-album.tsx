import { TextInter } from '@/components/atoms/typography/text-inter/text-inter';
import { TextTooDrunk } from '@/components/atoms/typography/text-linotype/text-linotype';
import LastFm from '@/components/molecules/lastfm-card/lastfm';
import Link from 'next/link';
import React from 'react';
import { FaSpotify, FaLastfm } from 'react-icons/fa';

export default function TopAlbum() {
    return (
        <div className="lg:px-48 lg:py-24 px-12 py-16 space-y-12" id='current-obsession' style={{scrollBehavior:'smooth'}}>
            <TextTooDrunk className="text-[#ffb800] text-3xl lg:text-4xl xl:text-5xl">Current obsession</TextTooDrunk>
            <TextInter className='text-base lg:text-2xl xl:text-3xl'>Here's my top listened album in last 7 days:</TextInter>
            <div>
                <LastFm />
            </div>
            <div className='flex justify-end gap-4 items-center'>
                <TextInter className='text-sm lg:text-base xl:text-base'>Connect: </TextInter>
                <Link href='https://open.spotify.com/user/raaaizaa' target="_blank">
                <FaSpotify style={{width:'40', height:'40'}} className='hover:fill-[#1DB954] active:fill-[#1DB954] ease-in duration-75'/>
                </Link>
                <Link href='https://www.last.fm/user/Raaizar' target="_blank">
                    <FaLastfm style={{width:'40', height:'40'}} className='hover:fill-[#c3000d] active:fill-[#c3000d] ease-in duration-75'/>
                </Link>
            </div>
        </div>
    );
}
