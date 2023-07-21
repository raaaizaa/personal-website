'use client';

import SocialItem from '@/components/atoms/navigation-bar/socials/social-item';
import {SocialMediaItem, socialMediaItem} from '@/components/constants/social-media/social-media-item';
import {usePathname} from 'next/navigation';
import React from 'react';

export default function SocialLinks({}: {data: SocialMediaItem}) {
    const pathName = usePathname();

    return (
        <div className="hidden md:block">
            {socialMediaItem.map((data, index) => {
                const Icon = data.icon;
                return (
                    <SocialItem key={index} data={data}>
                        <Icon style={{color: 'white', height: '32px', width: '32px'}} />
                    </SocialItem>
                );
            })}
        </div>
    );
}
