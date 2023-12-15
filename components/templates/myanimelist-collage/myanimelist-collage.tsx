'use client'
import { mangaData } from '@/types/animanga-data'
import axios from 'axios'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import Link from 'next/link'

const USERNAME = 'coneundeur'

interface WindowSizeState {
    width: number,
    height: number
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindowSizeState>({ width: 0, height: 0 })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener("resize", handleResize)
        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowSize

}

async function fetchData() {
    const response = await axios.get(
        `https://api.jikan.moe/v4/users/${USERNAME}/favorites`
    )

    const mangaResponse = response.data.data.manga


    const mangaArray: mangaData[] = mangaResponse.slice(0, 9).map((mangaResponse: any) => ({
        date: null,
        chapters_read: null,
        title: mangaResponse.title,
        image: mangaResponse.images.jpg.large_image_url,
        url: mangaResponse.url
    }))

    const manga = mangaArray

    return manga
}

export default function MyAnimeListCollage() {
    const [manga, setManga] = useState<mangaData[]>([])
    const size = useWindowSize()
    const innerCard = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        async function getMangaData() {
            const data = await fetchData()
            setManga(data)
        }

        getMangaData()
    }, [])


    return (
        <motion.div className='relative h-full overflow-hidden '>
            <motion.div
                ref={innerCard}
                className='flex h-full w-screen items-center justify-start'
                drag={"x"}
                dragConstraints={{
                    right: 0,
                    left: -(size.width + 400)
                }}
                style={{ animation: "primary 3s linear infinite" }}
            >
                {manga.map((data, index) => (
                    <motion.div
                        key={index}
                        className="noselect relative block h-auto min-w-max cursor-grab items-center justify-center p-2"
                        whileTap={{ cursor: 'grabbing' }}
                        whileHover={{ scaleY: 1.05, scaleX: 1.05, transition: { duration: 0.15} }}>
                        <Image
                            src={data.image}
                            alt={data.title}
                            className={clsx(
                                "noselect pointer-events-none self-center object-fill object-center",
                                "h-[250px] w-[150px] lg:h-[375px] lg:w-[275px] xl:h-[375px] xl:w-[275px]",
                                "bg-[#8B8B8B] duration-150",
                            )}
                            width={1200}
                            height={1200}
                            referrerPolicy="no-referrer"
                            quality="100"
                        />
                        <Link href={data.url} target='_blank'>
                            <p className='text-center hover:underline transition-all duration-150'>{data.title}</p>
                        </Link>
                    </motion.div>
                ))}

            </motion.div>
        </motion.div>
    )
}
