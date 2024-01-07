/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faCcDinersClub } from '@fortawesome/free-brands-svg-icons';
import { Row, Col, Carousel } from 'react-bootstrap';
import './az.css';

function Login() {
    let imgsrc = require('../assets/poss.png');
  return (
    <div style={{marginTop:'40px', border: '10px solid black', borderRadius: '5px'}} className='container'>
        <Row>
        <Col  style={{ backgroundColor:'#f5f5f3',}}>
                <b><p style={{marginRight:'290px'}}>
                 <FontAwesomeIcon icon={faCcDinersClub} style={{marginRight:'20px'}} />SmartPOS</p></b>
                <div className='img'>
                    <img src={imgsrc} alt='pos'></img>
                </div><br></br>
                <b><p>Manage sales, inventory and other transactions</p></b>
                
               <Row>
                <Carousel className="circular-carousel">
                    <Carousel.Item>1</Carousel.Item>
                    <Carousel.Item>2</Carousel.Item>
                    <Carousel.Item>3</Carousel.Item>
                </Carousel>
               </Row>
                
            </Col>
            <Col style={{}}>
                <h4 style={{marginRight:'270px'}}>Welcome Back</h4>
                <p style={{marginRight:'280px'}}>Sign in to continue</p>
                <input type="text" placeholder="Enter your name"></input><br></br>
                <input type="password" placeholder="Password"></input><br></br>
                <div style={{background:'#F8D352', width:'100%'}} className='btn'>Sign in</div>
                <p>or</p>


                <div style={{borderColor:'#F5F5F3', width:'40%', marginRight:'10%'}} className='btn'>
                    <FontAwesomeIcon icon={faGoogle}/> Sign up with Google</div>
                <div style={{borderColor:'#F5F5F3', width:'40%'}} className='btn'>
                    <FontAwesomeIcon icon={faFacebook} style={{}}/> Sign up with Facebook</div><br></br>


                <a style={{marginBottom:'15px'}} href='#'>Forgot password</a><br></br>
                <p>Dont have an account?<a style={{color:'black'}} href='#'>Sign Up</a></p>
                <p style={{marginTop:'140px'}}>&copy; 2020 SmartPOS Apps</p>   
            </Col>
        </Row>
    </div>
  );
};

export default Login;