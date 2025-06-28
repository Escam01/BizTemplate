import * as React from 'react'
import { cn } from '../../../lib/utils'
import '../../../Styles/variables.scss'
import st from './card.module.scss'

const Card = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn(st.card, className)} {...props} />
))
Card.displayName = 'Card'
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn(st.cardHeader, className)} {...props} />
))
CardHeader.displayName = 'CardHeader'
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
	<h3 ref={ref} className={cn(st.cardTitle, className)} {...props} />
))
CardTitle.displayName = 'CardTitle'
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
	<p ref={ref} className={cn(st.cardDescription, className)} {...props} />
))
CardDescription.displayName = 'CardDescription'
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn(st.cardContent, className)} {...props} />
))
CardContent.displayName = 'CardContent'
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn(st.cardFooter, className)} {...props} />
))
CardFooter.displayName = 'CardFooter'
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
