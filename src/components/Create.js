import React, { Component } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Input from "./Input";
import { v4 as uuidv4 } from "uuid";
import { LinearProgress } from "@mui/material";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import "../css/MainPage.css";
// import { storage } from '../firesbase';

const storage = getStorage();
export default class Create extends Component {
  constructor() {
    super();
    this.state = {
      file: [],
      loader: false,
    };
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
            loader:false
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
