import React, {FC} from 'react'
import s from './Pagination.module.css'
import {Pagination} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../redux/store'
import {setCurrentPage} from '../../redux/packReducer'


type PropsType = {
    totalItemCount: number
    onChangePage: (pageNumber: number) => void
    currentPage: number
}
export const PaginationComp: FC<PropsType> = (props) => {

    const dispatch = useDispatch()
    const onChange = (pageNumber: number) => {
        props.onChangePage(pageNumber)
        dispatch(setCurrentPage(pageNumber))
    }
    return (
        <div className={s.pagination}>
            <Pagination showQuickJumper current={props.currentPage} total={props.totalItemCount} onChange={onChange}/>
        </div>
    )
}