import React, { Component } from "react";
import Logo from "../images/instagramlogo.jpg";
import LogoutComponent from "../components/LogoutComponent";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SwitchVideoIcon from "@mui/icons-material/SwitchVideo";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      logoutContainer: false,
      createContainer: false,
      handleFeed: true,
    };
  }
  handleLogoutContainer = () => {
    this.setState({
      logoutContainer: !this.state.logoutContainer,
    });
  };
  handleCreateComponent = () => {
    this.setState({
      createContainer: !this.state.createContainer,
    });
  };

  moreButton = {
    border: "none",
    backgroundColor: "transparent",
    marginLeft: "16px",
    color: "rgb(38, 38, 38)",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    cursor: "pointer",
    // padding: "9px 5px 9px 12px",
    borderRadius: "24px",
    transition: "background-color 0.3s",
    textAlign: "left",
  };
  render() {
    return (
      <>
        <div className="side-bar">
          <div className="tab-wrapper">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <div>
              <Link to="/">
                <HomeIcon />
                <Button title={"Home"} />
              </Link>
            </div>
            <div>
              <Link>
                <SearchIcon />
                <Button title={"Search"} />
              </Link>
            </div>
            <div>
              <Link to="/main/explore">
                <ExploreIcon />
                <Button title={"Explore"} />
              </Link>
            </div>
            <div>
              <Link to="/main/reels">
                <SwitchVideoIcon /> <Button title={"Reels"} />
              </Link>
            </div>
            <div>
              <Link>
                <MapsUgcRoundedIcon /> <Button title={"Messages"} />
              </Link>
            </div>
            <div>
              <Link>
                <NotificationsNoneRoundedIcon />{" "}
                <Button title={"Notifications"} />
              </Link>
            </div>
            <div>
              <Link>
                <AddCircleOutlineRoundedIcon />{" "}
                <Button title={"Create"} fun={this.props.fun} />
              </Link>
            </div>
            <div>
              <Link to="/main/profile">
                <PermIdentityRoundedIcon />
                <Button title={"Profile"} fun={this.handleProfile} />
              </Link>
            </div>
          </div>
          {this.state.logoutContainer ? <LogoutComponent /> : ""}
          <div style={{display:"flex" , alignItems:"center" , width:"80%" , padding:"12px" , marginBottom:"20px"}}>
            <MenuRoundedIcon style={{height:"29px" , width:"29px"}} />
            <Button
              style={this.moreButton}
              title={"MORE"}
              fun={this.handleLogoutContainer}
            />
          </div>
        </div>
      </>
    );
  }
}
