import { createSlice } from '@reduxjs/toolkit'
export const Theme = {
	LIGHT: 'light',
	DARK: 'dark',
}
const initialState = {
	theme: Theme.LIGHT,
	email: '',
	password: '',
	confirmPassword: '',
	name: '',
	contactName: '',
	contactEmail: '',
	constactCompanyName: '',
	telefone: '',
	contactThemeMassage: '',
	contactMassage: '',
}
// const handleRegister = createAsyncThunk('user/handleRegister', async data => {
// 	const response = await axios
// 		.post('Должно быть URL c /users/add', data)
// 		.then(res => res.data)
// 	return response.data
// })
// const handleLogin = createAsyncThunk('user/handleLogin', async data => {
// 	const response = await axios.post('Должно быть URL c /user/login', data)
// 	return response.data
// })

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		changeTheme: state => {
			state.theme = state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
		},
		setName: (state, action) => {
			state.name = action.payload
		},
		setEmail: (state, action) => {
			state.email = action.payload
		},
		setPassword: (state, action) => {
			state.password = action.payload
		},
		setConfirmPassword: (state, action) => {
			state.confirmPassword = action.payload
		},
		setContactName: (state, action) => {
			state.contactName = action.payload
		},
		setConatactEmail: (state, action) => {
			state.contactEmail = action.payload
		},
		setContactCompanyName: (state, action) => {
			state.constactCompanyName = action.payload
		},
		setTelefone: (state, action) => {
			state.telefone = action.payload
		},
		setContactThemeMassage: (state, action) => {
			state.contactThemeMassage = action.payload
		},
		setContactMassage: (state, action) => {
			state.contactMassage = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(handleLogin.fulfilled, (_, action) => {
			// Обработка успешного логина
			console.log('Login successful:', action.payload)
		})
		addCase(handleLogin.rejected, (_, action) => {
			// Обработка ошибки логинаff
			console.error('Login failed:', action.error)
		})
		addCase(handleRegister.fulfilled, (_, action) => {
			// Обработка успешной регистрации
			console.log('Регистрация успешна:', action.payload)
		})
		builder.addCase(handleRegister.rejected, (_, action) => {
			// Обработка ошибки регистрации
			console.error('Ошибка регистрации:', action.error)
		})
	},
})
export const {
	changeTheme,
	setName,
	setEmail,
	setPassword,
	setConfirmPassword,
	setContactName,
	setConatactEmail,
	setContactCompanyName,
	setTelefone,
	setContactThemeMassag,
	setContactMassage,
} = userSlice.actions // Добавить ипортируемые функции
// добавить extraReduserы на импорт
//export { handleLogin, handleRegister }
export default userSlice.reducer
