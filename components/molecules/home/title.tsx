'use client';
import React from 'react';
import {TextMontserrat} from '@/components/atoms/typography/text-montserrat/text-montserrat';
import TypewriterComponent from 'typewriter-effect';
import {TextCutout} from '@/components/atoms/typography/text-cutout/text-cutout';
import {TextFatface} from '@/components/atoms/typography/text-fatface/text-fatface';
import {useEffect} from 'react';
import '@/styles/globals.css';

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
            <TextFatface className="text-2xl xl:text-4xl py-4">Hello! my name is</TextFatface>
            <TextCutout className="text-5xl xl:text-6xl text-[#ffb800] py-2">RaizA rAhMAN</TextCutout>
            <div className="block xl:flex py-0 xl:py-2 items-center gap-2">
                <TextFatface className="text-xl xl:text-3xl py-2 xl:py-0">an Undergraduate</TextFatface>
                <div className='py-2 xl:py-0'>
                    <TypewriterComponent
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: ['Computer Saiyans Student', 'Computer Science Student'],
                            wrapperClassName: 'typewriter-text'
                        }}
                    />
                </div>
            </div>
            <TextFatface className="text-xl xl:text-4xl py-2">at Bina Nusantara University</TextFatface>
        </div>
    );
}
