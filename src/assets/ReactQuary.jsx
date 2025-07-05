import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

async function fetchData() {
	try {
		const response = await axios(URL)
		return response.data
	} catch (error) {
		console.error(error)
	}
}
function UserPosts() {
	const { data, isLoading, error } = useQuery('posts', fetchData())
	if (isLoading) return <div>isLoading...</div>
	if (error) return <div>Error:{error.message}</div>
	return (
		<ul>
			{data.map(posts => (
				<li key={posts.id}>{posts.title}</li>
			))}
		</ul>
	)
}
export default UserPosts()
