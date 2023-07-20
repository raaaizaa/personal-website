import { TextMontserrat } from '@/components/atoms/typography/text-montserrat/text-montserrat'
import NavigationBarMenu from '@/components/molecules/navigation-bar/navigation-bar-menu'
import SocialLinks from '@/components/molecules/navigation-bar/social-links'
import React from 'react'

export default function NavigationBar() {
  return (
    <div className="bg-lighter-dark justify-between flex h-[64px] items-center">
      <TextMontserrat className='text-white font-bold text-2xl p-4'>blablablabla</TextMontserrat>
      <NavigationBarMenu />
      <SocialLinks />
    </div>
  )
}
