import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { ChevronRight } from 'lucide-react'
import * as React from 'react'
import st from './navigationMenu.module.scss'
const NavigationMenuMenu = NavigationMenuPrimitive.Menu
const NavigationMenuGroup = NavigationMenuPrimitive.Group
const NavigationMenuPortal = NavigationMenuPrimitive.Portal
const NavigationMenuSub = NavigationMenuPrimitive.Sub
const NavigationMenuRadioGroup = NavigationMenuPrimitive.RadioGroup
const NavigationMenu = React.forwardRef(
	({ className, children, ...props }, ref) => (
		<NavigationMenuPrimitive.Root
			ref={ref}
			className={`${st.root} ${className}`}
			{...props}
		>
			{children}
			<NavigationMenuViewport />
		</NavigationMenuPrimitive.Root>
	)
)
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName
const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List
		ref={ref}
		className={`${st.menuList} ${className}`}
		{...props}
	/>
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName
const NavigationMenuItem = NavigationMenuPrimitive.Item
const navigationMenuTriggerStyle = st.navigationMenuTrigger
const NavigationMenuTrigger = React.forwardRef(
	({ className, children, ...props }, ref) => (
		<NavigationMenuPrimitive.Trigger
			ref={ref}
			className={`${navigationMenuTriggerStyle} ${className}`}
			{...props}
		>
			{children} <ChevronRight className={st.chevron} aria-hidden='true' />
		</NavigationMenuPrimitive.Trigger>
	)
)
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName
const NavigationMenuContent = React.forwardRef(
	(
		{ className, align = 'start', alignOffset = -4, sideOffset = 8, ...props },
		ref
	) => (
		<NavigationMenuPrimitive.Portal>
			<NavigationMenuPrimitive.Content
				ref={ref}
				align={align}
				alignOffset={alignOffset}
				sideOffset={sideOffset}
				className={`${st.menuContent} ${className}`}
				{...props}
			/>
		</NavigationMenuPrimitive.Portal>
	)
)
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName
const NavigationMenuSubTrigger = React.forwardRef(
	({ className, inset, children, ...props }, ref) => (
		<NavigationMenuPrimitive.SubTrigger
			ref={ref}
			className={`${st.subTrigger} ${inset ? st.inset : ''} ${className}`}
			{...props}
		>
			{children}
			<ChevronRight className={st.chevron} />
		</NavigationMenuPrimitive.SubTrigger>
	)
)
NavigationMenuSubTrigger.displayName =
	NavigationMenuPrimitive.SubTrigger.displayName
const NavigationMenuViewport = React.forwardRef(
	({ className, ...props }, ref) => (
		<div className={st.viewportContainer}>
			<NavigationMenuPrimitive.Viewport
				className={`${st.viewport} ${className}`}
				ref={ref}
				{...props}
			/>
		</div>
	)
)
NavigationMenuViewport.displayName =
	NavigationMenuPrimitive.Viewport.displayName
const NavigationMenuIndicator = React.forwardRef(
	({ className, ...props }, ref) => (
		<NavigationMenuPrimitive.Indicator
			ref={ref}
			className={`${st.indicator} ${className}`}
			{...props}
		>
			<div className={st.indicatorDot} />
		</NavigationMenuPrimitive.Indicator>
	)
)
NavigationMenuIndicator.displayName =
	NavigationMenuPrimitive.Indicator.displayName
export {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuGroup,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuMenu,
	NavigationMenuPortal,
	NavigationMenuRadioGroup,
	NavigationMenuSubTrigger,
	NavigationMenuTrigger,
	NavigationMenuViewport,
}
