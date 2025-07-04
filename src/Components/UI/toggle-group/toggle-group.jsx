import { toggleVariants } from '@/components/ui/toggle'
import { cn } from '@/lib/utils'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import * as React from 'react'
import st from './toggleGroup.module.scss'

const ToggleGroupContext = React.createContext({
	size: 'default',
	variant: 'default',
})
const ToggleGroup = React.forwardRef(
	({ className, variant, size, children, ...props }, ref) => (
		<ToggleGroupPrimitive.Root
			ref={ref}
			className={cn(st.root, className)}
			{...props}
		>
			<ToggleGroupContext.Provider value={{ variant, size }}>
				{children}
			</ToggleGroupContext.Provider>
		</ToggleGroupPrimitive.Root>
	)
)
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName
const ToggleGroupItem = React.forwardRef(
	({ className, children, variant, size, ...props }, ref) => {
		const context = React.useContext(ToggleGroupContext)
		return (
			<ToggleGroupPrimitive.Item
				ref={ref}
				className={cn(
					toggleVariants({
						variant: context.variant || variant,
						size: context.size || size,
					}),
					st.toggleGroupItem,
					className
				)}
				{...props}
			>
				{children}
			</ToggleGroupPrimitive.Item>
		)
	}
)
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName
export { ToggleGroup, ToggleGroupItem }
