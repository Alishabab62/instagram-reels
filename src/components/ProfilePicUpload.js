import React, { Component } from 'react'
import Input from './Input'
import CloseIcon from "@mui/icons-material/Close";
// import { getAuth} from "firebase/auth";
import {ref, uploadBytesResumable , getDownloadURL} from 'firebase/storage'
import {database , storage } from '../firesbase';
import { addDoc } from 'firebase/firestore';
import {v4 as uuidv4} from 'uuid'
// const auth = getAuth();
export default class ProfilePicUpload extends Component {
  constructor(){
    super()
    this.state = {
      file:[],
      users:{}
    }
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
    let uid = uuidv4();
    let tempFile = this.state.file[0];
    const uploadRef = ref(storage, `/users/${uid}/ProfileImage`);
    const uploadTask = uploadBytesResumable (uploadRef , tempFile );
    const error = (error) => {
      console.log(error);
    };
    const complete = () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        let obj = {
          email:this.state.users.email,
          userId : uid,
          fullName : this.state.users.displayName,
          profilerl:downloadURL,
          createdAt: Date.now(),
        };      
        console.log(obj)
        addDoc(database.users, obj ).then((res)=>{
          console.log(res)
        })
      });

    };
    uploadTask.on("state_changed" , uploading , error, complete)
  function uploading  (snapshot){
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
    }
  }



  render() {
    return (
      <div className='profile-edit-container'>
        <CloseIcon className="close-icon" onClick={this.props.fun} />
        <Input type={"file"} name={"file"} handleInputs={this.handleInputs}/>
      </div>
    )
  }
}
// fix this code and provide new code