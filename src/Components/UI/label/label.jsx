import * as LabelPrimitive from '@radix-ui/react-label'
import React from 'react'
import st from './label.module.scss'
const Label = React.forwardRef(({ className, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={`${st.root} ${className}`}
		{...props}
	/>
))
Label.displayName = LabelPrimitive.Root.displayName
export { Label }
