import React, { Component } from "react";
import { database } from "../firesbase";
import { getDocs } from "firebase/firestore";

import Sidebar from "./Sidebar";
export default class Explore extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    getDocs(database.posts)
      .then((res) => {
        this.setState({
          posts: res.docs,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <div>
        <Sidebar />
        <div className="main-explore-wrapper">
          <div className="wrapper">
            {this.state.posts.map((item) => {
              const data = item.data();
              return (
                <div className="child">
                  <video src={data.uUrl} controls></video>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
