import React, {useState} from 'react'
import s from './NewPassword.module.sass'
import {Button, Form, Input} from "antd"

export type NewPasswordType = {
	error: string
	infoNewPass: string
	onFinish: (values: any) => void
	onFinishFailed: (errorInfo: any) => void
}
// type LayuotType = Parameters<typeof Form>[0]['layout']

export const NewPassword: React.FC<NewPasswordType> = (props) => {

	const formLayoutHorizontal = 'vertical'

	return <div className={s.newPassOverlay}>
			<Form  layout={formLayoutHorizontal}
				   name="basic"
			       initialValues={{remember: true}}
			       onFinish={props.onFinish}
			       onFinishFailed={props.onFinishFailed} >
				<span className={s.spanText}>{props.infoNewPass}</span>
				<Form.Item label="new password: "
						   name="newPassword1" hasFeedback
				           rules={[
					           {required: true, message: 'Please input your password!'},
					           ({getFieldValue}) => ({
						           validator(_, value) {
							           if (value.length < 8){return Promise.reject(new Error('8 and more symbols...'))} else
							           if (value.length > 8 || !value || getFieldValue('password1') === value) {
								           return Promise.resolve()
							           }
							           return Promise.reject(new Error('Two passwords do not match!'))
						           },
					           }),]}>
					<Input.Password/>
				</Form.Item>
				<Form.Item label="repeat password: "
						   name="newPassword2" hasFeedback
				           rules={[
					           {
						           required: true,
						           message: 'Please confirm your password!',
					           },
					           ({getFieldValue}) => ({
						           validator(_, value) {
							           if (value.length < 8){return Promise.reject(new Error('8 and more symbols...'))} else
							           if (value.length > 8 || !value || getFieldValue('password1') === value) {
								           return Promise.resolve()
							           }
							           return Promise.reject(new Error('Two passwords do not match!'))
						           },
					           }),
				           ]} >
					<Input.Password/>
				</Form.Item>
				<Button type="primary" htmlType="submit">change password</Button>
			</Form>
			<div>{props.error}</div>
		</div>
}