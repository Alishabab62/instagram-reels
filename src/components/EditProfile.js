import React, { Component } from 'react'
import Button from './Button';
import ProfilePicUpload from './ProfilePicUpload';
import Sidebar from './Sidebar';

export default class EditProfile extends Component {
  constructor(){
    super()
    this.state = {
        handleProfileUploadContainer:false
    }
  }
  handleProfileUpload = ()=>{
    this.setState({
      handleProfileUploadContainer:! this.state.handleProfileUploadContainer
    })
  }
  render() {
    return (
      <div className='main-edit-profile-wrapper'>
        <Sidebar />
        <div className='edit-wrapper'>       
          <div className='side-bar-edit'>
            <div className='upper-div'>
                <Button  title={"Edit Profile"} fun = {this.handleProfileUpload}/>
                <Button title={"Change passowrd"} />
                <Button title={"Apps and websites"}/>
                <Button title={"Email notifications"}/>
                <Button title={"Push notifications"} />
                <Button title={"Manage contacts"}/>
                <Button title={"Privacy and security"}/>
                <Button title={"Ads"}/>
                <Button title={"Supervision"}/>
                <Button title={"Login Activity"}/>
                <Button title={"Emails and Instagram"}/>
                <Button title={"Help"}/>
                <Button title={"Digital collectibles"}/>
            </div>
            <div className='lower-div'></div>
        </div>
        <div className='edit-profile-details'>
        </div>
      </div>
      {this.state.handleProfileUploadContainer ? <ProfilePicUpload fun={this.handleProfileUpload}/> : ""}
    </div>
    )
  }
}
