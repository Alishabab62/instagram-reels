import React, { Component } from "react";
import Logo from "../images/instagramlogo.jpg";
import LogoutComponent from "../components/LogoutComponent";
import { Link } from "react-router-dom";

// import HomeIcon from '@mui/icons-material/HomeIcon';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import Button from "../components/Button";
import "../css/MainPage.css";
import Feed from "./Feed";

export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      logoutContainer: false,
    };
  }
  handleLogoutContainer = () => {
    this.setState({
      logoutContainer: !this.state.logoutContainer,
    });
  };
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
            <Button title={"Home"} />
            <Button title={"Search"} />
            <Button title={"Explore"} />
            <Button title={"Reels"} />
            <Button title={"Messages"} />
            <Button title={"Notifications"} />
            <Button title={"Create"} />
            <Button title={"Profile"} />
          </div>
          {this.state.logoutContainer ? <LogoutComponent /> : ""}
          <Button  style={this.moreButton} title={"MORE"}
            fun={this.handleLogoutContainer}
         / >
        </div>
        <div className="main-wrapper-feed">
         <Feed/>
        </div>
      </div>
    );
  }
}
