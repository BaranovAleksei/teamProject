import React, {useEffect} from 'react'
import s from './Profile.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../redux/store'
import {initializeAppTC} from '../../../redux/appReducer'
import {Redirect} from 'react-router-dom'
import {ProfileType, setProfileAC} from '../../../redux/profileReducer'
import {logOutTC} from '../../../redux/loginReducer'

export const Profile = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const profile = useSelector<AppRootStateType, ProfileType | null>(state => state.profile.profile)
    const isLogin = useSelector<AppRootStateType,  boolean>(state=> state.auth.isLogin)


    console.log('isLogin', isLogin)

    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }
    const logout = () => {
    	dispatch(logOutTC())
	}
     return (
        <div className={s.profileOverlay}>
            {profile &&
				<div className={s.profile}>
					<img src={profile.avatar} alt=""/>
					<div>
						name: {profile.name} <br/>
						token: {profile.token} <br/>
						_id: {profile._id}<br/>
						email: {profile.email}<br/>
						created: {profile.created}<br/>
						admin: {profile.isAdmin ? 'yes' : 'no'}<br/>

                        <a href="/packs"> Packs</a>
					</div>
					<div><button onClick={logout}>Log out</button></div>

				</div>

            }
        </div>
    )
}
