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
    updateCardPackTC
} from '../../redux/packReducer'
import {Button} from 'antd'
import {PaginationComp} from '../Pagination/Pagination'
import {Redirect} from 'react-router-dom'
import {DeleteTwoTone, EditTwoTone, FolderAddOutlined} from '@ant-design/icons'
import {getCardsTC, setPackId} from '../../redux/cardsReducer'
import {Loading} from '../Loading/loading'


export const Packs = () => {
    const status = useSelector<AppRootStateType, string>(state => state.app.status)
    const dispatch = useDispatch()
    const [cards, setCards] = useState(false)
    const cardPacksTotalCount = useSelector<AppRootStateType, number>(state => state.pack.cardPacksTotalCount)
    const cardPacks = useSelector<AppRootStateType, Array<CardPackType>>(state => state.pack.cardPacks)
    const idUser = useSelector<AppRootStateType, string>(state => state.profile.profile ? state.profile.profile?._id : '')
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const currentPage = useSelector<AppRootStateType, number>(state => state.pack.page)

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
    const sortPacks = (userID?: string) => {
        dispatch(getCardPacksTC( 1, 10, userID))
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
      <div className={s.container}>
          {status === 'loading' && <Loading/>}
          <div className={s.header}>
              <div className={s.mainHeaderInfo}>
                  <p>Name</p>
                  <p>cardsCount</p>
              </div>
              <div className={s.descr}>
                  <p>updated</p>
                  <p>userId</p>
                  <p>packId</p>
              </div>

              <div className={s.buttons}>
                  <Button type='default'
                          shape={'circle'}
                          style={{marginRight: '5px'}}
                          onClick={() => sortPacks()}>all</Button>
                  <Button type='default'
                          shape={'circle'}
                          style={{marginRight: '5px'}}
                          onClick={() => sortPacks(idUser)}>my</Button>
                  <Button type='default'
                          style={{marginRight: '5px'}}
                          shape={'circle'}
                          icon={<FolderAddOutlined/>}
                          onClick={addNewPacks}/>
              </div>

          </div>

          {cardPacks.map((k, i) => <div key={i} className={s.wrapper}>
              <div onClick={() => {
                  dispatch(setPackId(k._id))
                  dispatch(getCardsTC(k._id))
                  setCards(!cards)
              }} className={s.cardPacksWrapper}>
                  <div className={s.mainInfo}>
                      <span>{k.name}</span>
                      <span>{k.cardsCount}</span>
                  </div>

                  <span className={s.card}>{k.updated}</span>
                  <span className={s.card}>UserId: {k.user_id}</span>
                  <span className={s.card}>PackId: {k._id}</span>
              </div>

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
              </div>

          </div>)}
          <PaginationComp totalItemCount={cardPacksTotalCount} onChangePage={onChangePage} currentPage={currentPage}/>

      </div>
    )
}