import React, { Component } from 'react'
import Input from './Input'
import logo from '../images/instagramlogo.jpg';
import Button from './Button';
import { Link } from 'react-router-dom';
import "../firesbase";
import "../css/Signup.css";
import { getAuth, createUserWithEmailAndPassword , GoogleAuthProvider , signInWithPopup} from "firebase/auth";
const provider = new GoogleAuthProvider();
const auth = getAuth();
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
        };
      }
    
      handleInputs = (e) => {
        if (e.target.name === "Email") {
          this.setState({
            email: e.target.value,
          });
        } else {
          this.setState({
            password: e.target.value,
          });
        }
      };
      
      handleLogin = ()=>{
        createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
          .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem("users", JSON.stringify(user));
          })
          .catch((error) => {
            console.log(error)
          });
      }
      handleLoginWithGoogle = ()=>{
        signInWithPopup(auth,provider).then((result)=>{
            window.location = '/main';
            localStorage.setItem("users", JSON.stringify(result));
        }).catch((error)=>{
            console.log(error)
        })
      }
  render() {
    return (
      <div>
         <div className="signUp-wrapper">
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <div className='sub-heading'>Sign up to see photos and videos from your friends.</div>
            <Input
             type={"email"}
              placeholder={"Mobile number or email address"}
              name="Email"
              handleInputs={this.handleInputs}
            />
            <Input
             type={"text"}
              placeholder={"Full Name"}
              name="name"
              handleInputs={this.handleInputs}
            />
            <Input
             type={"text"}
              placeholder={"Username"}
              name="name"
              handleInputs={this.handleInputs}
            />
            <Input
              type={"password"}
              placeholder={"Password"}
              name="password"
              handleInputs={this.handleInputs}
            />
            <div className="btn-container">
              <Button title="Sign Up" fun={this.handleLogin} />
              <Button
                title="Sign Up with Google"
                fun={this.handleLoginWithGoogle}
              />
            </div>
            <div className="dont-have-account">
              Already have account?<Link to={"/"}>Login</Link>
            </div>
          </div>
      </div>
    )
  }
}
