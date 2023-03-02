import React, { Component } from "react";
import profile from "../images/profile.png";
import { database } from "../firesbase";
import { getDocs } from "firebase/firestore";
import Button from "./Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCommentIcon from "@mui/icons-material/AddComment";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      posts: [],
    };
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("user")) || {};
    this.setState({
      user: data,
    });
    getDocs(database.posts)
      .then((res) => {
        this.setState({ posts: res.docs });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <div className="feed-wrapper">
          <div className="stories-container">
            <div className="story-wrapper">
              <div className="story">
                <img src={profile} alt="Story" />
                <p>Shabab</p>
              </div>
              <div className="story">
                <img src={profile} alt="Story" />
                <p>Shabab</p>
              </div>
              <div className="story">
                <img src={profile} alt="Story" />
                <p>Shabab</p>
              </div>
              <div className="story">
                <img src={profile} alt="Story" />
                <p>Shabab</p>
              </div>
              <div className="story">
                <img src={profile} alt="Story" />
                <p>Shabab</p>
              </div>
              <div className="story">
                <img src={profile} alt="Story" />
                <p>Shabab</p>
              </div>
              <div className="story">
                <img src={profile} alt="Story" />
                <p>Shabab</p>
              </div>
              <div className="story">
                <img src={profile} alt="Story" />
                <p>Shabab</p>
              </div>
              <div className="story">
                <img src={profile} alt="Story" />
                <p>Shabab</p>
              </div>
              <div className="story">
                <img src={profile} alt="Story" />
                <p>Shabab</p>
              </div>
              <div className="story">
                <img src={profile} alt="Story" />
                <p>Shabab</p>
              </div>
              <div className="story">
                <img src={profile} alt="Story" />
                <p>Shabab</p>
              </div>
              <div className="story">
                <img src={profile} alt="Story" />
                <p>Shabab</p>
              </div>
            </div>
          </div>
          <div className="feed">
            {this.state.posts.map((item) => {
              const data = item.data();
              //   console.log(data)
              return (
                <div className="reels-wrapper">
                  <div key={data.pId}>
                    <video src={data.uUrl} controls></video>
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
                    <div>
                      <FavoriteBorderIcon style={{ fontSize: "35px" }} />
                      <p>0</p>
                    </div>
                    <div>
                      <AddCommentIcon style={{ fontSize: "35px" }} />
                      <p>0</p>
                    </div>
                    <SendIcon />
                    <BookmarkBorderIcon />
                    <MoreHorizIcon />
                    <img src={profile} alt="profile" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="suggestion-wrapper">
          <div className="profile-div">
            <div className="profile-pic">
              <img src={this.state.user.profileUrl} alt="profile" />
            </div>
            <div className="profile">
              <span className="user-name">itz.ali.shabab</span>
              <span className="profile-name">Shabab Ali</span>
            </div>
            <div className="switch-account">Switch</div>
          </div>
          <div className="suggestion">
            <span>Suggestions for you</span>
            <span>See All</span>
          </div>
          <div className="profile-suggestion-main-wrapper"></div>
          <div className="profile-div-suggestion">
            <div className="profile-pic">
              <img src={profile} alt="profile" />
            </div>
            <div className="profile">
              <span className="user-name">itz.ali.shabab</span>
              <span className="profile-name">Followed by Shabab Ali</span>
            </div>
            <div className="switch-account">Follow</div>
          </div>
          <div className="profile-div-suggestion">
            <div className="profile-pic">
              <img src={profile} alt="profile" />
            </div>
            <div className="profile">
              <span className="user-name">itz.ali.shabab</span>
              <span className="profile-name">Followed by Shabab Ali</span>
            </div>
            <div className="switch-account">Follow</div>
          </div>
          <div className="profile-div-suggestion">
            <div className="profile-pic">
              <img src={profile} alt="profile" />
            </div>
            <div className="profile">
              <span className="user-name">itz.ali.shabab</span>
              <span className="profile-name">Followed by Shabab Ali</span>
            </div>
            <div className="switch-account">Follow</div>
          </div>
          <div className="profile-div-suggestion">
            <div className="profile-pic">
              <img src={profile} alt="profile" />
            </div>
            <div className="profile">
              <span className="user-name">itz.ali.shabab</span>
              <span className="profile-name">Followed by Shabab Ali</span>
            </div>
            <div className="switch-account">Follow</div>
          </div>
          <div className="profile-div-suggestion">
            <div className="profile-pic">
              <img src={profile} alt="profile" />
            </div>
            <div className="profile">
              <span className="user-name">itz.ali.shabab</span>
              <span className="profile-name">Followed by Shabab Ali</span>
            </div>
            <div className="switch-account">Follow</div>
          </div>
        </div>
      </>
    );
  }
}
