import Icon from '@/components/ui/icon'
import { cn } from '@/lib/utils'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'
import st from './sidebar.module.scss' // Импортируем стили
const Sidebar = SheetPrimitive.Root
const SidebarTrigger = SheetPrimitive.Trigger
const SidebarClose = SheetPrimitive.Close
const SidebarPortal = SheetPrimitive.Portal
const SidebarOverlay = React.forwardRef(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		className={cn(st.root, className)}
		{...props}
		ref={ref}
	/>
))
SidebarOverlay.displayName = SheetPrimitive.Overlay.displayName
const SidebarContent = React.forwardRef(
	({ className, children, ...props }, ref) => (
		<SidebarPortal>
			<SidebarOverlay />
			<SheetPrimitive.Content
				ref={ref}
				className={cn(st.content, className)}
				{...props}
			>
				{children}
				<SidebarClose className={st.closeButton}>
					<Icon name='X' size={24} />
					<span className='sr-only'>Close</span>
				</SidebarClose>
			</SheetPrimitive.Content>
		</SidebarPortal>
	)
)
SidebarContent.displayName = SheetPrimitive.Content.displayName
const SidebarHeader = ({ className, ...props }) => (
	<div className={cn(st.header, className)} {...props} />
)
SidebarHeader.displayName = 'SidebarHeader'
const SidebarFooter = ({ className, ...props }) => (
	<div className={cn(st.footer, className)} {...props} />
)
SidebarFooter.displayName = 'SidebarFooter'
const SidebarTitle = React.forwardRef(({ className, ...props }, ref) => (
	<SheetPrimitive.Title
		ref={ref}
		className={cn(st.title, className)}
		{...props}
	/>
))
SidebarTitle.displayName = SheetPrimitive.Title.displayName
const SidebarDescription = React.forwardRef(({ className, ...props }, ref) => (
	<SheetPrimitive.Description
		ref={ref}
		className={cn(st.description, className)}
		{...props}
	/>
))
SidebarDescription.displayName = SheetPrimitive.Description.displayName
export {
	Sidebar,
	SidebarClose,
	SidebarContent,
	SidebarDescription,
	SidebarFooter,
	SidebarHeader,
	SidebarOverlay,
	SidebarPortal,
	SidebarTitle,
	SidebarTrigger,
}
