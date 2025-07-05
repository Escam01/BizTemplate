import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'
import st from './tabs.module.scss'
const Tabs = TabsPrimitive.Root
const TabsList = React.forwardRef((props, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={`${st.root} ${props.className}`}
		{...props}
	/>
))
TabsList.displayName = TabsPrimitive.List.displayName
const TabsTrigger = React.forwardRef((props, ref) => (
	<TabsPrimitive.Trigger
		ref={ref}
		className={`${st.tabsTrigger} ${props.className}`}
		{...props}
	/>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName
const TabsContent = React.forwardRef((props, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={`${st.tabsContent} ${props.className}`}
		{...props}
	/>
))
TabsContent.displayName = TabsPrimitive.Content.displayName
export { Tabs, TabsContent, TabsList, TabsTrigger }
