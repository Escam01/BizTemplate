import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navigation from '../Components/Navigation/Navigation.jsx'
import { Button } from '../Components/UI/button/button.jsx'
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
import st from './PagesStyles/Register.module.scss'

function Register() {
	const dispatch = useDispatch()
	const { name, email, password, confirmPassword } = useSelector(
		state => state.user
	)
	const handleSubmit = e => {
		e.preventDefault()
		dispatch(handleRegister({ name, email, password, confirmPassword }))
		if (password !== confirmPassword) {
			alert('Пароли не совпадают')
			return
		}
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
									onChange={e => dispatch(setName(e.target.value))}
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
									onChange={e => dispatch(setEmail(e.target.value))}
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
									onChange={e => dispatch(setPassword(e.target.value))}
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
									onChange={e => dispatch(setConfirmPassword(e.target.value))}
									required
								/>
							</div>
							<Button
								type='submit'
								className={`${st.submitButton} w-full`}
								onSubmit={handleSubmit}
							>
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
