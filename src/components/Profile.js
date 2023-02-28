import React, { Component } from 'react'
import profileImg from '../images/profile.png'
import Button from './Button'

export default class Profile extends Component {
  render() {
    return (
      <div className='profile-wrapper-main'>
        <header>
            <div className='profile-image'><img src={profileImg} alt="profile"/></div>
            <div className='profile-details'>
                <div className='top-div-profile'>
                    <div className='username'>itz.ali.shabab</div>
                    <Button title={"Edit Profile"}/>
                    <div className='settings'>Setting</div>
                </div>
                <div className='center-div-profile'>
                    <div className='posts-count'>67 Posts</div>
                    <div className='followers-count'>123 Followers</div>
                    <div className='following-count'>256 Following</div>
                </div>
                <div className='profile-bio'>
                    <h3>Shabab Ali</h3>
                    <p>Eat Sleep Code </p>
                </div>
            </div>
        </header>
      </div>
    )
  }
}
