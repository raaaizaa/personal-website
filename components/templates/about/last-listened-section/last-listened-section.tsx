import {TextCutout} from '@/components/atoms/typography/text-cutout/text-cutout';
import Spotify from '@/components/molecules/spotify-card/spotify';
import React from 'react';

export default function LastListenedSection() {
    return (
        <div className="py-12">
            <TextCutout className="text-[#ffb800] text-4xl">Last listened to...</TextCutout>
            <div className='flex justify-end'>
            </div>
        </div>
    );
}
