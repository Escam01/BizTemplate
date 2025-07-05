/*import axios from 'axios'
import React, { useEffect, useState } from 'react'

function MyComponent() {
	const [data, setData] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/posts'
				)
				setData(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [])
	return (
		<div>
			<div>
				{data.map(item => {
					;<li key={item.id}>{item.name}</li>
				})}
			</div>
		</div>
	)
}
export default MyComponent

import axios from 'axios'
import { useEffect, useState } from 'react'

function IdUser() {
	const [data, setData] = useState(null)
	const [userId, setUserId] = useState('')
	const [error, setError] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			if (userId) {
				try {
					const response = await axios.get(
						`https://jsonplaceholder.typicode.com/users/${userId}`
					)
					setData(response.data)
					setError('')
				} catch (error) {
					setError('пользователь не найде')
					setData(null)
				}
			}
		}
		fetchData()
	}, [userId])
	return (
		<div>
			<h1>Информация о пользователе</h1>
			<form onSubmit={e => e.preventDefault()}>
				<input
					type='number'
					placeholder='Введите ID пользователя'
					value={userId}
					onChange={e => setUserId(e.target.value)}
				/>
			</form>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{data && (
				<div>
					<h2>{data.name}</h2>
					<p>Email: {data.email}</p>
					<p>
						Адрес:{data.address.street},{data.address.city}
					</p>
				</div>
			)}
		</div>
	)
}
export default IdUser 
import axios from 'axios';
import React, { useState } from 'react';

function CreateUser (){
	const [name,setName] = useState("")
	const [email,setEmail] = useState('')

	const handleSubmit = async (e)=>{
		e.preventDefault()
		try {
			const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
				name,
				email,
			})
			console.log('Пользователь создан', response.data)
		}
	}
	return (
		<form onSabmit ={hendeleSubmit}>
			<div>
				<label>
					Имя:
					<input type='text'
					value={name}
					onChange={(e)=> setName(e.target.value)}></input>
				</label>
			</div>
			<div>
				<label>
					Email:
					<input type='email'
					value={email}
					onChange={(e)=>setEmail(e.target.value)}>
					</input>
				</label>
			</div>
			<button type='submit'>создать пользователя</button>
		</form>
	)
}
export default CreateUser 

import React, {useState} from 'react';
import axios from 'axios';

function CreatePost (){
	const [title,setTitle]= useState('')
	const [text,setText] = useState('')
	const [massage,setMassege] = useState('')
	const addPost = async (e)=>{
		e.preventDefault()()
		try{
			const response = await axios.post("https://jsonplaceholder.typicode.com/posts",{
			title,
			body:text
		})
		console.log('пост создан',response.data)
		setMassege('пост успешно создан')
		setTitle('')
		setText('')
			

		}catch (error){
			console.log("Ошибка при создание поста",error)
			setMassege('Произошла ошибка при создании поста')
		}
		
	}
	return(
		<form onSubmit={addPost} >
			<div>
				<lable>
				Название:
				<input type='text'
				pattern='Введите название'
				value={title}
				onChange={(e)=>setTitle(e.target.value)}></input>
				</lable>
			</div>
			<div>
				<label>
					Содержание:
					<input type = 'text'
					placeholder='Введите содержимое поста'
					value={text}
					onChange={(e)=> setText(e.target.value)}></input>
				</label>
			</div>
			<button type='submit'> создать пост</button>
			{massage && <p>{massage}</p>}
		</form>
	)
}
export default CreatePost */

import axios from 'axios'
import React, { useState } from 'react'

function CreateUser() {
	const [userName, setUserName] = useState('')
	const [userEmail, setUserEmail] = useState('')
	const [telefon, setTelefon] = useState('')
	const [message, setMessege] = useState('')

	const addUser = async e => {
		e.preventDefault()
		try {
			const response = await axios.post(
				'https://jsonplaceholder.typicode.com/users',
				{
					name: userName,
					email: userEmail,
					phone: telefon,
				}
			)
			console.log('Пользователь зарегестрирован', response.data)
			setUserName('')
			setUserEmail('')
			setTelefon('')
			setMessege('Пользователь успешно зарегестрирован')
		} catch (error) {
			console.log('Ошибка при создании пользователя', error)
			setMessege('Произошла ошибка при регистрации')
		}
	}
	return (
		<form onSubmit={addUser}>
			<div>
				<label>
					Имя:
					<input
						type='text'
						placeholder='Введите имя'
						value={userName}
						onChange={e => setUserName(e.target.value)}
					></input>
				</label>
			</div>
			<div>
				<label>
					<input
						type='number'
						placeholder='Введите номер телефона'
						value={telefon}
						onChange={e => setTelefon(e.target.value)}
					></input>
				</label>
			</div>
			<div>
				<label>
					<input
						type='email'
						placeholder='Введите email'
						value={userEmail}
						onChange={e => setUserEmail(e.target.value)}
					></input>
				</label>
			</div>
			<button type='Submit'>Создать пользователя</button>
			{message && <p>{message}</p>}
		</form>
	)
}
export default CreateUser
