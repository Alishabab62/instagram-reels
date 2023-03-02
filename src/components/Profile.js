import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Sidebar from './Sidebar'

export default class Profile extends Component {
  constructor(){
    super()
    this.state={
      user:{}
    }
  }

  componentDidMount(){
    let data = JSON.parse(localStorage.getItem("user")) || {};
    this.setState({
      user:data
    })
  }
  render() {
    return (
      <div className='profile-wrapper-main'>
        <Sidebar />
        <div className='profile-wrapper'>
        <header>
            <div className='profile-image'><img src={this.state.user.profileUrl} alt="profile"/></div>
            <div className='profile-details'>
                <div className='top-div-profile'>
                    <div className='username'>{this.state.user.fullName}</div>
                    <Link to={"/main/profile/edit"}>
                    <Button title={"Edit Profile"}/>
                    </Link>
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
      </div>
    )
  }
}
