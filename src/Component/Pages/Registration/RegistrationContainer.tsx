import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../redux/store'
import {setError, setRegistration} from '../../../redux/authReducer'
import {Redirect} from 'react-router-dom'
import {Registration} from "./Registration"

export const RegistrationContainer = () => {
    const dispatch = useDispatch()
    const isLogined = useSelector<AppRootStateType, boolean>(state => state.auth.isLogin)
    const error = useSelector<AppRootStateType, string>(state => state.auth.error)
    const layout = {
        labelCol: {span: 8},
        wrapperCol: {span: 16},
    }
    const onFinish = (values: any) => {
        dispatch(setRegistration({email: values.email, password: values.password1}))
        setTimeout(() => {
            dispatch(setError(''))
        }, 10000)
    }
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    if (isLogined) {
        return <Redirect to={'/login'}/>
    }

    return <Registration  error = {error}
                          isLogined = {isLogined}
                          layout = {layout}
                          onFinish ={onFinish}
                          onFinishFailed = {onFinishFailed}/>
}
