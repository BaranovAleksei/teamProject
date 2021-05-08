import React from 'react'
import {newPassTC, setErrorNewPass} from '../../../redux/forgotReducer'
import {useDispatch, useSelector} from "react-redux"
import { useHistory } from "react-router-dom"
import {AppRootStateType} from "../../../redux/store"
import {NewPassword} from "./NewPassword"

export const NewPasswordContainer= () => {
	const dispatch = useDispatch()
	const error = useSelector<AppRootStateType, string>(state => state.passRec.errorNewPass)
	const infoNewPass = useSelector<AppRootStateType, string>(state => state.passRec.infoNewPass)

	const history = useHistory()

	const resetPasswordToken = history.location.pathname.slice(10, history.location.pathname.length)

	const onFinish = (values: any) => {
		dispatch( newPassTC(values.newPassword1, resetPasswordToken) )
		setTimeout(() => {
			dispatch(setErrorNewPass(''))
		}, 5000)
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return < NewPassword error={error}
						 infoNewPass={infoNewPass}
						 onFinish={onFinish}
						 onFinishFailed={onFinishFailed}/>
}