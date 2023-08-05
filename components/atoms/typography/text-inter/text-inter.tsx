import {interFont} from '@/lib/fonts';
import {cn} from '@/lib/utils';

export function TextInter({className, children}: {className?: string; children: React.ReactNode}) {
    return <p className={cn(`${className}`, interFont.className)}>{children}</p>;
}
