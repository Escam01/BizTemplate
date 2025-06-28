import { cn } from '@/lib/utils'
import st from './skeleton.module.scss'
function Skeleton({ className, ...props }) {
	return <div className={cn(st.root, className)} {...props} />
}
export { Skeleton }
