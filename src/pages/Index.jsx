import CTA from '../Components/CTA/CTA'
import Features from '../Components/Features/Features'
import Hero from '../Components/Hero/Hero'
import Navigation from '../Components/Navigation/Navigation'
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
