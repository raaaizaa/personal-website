import React from 'react'
import '@/styles/globals.css'
import Image from 'next/image'
import hello from '@/public/images/homepage/title/hello.png'
import my from '@/public/images/homepage/title/my.png'
import name from '@/public/images/homepage/title/name.png'
import is from '@/public/images/homepage/title/is.png'
import raiza from '@/public/images/homepage/title/raiza.png'

export default function Title() {
  return (
    <div className="justify-center lg:justify-start xl:justify-start items-center">
      <div className="flex justify-center lg:justify-start xl:justify-start">
        <Image src={hello} alt="hello" />
      </div>
      <div className="flex justify-center lg:justify-start xl:justify-start items-center">
        <Image src={my} alt="my" />
        <Image src={name} alt="name" />
      </div>
      <div className="flex justify-center lg:justify-start xl:justify-start items-center">
        <Image src={is} alt="is" />
        <Image src={raiza} alt="raiza" />
      </div>
    </div>
  )
}
