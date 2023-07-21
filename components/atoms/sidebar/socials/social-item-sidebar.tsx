import {SocialMediaItem} from '@/components/constants/social-media/social-media-item';
import Link from 'next/link';
import React from 'react';

export default function SocialItemSidebar({data, children}: {data: SocialMediaItem; children: React.ReactNode}) {
    return (
        <>
            <Link href={data.href}>
                <button className="pe-4">{children}</button>
            </Link>
        </>
    );
}
