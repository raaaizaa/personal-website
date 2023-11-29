'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import {
  NavbarItem,
  navbarItem,
} from '@/components/constants/navigation-bar-item/navbar-item'
import NavigationBarMenuItem from '@/components/atoms/navigation-bar/menu/navigation-bar-menu-item'

interface navbarProps {
  data: NavbarItem[]
}

export default function NavigationBarMenu({ data }: navbarProps) {
  const pathName = usePathname()

  return (
    <div className="hidden lg:block">
      {navbarItem.map((data, index) => {
        return (
          <NavigationBarMenuItem
            key={index}
            data={data}
            active={data.href.split('/')[2] === pathName.split('/')[2]}
          />
        )
      })}
    </div>
  )
}
