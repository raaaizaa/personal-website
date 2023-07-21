import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai';

interface buttonProps{
    onClick: () => void;
}

export default function SidebarButton({onClick}: buttonProps) {
    return (
        <div>
            <button onClick={onClick}>
                <AiOutlineMenu style={{color: 'white', height: '32px', width: '32px'}} />
            </button>
        </div>
    );
}
