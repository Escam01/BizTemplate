import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'
import { cn } from '../../../lib/utils'
import st from './tooltip.module.scss'

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger
const TooltipContent = React.forwardRef(
	({ className, sideOffset = 4, ...props }, ref) => (
		<TooltipPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			className={cn(st.root, className)}
			{...props}
		/>
	)
)
TooltipContent.displayName = TooltipPrimitive.Content.displayName
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
