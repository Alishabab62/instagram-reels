import React, { Component } from "react";
import Create from "./Create";
import "../css/MainPage.css";
import Sidebar from "./Sidebar";
import Feed from './Feed'
import ProfilePicUpload from "./ProfilePicUpload";
export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      createContainer:false,
      handleProfileUploadContainer:false
    };
  }
 
temp = ()=>{
  this.setState({
    createContainer:!this.state.createContainer
  })
}
handleInput=()=>{
  this.setState({
    handleProfileUploadContainer:!this.state.handleProfileUploadContainer
  })
}
  render() {
    return (
      <div className="main-wrapper">
       <Sidebar fun={this.temp} />
        <div className="main-wrapper-feed">
          <Feed/>
          {this.state.createContainer ? <Create fun={this.temp}/> : ""}
          {this.state.handleProfileUploadContainer ? <ProfilePicUpload /> : ""}
        </div>
      </div>
    );
  }
}
