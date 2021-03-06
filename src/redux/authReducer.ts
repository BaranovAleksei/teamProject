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

export const setIsLoginAC = (value: boolean) => ({type: ACTIONS_TYPE.SET_IS_LOGIN, value} as const)
export const setIsUserIDAC = (userID: string) => ({type: ACTIONS_TYPE.SET_USER_ID, userID} as const)
export const setErrorAC = (error: string) => ({type: ACTIONS_TYPE.SET_ERROR, error} as const)

// thunks
export const setRegistration = (data: RegistrationPostDataType) => (dispatch: Dispatch) => {
	API.registration(data.email, data.password)
		.then(res => {
			dispatch(setIsLoginAC(true))
		})
		.catch(err => {
			dispatch(setErrorAC('Email already exists'))
		})
}

// types
type ActionsType = | ReturnType<typeof setIsLoginAC>
									 | ReturnType<typeof setIsUserIDAC>
									 | ReturnType<typeof setErrorAC>
