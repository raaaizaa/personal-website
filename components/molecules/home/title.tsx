'use client';
import React from 'react';
import {TextCutout} from '@/components/atoms/typography/text-cutout/text-cutout';
import {useEffect} from 'react';
import '@/styles/globals.css';
import { TextInter } from '@/components/atoms/typography/text-inter/text-inter';
import { TextP5 } from '@/components/atoms/typography/text-p5/text-p5';
import { TextTooDrunk } from '@/components/atoms/typography/text-linotype/text-linotype';

export default function Title() {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);
    return (
        <div className='text-center lg:text-start'>
            <TextP5 className="text-2xl xl:text-5xl py-4">HelLo! my name is</TextP5>
            <TextTooDrunk className='text-6xl text-[#FFB800]'>raiza rahman</TextTooDrunk>
                <div className=' xl:py-0'>
                    <TextP5 className='text-xl xl:text-5xl py-2'>An uNDergradUATE COMPUTER SCIENCE</TextP5>
                </div>
            <TextP5 className="text-xl xl:text-5xl py-2">STuDENT At Bina NusanTara UniversitY</TextP5>
        </div>
    );
}
