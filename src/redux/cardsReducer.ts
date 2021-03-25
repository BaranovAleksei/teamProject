import {Dispatch} from 'redux'
import {API, APIpack} from '../api/api'
import {log} from 'util'
import {change_statusAC} from './appReducer'

export enum ACTIONS_TYPE {
    SET_CARDS = 'cardsReducer/SET_CARDS',
    SET_PACK_ID = 'cardsReducer/SET_PACK_ID',
    SET_PACK_USER_ID = 'cardsReducer/SET_PACK_USER_ID',
    SET_CURRENT_PAGE = 'cardsReducer/SET_CURRENT_PAGE',
    ADD_CARD = 'cardsReducer/ADD_CARD',
    UPDATE_CARD = 'cardsReducer/UPDATE_CARD',
}

const initialState = {
    cards: [] as Array<CardType | null>,
    packId: '',
    packUserId: '',
    cardsTotalCount: 0,
    currentPage: 1,
}
type InitialStateType = typeof initialState

export const cardsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_CARDS:
            return {...state, cards: action.cards}
        case ACTIONS_TYPE.SET_PACK_ID:
            return {...state, packId: action.id}
        case ACTIONS_TYPE.SET_PACK_USER_ID:
            return {...state, packUserId: action.id}
        case ACTIONS_TYPE.SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case ACTIONS_TYPE.ADD_CARD:
            return {...state, cards: [action.card, ...state.cards]}
        case ACTIONS_TYPE.UPDATE_CARD:
            return {...state, cards: [action.card, ...state.cards]}
        default:
            return state
    }
}
export const setCards = (cards: Array<CardType>) => ({type: ACTIONS_TYPE.SET_CARDS, cards} as const)
export const setPackId = (id: string) => ({type: ACTIONS_TYPE.SET_PACK_ID, id} as const)
export const setPackUserId = (id: string) => ({type: ACTIONS_TYPE.SET_PACK_USER_ID, id} as const)
export const setCurrentPage = (page: number) => ({type: ACTIONS_TYPE.SET_CURRENT_PAGE, page} as const)
export const addCard = (card: CardType) => ({type: ACTIONS_TYPE.ADD_CARD, card} as const)
export const updateCard = (card: CardType) => ({type: ACTIONS_TYPE.UPDATE_CARD, card} as const)
// thunks

export const getCardsTC = (packId: string, page?: number) => (dispatch: Dispatch) => {
    dispatch(change_statusAC('loading'))
    APIpack.getCards(packId, page)
        .then(res => {
            dispatch(setCards(res.data.cards))
            dispatch(setPackUserId(res.data.packUserId))
            page && dispatch(setCurrentPage(page))
            dispatch(change_statusAC('success'))
        })
        .catch(err => {
            console.log(JSON.stringify(err))
            dispatch(change_statusAC('failed'))
        })
}

export const addCardTC = (packId: string, question: string, answer: string) => (dispatch: Dispatch) => {
    dispatch(change_statusAC('loading'))
    APIpack.addCard(packId, question, answer).then(res => {
        dispatch(addCard(res.data))
        APIpack.getCards(packId).then(res=> {
            dispatch(setCards(res.data.cards))
            dispatch(change_statusAC('success'))
        })

    })
}

export const updateCardTC = (cardId: string, question: string, answer: string, packId: string) => (dispatch: Dispatch) => {
    dispatch(change_statusAC('loading'))
    APIpack.updateCard(cardId, question, answer).then(res => {
        dispatch(updateCard(res.data))
        APIpack.getCards(packId).then(res=> {
            dispatch(setCards(res.data.cards))
            dispatch(change_statusAC('success'))
        })
    })
}


// types
type ActionsType =
    | ReturnType<typeof setCards>
    | ReturnType<typeof setPackId>
    | ReturnType<typeof setPackUserId>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof addCard>
    | ReturnType<typeof updateCard>


export type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    __v: number
    _id: string
}