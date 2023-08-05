import {tooDrunkFont} from '@/lib/fonts';
import {cn} from '@/lib/utils';

export function TextTooDrunk({className, children}: {className?: string; children: React.ReactNode}) {
    return <p className={cn(`${className}`, tooDrunkFont.className)}>{children}</p>;
}
