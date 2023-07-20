import Link from 'next/link'
import React from 'react'
import { NavbarItem } from '@/components/constants/navigation-bar-item/navbar-item'
import { TextMontserrat } from '../../typography/text-montserrat/text-montserrat'
import { cn } from '@/lib/utils';

export default function NavigationBarMenuItem({data, active}: {data:NavbarItem; active:boolean}) {
  return (
    <>
        <Link href={data.href}>
            <button className={cn('hover:bg-[#3a3a3a] px-8 h-[64px]', active)}>
                <TextMontserrat className='text-xl text-white font-bold'>{data.name}</TextMontserrat>
            </button>
        </Link>
    </>
  )
}
