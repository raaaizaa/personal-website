'use client'
import { portfolioProject } from '@/components/constants/portfolio/portfolio'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { portfolioType } from '@/types/portfolio-type'
import { TextInter } from '@/components/atoms/typography/text-inter/text-inter'
import Image from 'next/image'
import Link from 'next/link'

interface props {
  params: { id: number }
}

export default function DetailLayout({ params }: props) {
  const [project, setProject] = useState<portfolioType | undefined>(undefined)
  const router = useRouter()
  const id = params.id

  useEffect(() => {
    router.push(`/portfolio/detail/${params.id}`)
    if (id) {
      const project = portfolioProject.find((item) => item.id === Number(id))

      if (project) {
        setProject(project)
      }
    }
  }, [id])

  return (
    <div className="h-[93%] px-12 md:px-24 lg:px-32 xl:px-96 py-32 text-start text-white">
      {project !== undefined ? (
        <div>
          <TextInter className="text-3xl lg:text-5xl xl:text-6xl font-bold">
            {project.name}
          </TextInter>
          <Image
            src={project.image}
            alt={project.name}
            className="mt-8"
            style={{ borderRadius: '12px' }}
          />
          <div className="block lg:flex xl:flex py-8 justify-between">
            <div>
              <TextInter className="font-bold">Project Date</TextInter>
              <TextInter>{project.date}</TextInter>
              <TextInter className="font-bold">Role(s)</TextInter>
              <TextInter>{project.role}</TextInter>
            </div>
            <div>
              <TextInter className="font-bold">Techstack</TextInter>
              <TextInter>{project.technology}</TextInter>
              <TextInter className="font-bold">Publication Link</TextInter>
              <Link href={project.publication} target="__blank">
                <TextInter className="hover:underline">
                  {project.publication}
                </TextInter>
              </Link>
            </div>
          </div>
          <TextInter className="text-base lg:text-xl xl:text-xl text-justify">
            {project.description}
          </TextInter>
        </div>
      ) : (
        <TextInter className="text-4xl text-center">Loading...</TextInter>
      )}
    </div>
  )
}
