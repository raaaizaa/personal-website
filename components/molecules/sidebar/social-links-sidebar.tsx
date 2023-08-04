import SocialItemSidebar from '@/components/atoms/sidebar/socials/social-item-sidebar';
import {SocialMediaItem, socialMediaItem} from '@/components/constants/social-media/social-media-item';
import React from 'react';

interface sidebarProps{
    data: SocialMediaItem[];
}

export default function SocialLinksSidebar({data}: sidebarProps) {
    return (
        <div className="flex gap-4">
            {socialMediaItem.map((data, index) => {
                const Icon = data.icon;
                return (
                    <div className="" key={index}>
                        <SocialItemSidebar data={data}>
                            <Icon style={{color: 'white', height: '32px', width: '32px'}} />
                        </SocialItemSidebar>
                    </div>
                );
            })}
        </div>
    );
}
