import { cn } from '@/lib/utils'
import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'
import st from './slider.module.scss'

const Slider = React.forwardRef(({ className, ...props }, ref) => (
	<SliderPrimitive.Root ref={ref} className={cn(st.root, className)} {...props}>
		<SliderPrimitive.Track className={st.track}>
			<SliderPrimitive.Range className={st.range} />
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb className={st.thumb} />
	</SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName
export { Slider }
