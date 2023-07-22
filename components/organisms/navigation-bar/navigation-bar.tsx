'use client';

import SidebarButton from '@/components/atoms/sidebar/sidebar-button';
import {TextMontserrat} from '@/components/atoms/typography/text-montserrat/text-montserrat';
import NavigationBarMenu from '@/components/molecules/navigation-bar/navigation-bar-menu';
import Sidebar from '@/components/molecules/sidebar/sidebar';
import SocialLinks from '@/components/molecules/navigation-bar/social-links';
import React, {useState} from 'react';
import {TextCutout} from '@/components/atoms/typography/text-cutout/text-cutout';

export default function NavigationBar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <>
            <div className="bg-yellow-accent justify-end lg:justify-between flex h-[64px] items-center px-4 md:px-12 lg:px-20 xl:px-32 transition-all">
                <NavigationBarMenu />
                <SocialLinks />
                <div className="flex lg:hidden">
                    <SidebarButton onClick={handleNav} />
                </div>
            </div>
            <Sidebar isOpen={nav} onClose={handleNav} />
        </>
    );
}
