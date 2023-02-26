import React, { Component } from 'react'
import '../css/MainPage.css'
import Button from '../components/Button'
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();
export default class LogoutComponent extends Component {
  logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("users");
        window.location = "/";
      })
      .catch((error) => {
        console.log(error)
      });
  };
  render() {
    return (
      <div className='main-wrapper-logout'>
        <div className='upper-div'> 
        <Button title={"Setting"}/>
        <Button title={"Your Activity"}/>
        <Button title={"Saved"}/>
        <Button title={"Switch appearance"}/>
        <Button title={"Report a problem"}/>
        </div>
        <div className='lower-div'>
            <Button title={"Switch accounts"}/>
            <Button title={"Log out"} fun={this.logout}/>
        </div>
      </div>
    )
  }
}
