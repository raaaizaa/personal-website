import { NavbarItem } from '@/components/constants/navigation-bar-item/navbar-item'
import Link from 'next/link'
import React from 'react'
import { TextInter } from '../typography/text-inter/text-inter'

export default function SidebarMenuItem({data}: {data:NavbarItem}) {
  return (
    <div className='flex'>
        <Link href={data.href}>
            <button className='hover:underline text-white ease-in duration-100'>
                <TextInter className='text-white text-2xl'>{data.name}</TextInter>
            </button>
        </Link>
    </div>
  )
}
