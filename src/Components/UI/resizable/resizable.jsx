import { cn } from '@/lib/utils'
import { GripVertical } from 'lucide-react'
import * as ResizablePrimitive from 'react-resizable-panels'
import st from './resizable.module.scss'
const ResizablePanelGroup = ({ className, ...props }) => (
	<ResizablePrimitive.PanelGroup
		className={cn(st.root, className)}
		{...props}
	/>
)
const ResizablePanel = ResizablePrimitive.Panel
const ResizableHandle = ({ withHandle, className, ...props }) => (
	<ResizablePrimitive.PanelResizeHandle
		className={cn(st.resizeHandle, className)}
		{...props}
	>
		{withHandle && (
			<div className={st.handleContainer}>
				<GripVertical className={st.handleIcon} />
			</div>
		)}
	</ResizablePrimitive.PanelResizeHandle>
)
export { ResizableHandle, ResizablePanel, ResizablePanelGroup }
