import SocialItem from '@/components/atoms/navigation-bar/socials/social-item';
import SocialItemSidebar from '@/components/atoms/sidebar/socials/social-item-sidebar';
import {SocialMediaItem, socialMediaItem} from '@/components/constants/social-media/social-media-item';
import React from 'react';

export default function SocialLinksSidebar({data}: {data: SocialMediaItem}) {
    return (
        <div className="px-[-64px]">
            {socialMediaItem.map((data, index) => {
                const Icon = data.icon;
                return (
                    <div className='inline-flex gap-4'>
                        <SocialItemSidebar key={index} data={data}>
                            <Icon style={{color: 'white', height: '48px', width: '48px'}} />
                        </SocialItemSidebar>
                    </div>
                );
            })}
        </div>
    );
}
