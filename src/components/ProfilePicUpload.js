import React, { Component } from 'react'
import Input from './Input'

export default class ProfilePicUpload extends Component {
  render() {
    return (
      <div className='profile-edit-container'>
        <Input type={"file"}/>
      </div>
    )
  }
}
