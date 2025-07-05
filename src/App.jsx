// https://biz-template.vercel.app/
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Toaster as Sonner } from './Components/UI/sonner/sonner.jsx'
import { Toaster } from './Components/UI/toaste/toaster.jsx'
import { TooltipProvider } from './Components/UI/tooltip/tooltip.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Index from './pages/Index.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import Register from './pages/Register.jsx'
import { changeTheme, Theme } from './redux/slices/userReducer.js'

function App() {
	const dispatch = useDispatch()
	const theme = useSelector(state => state.user.theme)

	function handleTheme() {
		dispatch(changeTheme())
	}
	useEffect(() => {
		console.log('Текущая тема:', theme)
	}, [theme])
	return (
		<div className={theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT}>
			<TooltipProvider>
				<Toaster />
				<Sonner />
				<button onClick={handleTheme}>Сменить тему</button>
				<Routes>
					<Route path='/' element={<Index />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/about' element={<About />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</TooltipProvider>
		</div>
	)
}

export default App
