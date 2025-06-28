import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../Components/Navigation/Navigation'
import { Button } from '../Components/UI/button/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../Components/UI/card/card.jsx'
import Icon from '../Components/UI/icon/Icon.jsx'
import { Input } from '../Components/UI/input/input.jsx'
import { Label } from '../Components/UI/label/label.jsx'
import '../Styles/variables.scss'
import st from './PagesStyles/Login.module.scss'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		// Логика авторизации будет добавлена позже
		console.log('Login attempt:', { email, password })
	}
	return (
		<div className={st.root}>
			<Navigation />
			<div className={st.formContainer}>
				<Card className={st.card}>
					<CardHeader className={st.cardHeader}>
						<div className={st.iconContainer}>
							<Icon name='LogIn' size={24} className={st.icon} />
						</div>
						<CardTitle className={st.cardTitle}>Вход в аккаунт</CardTitle>
						<CardDescription>Введите ваши данные для входа</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit} className={st.form}>
							<div className={st.inputGroup}>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									type='email'
									placeholder='example@email.com'
									value={email}
									onChange={e => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className={st.inputGroup}>
								<Label htmlFor='password'>Пароль</Label>
								<Input
									id='password'
									type='password'
									placeholder='••••••••'
									value={password}
									onChange={e => setPassword(e.target.value)}
									required
								/>
							</div>
							<Button type='submit' className={st.submitButton}>
								Войти
							</Button>
						</form>
						<div className={st.loginPrompt}>
							<p className={st.promptText}>
								Нет аккаунта?{' '}
								<Link to='/register' className={st.link}>
									Зарегистрироваться
								</Link>
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
export default Login
