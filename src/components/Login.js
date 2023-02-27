import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import "pure-react-carousel/dist/react-carousel.es.css";
import Img1 from "../images/Images1.png";
import Img2 from "../images/Images2.png";
import Img3 from "../images/Images3.png";
import Img4 from "../images/Images4.png";
import logo from "../images/instagramlogo.jpg";
import "../css/Login.css";
import "../firesbase";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

export default class Login extends Component {
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

  handleLogin = () => {
    signInWithEmailAndPassword(
      auth,
      this.state.email,
      this.state.password
    )
      .then((userCredential) => {
        window.location.href = '/main'
        const user = userCredential.user;
        localStorage.setItem("users", JSON.stringify(user));
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        window.location.href = '/main'
        const user = result.user;
        localStorage.setItem("users", JSON.stringify(user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="login-main-wrapper">
          <div className="carousel-wrapper">
            <div className="img">
            <CarouselProvider
              totalSlides={4}
              visibleSlides={1}
              naturalSlideHeight={580}
              naturalSlideWidth={330}
              isPlaying={true}
              interval={5000} // increase interval time to reduce load on page
              dragEnabled={false}
              infinite={true}
              touchEnabled={false}
            >
              <Slider >
                <Slide index={0} style={{height:"100%"}}>
                  <Image  src={Img1} alt="Image 1" />
                </Slide>
                <Slide index={1} style={{height:"100%"}}>
                  <Image  src={Img2} alt="Image 2" />
                </Slide>
                <Slide index={2} style={{height:"100%"}}>
                  <Image src={Img3} alt="Image 3" />
                </Slide>
                <Slide index={3} style={{height:"100%"}}>
                  <Image src={Img4} alt="Image 4" />
                </Slide>
              </Slider>
            </CarouselProvider>
            </div>
          </div>
          <div className="login-wrapper">
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <Input
              type={"email"}
              placeholder={"Phone number username or email address"}
              name="Email"
              handleInputs={this.handleInputs}
            />
            <Input
              type={"password"}
              placeholder={"Password"}
              name="password"
              handleInputs={this.handleInputs}
            />
            <div className="btn-container">
              <Button title="Log in" fun={this.handleLogin} />
              <Button
                title="Log in with Google"
                  fun={this.handleLoginWithGoogle}
              />
            </div>
            <div className="dont-have-account">
              Don't have an Account ?<Link to={"/signup"} >Sign Up</Link>
            </div>
          </div>
        </div>
        <div className="footer-wrapper">
          <div className="footer-tabs"></div>
          <div className="copyright">
            {/* © {new Date().getFullYear()} Shabab Ali. All rights reserved. */}
          </div>
        </div>
      </div>
    );
  }
}
