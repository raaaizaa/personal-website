import React from 'react';
import {TextMontserrat} from '@/components/atoms/typography/text-montserrat/text-montserrat';
import TypewriterComponent from 'typewriter-effect';

export default function Title() {
    return (
        <>
            <TextMontserrat className="text-5xl font-bold leading-snug">Hi!</TextMontserrat>
            <TextMontserrat className="text-4xl leading-normal">My name is Raiza</TextMontserrat>
            <TextMontserrat className="text-2xl leading-normal">
                Currently studying as an Undergraduated Computer
            </TextMontserrat>
            <div className='font-montserrat text-3xl'>
                <TypewriterComponent
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        strings: ['Saiyans', 'Science'],

                    }}
                />
            </div>
            <TextMontserrat className="text-2xl leading-normal">Student at Binus University</TextMontserrat>
        </>
    );
}
