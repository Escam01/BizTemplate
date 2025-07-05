import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { Check, ChevronRight, Circle } from 'lucide-react'
import * as React from 'react'
import st from './menubar.module.scss' // Импортируем стили
const MenubarMenu = MenubarPrimitive.Menu
const MenubarGroup = MenubarPrimitive.Group
const MenubarPortal = MenubarPrimitive.Portal
const MenubarSub = MenubarPrimitive.Sub
const MenubarRadioGroup = MenubarPrimitive.RadioGroup
const Menubar = React.forwardRef(({ className, ...props }, ref) => (
	<MenubarPrimitive.Root
		ref={ref}
		className={`${st.root} ${className}`}
		{...props}
	/>
))
Menubar.displayName = MenubarPrimitive.Root.displayName
const MenubarTrigger = React.forwardRef(({ className, ...props }, ref) => (
	<MenubarPrimitive.Trigger
		ref={ref}
		className={`${st.trigger} ${className}`}
		{...props}
	/>
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName
const MenubarSubTrigger = React.forwardRef(
	({ className, inset, children, ...props }, ref) => (
		<MenubarPrimitive.SubTrigger
			ref={ref}
			className={`${st.subTrigger} ${inset ? st.inset : ''} ${className}`}
			{...props}
		>
			{children}
			<ChevronRight className={st.chevron} />
		</MenubarPrimitive.SubTrigger>
	)
)
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName
const MenubarSubContent = React.forwardRef(({ className, ...props }, ref) => (
	<MenubarPrimitive.SubContent
		ref={ref}
		className={`${st.subContent} ${className}`}
		{...props}
	/>
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName
const MenubarContent = React.forwardRef(
	(
		{ className, align = 'start', alignOffset = -4, sideOffset = 8, ...props },
		ref
	) => (
		<MenubarPrimitive.Portal>
			<MenubarPrimitive.Content
				ref={ref}
				align={align}
				alignOffset={alignOffset}
				sideOffset={sideOffset}
				className={`${st.content} ${className}`}
				{...props}
			/>
		</MenubarPrimitive.Portal>
	)
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName
const MenubarItem = React.forwardRef(({ className, inset, ...props }, ref) => (
	<MenubarPrimitive.Item
		ref={ref}
		className={`${st.item} ${inset ? st.inset : ''} ${className}`}
		{...props}
	/>
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName
const MenubarCheckboxItem = React.forwardRef(
	({ className, children, checked, ...props }, ref) => (
		<MenubarPrimitive.CheckboxItem
			ref={ref}
			className={`${st.checkboxItem} ${className}`}
			checked={checked}
			{...props}
		>
			<span className={st.checkboxIndicator}>
				<MenubarPrimitive.ItemIndicator>
					<Check className={st.checkIcon} />
				</MenubarPrimitive.ItemIndicator>
			</span>
			{children}
		</MenubarPrimitive.CheckboxItem>
	)
)
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName
const MenubarRadioItem = React.forwardRef(
	({ className, children, ...props }, ref) => (
		<MenubarPrimitive.RadioItem
			ref={ref}
			className={`${st.radioItem} ${className}`}
			{...props}
		>
			<span className={st.radioIndicator}>
				<MenubarPrimitive.ItemIndicator>
					<Circle className={st.circleIcon} />
				</MenubarPrimitive.ItemIndicator>
			</span>
			{children}
		</MenubarPrimitive.RadioItem>
	)
)
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName
const MenubarLabel = React.forwardRef(({ className, inset, ...props }, ref) => (
	<MenubarPrimitive.Label
		ref={ref}
		className={`${st.label} ${inset ? st.inset : ''} ${className}`}
		{...props}
	/>
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName
const MenubarSeparator = React.forwardRef(({ className, ...props }, ref) => (
	<MenubarPrimitive.Separator
		ref={ref}
		className={`${st.separator} ${className}`}
		{...props}
	/>
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName
const MenubarShortcut = ({ className, ...props }) => {
	return <span className={`${st.shortcut} ${className}`} {...props} />
}
MenubarShortcut.displayName = 'MenubarShortcut'
export {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarGroup,
	MenubarItem,
	MenubarLabel,
	MenubarMenu,
	MenubarPortal,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
}
