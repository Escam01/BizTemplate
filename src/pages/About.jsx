import Navigation from '../Components/Navigation/Navigation.jsx'
import { Card, CardContent } from '../Components/UI/card/card.jsx'
import Icon from '../Components/UI/icon/Icon.jsx'
import st from './PagesStyles/About.module.scss'

function About() {
	const team = [
		{
			name: 'Анна Иванова',
			role: 'CEO & Основатель',
			image:
				'https://images.unsplash.com/photo-1494790108755-2616c355b4bb?w=300&h=300&fit=crop&crop=face',
			description: '15 лет опыта в IT-индустрии',
		},
		{
			name: 'Петр Сидоров',
			role: 'CTO',
			image:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
			description: 'Эксперт по архитектуре ПО',
		},
		{
			name: 'Мария Козлова',
			role: 'Директор по продукту',
			image:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
			description: 'Специалист по UX/UI дизайну',
		},
		{
			name: 'Алексей Петров',
			role: 'Руководитель разработки',
			image:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
			description: '10+ лет в веб-разработке',
		},
	]
	const values = [
		{
			icon: 'Target',
			title: 'Фокус на результат',
			description:
				'Мы всегда ориентируемся на достижение конкретных бизнес-целей наших клиентов',
		},
		{
			icon: 'Heart',
			title: 'Забота о клиентах',
			description:
				'Каждый проект для нас — это возможность помочь бизнесу стать успешнее',
		},
		{
			icon: 'Lightbulb',
			title: 'Инновации',
			description:
				'Мы используем передовые технологии для создания лучших решений',
		},
		{
			icon: 'Shield',
			title: 'Надежность',
			description:
				'Качество и стабильность наших продуктов — наш главный приоритет',
		},
	]
	return (
		<div className={st.root}>
			<Navigation />
			<div className={st.content}>
				<div className={st.spaceY16}>
					<div className={st.header}>
						<h1 className={st.title}>О нашей компании</h1>
						<p className={st.description}>
							Мы — команда профессионалов, которая создает инновационные
							цифровые решения для развития современного бизнеса с 2018 года.
						</p>
					</div>
					<div className={st.grid}>
						<div className={st.storySection}>
							<h2 className={st.storyTitle}>Наша история</h2>
							<div className={st.storyText}>
								<p>
									Компания была основана в 2018 году группой энтузиастов,
									которые видели потребность рынка в качественных и доступных
									IT-решениях.
								</p>
								<p>
									За годы работы мы помогли более чем 1000 компаний
									оптимизировать свои бизнес-процессы и выйти на новый уровень
									эффективности.
								</p>
								<p>
									Сегодня мы — ведущий поставщик корпоративных решений в области
									автоматизации и цифровой трансформации бизнеса.
								</p>
							</div>
						</div>
						<div className={st.imageContainer}>
							<img
								src='https://img.freepik.com/premium-photo/panorama-shot-of-frontend-developer-team-brainstorming-ui-and-ux-designs-for-mobile-app-on-laptop-computer-screen-user-interface-development-team-planning-for-userfriendly-ui-design-scrutinize_31965-216307.jpg?w=2000'
								alt='Наша команда'
								className={st.image}
							/>
							<div className={st.imageOverlay}></div>
						</div>
					</div>
					<div className={st.missionVision}>
						<div className={st.mission}>
							<div className={st.iconContainer}>
								<Icon name='Compass' size={24} className={st.icon} />
							</div>
							<h3 className={st.missionTitle}>Наша миссия</h3>
							<p className={st.missionDescription}>
								Делать современные технологии доступными для любого бизнеса,
								помогая компаниям расти и развиваться в цифровую эпоху.
							</p>
						</div>
						<div className={st.vision}>
							<div className={st.iconContainer}>
								<Icon name='Eye' size={24} className={st.icon} />
							</div>
							<h3 className={st.visionTitle}>Наше видение</h3>
							<p className={st.visionDescription}>
								Стать лидером в области цифровых решений, создавая продукты,
								которые меняют подходы к ведению бизнеса.
							</p>
						</div>
					</div>
					<div className={st.valuesSection}>
						<div className={st.valuesHeader}>
							<h2 className={st.valuesTitle}>Наши ценности</h2>
							<p className={st.valuesDescription}>
								Принципы, которые определяют наш подход к работе и
								взаимодействию с клиентами
							</p>
						</div>
						<div className={st.valuesGrid}>
							{values.map((value, index) => (
								<Card key={index} className={st.valueCard}>
									<CardContent className={st.valueContent}>
										<div className={st.valueIconContainer}>
											<Icon name={value.icon} size={32} className={st.icon} />
										</div>
										<h3 className={st.valueTitle}>{value.title}</h3>
										<p className={st.valueDescription}>{value.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
					<div className={st.teamSection}>
						<div className={st.teamHeader}>
							<h2 className={st.teamTitle}>Наша команда</h2>
							<p className={st.teamDescription}>
								Профессионалы с многолетним опытом, которые создают лучшие
								решения для вашего бизнеса
							</p>
						</div>
						<div className={st.teamGrid}>
							{team.map((member, index) => (
								<Card key={index} className={st.teamCard}>
									<CardContent className={st.teamContent}>
										<img
											src={member.image}
											alt={member.name}
											className={st.teamImage}
										/>
										<div>
											<h3 className={st.teamMemberName}>{member.name}</h3>
											<p className={st.teamMemberRole}>{member.role}</p>
											<p className={st.teamMemberDescription}>
												{member.description}
											</p>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default About
