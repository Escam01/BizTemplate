import CTA from '../Componets/CTA/CTA'
import Features from '../Componets/Features/Features'
import Hero from '../Componets/Hero/Hero'
import Navigation from '../Componets/Navigation/Navigation'
import st from './PagesStyles/Index.module.scss'

function Index() {
	return (
		<div className={st.root}>
			<Navigation />
			<Hero />
			<Features />
			<CTA />
		</div>
	)
}
export default Index
