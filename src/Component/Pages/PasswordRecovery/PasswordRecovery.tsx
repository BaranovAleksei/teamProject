import React from 'react'
import {Form, Input, Button } from 'antd'
import s from './PasswordRecovery.module.sass'

export type PasswordRecoveryT = {
	from: string
	message: string
	errorPassRec: string
	infoPassRec: string
	onFinish: (values: any) => void
	onFinishFailed: (errorInfo: any) => void
}

export const PasswordRecovery: React.FC<PasswordRecoveryT> = (props: PasswordRecoveryT) => {

	return (
		<div className={s.passRecOverlay}>

			<Form className={s.formRecPass}
				  name="recoveryPass"
				  initialValues={{remember: true}}
				  onFinish={props.onFinish}
				  onFinishFailed={props.onFinishFailed}>
				<span className={s.spanPassRec}>{ props.infoPassRec }</span>
				<Form.Item
					label="Email"
					name="emailRecPass"
					rules={[{type: 'email', required: true, message: 'Please input your email'}]}
				>
					<Input/>
				</Form.Item>
				<span className={s.nameRecPass}> {props.errorPassRec} </span>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						send message
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}