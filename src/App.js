import React, { Component } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Login from './components/Login'
import MainPage from './components/MainPage'
import SignUp from './components/SignUp'
import PrivateRoute from './PrivateRoute'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Login/>}> </Route>
          <Route path='/main' element = {<PrivateRoute><MainPage/></PrivateRoute>}> </Route>
          <Route path='/signup' element = {<SignUp />}> </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
