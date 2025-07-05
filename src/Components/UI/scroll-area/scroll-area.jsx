import { cn } from '@/lib/utils'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import * as React from 'react'
import st from './ScrollArea.module.scss'
const ScrollArea = React.forwardRef(
	({ className, children, ...props }, ref) => (
		<ScrollAreaPrimitive.Root
			ref={ref}
			className={cn(st.root, className)}
			{...props}
		>
			<ScrollAreaPrimitive.Viewport className={st.viewport}>
				{children}
			</ScrollAreaPrimitive.Viewport>
			<ScrollBar />
			<ScrollAreaPrimitive.Corner />
		</ScrollAreaPrimitive.Root>
	)
)
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName
const ScrollBar = React.forwardRef(
	({ className, orientation = 'vertical', ...props }, ref) => (
		<ScrollAreaPrimitive.ScrollAreaScrollbar
			ref={ref}
			orientation={orientation}
			className={cn(
				st.scrollBar,
				orientation === 'vertical' && st.vertical,
				orientation === 'horizontal' && st.horizontal,
				className
			)}
			{...props}
		>
			<ScrollAreaPrimitive.ScrollAreaThumb className={st.thumb} />
		</ScrollAreaPrimitive.ScrollAreaScrollbar>
	)
)
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName
export { ScrollArea, ScrollBar }
