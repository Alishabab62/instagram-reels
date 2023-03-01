import React, { Component } from 'react'
import Logo from "../images/instagramlogo.jpg";
import LogoutComponent from "../components/LogoutComponent";
import { Link } from "react-router-dom";
import Button from "../components/Button";
export default class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
          logoutContainer: false,
          createContainer:false,
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
      <>
         <div className="side-bar">
          <div className="tab-wrapper">
            <Link to="/main">
            <img src={Logo} alt="logo" />
            </Link>
            <Link to="/main">
            <Button title={"Home"}  />
            </Link>
            <Button title={"Search"} />
            <Button title={"Explore"} />
            <Link to='/main/reels'>
            <Button title={"Reels"} />
            </Link>
            <Button title={"Messages"} />
            <Button title={"Notifications"} />
            <Button title={"Create"} fun={this.props.fun} />
            <Link to='/main/profile'>
            <Button title={"Profile"} fun={this.handleProfile} />
            </Link>
          </div>
          {this.state.logoutContainer ? <LogoutComponent /> : ""}
          <Button  style={this.moreButton} title={"MORE"}
            fun={this.handleLogoutContainer}
         / >
        </div>
      </>
    )
  }
}
