import {
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	Line,
	LineChart,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'
import Navigation from '../Components/Navigation/Navigation.jsx'
import { Button } from '../Components/UI/button/button.jsx'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '../Components/UI/card/card.jsx'
import Icon from '../Components/UI/icon/Icon.jsx'

import st from './PagesStyles/Dashboard.module.scss'

function Dashboard() {
	const revenueData = [
		{ name: 'Янв', value: 5500 },
		{ name: 'Фев', value: 4000 },
		{ name: 'Мар', value: 5000 },
		{ name: 'Апр', value: 4500 },
		{ name: 'Май', value: 6000 },
		{ name: 'Июн', value: 5500 },
	]

	const trafficData = [
		{ name: 'Пн', users: 2400 },
		{ name: 'Вт', users: 1398 },
		{ name: 'Ср', users: 5500 },
		{ name: 'Чт', users: 3908 },
		{ name: 'Пт', users: 4800 },
		{ name: 'Сб', users: 3800 },
		{ name: 'Вс', users: 4300 },
	]

	const sourceData = [
		{ name: 'Органический', value: 30, color: '#9b87f5' },
		{ name: 'Социальные сети', value: 40, color: '#7E69AB' },
		{ name: 'Реклама', value: 20, color: '#D6BCFA' },
		{ name: 'Прямые заходы', value: 10, color: '#E5DEFF' },
	]

	const metrics = [
		{
			title: 'Общий доход',
			value: '₽2,340,000',
			change: '+12%',
			icon: 'TrendingUp',
			trend: 'up',
		},
		{
			title: 'Новые клиенты',
			value: '1,234',
			change: '+8%',
			icon: 'Users',
			trend: 'up',
		},
		{
			title: 'Конверсия',
			value: '3.2%',
			change: '-2%',
			icon: 'Target',
			trend: 'down',
		},
		{
			title: 'Средний чек',
			value: '₽15,680',
			change: '+5%',
			icon: 'CreditCard',
			trend: 'up',
		},
	]

	return (
		<div className={st.root}>
			<Navigation />
			<div className={st.dashboardContent}>
				<div className={st.header}>
					<div>
						<h1 className={st.dashboardTitle}>Отчет</h1>
						<p className={st.dashboardSubtitle}>
							Обзор ключевых показателей вашего бизнеса
						</p>
					</div>
					<Button className={st.exportButton}>
						<Icon name='Download' size={16} className={st.iconMargin} />
						Экспорт отчета
					</Button>
				</div>
				<div className={st.metricsGrid}>
					{metrics.map((metric, index) => (
						<Card key={index} className={st.metricCard}>
							<CardContent className={st.cardContent}>
								<div className={st.metricDetails}>
									<div>
										<p className={st.metricTitle}>{metric.title}</p>
										<p className={st.metricValue}>{metric.value}</p>
										<div
											className={`${st.metricTrend} ${
												metric.trend === 'up' ? 'trend-up' : 'trend-down'
											}`}
										>
											<Icon
												name={metric.trend === 'up' ? 'ArrowUp' : 'ArrowDown'}
												size={14}
												className='icon-margin'
											/>
											{metric.change}
										</div>
									</div>
									<div className={st.metricIconContainer}>
										<Icon
											name={metric.icon}
											size={24}
											className={st.metricIcon}
										/>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
				<div className={st.chartsGrid}>
					<Card>
						<CardHeader>
							<CardTitle className={st.chartTitle}>Доходы по месяцам</CardTitle>
						</CardHeader>
						<CardContent>
							<ResponsiveContainer width='100%' height={300}>
								<BarChart data={revenueData}>
									<CartesianGrid strokeDasharray='3 3' />
									<XAxis dataKey='name' />
									<YAxis />
									<Tooltip />
									<Bar dataKey='value' fill='#9b87f5' radius={[4, 4, 0, 0]} />
								</BarChart>
							</ResponsiveContainer>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle className={st.chartTitle}>
								Посещаемость сайта
							</CardTitle>
						</CardHeader>
						<CardContent>
							<ResponsiveContainer width='100%' height={300}>
								<LineChart data={trafficData}>
									<CartesianGrid strokeDasharray='3 3' />
									<XAxis dataKey='name' />
									<YAxis />
									<Tooltip />
									<Line
										type='monotone'
										dataKey='users'
										stroke='#9b87f5'
										strokeWidth={3}
									/>
								</LineChart>
							</ResponsiveContainer>
						</CardContent>
					</Card>
				</div>
				<div className={st.trafficActivityGrid}>
					<Card className={st.trafficCard}>
						<CardHeader>
							<CardTitle className={st.chartTitle}>Источники трафика</CardTitle>
						</CardHeader>
						<CardContent>
							<ResponsiveContainer width='100%' height={250}>
								<PieChart>
									<Pie
										data={sourceData}
										cx='50%'
										cy='50%'
										innerRadius={60}
										outerRadius={100}
										dataKey='value'
									>
										{sourceData.map((entry, index) => (
											<Cell key={`cell-${index}`} fill={entry.color} />
										))}
									</Pie>
									<Tooltip />
								</PieChart>
							</ResponsiveContainer>
							<div className={st.trafficSources}>
								{sourceData.map((item, index) => (
									<div key={index} className={st.trafficSource}>
										<div
											className={st.sourceColor}
											style={{ backgroundColor: item.color }}
										></div>
										<span>{item.name}</span>
										<span className={st.sourceValue}>{item.value}%</span>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
					<Card className={st.activityCard}>
						<CardHeader>
							<CardTitle className={st.chartTitle}>
								Последняя активность
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className={st.activityList}>
								{[
									{
										user: 'Анна Иванова',
										action: 'оформила заказ на ₽12,500',
										time: '2 мин назад',
									},
									{
										user: 'Петр Сидоров',
										action: 'зарегистрировался на платформе',
										time: '15 мин назад',
									},
									{
										user: 'Мария Петрова',
										action: 'оставила отзыв (5 звезд)',
										time: '1 час назад',
									},
									{
										user: 'Алексей Козлов',
										action: 'обновил профиль компании',
										time: '2 часа назад',
									},
									{
										user: 'Елена Смирнова',
										action: 'скачала отчет по продажам',
										time: '3 часа назад',
									},
								].map((activity, index) => (
									<div key={index} className={st.activityItem}>
										<div className={st.activityIcon}>
											<Icon name='User' size={16} className={st.iconPrimary} />
										</div>
										<div className={st.activityDetails}>
											<p className={st.activityText}>
												<span className={st.activityUser}>{activity.user}</span>{' '}
												{activity.action}
											</p>
											<p className={st.activityTime}>{activity.time}</p>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
