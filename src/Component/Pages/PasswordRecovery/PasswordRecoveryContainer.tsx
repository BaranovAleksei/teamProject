import React from 'react'
import {PasswordRecovery} from "./PasswordRecovery"
import {sendEmailPassRecTC, setErrorPassRec} from "../../../redux/forgotReducer"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../../../redux/store"

export const PasswordRecoveryContainer = () => {

	const dispatch = useDispatch()
	const errorPassRec = useSelector<AppRootStateType, string>(state => state.passRec.error)
	const infoPassRec = useSelector<AppRootStateType, string>(state => state.passRec.info)
	const from = "THE BEST MY TEAM baranov.sys@gmail.com"
	const message = `<div>
											вы отправили запрос на восстановления пароля, для продожения перейдите по ссылке:
											<a href='http://baranovaleksei.github.io/teamProject/#/new-pass/$token$'>link</a>
											если это были на Вы - то ничего не делайте
									</div>`
	const onFinish = (values: any) => {
		dispatch(sendEmailPassRecTC({email: values.emailRecPass, message: message, from: from}))
		setTimeout(() => {
			dispatch(setErrorPassRec(''))
		}, 5000)
	}
	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}
	return < PasswordRecovery from={from}
							  message={message}
							  onFinish={onFinish}
							  onFinishFailed={onFinishFailed}
							  errorPassRec = {errorPassRec}
							  infoPassRec = {infoPassRec}/>
}