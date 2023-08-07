'use client'

import SocialItem from '@/components/atoms/navigation-bar/socials/social-item'
import {
  SocialMediaItem,
  socialMediaItem,
} from '@/components/constants/social-media/social-media-item'
import React from 'react'

interface socialLinksProps {
  data: SocialMediaItem[]
}

export default function SocialLinks({ data }: socialLinksProps) {
  return (
    <div className="hidden lg:block">
      {socialMediaItem.map((data, index) => {
        const Icon = data.icon
        return (
          <SocialItem key={index} data={data}>
            <Icon style={{ color: 'white', height: '32px', width: '32px' }} />
          </SocialItem>
        )
      })}
    </div>
  )
}
