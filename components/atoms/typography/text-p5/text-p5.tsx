import {p5Font} from '@/lib/fonts';
import {cn} from '@/lib/utils';

export function TextP5({className, children}: {className?: string; children: React.ReactNode}) {
    return <p className={cn(`${className}`, p5Font.className)}>{children}</p>;
}
