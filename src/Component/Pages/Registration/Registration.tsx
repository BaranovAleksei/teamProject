import React from 'react'
import s from './Registration.module.sass'
import {Form, Input, Button} from 'antd'

export type LayoutType = {
    formLayout?: string
    labelCol?: any
    wrapperCol?: any
}

export type RegistrationType = {
    error: string
    isLogined: boolean
    layout: LayoutType
    onFinish: (values: any) => void
    onFinishFailed: (errorInfo: any) => void
}

export const Registration: React.FC<RegistrationType> = (props) => {
    return <div className={s.registrationOverlay}>
            <Form  {...props.layout} name="basic"  initialValues={{remember: true}} onFinish={props.onFinish}
                   onFinishFailed={props.onFinishFailed}>
                <Form.Item label="email" name="email"
                    rules={[
                        {required: true, message: 'Please input your email!'},
                        {type: 'email', message: 'The input is not valid E-mail!',}
                    ]}>
                    <Input style={{width: '100%'}} />
                </Form.Item>
                <Form.Item label="Password1" name="password1" hasFeedback
                           rules={[
                               {required: true, message: 'Please input your password!'},
                               ({getFieldValue}) => ({
                                   validator(_, value) {
                                       if (value.length < 8){return Promise.reject(new Error('8 and more' +
                                           ' symbols...'))} else
                                       if (value.length >= 8 || !value || getFieldValue('password1') === value) {
                                           return Promise.resolve()
                                       }
                                       return Promise.reject(new Error('Two passwords do not match!'))
                                   },
                               }),]}>
                    <Input.Password/>
                </Form.Item>
                <Form.Item label="Password2" name="password2"  hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (value.length < 8){return Promise.reject(new Error('8 and more symbols...'))} else
                                if (value.length >= 8 || !value || getFieldValue('password1') === value) {
                                    return Promise.resolve()
                                }
                                return Promise.reject(new Error('Two passwords do not match!'))
                            },
                        }),
                    ]}>
                    <Input.Password/>
                </Form.Item>
                <Button type="primary" htmlType="submit">Button</Button>
                <div className={s.serverError}>{props.error}</div>
            </Form>
        </div>
}
