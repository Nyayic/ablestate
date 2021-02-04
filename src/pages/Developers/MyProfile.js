import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import DevImage from '../../images/woman-1.jpg';
import BlogImage1 from '../../images/blog-img1.jpg';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import './MyProfile.css';


function MyProfile(){
    return(
        <div className="container-fluid">
            <div  className="container mt-4">
                <Form >
                    <Form.Row>
                        <Col className="col-sm-10">
                        <Form.Control placeholder="Search....."  />
                        </Col>
                    
                        <Col className="col-sm-2">
                        <img variant="top" src={DevImage} alt="Developer" id="dev-profile-img" />
                        </Col>
                    </Form.Row>
                </Form>
            </div>
            <div className="row">
                <div className="container mt-4 mb-4 jumbotron bg-dark">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="text-light">Nyayic Fanny</h1>
                            <p className="text-light">Project Manager</p>
                        </div>
                    </div>
                    <div className="row mb-0 text-light">
                        <footer>
                            <a href="/" className="profile-icons"> 
                            <i className="fab fa-facebook"></i>
                            </a> 
                            <a href="/" className="profile-icons">
                            <i className="fab fa-linkedin"></i>
                            </a> 
                            <a href="/" className="profile-icons">
                            <i className="fab fa-twitter"></i>
                            </a>
                            <a href="/" className="profile-icons">
                                <i className="fab fa-instagram"></i>
                            </a> 
                            <a href="/" className="profile-icons">
                                <i className="fas fa-phone-alt"></i>
                            </a> 
                        </footer>
                    </div>
                   
                </div>
                <div className="container">
                    <h4 className="text-center">
                        <img variant="top" src={DevImage} alt="Developer" id="dev-profile-img-bottom" />
                        <br/>
                        <i classNam="fas fa-mapmarker-alt"></i>
                        Kampala<br/>
                        <a href="/" className="text-center">
                        <i className="fas fa-globe"></i> fanny.com</a>
                    </h4>
                </div>

                <div className="container mt-4">
                    <p>I am a qualified project manager
                    I am a qualified project manager
                    I am a qualified project manager
                    I am a qualified project manager
                    I am a qualified project manager
                    </p>
                </div>

                <div className="container mt-4 bg-light">
                    <h3 className="text-center">Skills</h3>
                    <ul>
                    <li>I am a qualified project manager</li>
                    <li>I am a qualified project manager</li>
                    <li>I am a qualified project manager</li>
                    <li>I am a qualified project manager</li>
                    <li>I am a qualified project manager</li>
                    <li>I am a qualified project manager</li>
                </ul>
                </div>

                <div className="container mt-4">
                <h3 className="text-center">My Work</h3>
                    <div className="row">
                        <CardDeck className="col-md-12">
                        <Card className="col-sm-4 card-items">
                            <img variant="top" src={BlogImage1} alt="Developer" className="img-fluid" />
                          
                        </Card>
                        <Card className="col-sm-4 card-items">
                            <img variant="top" src={BlogImage1} alt="Developer" className="img-fluid" />                            
                           
                        </Card>

                        <Card className="col-sm-4 card-items">
                            <img variant="top" src={BlogImage1} alt="Developer" className="img-fluid" /> 
                        </Card>
                    </CardDeck>
                    </div>
                
                </div>

                <div className="container mt-4 mb-4 text-center">
                   <button className="btn btn-warning"> Hire Me!</button>
                </div>

            </div>
        </div>
    );
}

export default MyProfile;