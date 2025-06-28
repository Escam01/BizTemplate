import * as SeparatorPrimitive from '@radix-ui/react-separator'
import React from 'react'
import st from './separator.module.scss'

const Separator = React.forwardRef(
	(
		{ className, orientation = 'horizontal', decorative = true, ...props },
		ref
	) => (
		<SeparatorPrimitive.Root
			ref={ref}
			decorative={decorative}
			orientation={orientation}
			className={`${st.root} ${
				orientation === 'horizontal' ? st.horizontal : st.vertical
			} ${className}`}
			{...props}
		/>
	)
)
Separator.displayName = SeparatorPrimitive.Root.displayName
export { Separator }
