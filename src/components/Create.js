import React, { Component } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Input from "./Input";
import { v4 as uuidv4 } from "uuid";
import { LinearProgress } from "@mui/material";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "../css/MainPage.css";
import { storage, database } from "../firesbase";
import { addDoc } from "firebase/firestore";

// const storage = getStorage();
export default class Create extends Component {
  constructor() {
    super();
    this.state = {
      file: [],
      loader: false,
      users: {},
    };
  }
  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    this.setState({
      users: users,
    });
  }
  handleInputs = (e) => {
    if (e.target.name === "file") {
      console.log(e.target.files[0].name);
      this.setState({
        file: this.state.file.push(e.target.files[0]),
      });
    }
    this.setState({
      loader: true,
    });
    let uid = uuidv4();
    let tempFile = this.state.file[0];
    console.log(tempFile);
    const uploadRef = ref(storage, `/posts/${uid}/${tempFile}`);
    const uploadTask = uploadBytesResumable(uploadRef, tempFile);

    const error = (error) => {
      console.log(error);
    };

    const complete = () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        this.setState({
          loader: false,
        });
        let obj = {
          likes: [],
          comments: [],
          pId: uid,
          uUrl: downloadURL,
          uName: this.state.users.displayName
            ? this.state.users.displayName
            : this.state.users.email,
          uProfileImage: this.state.users.photoURL
            ? this.state.users.photoURL
            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==",
          createdAt: Date.now(),
        };
        addDoc(database.posts, obj ).then((res)=>{
          console.log(res)
        })
      });

    };

    uploadTask.on("state_changed", uploading, error, complete);
    function uploading(snapshot) {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
    }
  };

  render() {
    return (
      <div className="create-wrapper">
        <CloseIcon className="close-icon" onClick={this.props.fun} />
        <div className="input-wrapper">
          <Input
            type={"file"}
            accept="video/*"
            name={"file"}
            handleInputs={this.handleInputs}
          />
          {this.state.loader ? <LinearProgress /> : ""} 
        </div>
      </div>
    );
  }
}
