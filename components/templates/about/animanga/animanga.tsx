import { TextTooDrunk } from '@/components/atoms/typography/text-linotype/text-linotype'
import MyAnimelist from '@/components/molecules/myanimelist/myanimelist'
import React from 'react'

export default function Animanga() {
  return (
    <div className='bg-[#FFB800] px-12 pt-24 pb-12 lg:p-36 xl:p-48 space-y-4'>
        <TextTooDrunk className='text-black text-3xl lg:text-4xl xl:text-5xl'>Animanga</TextTooDrunk>
        <MyAnimelist />
    </div>
  )
}
