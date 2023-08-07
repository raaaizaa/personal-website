import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

interface buttonProps {
  onClick: () => void
}

export default function SidebarButton({ onClick }: buttonProps) {
  const [isClicked, setIsClicked] = useState(false)

  const handleButton = () => {
    setIsClicked(!isClicked)
    onClick()
  }

  return (
    <>
      {isClicked ? (
        <AiOutlineClose
          style={{ color: 'white', height: '32px', width: '32px' }}
          onClick={handleButton}
        />
      ) : (
        <AiOutlineMenu
          style={{ color: 'white', height: '32px', width: '32px' }}
          onClick={handleButton}
        />
      )}
    </>
  )
}
