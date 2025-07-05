import { toggleVariants } from '@/components/ui/toggle'
import { cn } from '@/lib/utils'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import * as React from 'react'
import st from './toggle.module.scss'

const Toggle = React.forwardRef(
	({ className, variant, size, ...props }, ref) => (
		<TogglePrimitive.Root
			ref={ref}
			className={cn(st.root, toggleVariants({ variant, size, className }))}
			{...props}
		/>
	)
)
Toggle.displayName = TogglePrimitive.Root.displayName
export { Toggle }
