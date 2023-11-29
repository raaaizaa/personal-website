import { StaticImageData } from "next/image"

export interface portfolioType {
    id: number
    name: string
    date: string
    description: string
    role: string
    technology: string
    publication: string
    image: string | StaticImageData
}