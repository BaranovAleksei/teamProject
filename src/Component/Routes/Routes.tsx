import React, {useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Error404} from "../Pages/Error404/Error404";
import {Login} from "../Pages/Login/Login";
import {NewPassword} from "../Pages/NewPassword/NewPassword";
import {PasswordRecovery} from "../Pages/PasswordRecovery/PasswordRecovery";
import {Registration} from "../Pages/Registration/Registration";
import {Profile} from "../Pages/Profile/Profile";
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../redux/store'
import {initializeAppTC} from '../../redux/appReducer'
import {Packs} from "../Packs/Packs";

export const PATH = {
	LOGIN: '/login',
	REGISTRATION: '/registration',
	PASSWORD_RECOVERY: '/pass-recovery',
	NEW_PASSWORD: '/new-pass',
	PROFILE: '/profile',
	PACKS: '/packs'
}

function Routes() {
	return (
		<div>
			<Switch>
				{/*в начале мы попадаем на страницу "/" и переходим сразу на страницу Login*/}
				{/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
				<Route path={"/"} exact render={ () => <Redirect to={ PATH.LOGIN }/> }/>
				<Route path={"/teamProject"} exact render={ () => <Profile/> }/>

				<Route path={ PATH.LOGIN } render={ () => <Login/> } />
				<Route path={ PATH.REGISTRATION } render={ () => <Registration /> } />
				<Route path={ PATH.PASSWORD_RECOVERY } render={ ()=> <PasswordRecovery/> } />
				<Route path={ PATH.NEW_PASSWORD } render={ ()=> <NewPassword/> } />
				<Route path={ PATH.PROFILE } render={ ()=> <Profile/> } />
				<Route path={ PATH.PACKS } render={ ()=> <Packs/> } />

				<Route path={'/404'} render={() => <Error404/>}/>
				<Redirect from={'*'} to={'/404'}/>

			</Switch>
		</div>
	)
}

export default Routes
