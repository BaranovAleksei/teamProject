import  { RegistrationPostDataType, API} from "../api/api"
import {Dispatch} from 'redux'

export enum ACTIONS_TYPE {
	SET_IS_LOGIN = 'authReducer/SET_IS_LOGIN',
	SET_USER_ID = 'authReducer/SET_USER_ID',
	SET_ERROR = 'authReducer/SET_ERROR',
}

const initialState = {
	isLogin: false,
	userID: '',
	error: ''
}

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case ACTIONS_TYPE.SET_IS_LOGIN:
			return {...state, isLogin: action.value}
		case ACTIONS_TYPE.SET_USER_ID:
			return {...state, userID: action.userID}
		case ACTIONS_TYPE.SET_ERROR:
			return {...state, error: action.error}
		default:
			return state
	}
}

export const setIsLogin = (value: boolean) => ({type: ACTIONS_TYPE.SET_IS_LOGIN, value} as const)
export const setIsUserID = (userID: string) => ({type: ACTIONS_TYPE.SET_USER_ID, userID} as const)
export const setError = (error: string) => ({type: ACTIONS_TYPE.SET_ERROR, error} as const)

// thunks
export const setRegistration = (data: RegistrationPostDataType) => (dispatch: Dispatch) => {
	API.registration(data.email, data.password)
		.then(res => {
			dispatch(setIsLogin(true))
		})
		.catch(err => {
			dispatch(setError('Email already exists'))
		})
}

// types
type ActionsType = | ReturnType<typeof setIsLogin>
									 | ReturnType<typeof setIsUserID>
									 | ReturnType<typeof setError>
