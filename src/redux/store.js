import { configureStore } from '@reduxjs/toolkit'
import {
	default as filterReducer,
	default as userReducer,
} from './slices/filterReducer.js'

const preloadedState = localStorage.getItem('inn-sys-front')
	? JSON.parse(localStorage.getItem('inn-sys-front'))
	: {}

export const store = configureStore({
	reducer: {
		user: userReducer,
		filter: filterReducer,
	},
	preloadedState,
})

store.subscribe(() => {
	localStorage.setItem('inn-sys-front', JSON.stringify(store.getState()))
})
