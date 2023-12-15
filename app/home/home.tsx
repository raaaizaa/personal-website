import Reveal from '@/components/animations/reveal'
import { socialMediaItem } from '@/components/constants/social-media/social-media-item'
import Link from 'next/link'
import React from 'react'

export default function Homepage() {

    return (
        <Reveal>
            <div className='flex items-center h-[calc(100vh-72px)] w-full justify-center lg:justify-start xl:justify-start' >
                <div className='flex xl:flex-row lg:flex-row flex-col justify-center lg:justify-between xl:justify-between mx-6 lg:mx-0 xl:mx-0 items-center h-full w-screen'>
                    <div className='w-full text-start space-y-0 lg:space-y-4 xl:space-y-4 items-center'>
                        <p className='bg-clip-text text-transparent font-bold tracking-tight leading-none text-[72px] md:text-[112px] lg:text-[156px] xl:text-[196px] animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500'>Raiza</p>
                        <p className='bg-clip-text text-transparent  font-bold tracking-tight leading-none text-[72px] md:text-[112px] lg:text-[156px] xl:text-[196px] animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500'>Rahman</p>
                    </div>

                    <div className='mt-8'>
                        <p className='leading-relaxed font-thin'>An undergraduate Computer Science student at Bina Nusantara University who enjoys focusing on the client side in web development, turning designs into code. Also into mobile development, a little bit...</p>
                        <div className='flex space-x-2 mt-8'>
                            {socialMediaItem.map((data, index) => {
                                const Icon = data.icon
                                return (
                                    <Link key={index} href={data.href} target='__blank'>
                                        <div className='hover:scale-110 duration-150 ease-in-out'>
                                            <Icon style={{ height: '36px', width: '36px' }} />
                                        </div>
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
