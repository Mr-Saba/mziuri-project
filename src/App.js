import React from 'react'
import {useEffect} from 'react'
import "./App.css"
import { Switch, Route} from "react-router-dom"
import Layout from "./Layout/Layout.js"
import AuthPage from './Routes/AuthPage/AuthPage.js'
import MainPage from './Routes/MainPage/MainPage.js'
import AboutPage from './Routes/AboutPage/AboutPage.js'
import ErrorPage from './Routes/ErrorPage/ErrorPage.js'
import {CheckUser} from './Util/Authentication.js'

function App() {
   
  //  useEffect(() => {
  //    console.log(CheckUser())
  //  }, [])


  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AuthPage />
        </Route>
        <Route path="/Main" exact={true}>
          <MainPage />
        </Route>
        <Route path="/About" exact={true}>
          <AboutPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>

      </Switch>
    </Layout>
  )
}

export default App;
