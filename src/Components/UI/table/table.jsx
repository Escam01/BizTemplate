import * as React from 'react'
import st from './table.module.scss'

const Table = React.forwardRef((props, ref) => (
	<div className={st.root}>
		<table ref={ref} className={st.table} {...props} />
	</div>
))
Table.displayName = 'Table'
const TableHeader = React.forwardRef((props, ref) => (
	<thead ref={ref} className={st.tableHeader} {...props} />
))
TableHeader.displayName = 'TableHeader'
const TableBody = React.forwardRef((props, ref) => (
	<tbody ref={ref} className={st.tableBody} {...props} />
))
TableBody.displayName = 'TableBody'
const TableFooter = React.forwardRef((props, ref) => (
	<tfoot ref={ref} className={st.tableFooter} {...props} />
))
TableFooter.displayName = 'TableFooter'
const TableRow = React.forwardRef((props, ref) => (
	<tr ref={ref} className={st.tableRow} {...props} />
))
TableRow.displayName = 'TableRow'
const TableHead = React.forwardRef((props, ref) => (
	<th ref={ref} className={st.tableHead} {...props} />
))
TableHead.displayName = 'TableHead'
const TableCell = React.forwardRef((props, ref) => (
	<td ref={ref} className={st.tableCell} {...props} />
))
TableCell.displayName = 'TableCell'
const TableCaption = React.forwardRef((props, ref) => (
	<caption ref={ref} className={st.tableCaption} {...props} />
))
TableCaption.displayName = 'TableCaption'
export {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
}
