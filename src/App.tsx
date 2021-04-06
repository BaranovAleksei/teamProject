import React, {useEffect} from 'react'
import './App.css'
import Routes from './Component/Routes/Routes'
import Header from './Component/Header/Header'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from './redux/store'
import {initializeAppTC} from "./redux/appReducer"
import {LoginContainer} from "./Component/Pages/Login/LoginContainer";

function App() {
  const dispatch = useDispatch()
  const isInit = useSelector<AppRootStateType, boolean | null>( state => state.app.isInitialized)

  useEffect( () => {
    dispatch(initializeAppTC())
  }, [dispatch])

  return (
        <div>
            <Header/>
            { isInit ? <Routes/> : <LoginContainer />}
        </div>
    )
}

export default App
