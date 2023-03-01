import React, { Component } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Login from './components/Login'
import MainPage from './components/MainPage'
import SignUp from './components/SignUp'
import PrivateRoute from './PrivateRoute'
import EditProfile from './components/EditProfile'
import Reels from './components/Reels'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Login/>}> </Route>
          <Route path='/main' element = {<PrivateRoute><MainPage/></PrivateRoute>}> </Route>
          <Route path='/signup' element = {<SignUp />}> </Route>
          <Route path='/main/profile/edit' element={<div className='edit-profile-wrap'><Sidebar/> <EditProfile/></div>}></Route>
          <Route path={'/main/reels'} element={<div className='reels-div'><Sidebar/><Reels/></div>}></Route>
          <Route path={'/main/profile'} element={<div><Sidebar/><Profile/></div>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
