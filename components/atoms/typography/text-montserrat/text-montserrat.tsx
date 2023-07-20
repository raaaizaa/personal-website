import { montserratFont } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export function TextMontserrat({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <p className={cn(`${className}`, montserratFont.className)}>{children}</p>
  )
}
