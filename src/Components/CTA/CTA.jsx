import { Button } from '../UI/button/button'
import Icon from '../UI/icon/Icon'
import st from './CTA.module.scss'
import { Link } from 'react-router-dom'

function CTA() {
	return (
		<section className={st.root}>
			<div className={st.container}>
				<div className={st.content}>
					<div className={st.textContainer}>
						<h2 className={st.title}>Готовы начать свой путь к успеху?</h2>
						<p className={st.description}>
							Присоединяйтесь к тысячам компаний, которые уже используют наши
							решения для роста своего бизнеса
						</p>
					</div>
					<div className={st.buttonContainer}>
						<Link to="/register">
						<Button size='lg' className={st.primaryButton}>
							<Icon name='ArrowRight' size={18} className={st.iconMargin} />
							Попробовать бесплатно
						</Button>
						</Link>
						<Link to="/contacts">
						<Button variant='outline' size='lg' className={st.outlineButton}>
							<Icon name='Phone' size={18} className={st.iconMargin} />
							Связаться с нами
						</Button>
						</Link>
					</div>
					<div className={st.featuresContainer}>
						<div className={st.features}>
							<div className={st.featureItem}>
								<Icon name='Check' size={16} />
								<span className={st.featureText}>Бесплатная установка</span>
							</div>
							<div className={st.featureItem}>
								<Icon name='Check' size={16} />
								<span className={st.featureText}>30 дней поддержки</span>
							</div>
							<div className={st.featureItem}>
								<Icon name='Check' size={16} />
								<span className={st.featureText}>Гарантия результата</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default CTA
