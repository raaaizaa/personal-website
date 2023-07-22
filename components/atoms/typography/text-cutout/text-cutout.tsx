import { cutoutFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export function TextCutout({className, children}: {className?:string; children:React.ReactNode}){
    return(
        <p className={cn(`${className}`, cutoutFont.className)}>{children}</p>
    )
}