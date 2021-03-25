import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../redux/store'
import s from './Packs.module.css'
import {
    addNewCardPackTC,
    CardPackType,
    deleteCardPackTC,
    getCardPacksTC,
    sortedMyPacks,
    sortedMyPacks,
    updateCardPackTC
} from '../../redux/packReducer'
import {Button, Form, Input} from 'antd'
import {PaginationComp} from '../Pagination/Pagination'
import {Redirect} from 'react-router-dom'
import {DeleteTwoTone, EditTwoTone, FolderAddOutlined} from '@ant-design/icons'
import {getCardsTC, setPackId} from '../../redux/cardsReducer'

export const Packs = () => {
    const status = useSelector<AppRootStateType, string>(state => state.app.status)
    const dispatch = useDispatch()
    const [cards, setCards] = useState(false)
    const cardPacksTotalCount = useSelector<AppRootStateType, number>(state => state.pack.cardPacksTotalCount)
    const cardPacks = useSelector<AppRootStateType, Array<CardPackType>>(state => state.pack.cardPacks)
    const idUser = useSelector<AppRootStateType, string>(state => state.profile.profile ? state.profile.profile?._id : '')

    const onChangePage = (pageNumber: number) => {
        dispatch(getCardPacksTC(pageNumber))
    }

    useEffect(() => {
        dispatch(getCardPacksTC())
    }, [])

    const addNewPacks = () => {
        dispatch(addNewCardPackTC())
    }
    const deleteOfPack = (idPack: string) => {
        dispatch(deleteCardPackTC(idPack))
    }
    const updateOfPack = (idPack: string, newName: string = 'best of the best') => {
        setCards(false)
        dispatch(updateCardPackTC(idPack, newName))
    }
    const sortPacks = () => {

    }

    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }
    if (cards) {
        return <Redirect
            to={{
                pathname: '/cards',
                // state: { setCards: setCards, cards: cards }
            }}
        />
    }


    return (
        <div>
        <div className={s.container}>

                <div className={s.header}>
                    <p>Name</p>
                    <p style={{marginRight: '120px'}}>cardsCount</p>
                    <p>updated</p>
                    <Button type='default' style={{marginRight: '5px'}}>myPacks</Button>
                    <Button type='default'
                            style={{marginRight: '5px'}}
                            shape={'circle'}
                            icon={<FolderAddOutlined/>}
                            onClick={addNewPacks}/>
                </div>
                {cardPacks.map((k, i) => <div key={i} className={s.cardPacksWrapper}
                                              onClick={() => {
                                                  dispatch(setPackId(k._id))
                                                  dispatch(getCardsTC(k._id))
                                                  setCards(!cards)
                                              }}>
                    <div className={s.mainInfo}>
                        <span>{k.name}</span>
                        <span>{k.cardsCount}</span>
                    </div>

                    <span className={s.card}>{k.updated}</span>
                    <span className={s.card}>UserId: {k.user_id}</span>
                    <span className={s.card}>PackId: {k._id}</span>
                    <div className={s.buttons}>
                        {idUser === k.user_id && <Button type='default'
                                                         style={{marginRight: '5px'}}
                                                         shape={'circle'}
                                                         onClick={() => updateOfPack(k._id)}
                                                         icon={<EditTwoTone/>}/>}
                        {idUser === k.user_id && <Button type="default"
                                                         onClick={() => deleteOfPack(k._id)}
                                                         style={{marginRight: '5px'}}
                                                         shape={'circle'}
                                                         icon={<DeleteTwoTone/>}/>}
                        <Button type='default'
                                style={{marginRight: '5px'}}
                                shape={'circle'}
                                icon={<FolderOpenOutlined/>}/>
                    </div>

                </div>)}
                <PaginationComp totalItemCount={cardPacksTotalCount} onChangePage={onChangePage}/>

        </div>

            <button onClick={() => setModalActive(true)} className={s.modalButton}> Click me</button>
            <Modal active={modalActive} setActive={setModalActive}>
                <Form style={{padding: '50px'}} {...layout} name="basic">
                    <Input className={s.inputText} />
                    <Input className={s.inputText} />
                    <Input className={s.inputText}  />
                    <button onClick={() => setModalActive(false)} className={s.modalButtonSubmit} style={{width: '20vw', display: 'block'}}>submit</button>
                </Form>
            </Modal>
        </div>

    )
}
