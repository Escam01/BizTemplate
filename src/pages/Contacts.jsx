import { useDispatch, useSelector } from 'react-redux'
import Navigation from '../Components/Navigation/Navigation'
import { Button } from '../Components/UI/button/button.jsx'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '../Components/UI/card/card.jsx'
import Icon from '../Components/UI/icon/Icon'
import { Input } from '../Components/UI/input/input.jsx'
import { Label } from '../Components/UI/label/label.jsx'
import { Textarea } from '../Components/UI/textarea/textarea.jsx'
import {
	setContactMassage,
	setContactName,
	setTelefone,
} from '../redux/slices/userReducer.js'
import st from './PagesStyles/Contacts.module.scss'

function YandexMap() {
	return (
		<div
			style={{
				position: 'relative',
				overflow: 'hidden',
				width: '100%',
				height: '400px',
				borderRadius: '0.5rem',
			}}
		>
			{/* <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/30/nalchik/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Нальчик</a><a href="https://yandex.ru/maps/30/nalchik/house/prospekt_lenina_32a/YEoYcAdoT0cBQFppfXh5dXtjbQ==/?from=mapframe&ll=43.608665%2C43.484679&utm_medium=mapframe&utm_source=maps&z=18.21" style="color:#eee;font-size:12px;position:absolute;top:14px;">Проспект Ленина, 32А — Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=43.608665%2C43.484679&mode=whatshere&whatshere%5Bpoint%5D=43.608303%2C43.484618&whatshere%5Bzoom%5D=17&z=18.21" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div> */}
			<iframe
				title='Офис в Москве'
				src='https://yandex.ru/map-widget/v1/?from=mapframe&ll=43.608665%2C43.484679&mode=whatshere&whatshere%5Bpoint%5D=43.608303%2C43.484618&whatshere%5Bzoom%5D=17&z=18.21'
				width='100%'
				height='100%'
				frameBorder='0'
				style={{ border: 0 }}
				allowFullScreen
			/>
		</div>
	)
}

function Contacts() {
	const dispatch = useDispatch()
	const {
		contactName,
		contactEmail,
		constactCompanyName,
		telefone,
		contactThemeMassage,
		contactMassage,
	} = useSelector(state => state.user)
	const contacts = [
		{
			icon: 'Phone',
			title: 'Телефо',
			value: '+7 (495) 123-45-67',
			description: 'Пн-Пт с 9:00 до 18:00',
		},
		{
			icon: 'Mail',
			title: 'Email',
			value: 'info@biztemplate.ru',
			description: 'Ответим в течение 2 часов',
		},
		{
			icon: 'MapPin',
			title: 'Адрес',
			value: 'Москва, ул. Примерная, 123',
			description: 'БЦ "Технопарк", офис 456',
		},
		{
			icon: 'Clock',
			title: 'Режим работы',
			value: 'Пн-Пт: 9:00-18:00',
			description: 'Сб-Вс: выходной',
		},
	]

	const socialLinks = [
		{ icon: 'Instagram', name: 'Instagram', url: '#' },
		{ icon: 'Linkedin', name: 'LinkedIn', url: '#' },
		{ icon: 'Twitter', name: 'Twitter', url: '#' },
		{ icon: 'Github', name: 'GitHub', url: '#' },
	]
	function handleSubmit(e) {
		e.preventDefault()
		dispatch(
			handleMassage({
				contactName,
				contactEmail,
				constactCompanyName,
				telefone,
				contactThemeMassage,
				contactMassage,
			})
		)
		console.log('Login attempt:', {
			contactName,
			contactEmail,
			constactCompanyName,
			telefone,
			contactThemeMassage,
			contactMassage,
		})
	}

	return (
		<div className={st.root}>
			<Navigation />
			<div className={st.content}>
				<div className={st.spaceY16}>
					<div className={st.header}>
						<h1 className={st.title}>Свяжитесь с нами</h1>
						<p className={st.description}>
							Готовы обсудить ваш проект? Наша команда всегда готова помочь
							найти лучшее решение для вашего бизнеса.
						</p>
					</div>

					<div className={st.grid}>
						<div className={st.contactInfo}>
							<div>
								<h2 className={st.contactTitle}>Контактная информация</h2>
								<div className={st.contactList}>
									{contacts.map((contact, index) => (
										<div key={index} className={st.contactItem}>
											<div className={st.iconContainer}>
												<Icon
													name={contact.icon}
													size={20}
													className={st.icon}
												/>
											</div>
											<div>
												<h3 className={st.contactItemTitle}>{contact.title}</h3>
												<p className={st.contactValue}>{contact.value}</p>
												<p className={st.contactDescription}>
													{contact.description}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>

							<div>
								<h3 className={st.socialTitle}>Мы в социальных сетях</h3>
								<div className={st.socialLinks}>
									{socialLinks.map((social, index) => (
										<a key={index} href={social.url} className={st.socialLink}>
											<Icon name={social.icon} size={18} />
										</a>
									))}
								</div>
							</div>
						</div>

						<div className={st.contactForm}>
							<Card>
								<CardHeader>
									<CardTitle className={st.cardTitle}>
										Отправить сообщение
									</CardTitle>
								</CardHeader>
								<CardContent className={st.cardContent}>
									<div className={st.formGrid}>
										<div className={st.formGroup}>
											<Label htmlFor='name'>Имя *</Label>
											<Input
												id='name'
												placeholder='Ваше имя'
												value={contactName}
												onChange={e => dispatch(setContactName(e.target.value))}
											/>
										</div>
										<div className={st.formGroup}>
											<Label htmlFor='email'>Email *</Label>
											<Input
												id='email'
												type='email'
												value={contactEmail}
												onChange={e =>
													dispatch(setContactEmail(e.target.value))
												}
												placeholder='email@example.com'
											/>
										</div>
									</div>
									<div className={st.formGrid}>
										<div className={st.formGroup}>
											<Label htmlFor='company'>Компания</Label>
											<Input
												id='company'
												value={constactCompanyName}
												onChange={e =>
													dispatch(setContactCompanyName(e.target.value))
												}
												placeholder='Название компании'
											/>
										</div>
										<div className={st.formGroup}>
											<Label htmlFor='phone'>Телефон</Label>
											<Input
												id='phone'
												value={telefone}
												onChange={e => dispatch(setTelefone(e.target.value))}
												placeholder='+7 (___) ___-__-__'
											/>
										</div>
									</div>
									<div className={st.formGroup}>
										<Label htmlFor='subject'>Тема сообщения *</Label>
										<Input
											id='subject'
											value={contactThemeMassage}
											onChange={e =>
												dispatch(setContactThemeMassage(e.target.value))
											}
											placeholder='О чем хотите поговорить?'
										/>
									</div>
									<div className={st.formGroup}>
										<Label htmlFor='message'>Сообщение *</Label>
										<Textarea
											id='message'
											value={contactMassage}
											onChange={e =>
												dispatch(setContactMassage(e.target.value))
											}
											placeholder='Расскажите подробнее о вашем проекте...'
											rows={6}
										/>
									</div>
									<Button
										className={st.submitButton}
										size='lg'
										onClick={handleSubmit}
									>
										<Icon name='Send' size={18} className={st.iconMargin} />
										Отправить сообщение
									</Button>
									<p className={st.privacyPolicy}>
										Отправляя сообщение, вы соглашаетесь с нашей политикой
										конфиденциальности
									</p>
								</CardContent>
							</Card>
						</div>
					</div>

					<div className={st.mapSection}>
						<h2 className={st.mapTitle}>Как нас найти</h2>
						<Card>
							<CardContent className={st.mapContent}>
								<YandexMap />
								<div className={st.mapOverlay}>
									<div className={st.mapInfo}>
										<Icon name='MapPin' size={32} className={st.mapIcon} />
										<p className={st.mapInfoTitle}>Наш офис</p>
										<p className={st.mapInfoAddress}>
											Нальчик, проспект Ленина 32А
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts
