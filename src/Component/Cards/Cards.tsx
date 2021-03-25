import React, {FC, useState} from 'react'
import {addCardTC, CardType, updateCardTC} from '../../redux/cardsReducer'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../redux/store'
import s from './Cards.module.css'
import {Redirect} from 'react-router-dom'
import {RollbackOutlined, DeleteTwoTone, EditTwoTone, FolderAddOutlined} from '@ant-design/icons'
import {Loading} from '../Loading/loading'
import { Form, Input, InputNumber, Button } from 'antd';

type PropsType = {
    // userId: string
    // packId: string
    // setCards: (value: boolean)=> void
}

export const Cards: FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const [packs, setPacks] = useState(false)
    const [addCard, setAddCard] = useState(false)
    const [updateCard, setUpdateCard] = useState(false)
    const cards = useSelector<AppRootStateType, Array<CardType | null>>(state => state.cards.cards)
    const id = useSelector<AppRootStateType, string>(state => state.profile.profile ? state.profile.profile?._id : '')
    const packUserId = useSelector<AppRootStateType, string>(state => state.cards.packUserId)
    const packId = useSelector<AppRootStateType, string>(state => state.cards.packId)
    const status = useSelector<AppRootStateType, string>(state => state.app.status)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    const deleteOfCard = (id: string) => {

    }
    const updateOfCard = (id: string) => {
        setUpdateCard(true)
    }
    const openPopup = () => {
        setAddCard(true)
    }


    const validateMessages = {
        required: '${label} is required!',
    };

    const onFinish1 = (values: any) => {
        dispatch(addCardTC(packId, values.question, values.answer))
        setAddCard(false)
    };
    const onFinish2 = (values: any) => {
        dispatch(updateCardTC(values.cardId, values.question, values.answer, packId))
        setUpdateCard(false)
    };
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    if (packs) {
        return <Redirect to={'/packs'}/>
    }
    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }
    return (
        <div className={s.cards}>
            {status === 'loading' && <Loading/>}

            {addCard && <div className={s.popup}>
                <div className={s.addCard}>
                    <Form {...layout} name="nest-messages" onFinish={onFinish1} validateMessages={validateMessages}>

                        <Form.Item name={'question'} label="Question" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={'answer'} label="Answer" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Add
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>}


            <div className={s.header}>
                <div className={s.mainInfo}>
                    <p>question</p>
                    <p className={s.answer}>answer {id !== packUserId && <span>not your</span>}</p>
                </div>
                <Button type='default' style={{marginRight: '5px'}} onClick={() => setPacks(true)}
                        icon={<RollbackOutlined/>}
                        shape={'circle'}/>
                <Button type='default'
                        style={{marginRight: '5px'}}
                        shape={'circle'}
                        icon={<FolderAddOutlined/>}
                        onClick={openPopup}
                        disabled={id !== packUserId}/>

            </div>
            {cards.length ? cards.map((c, i) => c && <div key={i} className={s.packCards}>
                <div className={s.mainInfo}>
                    <p>{c.question}</p>
                    <p>{c.answer}</p>
                </div>
                <div>
                    {id === c.user_id && <Button type='default'
                                                 style={{marginRight: '5px'}}
                                                 shape={'circle'}
                                                 onClick={() => updateOfCard(c._id)}
                                                 icon={<EditTwoTone/>} disabled={id !== c.user_id}/>}
                    {id === c.user_id && <Button type="default"
                                                 onClick={() => deleteOfCard(c._id)}
                                                 style={{marginRight: '5px'}}
                                                 shape={'circle'}
                                                 icon={<DeleteTwoTone/>}
                                                 disabled={id !== c.user_id}/>}
                </div>
                    {updateCard && <div className={s.popup}>
                        <div className={s.addCard}>
                            <Form {...layout} name="nest-messages" onFinish={onFinish2} validateMessages={validateMessages}>
                                <Form.Item name={'cardId'} initialValue={c._id} >
                                    <Input disabled={true} style={{width: '400px', textAlign: 'center'}}/>
                                </Form.Item>
                                <Form.Item name={'question'} label="Question" rules={[{ required: true }]} initialValue={c.question}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name={'answer'} label="Answer" rules={[{ required: true }]} initialValue={c.answer}>
                                    <Input />
                                </Form.Item>
                                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                    <Button type="primary" htmlType="submit" >
                                        Update
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>}

            </div>)
            : <div className={s.noCards}>no cards</div>}
        </div>
    )
}