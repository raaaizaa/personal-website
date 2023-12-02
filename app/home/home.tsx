import { socialMediaItem } from '@/components/constants/social-media/social-media-item'
import Link from 'next/link'
import React from 'react'

export default function Homepage() {
  return (
    <div className='flex items-center h-[calc(100vh-72px)] w-full justify-center lg:justify-start xl:justify-start'>
        <div className='flex flex-col justify-evenly h-full'>
            <div className='text-center lg:text-start xl:text-start space-y-4'>
                <p className='text-4xl lg:text-6xl xl:text-6xl'>Hi, my name is <span className='font-bold'> Raiza Rahman</span></p>
                <div>
                    <p className='text-2xl lg:text-4xl xl:text-4xl'>Currently studying Computer Science at Bina Nusantara University</p>
                    <p className='text-base lg:text-2xl xl:text-2xl'>focusing on mobile app development and have a strong interest in front-end development.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row xl:flex-row items-center justify-center lg:justify-start xl:justify-start lg:space-x-8 xl:space-x-8'>
                <p className='lg:text-xl text-xl'>Connect me on: </p>
                <div className='flex space-x-2'>
                {socialMediaItem.map((data, index) => {
                    const Icon = data.icon
                    return(
                        <Link key={index} href={data.href} target='__blank'>
                            <Icon style={{height: '36px', width: '36px'}}/>
                        </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
