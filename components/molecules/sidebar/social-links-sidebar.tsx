import SocialItemSidebar from '@/components/atoms/sidebar/socials/social-item-sidebar';
import {SocialMediaItem, socialMediaItem} from '@/components/constants/social-media/social-media-item';
import React from 'react';

interface sidebarProps{
    data: SocialMediaItem[];
}

export default function SocialLinksSidebar({data}: sidebarProps) {
    return (
        <div className="px-[-64px]">
            {socialMediaItem.map((data, index) => {
                const Icon = data.icon;
                return (
                    <div className="inline-flex gap-4" key={index}>
                        <SocialItemSidebar  data={data}>
                            <Icon style={{color: 'white', height: '48px', width: '48px'}} />
                        </SocialItemSidebar>
                    </div>
                );
            })}
        </div>
    );
}
