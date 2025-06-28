import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import * as React from 'react'
import st from './pagination.module.scss'
const Pagination = ({ className, ...props }) => (
	<nav
		role='navigation'
		aria-label='pagination'
		className={cn(st.root, className)}
		{...props}
	/>
)
Pagination.displayName = 'Pagination'
const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
	<ul ref={ref} className={cn(st.paginationContent, className)} {...props} />
))
PaginationContent.displayName = 'PaginationContent'
const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
	<li ref={ref} className={cn(st.paginationItem, className)} {...props} />
))
PaginationItem.displayName = 'PaginationItem'
const PaginationLink = ({ className, isActive, size = 'icon', ...props }) => (
	<a
		aria-current={isActive ? 'page' : undefined}
		className={cn(
			buttonVariants({
				variant: isActive ? 'outline' : 'ghost',
				size,
			}),
			className
		)}
		{...props}
	/>
)
PaginationLink.displayName = 'PaginationLink'
const PaginationPrevious = ({ className, ...props }) => (
	<PaginationLink
		aria-label='Go to previous page'
		size='default'
		className={cn(st.paginationPrevious, className)}
		{...props}
	>
		<ChevronLeft className={st.chevronIcon} />
		<span>Previous</span>
	</PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'
const PaginationNext = ({ className, ...props }) => (
	<PaginationLink
		aria-label='Go to next page'
		size='default'
		className={cn(st.paginationNext, className)}
		{...props}
	>
		<span>Next</span>
		<ChevronRight className={st.chevronIcon} />
	</PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'
const PaginationEllipsis = ({ className, ...props }) => (
	<span aria-hidden className={cn(st.paginationEllipsis, className)} {...props}>
		<MoreHorizontal className={st.ellipsisIcon} />
		<span className='sr-only'>More pages</span>
	</span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'
export {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
}
