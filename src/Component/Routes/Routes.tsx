import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import {Packs} from '../Packs/Packs'
import {Cards} from '../Cards/Cards'

import {PasswordRecoveryContainer} from "../Pages/PasswordRecovery/PasswordRecoveryContainer"
import LoginContainer from "../Pages/Login/LoginContainer"
import {ProfileContainer} from '../Pages/Profile/ProfileContainer'
import {Error404Container} from "../Pages/Error404/Error404Container"
import {RegistrationContainer} from "../Pages/Registration/RegistrationContainer";
import {NewPasswordContainer} from "../Pages/NewPassword/NewPasswordContainer";

export const PATH = {
	LOGIN: '/login',
	REGISTRATION: '/registration',
	PASSWORD_RECOVERY: '/pass-recovery',
	NEW_PASSWORD: '/new-pass',
	PROFILE: '/profile',
	PACKS: '/packs',
	CARDS: '/cards',
}

function Routes() {
	return (
		<div>
			<Switch>
				{/*в начале мы попадаем на страницу "/" и переходим сразу на страницу Login*/}
				{/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
				<Route path={"/"} exact render={ () => <Redirect to={ PATH.LOGIN }/> }/>
				<Route path={"/teamProject"} exact render={ () => <ProfileContainer/> }/>
				<Route path={ PATH.LOGIN } render={ () => <LoginContainer/> } />
				<Route path={ PATH.REGISTRATION } render={ () => <RegistrationContainer /> } />
				<Route path={ PATH.PASSWORD_RECOVERY } render={ ()=> <PasswordRecoveryContainer/> } />
				<Route path={ PATH.NEW_PASSWORD } render={ ()=> <NewPasswordContainer/> } />
				<Route path={ PATH.PROFILE } render={ ()=> <ProfileContainer/> } />
				<Route path={ PATH.PACKS } render={ ()=> <Packs/> } />
				<Route path={ PATH.CARDS } render={ ()=> <Cards/> } />
				<Route path={'/404'} render={() => <Error404Container/>}/>
				<Redirect from={'*'} to={'/404'}/>
			</Switch>
		</div>
	)
}

export default Routes
