import { NextUIProvider } from '@nextui-org/react'
import React, { ReactNode } from 'react'

interface props {
    
}

export default function Provider({children}: {children:ReactNode}) {
  return (
    <NextUIProvider>
        {children}
    </NextUIProvider>
  )
}
