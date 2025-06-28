import * as LucideIcons from 'lucide-react'
import st from './Icon.module.scss'
const Icon = ({ name, fallback = 'CircleAlert', ...props }) => {
	const IconComponent = LucideIcons[name]

	if (!IconComponent) {
		const FallbackIcon = LucideIcons[fallback]
		if (!FallbackIcon) {
			return <span className={st.root}>[icon]</span>
		}
		return <FallbackIcon {...props} />
	}

	return <IconComponent {...props} />
}
export default Icon
