import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {},
})

export const { setSearch, setTag, setSort, clearFilters } = filterSlice.actions
export default filterSlice.reducer
