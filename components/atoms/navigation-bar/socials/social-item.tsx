import { SocialMediaItem } from '@/components/constants/social-media/social-media-item'
import Link from 'next/link'

export default function SocialItem({data,  children}: {data:SocialMediaItem; children:React.ReactNode}) {
  return (
    <>
        <Link href={data.href} target="_blank" >
            <button className='hover:bg-[#2A2A2A] hover:ease-in-out hover:duration-100 p-4'>
                {children}
            </button>
        </Link>
    </>
  )
}
