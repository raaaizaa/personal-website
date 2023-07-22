import { SocialMediaItem } from '@/components/constants/social-media/social-media-item'
import Link from 'next/link'

export default function SocialItem({data,  children}: {data:SocialMediaItem; children:React.ReactNode}) {
  return (
    <>
        <Link href={data.href}>
            <button className='hover:bg-[#d89c00] hover:ease-in-out hover:duration-100 p-4'>
                {children}
            </button>
        </Link>
    </>
  )
}
