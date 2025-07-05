import * as SwitchPrimitives from '@radix-ui/react-switch'
import * as React from 'react'
import st from './switch.module.scss'

const Switch = React.forwardRef(({ className, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={`${st.root} ${className}`}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb className={st.thumb} />
	</SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName
export { Switch }
