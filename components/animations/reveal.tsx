'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

interface props {
    children: JSX.Element
    width?: "full" | "100%"
}

export default function Reveal({ children, width = "full" }: props) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControl = useAnimation()
    const slideControl = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControl.start("visible")
            slideControl.start("visible")
        }
    }, [isInView])

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={mainControl}
                transition={{ duration: 0.2, delay: 0.25 }}>
                {children}
            </motion.div>
        </div>
    )
}
