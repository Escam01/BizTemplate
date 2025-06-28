import Icon from '@/components/ui/icon'
import { cn } from '@/lib/utils'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'
import st from './sheet.module.scss'
const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetPortal = SheetPrimitive.Portal
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		className={cn(st.overlay, className)}
		{...props}
		ref={ref}
	/>
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName
const sheetVariants = side => {
	return cn(
		st.root,
		side === 'top' && st.top,
		side === 'bottom' && st.bottom,
		side === 'left' && st.left,
		side === 'right' && st.right
	)
}
const SheetContent = React.forwardRef(
	({ side = 'right', className, children, ...props }, ref) => (
		<SheetPortal>
			<SheetOverlay />
			<SheetPrimitive.Content
				ref={ref}
				className={cn(sheetVariants(side), className)}
				{...props}
			>
				{children}
				<SheetClose className={st.closeButton}>
					<Icon name='X' size={24} />
					<span className='sr-only'>Close</span>
				</SheetClose>
			</SheetPrimitive.Content>
		</SheetPortal>
	)
)
SheetContent.displayName = SheetPrimitive.Content.displayName
const SheetHeader = ({ className, ...props }) => (
	<div className={cn(st.header, className)} {...props} />
)
SheetHeader.displayName = 'SheetHeader'
const SheetFooter = ({ className, ...props }) => (
	<div className={cn(st.footer, className)} {...props} />
)
SheetFooter.displayName = 'SheetFooter'
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
	<SheetPrimitive.Title
		ref={ref}
		className={cn(st.title, className)}
		{...props}
	/>
))
SheetTitle.displayName = SheetPrimitive.Title.displayName
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (
	<SheetPrimitive.Description
		ref={ref}
		className={cn(st.description, className)}
		{...props}
	/>
))
SheetDescription.displayName = SheetPrimitive.Description.displayName
export {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetOverlay,
	SheetPortal,
	SheetTitle,
	SheetTrigger,
}
