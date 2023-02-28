import React, { Component } from "react";
import Logo from "../images/instagramlogo.jpg";
import LogoutComponent from "../components/LogoutComponent";
import { Link } from "react-router-dom";
import Create from "./Create";
import Button from "../components/Button";
import Reels from './Reels';
import Profile from './Profile'

// import HomeIcon from '@mui/icons-material/HomeIcon';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import "../css/MainPage.css";
import Feed from "./Feed";

export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      logoutContainer: false,
      createContainer:false,
      handleReels:false,
      handleProfile:false,
      handleFeed:true
    };
  }
  handleLogoutContainer = () => {
    this.setState({
      logoutContainer: !this.state.logoutContainer,
    });
  };
  handleCreateComponent = ()=>{
    this.setState({
      createContainer:!this.state.createContainer
    })
  }
  handleReels = ()=>{
      this.setState({
        handleReels:! this.state.handleReels,
        handleProfile:false,
        handleFeed:false
      })
  }
  handleHome =()=>{
    this.setState({
      handleReels:false,
      handleFeed:true
    })
  }
  handleProfile = ()=>{
    this.setState({
      handleProfile:!this.state.handleProfile,
      handleReels:false,
      handleFeed:false
    })
  }
moreButton = {
  border: "none",
  backgroundColor: "transparent",
  margin: "7px 12px 5px 24px",
  color: "rgb(38, 38, 38)",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  cursor: "pointer",
  width: "80%",
  padding: "9px 5px 9px 12px",
  borderRadius: "20px",
  transition: "background-color 0.3s",
  textAlign: "left"
}
  render() {
    return (
      <div className="main-wrapper">
        <div className="side-bar">
          <div className="tab-wrapper">
            <Link to="/main">
            <img src={Logo} alt="logo" />
            </Link>
            <Button title={"Home"} fun = {this.handleHome} />
            <Button title={"Search"} />
            <Button title={"Explore"} />
            <Button title={"Reels"} fun={this.handleReels} />
            <Button title={"Messages"} />
            <Button title={"Notifications"} />
            <Button title={"Create"} fun={this.handleCreateComponent} />
            <Button title={"Profile"} fun={this.handleProfile} />
          </div>
          {this.state.logoutContainer ? <LogoutComponent /> : ""}
          <Button  style={this.moreButton} title={"MORE"}
            fun={this.handleLogoutContainer}
         / >
        </div>
        <div className="main-wrapper-feed">
          {this.state.handleFeed ? <Feed/> : ""}
         {this.state.handleReels ? <Reels/> : ""}
         {this.state.createContainer ? <Create fun={this.handleCreateComponent}/> : ""}
         {this.state.handleProfile ? <Profile/> : "" }
        </div>
      </div>
    );
  }
}
