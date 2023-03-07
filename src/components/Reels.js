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
import  ReactDOM  from "react-dom";

export default class Reels extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      user: {}
    };
    this.containerRef = React.createRef();
    this.videoRef = React.createRef();
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
      user: data
    });
  }



  handleVideoClick = (e) => {
    if (e.target.paused) {
      e.target.play();
    } else {
      e.target.pause();
    }
  }

handleEnded = (e)=>{
 let next  = ReactDOM.findDOMNode(e.target.parentNode.parentNode.nextSibling);
 if(next){
   next.scrollIntoView();
   next.childNodes[0].childNodes[0].autoplay = true;
   next.childNodes[0].childNodes[0].currentTime = 0;
   e.target.mute = true;
 }
}
  render() {
    return (
      <div>
        <Sidebar />
        <div className="main-reels-wrapper">
          {this.state.posts.map((item) => {
            const data = item.data();
            return (
              <div className="reels-wrapper" key={data.pId} ref={this.containerRef}>
                <div>
                  <video src={data.uUrl} controls  onClick={this.handleVideoClick} onEnded={this.handleEnded}></video>
                  <div className="reels-details-video">
                    <div className="top-div-reels">
                      <img src={profile} alt="profile" />
                      <h1 className="user-name">{data.uName}</h1>
                      <Button title={"Follow"} />
                    </div>
                    <div className="center-div-reels">Details</div>
                    <div className="bottom-div-reels">Music</div>
                  </div>
                </div>
                <div className="reels-details">
                  <Like postData={data} userData={this.state.user} id={item.id} />
                  <div>
                    <AddCommentIcon style={{ fontSize: "35px" }} />
                    <p>0</p>
                  </div>
                  <div>
                    <SendIcon style={{ fontSize: "35px" }} />
                  </div>
                  <div>
                    <BookmarkBorderIcon style={{ fontSize: "35px" }} />
                  </div>
                  <div>
                    <MoreHorizIcon style={{ fontSize: "35px" }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
