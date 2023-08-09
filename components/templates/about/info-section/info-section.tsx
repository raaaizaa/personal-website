import { TextHumanErrorFlag } from '@/components/atoms/typography/text-human-error/text-human-error'
import { TextInter } from '@/components/atoms/typography/text-inter/text-inter'
import portrait from '@/public/images/portrait.png'
import Image from 'next/image'
import React from 'react'

export default function InfoSection() {
  return (
    <div className="bg-[#FFB800] px-12 pt-24 pb-12 lg:p-36 xl:p-48 space-y-4">
      <div className="space-y-12">
        <TextHumanErrorFlag className="text-black text-3xl lg:text-4xl xl:text-5xl">
          About...
        </TextHumanErrorFlag>
        <div className=" lg:flex xl:flex items-center justify-center">
          <Image src={portrait} width={400} height={400} alt="portrait" />
          <div className="flex justify-center">
            <TextInter className="text-black text-base lg:text-xl xl:text-2xl text-justify">
              INTJ-Leo yang sekarang lagi jadi mahasiswa informatika di Binus
              yang bisa dibilang lagi krisis identitas...? mau nyebut kuliah di
              Binus Bandung tapi ngampusnya malah di Binus Jakarta. Lagi
              interest sama dunia Frontend tapi di perkuliahan fokusnya ke
              Mobile, sampe bingung mau yang mana yang difokusin. Website ini
              jadi bentuk kegabutan ngotak-ngatik ngoding sekalian jadi wadah
              buat ngeekspresiin interest diri sendiri dan juga mungkin
              kedepannya bakal jadi website portfolio juga.
            </TextInter>
          </div>
        </div>
      </div>
    </div>
  )
}
