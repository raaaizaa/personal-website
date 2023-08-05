import Link from 'next/link';
import React from 'react';
import {NavbarItem} from '@/components/constants/navigation-bar-item/navbar-item';
import {cn} from '@/lib/utils';
import {TextCutout} from '../../typography/text-cutout/text-cutout';

export default function NavigationBarMenuItem({data, active}: {data: NavbarItem; active: boolean}) {
    return (
        <Link href={data.href}>
            <button
                className={cn('hover:bg-[#2A2A2A] hover:ease-in-out hover:duration-100 lg:px-4 xl:px-5 h-[64px]',active)}>
                <TextCutout className="text-2xl text-[#FFB800] uppercase">{data.name}</TextCutout>
            </button>
        </Link>
    );
}
