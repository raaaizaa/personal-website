'use client'

import SidebarButton from '@/components/atoms/sidebar/sidebar-button'
import NavigationBarMenu from '@/components/molecules/navigation-bar/navigation-bar-menu'
import Sidebar from '@/components/molecules/sidebar/sidebar'
import SocialLinks from '@/components/molecules/navigation-bar/social-links'
import React, { useState } from 'react'
import { navbarItem } from '@/components/constants/navigation-bar-item/navbar-item'
import { socialMediaItem } from '@/components/constants/social-media/social-media-item'

export default function NavigationBar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <>
      <div className="fixed z-50 w-screen bg-lighter-dark justify-end lg:justify-between flex h-[64px] items-center px-4 md:px-12 lg:px-20 xl:px-32">
        <NavigationBarMenu data={navbarItem} />
        <SocialLinks data={socialMediaItem} />
        <div className="flex lg:hidden">
          <SidebarButton onClick={handleNav} />
        </div>
      </div>
      <Sidebar isOpen={nav} onClose={handleNav} />
    </>
  )
}
