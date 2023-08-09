import {humanErrorFlagFont, humanErrorFont} from '@/lib/fonts';
import {cn} from '@/lib/utils';

export function TextHumanError({className, children}: {className?: string; children: React.ReactNode}) {
    return <p className={cn(`${className}`, humanErrorFont.className)}>{children}</p>;
}

export function TextHumanErrorFlag({className, children}: {className?: string; children: React.ReactNode}) {
    return <p className={cn(`${className}`, humanErrorFlagFont.className)}>{children}</p>;
}
