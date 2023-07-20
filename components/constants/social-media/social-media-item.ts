import {FaLinkedinIn, FaInstagram, FaGithub} from 'react-icons/fa';

export const socialMediaItem = [
    {name: 'Github', href: 'https://github.com/raaaizaa', icon: FaGithub},
    {name: 'LinkedIn', href: 'https://www.linkedin.com/in/raiza-rahman-a754b1222/', icon: FaLinkedinIn},
    {name: 'Instagram', href: 'https://www.instagram.com/raaizar/', icon: FaInstagram}
];

export type SocialMediaItem = (typeof socialMediaItem)[0];
