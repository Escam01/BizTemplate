import { cn } from '@/lib/utils'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'
import st from './progress.module.scss'
const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
	<ProgressPrimitive.Root
		ref={ref}
		className={cn(st.root, className)}
		{...props}
	>
		<ProgressPrimitive.Indicator
			className={st.progressIndicator}
			style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
		/>
	</ProgressPrimitive.Root>
))
Progress.displayName = 'Progress'
export { Progress }
