import { cn } from '@/lib/utils'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import * as React from 'react'
import st from './select.module.scss' // Импортируем стили
const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value
const SelectTrigger = React.forwardRef(
	({ className, children, ...props }, ref) => (
		<SelectPrimitive.Trigger
			ref={ref}
			className={cn(st.root, className)}
			{...props}
		>
			{children}
			<SelectPrimitive.Icon asChild>
				<ChevronDown className={st.icon} />
			</SelectPrimitive.Icon>
		</SelectPrimitive.Trigger>
	)
)
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName
const SelectScrollUpButton = React.forwardRef(
	({ className, ...props }, ref) => (
		<SelectPrimitive.ScrollUpButton
			ref={ref}
			className={cn(st.scrollButton, className)}
			{...props}
		>
			<ChevronUp className={st.scrollIcon} />
		</SelectPrimitive.ScrollUpButton>
	)
)
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName
const SelectScrollDownButton = React.forwardRef(
	({ className, ...props }, ref) => (
		<SelectPrimitive.ScrollDownButton
			ref={ref}
			className={cn(st.scrollButton, className)}
			{...props}
		>
			<ChevronDown className={st.scrollIcon} />
		</SelectPrimitive.ScrollDownButton>
	)
)
SelectScrollDownButton.displayName =
	SelectPrimitive.ScrollDownButton.displayName
const SelectContent = React.forwardRef(
	({ className, children, position = 'popper', ...props }, ref) => (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				ref={ref}
				className={cn(st.content, className)}
				position={position}
				{...props}
			>
				<SelectScrollUpButton />
				<SelectPrimitive.Viewport className={st.viewport}>
					{children}
				</SelectPrimitive.Viewport>
				<SelectScrollDownButton />
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	)
)
SelectContent.displayName = SelectPrimitive.Content.displayName
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
	<SelectPrimitive.Label
		ref={ref}
		className={cn(st.label, className)}
		{...props}
	/>
))
SelectLabel.displayName = SelectPrimitive.Label.displayName
const SelectItem = React.forwardRef(
	({ className, children, ...props }, ref) => (
		<SelectPrimitive.Item
			ref={ref}
			className={cn(st.item, className)}
			{...props}
		>
			<span className={st.indicator}>
				<SelectPrimitive.ItemIndicator>
					<Check className={st.checkIcon} />
				</SelectPrimitive.ItemIndicator>
			</span>
			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		</SelectPrimitive.Item>
	)
)
SelectItem.displayName = SelectPrimitive.Item.displayName
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator
		ref={ref}
		className={cn(st.separator, className)}
		{...props}
	/>
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName
export {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectScrollDownButton,
	SelectScrollUpButton,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
}
