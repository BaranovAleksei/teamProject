import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import s from './Packs.module.css'
import {CardPackType, getCardPacksTC} from "../../redux/packReducer";
import {Button} from "antd";

export const Packs = () => {
    const dispatch = useDispatch()
    const cardPacks = useSelector<AppRootStateType,  Array<CardPackType>>(state => state.pack.cardPacks)


    useEffect(() => {
        dispatch(getCardPacksTC())
    }, [])
    return (
        <div className={s.container}>
            <div className={s.header}>
                <p>Name</p>
                <p style={{marginRight: "120px"}}>cardsCount</p>
                <p>updated</p>
                <p>Add</p>
            </div>
            {cardPacks.map((k, i) => <ul key={i} className={s.cardPacksWrapper}>
            <li className={s.card}>{k.name}</li>
            <li className={s.card}>{k.cardsCount}</li>
            <li className={s.card}>{k.updated}</li>
                <Button type="primary">delete</Button>
                <Button style={{marginLeft: "10px"}} type="primary" >update</Button>
            </ul>)}

        </div>
    )
}

