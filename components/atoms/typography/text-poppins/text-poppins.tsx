import { poppinsFont } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export function TextPoppins({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <p className={cn(`${className}`, poppinsFont.className)}>{children}</p>
}
