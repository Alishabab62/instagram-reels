import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import Input from '../components/Input';
import Button from '../components/Button';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Img1 from '../images/Images1.png';
import Img2 from '../images/Images2.png';
import Img3 from '../images/Images3.png';
import Img4 from '../images/Images4.png';
import logo from '../images/instagramlogo.jpg'
import '../App.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='login-main-wrapper'>
          <div className='carousel-wrapper'>
            <CarouselProvider
              totalSlides={4}
              visibleSlides={1}
              naturalSlideHeight={250}
              naturalSlideWidth={516}
              isPlaying={true}
              interval={3000} // increase interval time to reduce load on page
              dragEnabled={false}
              infinite={true}
              touchEnabled={false}
            >
              <Slider style={{ height: '560px' }}>
                <Slide index={0}>
                  <Image className='img'  src={Img1} alt='Image 1' />
                </Slide>
                <Slide index={1}>
                  <Image className='img'  src={Img2} alt='Image 2' />
                </Slide>
                <Slide index={2}>
                  <Image className='img' src={Img3} alt='Image 3' />
                </Slide>
                <Slide index={3}>
                  <Image className='img' src={Img4} alt='Image 4' />
                </Slide>
              </Slider>
            </CarouselProvider>
          </div>
          <div className='login-wrapper'>
            <div><img src={logo} alt="Logo"/></div>
            <Input type='text' placeholder='Email' />
            <Input type='password' placeholder='Password' />
            <div className='btn-container'>
            <Button title="Log in"/><Button title="Log in with Google"/>
            </div>
            <div className='dont-have-account'>Don't have an Account Sign Up</div>
          </div>
        </div>
        <div className='footer-wrapper'>
          <div className='footer-tabs'></div>
          <div className='copyright'>
            © {new Date().getFullYear()} Shabab Ali. All rights reserved.
          </div>
        </div>
      </div>
    );
  }
}
