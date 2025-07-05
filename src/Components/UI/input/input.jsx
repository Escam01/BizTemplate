import React from 'react'
import st from './input.module.scss'
const Input = React.forwardRef((props, ref) => {
	const { className, type, ...otherProps } = props
	return (
		<input
			type={type}
			className={`${st.root} ${className}`}
			ref={ref}
			{...otherProps}
		/>
	)
})
Input.displayName = 'Input'
export { Input }
