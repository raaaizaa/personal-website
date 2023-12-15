import Reveal from '@/components/animations/reveal'
import { socialMediaItem } from '@/components/constants/social-media/social-media-item'
import Link from 'next/link'
import React from 'react'

export default function Homepage() {

    return (
        <Reveal>
            <div className='flex items-center h-[calc(100vh-72px)] w-full justify-center lg:justify-start xl:justify-start' >
                <div className='flex xl:flex-row lg:flex-row flex-col justify-center lg:justify-between xl:justify-between mx-6 lg:mx-0 xl:mx-0 items-center h-full w-screen'>
                    {/* <div className='text-center lg:text-start xl:text-start space-y-0 lg:space-y-4 xl:space-y-4 items-center'>
                        <p className='tracking-tight leading-none text-[72px] md:text-[112px] lg:text-[156px] xl:text-[196px]'>Raiza</p>
                        <p className='tracking-tight leading-none text-[72px] md:text-[112px] lg:text-[156px] xl:text-[196px]'>Rahman</p>
                    </div>
                    <div className='flex flex-col lg:flex-row xl:flex-row items-center justify-center lg:justify-start xl:justify-start space-y-2 lg:space-y-0 xl:space-y-0 lg:space-x-8 xl:space-x-8'>
                        <p className='antialiased text-2xl lg:text-3xl xl:text-3xl'>Get in touch: </p>
                        <div className='flex space-x-2'>
                            {socialMediaItem.map((data, index) => {
                                const Icon = data.icon
                                return (
                                    <Link key={index} href={data.href} target='__blank'>
                                        <div className='p-1 hover:bg-slate-400 hover:rounded-xl duration-100 ease-in-out'>
                                            <Icon style={{ height: '36px', width: '36px' }} />
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div> */}
                    <div className='w-full text-start space-y-0 lg:space-y-4 xl:space-y-4 items-center'>
                        <p className='font-bold tracking-tight leading-none text-[72px] md:text-[112px] lg:text-[156px] xl:text-[196px] bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent'>Raiza</p>
                        <p className='font-bold tracking-tight leading-none text-[72px] md:text-[112px] lg:text-[156px] xl:text-[196px] bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent'>Rahman</p>
                    </div>
                    <div className='mt-8'>
                        <p className='leading-relaxed font-thin'>An undergraduate Computer Science student at Bina Nusantara University who enjoys focusing on the client side in web development and turning designs into code. Also mobile development, a little bit...</p>
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
