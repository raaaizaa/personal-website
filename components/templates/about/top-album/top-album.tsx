import { TextHumanErrorFlag } from '@/components/atoms/typography/text-human-error/text-human-error'
import { TextInter } from '@/components/atoms/typography/text-inter/text-inter'
import { TextTooDrunk } from '@/components/atoms/typography/text-linotype/text-linotype'
import LastFm from '@/components/molecules/lastfm-card/lastfm'
import Link from 'next/link'
import React from 'react'
import { FaSpotify, FaLastfm } from 'react-icons/fa'

export default function TopAlbum() {
  return (
    <div
      className="lg:px-48 py-6 px-12 space-y-12"
      id="current-obsession"
      style={{ scrollBehavior: 'smooth' }}>
        
      <TextInter className="text-base lg:text-xl xl:text-2xl text-justify">
        Satu bulan terakhir ini lagi obsessed sama album-album yang ada disini:
      </TextInter>
      <div>
        <LastFm />
      </div>
      <div className="flex justify-end gap-4 items-center">
        <TextInter className='text-sm lg:text-base xl:text-base'>Connect:</TextInter>
        <Link href="https://open.spotify.com/user/raaaizaa" target="_blank">
          <FaSpotify
            style={{ width: '40', height: '40' }}
            className="hover:fill-[#1DB954] active:fill-[#1DB954] ease-in duration-75"
          />
        </Link>
        <Link href="https://www.last.fm/user/Raaizar" target="_blank">
          <FaLastfm
            style={{ width: '40', height: '40' }}
            className="hover:fill-[#c3000d] active:fill-[#c3000d] ease-in duration-75"
          />
        </Link>
      </div>
    </div>
  )
}
