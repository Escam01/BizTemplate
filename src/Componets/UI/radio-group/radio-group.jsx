import { cn } from '@/lib/utils'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'lucide-react'
import * as React from 'react'
import st from './radio-group.module.scss'
const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Root
			className={cn(st.root, className)}
			{...props}
			ref={ref}
		/>
	)
})
RadioGroup.displayName = 'RadioGroup'
const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Item
			ref={ref}
			className={cn(st.radioGroupItem, className)}
			{...props}
		>
			<RadioGroupPrimitive.Indicator className={st.indicator}>
				<Circle className={st.circle} />
			</RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	)
})
RadioGroupItem.displayName = 'RadioGroupItem'
export { RadioGroup, RadioGroupItem }
