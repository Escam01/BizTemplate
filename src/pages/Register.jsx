import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../Componets/Navigation/Navigation.jsx'
import { Button } from '../Componets/UI/button/button.jsx'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../Componets/UI/card/card.jsx'
import Icon from '../Componets/UI/icon/Icon.jsx'
import { Input } from '../Componets/UI/input/input.jsx'
import { Label } from '../Componets/UI/label/label.jsx'
import '../Styles/variables.scss'
import st from './PagesStyles/Register.module.scss'

function Register() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		if (password !== confirmPassword) {
			alert('Пароли не совпадают')
			return
		}
		// Логика регистрации будет добавлена позже
		console.log('Register attempt:', { name, email, password })
	}
	return (
		<div className={st.root}>
			<Navigation />
			<div className={st.formContainer}>
				<Card className={st.card}>
					<CardHeader className={st.cardHeader}>
						<div className={st.iconContainer}>
							<Icon name='UserPlus' size={24} className={st.icon} />
						</div>
						<CardTitle className={st.cardTitle}>Регистрация</CardTitle>
						<CardDescription>Создайте новый аккаунт</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit} className={st.form}>
							<div className={st.inputGroup}>
								<Label htmlFor='name'>Имя</Label>
								<Input
									id='name'
									type='text'
									placeholder='Ваше имя'
									value={name}
									onChange={e => setName(e.target.value)}
									required
								/>
							</div>
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
							<div className={st.inputGroup}>
								<Label htmlFor='confirmPassword'>Подтвердите пароль</Label>
								<Input
									id='confirmPassword'
									type='password'
									placeholder='••••••••'
									value={confirmPassword}
									onChange={e => setConfirmPassword(e.target.value)}
									required
								/>
							</div>
							<Button type='submit' className={`${st.submitButton} w-full`}>
								Зарегистрироваться
							</Button>
						</form>
						<div className={st.loginPrompt}>
							<p className='text-sm text-gray-600'>
								Уже есть аккаунт?{' '}
								<Link to='/login' className={st.link}>
									Войти
								</Link>
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default Register
