import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import React from 'react'
import '../../../Styles/variables.scss'
import st from './alert/alert.module.scss'
const alertVariants = cva(
	`${st.alert} ${st.base} [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground`,
	{
		variants: {
			variant: {
				default: `${st.default}`,
				destructive: `${st.destructive}`,
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
)
const Alert = React.forwardRef(({ className, variant, ...props }, ref) => (
	<div
		ref={ref}
		role='alert'
		className={cn(alertVariants({ variant }), className)}
		{...props}
	/>
))
Alert.displayName = 'Alert'
const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
	<h5 ref={ref} className={cn(st.alertTitle, className)} {...props} />
))
AlertTitle.displayName = 'AlertTitle'
const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn(st.alertDescription, className)} {...props} />
))
AlertDescription.displayName = 'AlertDescription'
export { Alert, AlertDescription, AlertTitle }
