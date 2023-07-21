import { NavbarItem } from '@/components/constants/navigation-bar-item/navbar-item'
import Link from 'next/link'
import React from 'react'
import { TextPoppins } from '../../typography/text-poppins/text-poppins'

export default function SidebarMenuItem({data}: {data:NavbarItem}) {
  return (
    <div className='flex'>
        <Link href={data.href}>
            <button className='hover:underline text-white ease-in duration-100 py-2'>
                <TextPoppins className='text-white text-3xl'>{data.name}</TextPoppins>
            </button>
        </Link>
    </div>
  )
}
