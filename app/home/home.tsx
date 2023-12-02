import Reveal from '@/components/animations/reveal'
import { socialMediaItem } from '@/components/constants/social-media/social-media-item'
import Link from 'next/link'
import React from 'react'

export default function Homepage() {
    return (
        <Reveal>
            <div className='flex items-center h-[calc(100vh-72px)] w-full justify-center lg:justify-start xl:justify-start'>
                <div className='flex flex-col justify-evenly h-full w-full'>
                    <div className='text-center lg:text-start xl:text-start space-y-0 lg:space-y-4 xl:space-y-4'>
                        <p className='antialiased text-4xl lg:text-6xl xl:text-6xl'>Hi, my name is <span className='font-bold'> Raiza Rahman</span></p>
                        <p className='antialiased text-2xl lg:text-4xl xl:text-4xl'>Currently studying Computer Science at Bina Nusantara University</p>
                        <p className='antialiased text-xl lg:text-2xl xl:text-2xl'>I have a strong interest with Front-end Development!</p>
                    </div>
                    <div className='flex flex-col lg:flex-row xl:flex-row items-center justify-center lg:justify-start xl:justify-start space-y-2 lg:space-y-0 xl:space-y-0 lg:space-x-8 xl:space-x-8'>
                        <p className='antialiased text-2xl lg:text-3xl xl:text-3xl font-bold'>Get in touch: </p>
                        <div className='flex space-x-2'>
                            {socialMediaItem.map((data, index) => {
                                const Icon = data.icon
                                return (
                                    <Link key={index} href={data.href} target='__blank'>
                                        <Icon style={{ height: '36px', width: '36px' }} />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    )
}
