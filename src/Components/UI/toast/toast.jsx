import * as ToastPrimitives from '@radix-ui/react-toast'
import * as React from 'react'
import { cn } from '../../../lib/utils'
import st from './toast.module.scss'

const ToastProvider = ToastPrimitives.Provider
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
	<ToastPrimitives.Viewport
		ref={ref}
		className={cn(st.root, className)}
		{...props}
	/>
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
	return (
		<ToastPrimitives.Root
			ref={ref}
			className={cn(st.toast, st[variant], className)}
			{...props}
		/>
	)
})
Toast.displayName = ToastPrimitives.Root.displayName
const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
	<ToastPrimitives.Action
		ref={ref}
		className={cn(st.toastAction, className)}
		{...props}
	/>
))
ToastAction.displayName = ToastPrimitives.Action.displayName
const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
	<ToastPrimitives.Close
		ref={ref}
		className={cn(st.toastClose, className)}
		{...props}
	>
		<span className={st.icon} />
	</ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
	<ToastPrimitives.Title
		ref={ref}
		className={cn(st.toastTitle, className)}
		{...props}
	/>
))
ToastTitle.displayName = ToastPrimitives.Title.displayName
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
	<ToastPrimitives.Description
		ref={ref}
		className={cn(st.toastDescription, className)}
		{...props}
	/>
))
ToastDescription.displayName = ToastPrimitives.Description.displayName
export {
	Toast,
	ToastAction,
	ToastClose,
	ToastDescription,
	ToastProvider,
	ToastTitle,
	ToastViewport,
}
