'use client';

import Title from '@/components/molecules/home/title';
import Spotify from '@/components/molecules/spotify-card/spotify';

export default function Homepage() {
  return (
    <div className='h-screen p-8 lg:p-28 xl:p-32 justify-center block lg:flex lg:flex-row-reverse items-center space-y-4 lg:space-y-0 gap-28'>
      <Spotify />
      <Title />
    </div>
  );
}
