import {fatfaceFont} from '@/lib/fonts';
import {cn} from '@/lib/utils';

export function TextFatface({className, children}: {className?: string; children: React.ReactNode}) {
    return <p className={cn(`${className}`, fatfaceFont.className)}>{children}</p>;
}
