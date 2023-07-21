'use client';

import SidebarButton from '@/components/atoms/sidebar/sidebar-button';
import {TextMontserrat} from '@/components/atoms/typography/text-montserrat/text-montserrat';
import NavigationBarMenu from '@/components/molecules/navigation-bar/navigation-bar-menu';
import Sidebar from '@/components/molecules/sidebar/sidebar';
import SocialLinks from '@/components/molecules/navigation-bar/social-links';
import React, {useState} from 'react';

export default function NavigationBar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <>
            <div className="bg-lighter-dark justify-between flex h-[64px] items-center">
                <TextMontserrat className="text-white font-bold text-2xl px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-4 transition-all">blablablabla</TextMontserrat>
                <NavigationBarMenu />
                <div className='flex px-4 md:px-12 lg:px-20 xl:px-32 transition-all'>
                    <SocialLinks />
                </div>
                <div className="block lg:hidden p-4 hover:bg-[#3a3a3a] hover:ease-in-out hover:duration-100 ">
                    <SidebarButton onClick={handleNav} />
                </div>
            </div>
            <Sidebar isOpen={nav} onClose={handleNav}/>
        </>
    );
}
