import React  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../redux/store'
import {Redirect} from 'react-router-dom'
import {ProfileType} from '../../../redux/profileReducer'
import {logOutTC} from '../../../redux/loginReducer'
import {Loading} from '../../Loading/loading'
import {Profile} from "./Profile"

export const ProfileContainer = () => {

	const dispatch = useDispatch()
	const myProfile = useSelector<AppRootStateType, ProfileType | null>(state => state.profile.profile)
	const status = useSelector<AppRootStateType, string>(state => state.app.status)
	const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

	if (!isLoggedIn) {
		return <Redirect to={'/login'} />
	}
	if (status === 'loading') {
		return <Loading />
	}
	const logout = () => {
		dispatch(logOutTC())
	}

	return <Profile myProfile = { myProfile }
									logout = {logout} />
}
