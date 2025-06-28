import { OTPInput, OTPInputContext } from 'input-otp'
import { Dot } from 'lucide-react'
import * as React from 'react'
import st from './input-otp.module.scss'

const InputOTP = React.forwardRef((props, ref) => {
	const { className, containerClassName, ...otherProps } = props
	return (
		<OTPInput
			ref={ref}
			containerClassName={`${st.root} ${containerClassName}`}
			className={`${st.input} ${className}`}
			{...otherProps}
		/>
	)
})
InputOTP.displayName = 'InputOTP'
const InputOTPGroup = React.forwardRef((props, ref) => {
	const { className, ...otherProps } = props
	return (
		<div ref={ref} className={`${st.group} ${className}`} {...otherProps} />
	)
})
InputOTPGroup.displayName = 'InputOTPGroup'
const InputOTPSlot = React.forwardRef(({ index, className, ...props }, ref) => {
	const inputOTPContext = React.useContext(OTPInputContext)
	const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
	return (
		<div
			ref={ref}
			className={`${st.slot} ${isActive ? st.active : ''} ${className}`}
			{...props}
		>
			{char}
			{hasFakeCaret && (
				<div className={st.fakeCaretContainer}>
					<div className={st.fakeCaret} />
				</div>
			)}
		</div>
	)
})
InputOTPSlot.displayName = 'InputOTPSlot'
const InputOTPSeparator = React.forwardRef((props, ref) => (
	<div ref={ref} role='separator' {...props}>
		<Dot />
	</div>
))
InputOTPSeparator.displayName = 'InputOTPSeparator'
export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot }
