import SidebarMenuItem from '@/components/atoms/navigation-bar/menu/sidebar-menu-item';
import { TextMontserrat } from '@/components/atoms/typography/text-montserrat/text-montserrat';
import { NavbarItem, navbarItem } from '@/components/constants/navigation-bar-item/navbar-item';
import { SocialMediaItem, socialMediaItem } from '@/components/constants/social-media/social-media-item';
import { usePathname } from 'next/navigation';
import React from 'react';
import SocialLinks from './social-links';

interface sidebarProps{
    menuItem: NavbarItem
    socialItem: SocialMediaItem
    isOpen: boolean
    onClose: () => void;
}

export default function Sidebar({menuItem, socialItem, isOpen, onClose}: sidebarProps) {
    const pathName = usePathname();

    return (
        <div className='fixed left-0 top-0 w-full h-screen bg-black/50' >
            <div className='bg-dark w-[75%] h-screen fixed top-0 right-0 p-16'>
                <TextMontserrat className='text-white font-bold text-4xl'>Menu</TextMontserrat>
                <div className='py-8'>
                    {navbarItem.map((menuItem, index) => {
                        return(
                            <SidebarMenuItem key={index} data={menuItem} />
                        )
                    })}
                </div>
                <TextMontserrat className='text-white font-bold text-4xl'>Connect</TextMontserrat>
                <div className='py-8'>
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
}
