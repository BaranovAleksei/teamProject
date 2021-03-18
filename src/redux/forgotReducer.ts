import {PassRecType, API} from '../api/api'
import {Dispatch} from 'redux'

enum ACTION_TYPE {
	SET_OK = 'forgotReducer/SET_OK',
	SET_ERROR = 'forgotReducer/SET_ERROR',
	SET_OK_NEW_PASS = 'forgotReducer/SET_OK_NEW_PASS',
	SET_ERROR_NEW_PASS = 'forgotReducer/SET_ERROR_NEW_PASS'
}

const initialState = {
	info: 'To recover your password, enter your registration email:',
	infoNewPass: 'Enter you new password: ',
	error: '',
	errorNewPass: ''
}

type InitialStateType = typeof initialState

export const forgotReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case ACTION_TYPE.SET_OK:
			return {...state, info: action.info}
		case ACTION_TYPE.SET_ERROR:
			return {...state, error: action.error}
		case ACTION_TYPE.SET_OK_NEW_PASS:
			return {...state, infoNewPass: action.infoNewPass}
		case ACTION_TYPE.SET_ERROR_NEW_PASS:
			return {...state, errorNewPass: action.errorNewPass}
		default:
			return state
	}
}

export const setOkPassRecAC = (info: string) => ({type: ACTION_TYPE.SET_OK, info } as const)
export const setErrorPassRec = (error: string) => ({type: ACTION_TYPE.SET_ERROR, error} as const)

export const setOkNewPassAC = (infoNewPass: string) => ({type: ACTION_TYPE.SET_OK_NEW_PASS, infoNewPass} as const)
export const setErrorNewPass = (errorNewPass: string) => ({type: ACTION_TYPE.SET_ERROR_NEW_PASS, errorNewPass } as const)


export const sendEmailPassRecTC = (data: PassRecType) => (dispatch: Dispatch<ActionType>) => {
	API.passRec(data.email, data.from, data.message)
		.then(response => { dispatch(setOkPassRecAC( response.info ))})
		.catch(error => { dispatch(setErrorPassRec('Such email is not registered'))})
}

export const newPassTC = (password: string, resetPasswordToken: string) => (dispatch: Dispatch<ActionType>) => {
	API.newPass(password, resetPasswordToken)
		.then(res => {dispatch(setOkNewPassAC('password change'))})
		.catch(err => {dispatch(setErrorNewPass('error new password'))})
}

type ActionType = ReturnType<typeof setOkPassRecAC>

  							| ReturnType<typeof setErrorPassRec>
								| ReturnType<typeof setOkNewPassAC>
								| ReturnType<typeof setErrorNewPass>

