import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import st from './PagesStyles/NotFound.module.scss'

function NotFound() {
	const location = useLocation()

	useEffect(() => {
		console.error(
			'404 Error: User attempted to access non-existent route:',
			location.pathname
		)
	}, [location.pathname])

	return (
		<div className={st.container}>
			<div className={st.textCenter}>
				<h1 className={st.title}>404</h1>
				<p className={st.description}>Упс! Страница не найдена</p>
				<a href='/' className={st.link}>
					Вернуться на главную
				</a>
			</div>
		</div>
	)
}
export default NotFound
