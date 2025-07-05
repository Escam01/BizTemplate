import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'
import st from './sonner.module.scss'
const Toaster = ({ ...props }) => {
	const { theme = 'system' } = useTheme()
	return (
		<Sonner
			theme={theme}
			className={st.root}
			toastOptions={{
				classNames: {
					toast: st.toast,
					description: st.description,
					actionButton: st.actionButton,
					cancelButton: st.cancelButton,
				},
			}}
			{...props}
		/>
	)
}
export { Toaster }
