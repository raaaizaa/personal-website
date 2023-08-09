import React from 'react'
import '@/styles/globals.css'
import { TextP5 } from '@/components/atoms/typography/text-p5/text-p5'
import { TextTooDrunk } from '@/components/atoms/typography/text-linotype/text-linotype'
import {
  TextHumanError,
  TextHumanErrorFlag,
} from '@/components/atoms/typography/text-human-error/text-human-error'

export default function Title() {
  return (
    <div className="text-center lg:text-start">
      <TextHumanError className="text-3xl lg:text-4xl xl:text-5xl py-2 lg:py-4 xl:py-4">
        HelLo! my name is
      </TextHumanError>
      <TextHumanErrorFlag className="text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-[#FFB800]">
        Raiza Rahman
      </TextHumanErrorFlag>
    </div>
  )
}
