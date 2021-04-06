import React, {useEffect} from 'react'
import s from './Profile.module.sass'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../redux/store'
import {NavLink, Redirect} from 'react-router-dom'
import {ProfileType} from '../../../redux/profileReducer'
import {logOutTC} from '../../../redux/loginReducer'
import {Loading} from '../../Loading/loading'
import {initializeAppTC, isInitializedAC} from "../../../redux/appReducer";

export type ProfilePageType = {
	myProfile: ProfileType | null
	logout: () => void
}

export const Profile: React.FC<ProfilePageType> = (props) => {

	return <div className={s.profileOverlay}>
		 < div className={s.profile}>
        <img src = {props.myProfile?.avatar} alt=""/>
        <div>
            name: {props.myProfile?.name} <br/>
            token: {props.myProfile?.token} <br/>
            _id: {props.myProfile?._id}<br/>
            email: {props.myProfile?.email}<br/>
            created: {props.myProfile?.created}<br/>
            admin: {props.myProfile?.isAdmin ? 'yes' : 'no'}<br/>
            <NavLink to="/packs">Packs</NavLink>
        </div>
        <div>
            <button onClick={props.logout}>Log out</button>
        </div>
    </div>
</div>
}
