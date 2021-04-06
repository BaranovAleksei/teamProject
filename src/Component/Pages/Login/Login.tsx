import React from 'react'
import {NavLink} from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import s from './Login.module.sass'


export type LoginType = {
	onFinish: (values: any) => void
	isLoggedIn: boolean
}

export const Login: React.FC<LoginType> = (props) => {
	return <div className={s.loginOverlay}>
		<Form
			name="normal_login"
			className="login-form"
			initialValues={{ remember: true }}
			onFinish={props.onFinish} >
			<Form.Item
				name="email"
				initialValue={'baranov.sys@gmail.com'}
				rules={[{ required: true, message: 'Please input your Username!' }]} >

				<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
			</Form.Item>
			<Form.Item
				name="password"
				initialValue={'123456789'}
				rules={[{ required: true, message: 'Please input your Password!' }]} >
				<Input
					prefix={<LockOutlined className="site-form-item-icon" />}
					type="password"
					placeholder="Password"
				/>
			</Form.Item>
			<Form.Item>
				<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>
				<a className="login-form-forgot" href="">
					<NavLink to = {'/pass-recovery'}>Forgot password</NavLink>
				</a>
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit" className="login-form-button">
					Log in
				</Button>
				<NavLink to={'/registration'} className={s.linkRegistration}>register now!</NavLink>
			</Form.Item>
		</Form>
	</div>
}