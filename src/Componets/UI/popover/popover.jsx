import { cn } from '@/lib/utils'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as React from 'react'
import st from './popover.module.scss'
const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverContent = React.forwardRef(
	({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Content
				ref={ref}
				align={align}
				sideOffset={sideOffset}
				className={cn(st.root, className)}
				{...props}
			/>
		</PopoverPrimitive.Portal>
	)
)
PopoverContent.displayName = 'PopoverContent'
export { Popover, PopoverContent, PopoverTrigger }
