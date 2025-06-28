import Icon from '../UI/icon/Icon'
import st from './Features.module.scss'

function Features() {
	const features = [
		{
			icon: 'Zap',
			title: 'Быстрая работа',
			description:
				'Оптимизированные алгоритмы обеспечивают молниеносную скорость обработки данных',
		},
		{
			icon: 'Shield',
			title: 'Безопасность',
			description:
				'Максимальная защита ваших данных с использованием современных протоколов шифрования',
		},
		{
			icon: 'BarChart3',
			title: 'Аналитика',
			description:
				'Подробная аналитика и отчеты помогают принимать взвешенные бизнес-решения',
		},
		{
			icon: 'Users',
			title: 'Командная работа',
			description:
				'Удобные инструменты для совместной работы и управления проектами',
		},
		{
			icon: 'Smartphone',
			title: 'Мобильность',
			description:
				'Полнофункциональное мобильное приложение для работы в любом месте',
		},
		{
			icon: 'Clock',
			title: '24/7 Поддержка',
			description:
				'Круглосуточная техническая поддержка от экспертов нашей команды',
		},
	]
	return (
		<section className={st.root}>
			<div className={st.container}>
				<div className={st.header}>
					<h2 className={st.title}>Почему выбирают нас</h2>
					<p className={st.description}>
						Мы предлагаем комплексные решения, которые помогают бизнесу
						развиваться эффективно и безопасно
					</p>
				</div>
				<div className={st.featuresGrid}>
					{features.map((feature, index) => (
						<div key={index} className={st.featureCard}>
							<div className={st.featureContent}>
								<div className={st.iconContainer}>
									<Icon name={feature.icon} size={24} className={st.icon} />
								</div>
								<div className={st.featureDetails}>
									<h3 className={st.featureTitle}>{feature.title}</h3>
									<p className={st.featureDescription}>{feature.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
export default Features
