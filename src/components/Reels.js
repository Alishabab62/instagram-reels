import React, { Component } from "react";
import "../css/MainPage.css";
import { database } from "../firesbase";
import { getDocs } from "firebase/firestore";
import profile from '../images/profile.png'
import Button from "./Button";

import AddCommentIcon from '@mui/icons-material/AddComment';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Sidebar from "./Sidebar";
import Like from "./Like";

export default class Reels extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      user:{}
    };
  }
  componentDidMount() {
    getDocs(database.posts)
      .then((res) => {
        this.setState({ posts: res.docs });
      })
      .catch((error) => {
        console.log(error);
      });
      let data = JSON.parse(localStorage.getItem("user")) || {};
      this.setState({
        user:data
      })
  }
 
  render() {
    return (
      <div>
        <Sidebar/>
      <div className="main-reels-wrapper">
        {this.state.posts.map((item) => {
          const data = item.data();
          // console.log(data)
          return (
            <div className="reels-wrapper">
            <div key={data.pId}>
              <video src={data.uUrl} controls ></video>
              <div className="reels-details-video">
                <div className="top-div-reels">
                  <img src={profile} alt="profile" />
                  <h1 className="user-name">{data.uName}</h1>
                  <Button title={"Follow"}/>
                </div>
                <div className="center-div-reels">Details</div>
                <div className="bottom-div-reels">Music</div>
              </div>
            </div>
            <div className="reels-details">
              <Like postData={data} userData={this.state.user} id={item.id}/>
              <div>
              <AddCommentIcon style={{fontSize:"35px"}}/>
              <p>0</p>
              </div>
              <div>
              <SendIcon style={{fontSize:"35px"}}/>
              </div>
              <div>
              <BookmarkBorderIcon style={{fontSize:"35px"}}/>
              </div>
              <div>
              <MoreHorizIcon style={{fontSize:"35px" , height:"35px"}}/>
              </div>
              <img src={profile} alt="profile" />
            </div>
            </div>
          );
        })}
      </div>
      </div>
    );
  }
}
