import React, { Component } from "react";
import Logo from "../images/instagramlogo.jpg";
import LogoutComponent from "../components/LogoutComponent";

// import HomeIcon from '@mui/icons-material/HomeIcon';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import Button from "../components/Button";
import "../css/MainPage.css";

export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      logoutContainer: false,
    };
  }
  handleLogoutContainer = () => {
    console.log("FUN");
    this.setState({
      logoutContainer: !this.state.logoutContainer,
    });
  };

  render() {
    return (
      <div className="main-wrapper">
        <div className="side-bar">
          <div className="tab-wrapper">
            <img src={Logo} alt="logo" />
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
          <Button
            className="more-button"
            title={"MORE"}
            fun={this.handleLogoutContainer}
          ></Button>
        </div>
        <div className="main-wrapper-feed">
          <div className="feed-wrapper">
            <div className="stories-container">Stories</div>
            <div className="feed">Feed</div>
          </div>
          <div className="suggestion-wrapper">Suggestion</div>
        </div>
      </div>
    );
  }
}
