import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../UI/button/button'
import Icon from '../UI/icon/Icon'
import st from './Navigation.module.scss'

function Navigation() {
	const [isOpen, setIsOpen] = useState(false)
	const location = useLocation()
	const navigation = [
		{ name: 'Главная', href: '/', icon: 'Home' },
		{ name: 'Отчет', href: '/dashboard', icon: 'BarChart3' },
		{ name: 'О нас', href: '/about', icon: 'Users' },
		{ name: 'Контакты', href: '/contacts', icon: 'Mail' },
	]
	return (
		<nav className={st.root}>
			<div className={st.container}>
				<div className={st.flexContainer}>
					<div className={st.logoContainer}>
						<Link to='/' className={st.logoLink}>
							<div className={st.logoIcon}>
								<Icon name='Zap' size={20} className={st.iconWhite} />
							</div>
							<span className={st.logoText}>BizTemplate</span>
						</Link>
					</div>
					<div className={st.desktopNav}>
						{navigation.map(item => (
							<Link
								key={item.name}
								to={item.href}
								className={`${st.navLink} ${
									location.pathname === item.href
										? st.activeLink
										: st.inactiveLink
								}`}
							>
								<Icon name={item.icon} size={16} />
								<span>{item.name}</span>
							</Link>
						))}
						<div className={st.buttonGroup}>
							<Button variant='outline' asChild>
								<Link to='/login'>Войти</Link>
							</Button>
							<Button className={st.primaryButton} asChild>
								<Link to='/register'>Регистрация</Link>
							</Button>
						</div>
					</div>
					<div className={st.mobileNav}>
						<Button
							variant='ghost'
							size='sm'
							onClick={() => setIsOpen(!isOpen)}
							aria-label = {isOpen ? 'Закрыть меню' : 'Открыть меню'}
						>
							<Icon name={isOpen ? 'X' : 'Menu'} size={20} />
						</Button>
					</div>
				</div>
				{isOpen && (
					<div className={`${st.mobileMenu} ${isOpen ? st.open : ``}`}>
						<div className={st.mobileMenuContent}>
							{navigation.map(item => (
								<Link
									key={item.name}
									to={item.href}
									className={`${st.mobileNavLink} ${
										location.pathname === item.href
											? st.activeLink
											: st.inactiveLink
									}`}
									onClick={() => setIsOpen(false)}
								>
									<Icon name={item.icon} size={16} />
									<span>{item.name}</span>
								</Link>
							))}
							<div className={st.mobileButtonGroup}>
								<Button variant='outline' className={st.mobileButton} asChild>
									<Link to='/login'>Войти</Link>
								</Button>
								<Button
									className={`${st.primaryButton} ${st.mobileButton}`}
									asChild
								>
									<Link to='/register'>Регистрация</Link>
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}
export default Navigation
