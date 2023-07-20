import { SocialMediaItem } from '@/components/constants/social-media/social-media-item'
import Link from 'next/link'

export default function SocialItem({data, active, children}: {data:SocialMediaItem; active: boolean, children:React.ReactNode}) {
  return (
    <>
        <Link href={data.href}>
            <button className='hover:bg-[#3a3a3a] p-4'>
                {children}
            </button>
        </Link>
    </>
  )
}
