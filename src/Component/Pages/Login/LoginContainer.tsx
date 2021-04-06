import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {loginTC} from "../../../redux/loginReducer"
import {AppRootStateType} from "../../../redux/store"
import {Redirect} from 'react-router-dom'
import {Login} from "./Login"

export const LoginContainer = () => {
	const dispatch = useDispatch()
	const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

	if(isLoggedIn) {
		return <Redirect to={'/profile'}/>
	}

	const onFinish = (values: any) => {
		dispatch(loginTC({email:values.email, password:values.password, rememberMe: values.rememberMe}))
	}

	return <Login isLoggedIn = {isLoggedIn}
				  onFinish = {onFinish}/>
}