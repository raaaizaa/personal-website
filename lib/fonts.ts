import {Montserrat, Poppins, Abril_Fatface, Inter} from 'next/font/google';
import localFont from 'next/font/local';

export const montserratFont = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap'
});

export const poppinsFont = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const interFont = Inter({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight :['400', '500', '600', '700', '800', '900']
})

export const fatfaceFont = Abril_Fatface({
    subsets: ['latin'],
    weight: ['400']
})

export const cutoutFont = localFont({src: '../fonts/cutout-font.ttf'});
