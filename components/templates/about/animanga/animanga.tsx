'use client'

import MyAnimelistUpdate from '@/components/molecules/myanimelist/myanimelist-update'
import React from 'react'
import { Icon } from '@iconify/react'
import { TextInter } from '@/components/atoms/typography/text-inter/text-inter'
import Link from 'next/link'
import { TextHumanErrorFlag } from '@/components/atoms/typography/text-human-error/text-human-error'
import MyAnimeListFavorite from '@/components/molecules/myanimelist/myanimelist-favorite'

export default function Animanga() {
  return (
    <div className="bg-[#FFB800] lg:px-48 lg:py-24 px-12 py-16 space-y-12">
      <TextHumanErrorFlag className="text-black text-3xl lg:text-4xl xl:text-5xl">
        Animanga
      </TextHumanErrorFlag>
      <MyAnimeListFavorite />
      <MyAnimelistUpdate />
      <div className="flex justify-end gap-4 items-center">
        <TextInter className="text-black text-sm lg:text-base xl:text-base">
          Connect:
        </TextInter>
        <Link href="https://myanimelist.net/profile/coneundeur" target="_blank">
          <Icon
            icon="simple-icons:myanimelist"
            style={{ width: '56', height: '56' }}
            className=" text-black hover:text-[#2e51a2] active:text-[#2e51a2] ease-in duration-100"
          />
        </Link>
      </div>
    </div>
  )
}
