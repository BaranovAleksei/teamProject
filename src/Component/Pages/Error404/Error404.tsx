import React from 'react'
import s from './Error404.module.sass'

export type Error404Type = {

}

export const Error404: React.FC<Error404Type> = () => {
	return (
		<div className={s.errorOverlay}>
			page not found
		</div>
	)
}