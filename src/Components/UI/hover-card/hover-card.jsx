import { cn } from '@/lib/utils'
import HoverCardPrimitive from '@radix-ui/react-hover-card'
import React from 'react'
import st from './hoverCard.module.scss'
const HoverCard = HoverCardPrimitive.Root
const HoverCardTrigger = HoverCardPrimitive.Trigger
const HoverCardContent = React.forwardRef((props, ref) => {
	const { className, align = 'center', sideOffset = 4, ...otherProps } = props
	return (
		<HoverCardPrimitive.Content
			ref={ref}
			align={align}
			sideOffset={sideOffset}
			className={cn(st.root, className)}
			{...otherProps}
		/>
	)
})
HoverCardContent.displayName = 'HoverCardContent'
export { HoverCard, HoverCardContent, HoverCardTrigger }
