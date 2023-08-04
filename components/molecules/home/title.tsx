'use client';
import React from 'react';
import '@/styles/globals.css';
import { TextP5 } from '@/components/atoms/typography/text-p5/text-p5';
import { TextTooDrunk } from '@/components/atoms/typography/text-linotype/text-linotype';

export default function Title() {
    return (
        <div className='text-center lg:text-start'>
            <TextP5 className="text-3xl lg:text-4xl xl:text-5xl py-2 lg:py-4 xl:py-4">HelLo! my name is</TextP5>
            <TextTooDrunk className='text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-[#FFB800]'>raiza rahman</TextTooDrunk>
            <div className='pb-12 pt-2 lg:pt-4 lg:pb-0 xl:pb-0 xl:pt-4'>
                <TextP5 className='text-2xl lg:text-4xl xl:text-5xl'>an undergraduate computer science</TextP5>
                <TextP5 className='text-2xl lg:text-4xl xl:text-5xl'>student at bina nusantara university</TextP5>
            </div>
        </div>
    );
}
