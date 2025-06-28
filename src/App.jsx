import { BrowserRouter, Route, Routes } from 'react-router-dom'
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

function App() {
	return (
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Index />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/about' element={<About />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</TooltipProvider>
	)
}

export default App
