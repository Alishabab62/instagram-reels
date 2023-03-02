import React, { Component } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Login from './components/Login'
import MainPage from './components/MainPage'
import SignUp from './components/SignUp'
import PrivateRoute from './PrivateRoute'
import EditProfile from './components/EditProfile'
import Reels from './components/Reels'
import Profile from './components/Profile'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Login/>}> </Route>
          <Route path='/main' element = {<PrivateRoute><MainPage/></PrivateRoute>}> </Route>
          <Route path='/signup' element = {<SignUp />}> </Route>
          <Route path='/main/profile/edit' element={<EditProfile/>}></Route>
          <Route path={'/main/reels'} element={<Reels/>}></Route>
          <Route path={'/main/profile'} element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
