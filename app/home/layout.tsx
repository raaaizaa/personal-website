import MyAnimeListFavorite from '@/components/molecules/myanimelist/myanimelist-favorite'
import Spotify from '@/components/molecules/spotify-card/spotify'
import Homepage from '@/components/pages/home/home-page'
import Animanga from '@/components/templates/about/animanga/animanga'
import InfoSection from '@/components/templates/about/info-section/info-section'
import TopAlbum from '@/components/templates/about/top-album/top-album'
import React from 'react'

export default function HomeLayout() {
  return (
    <div>
      <Homepage />
      <InfoSection />
      <Spotify />
      <TopAlbum />
      <Animanga />
    </div>
  )
}
