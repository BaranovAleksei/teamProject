import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {loginTC} from "../../../redux/loginReducer"
import {AppRootStateType} from "../../../redux/store"
import {Redirect} from 'react-router-dom'
import {Login} from "./Login"
import {PATH} from "../../Routes/Routes";

const LoginContainer = () => {
	const dispatch = useDispatch()
	const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
  const initialized = useSelector<AppRootStateType, boolean>(state => state.auth.isLogin)

	if(isLoggedIn) {
		return <Redirect to={'/profile'}/>
	}

	const onFinish = (values: any) => {
		dispatch(loginTC({email:values.email, password:values.password, rememberMe: values.rememberMe}))
	}

	return <Login isLoggedIn = {isLoggedIn}
				        onFinish = {onFinish}/>
}

export default React.memo(LoginContainer)