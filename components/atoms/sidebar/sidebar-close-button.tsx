import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';

interface buttonProps {
    onClick: () => void;
}

export default function SidebarCloseButton({onClick}: buttonProps) {
    return (
        <button onClick={onClick} className="hover:bg-[#3a3a3a] hover:ease-in-out hover:duration-100 px-6 h-[64px]">
            <AiOutlineClose style={{color: 'white', height: '32px', width: '32px'}} />
        </button>
    );
}
