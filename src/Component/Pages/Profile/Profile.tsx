import React from 'react'
import s from './Profile.module.sass'
import {NavLink} from 'react-router-dom'
import {ProfileType} from '../../../redux/profileReducer'
import defaultUser from './imgUser.png'

export type ProfilePageType = {
	myProfile: ProfileType | null
	logout: () => void
}

export const Profile: React.FC<ProfilePageType> = (props) => {
	return (
    <div className={s.profileOverlay}>
        <div className={s.profile}>
          <div className={s.myAvatarOverlay}>
            { props.myProfile?.avatar ? <img src = {props.myProfile?.avatar} alt=""/>
              : <img src = {defaultUser} alt=""/>}
          </div>
          <div className={s.infoUser}>
            <div className={s.myProInfoOverlay}>
              name: {props.myProfile?.name} <br/>
              token: {props.myProfile?.token} <br/>
              _id: {props.myProfile?._id}<br/>
              email: {props.myProfile?.email}<br/>
              created: {props.myProfile?.created}<br/>
              admin: {props.myProfile?.isAdmin ? 'yes' : 'no'}<br/>
            </div>
            <div className={s.myPacksOverlay}>
              <NavLink to="/packs">
                <span>Packs</span>
              </NavLink>
            </div>
            <div className={s.logOutOverlay}>
              <button onClick={props.logout}>Log out</button>
            </div>
          </div>
        </div>
    </div>
    )
}
