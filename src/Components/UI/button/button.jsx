import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import React from 'react'
import { cn } from '../../../lib/utils'
import '../../../Styles/variables.scss'
import st from './button.module.scss'
const buttonVariants = cva(`${st.buttonBase} ${st.transition}`, {
	variants: {
		variant: {
			default: `${st.default}`,
			destructive: `${st.destructive}`,
			outline: `${st.outline}`,
			secondary: `${st.secondary}`,
			ghost: `${st.ghost}`,
			link: `${st.link}`,
		},
		size: {
			default: `${st.sizeDefault}`,
			sm: `${st.sizeSm}`,
			lg: `${st.sizeLg}`,
			icon: `${st.sizeIcon}`,
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
})
const Button = React.forwardRef(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = 'Button'
export { Button, buttonVariants }
