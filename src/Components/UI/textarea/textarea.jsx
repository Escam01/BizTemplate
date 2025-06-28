import * as React from 'react'
import st from './textarea.module.scss'

const Textarea = React.forwardRef((props, ref) => {
	return (
		<textarea
			className={`${st.root} ${props.className}`}
			ref={ref}
			{...props}
		/>
	)
})
Textarea.displayName = 'Textarea'
export { Textarea }
