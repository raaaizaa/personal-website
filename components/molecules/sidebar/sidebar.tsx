import SidebarMenuItem from '@/components/atoms/sidebar/sidebar-menu-item';
import {navbarItem} from '@/components/constants/navigation-bar-item/navbar-item';
import {socialMediaItem} from '@/components/constants/social-media/social-media-item';
import SocialLinksSidebar from './social-links-sidebar';
import {TextCutout} from '@/components/atoms/typography/text-cutout/text-cutout';

interface sidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({isOpen, onClose}: sidebarProps) {
    return (
        <div className={isOpen ? 'fixed left-0 top-0 w-full h-screen bg-black/50 transition-all duration-75' : ''}>
            <div
                className={
                    isOpen
                        ? 'bg-dark w-[75%] h-screen fixed top-0 right-0 py-24 px-8 transition-all duration-75'
                        : 'fixed left-[-100%] top-0'
                }
            >
                <div className="pb-4">
                    <TextCutout className="text-3xl">menu</TextCutout>
                    <div className="py-4 space-y-2">
                        {navbarItem.map((menuItem, index) => {
                            return <SidebarMenuItem key={index} data={menuItem} />;
                        })}
                    </div>
                </div>
                <TextCutout className="text-3xl">connect</TextCutout>
                <div className="py-4">
                    <SocialLinksSidebar data={socialMediaItem} />
                </div>
            </div>
        </div>
    );
}
