import React, {useEffect} from 'react'
import './App.css'
import Routes from './Component/Routes/Routes'
import Header from './Component/Header/Header'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from './redux/store'
import {Login} from "./Component/Pages/Login/Login";
import {initializeAppTC} from "./redux/appReducer";


function App() {
  const dispatch = useDispatch()
  const isInit = useSelector<AppRootStateType, boolean>( state => state.app.isInitialized)
  useEffect( () => {
    dispatch(initializeAppTC())
  }, [dispatch])

  return (
        <div>
            <Header/>
            {isInit ? <Routes/> : <Login />}
        </div>
    )
}

export default App
