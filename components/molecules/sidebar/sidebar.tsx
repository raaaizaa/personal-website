import SidebarMenuItem from '@/components/atoms/sidebar/sidebar-menu-item';
import {TextMontserrat} from '@/components/atoms/typography/text-montserrat/text-montserrat';
import {NavbarItem, navbarItem} from '@/components/constants/navigation-bar-item/navbar-item';
import {SocialMediaItem, socialMediaItem} from '@/components/constants/social-media/social-media-item';
import SidebarCloseButton from '@/components/atoms/sidebar/sidebar-close-button';
import SocialLinksSidebar from './social-links-sidebar';
import { TextCutout } from '@/components/atoms/typography/text-cutout/text-cutout';

interface sidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({isOpen, onClose}: sidebarProps) {
    return (
        <div className={isOpen ? "fixed left-0 top-0 w-full h-screen bg-black/50 ease-in duration-100" : '' } >
            <div className={isOpen ? "bg-dark w-[75%] h-screen fixed top-0 right-0 p-16 ease-linear duration-100" : 'fixed left-[-100%] top-0'}>
                <div className='justify-end flex'>
                    <SidebarCloseButton onClick={onClose}/>
                </div>
                <TextCutout className="text-white font-bold text-4xl">mEnU</TextCutout>
                <div className="py-8">
                    {navbarItem.map((menuItem, index) => {
                        return <SidebarMenuItem key={index} data={menuItem} />;
                    })}
                </div>
                <TextCutout className="text-white font-bold text-4xl">ConNecT</TextCutout>
                <div className="py-8">
                    <SocialLinksSidebar data={socialMediaItem}/>
                </div>
            </div>
        </div>
    );
}
