import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import colleages from '../../images/new-employee-removebg.png';
import JobInterview from '../../images/job-interview-bg.png';
import JobSearch from '../../images/job-search-bg.png';
import DevImage from '../../images/woman-1.jpg';
import VisaLogo from '../../images/visa-logo.png';
import SearsLogo from '../../images/sears-logo.png';
import YamahaLogo from '../../images/yamaha-logo.png';
import ReutersLogo from '../../images/reuters-logo.png';
// import ToyotaLogo from '../../images/toyota-logo.png';
import SonyLogo from '../../images/sony-logo.png';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import './Homepage.css';

function Homepage() {
    return(
        <Container fluid>
            <Row className="bg-dark intro-row">
                <Col>
                    <h1 className="header">
                        Get acess to <br/> World-class <br/> Technical Talent 
                    </h1>
                    <p className="info-content"> Ablestate connects you to a <br/>
                        whole world of talent and <br/>
                        helps you conduct <br/>
                        assessments on your behalf.
                        <br/>

                    </p>
                    <a href="/signup" className="hiring">Are you hiring?</a>

                </Col>

                <Col>
                    <img src={colleages} className="info-image img-fluid"  alt="Are you hiring?"/>
                </Col>

            </Row>
            
            <div className="row bg-dark">
                <div className="col-md-12 text-center">
                <p className="join-header">
                    Join Thousands of companies hiring through the Ablestate Platform
                </p>
                </div>

                <div  className="container search mt-4">
                    <Form >
                        <Form.Row className="row-items">
                            <Col className="col-sm-6">
                            <Form.Control placeholder="Job, Skill, Developer" />
                            </Col>
                            <Col className="col-sm-3">
                            <Form.Control placeholder="Location" />
                            </Col>
                            <Col className="col-sm-3">
                            <Button type="submit" className="btn btn-dark">Search Talent</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </div>

            </div>
            
            <div className="row bg-dark">
                <div className="container">
                    <h2 className="featured-devs-header">Featured Developers</h2>
                    <h3 className="featured-devs-intro">Source active engineers fit for your Team</h3>
                </div>
                {/* Featured developers start here */}
                <div className="container">
                    <div className="row mt-4">
                    <CardDeck className="col-md-12">
                        <Card className="col-sm-4 card-items">
                            <img variant="top" src={DevImage} alt="Developer" className="dev-image" />
                            <Card.Body>
                                <Card.Title className="text-center text-light">
                                    <b>Nyayic Fanny</b>
                                </Card.Title>
                                <Card.Text className="text-center text-light">Frontend Developer <br/><br/>
                                <button className="view-profile-btn">VIEW PROFILE</button> 

                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card className="col-sm-4 card-items">
                            <img variant="top" src={DevImage} alt="Developer" className="dev-image" />                            
                            <Card.Body>
                                <Card.Title className="text-center text-light">
                                    <b>Mark Ssebuliba</b>
                                </Card.Title>
                                <Card.Text className="text-center text-light"> Project Manager <br/><br/>
                                <button className="view-profile-btn">VIEW PROFILE</button> 

                                </Card.Text>
                                
                            </Card.Body>
                        </Card>

                        <Card className="col-sm-4 card-items">
                            <img variant="top" src={DevImage} alt="Developer" className="dev-image" />                            <Card.Body>
                            <Card.Title className="text-center text-light"><b>David Wampamba</b></Card.Title>
                            <Card.Text className="text-center text-light">Fullstack Developer <br/><br/>
                            <button className="view-profile-btn">VIEW PROFILE</button> 

                            </Card.Text>
                            </Card.Body> 
                        </Card>
                    </CardDeck>
                </div>

                {/* Featured developers end here */}

                <div className="col-md-12 text-center">
                    <button className="all-premium">SEE ALL PREMIUM</button>
                </div>

                {/* All developers start here */}
                <div className="container">
                    <div className="row mt-4">
                    <CardDeck className="col-md-12">
                        <Card className="col-sm-4 card-items">
                            <img variant="top" src={DevImage} alt="Developer" className="dev-image" />
                            <Card.Body>
                                <Card.Title className="text-center text-light">
                                    <b>Nyayic Fanny</b>
                                </Card.Title>
                                <Card.Text className="text-center text-light">Frontend Developer <br/><br/>
                                <button className="view-profile-btn">VIEW PROFILE</button> 

                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card className="col-sm-4 card-items">
                            <img variant="top" src={DevImage} alt="Developer" className="dev-image" />                            
                            <Card.Body>
                                <Card.Title className="text-center text-light">
                                    <b>Mark Ssebuliba</b>
                                </Card.Title>
                                <Card.Text className="text-center text-light"> Project Manager <br/><br/>
                                <button className="view-profile-btn">VIEW PROFILE</button> 

                                </Card.Text>
                                
                            </Card.Body>
                        </Card>

                        <Card className="col-sm-4 card-items">
                            <img variant="top" src={DevImage} alt="Developer" className="dev-image" />                            <Card.Body>
                            <Card.Title className="text-center text-light"><b>David Wampamba</b></Card.Title>
                            <Card.Text className="text-center text-light">Fullstack Developer <br/><br/>
                            <button className="view-profile-btn">VIEW PROFILE</button> 

                            </Card.Text>
                            </Card.Body> 
                        </Card>
                    </CardDeck>
                </div>
                {/* All developers end here */}

                <div className="col-md-12 text-center">
                    <button className="all-premium">SEE ALL MEMBERS</button>
                </div>

            </div>

            </div>

            
            
            {/* How it works starts here */}
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-md-12 bg-light">
                        <p className="work-intro text-center">How it works</p>
                        <h1 className="work-header text-center">Go beyond Traditional Hiring</h1>
                        <img src={JobSearch} className="job-search-img img-fluid" alt="How it works"/>
                    </div>
                </div>
                
                <div className="row bg-light">
                    <div class="col-sm-4 text-center">
                        <h3><b>Browse</b></h3>
                        <p>Discover your next hire from our<br/> pool of assertive technical <br/>candidates who are <br/>ready to work.</p>
                    </div>
                    <div class="col-sm-4 text-center">
                        <h3><b>Assess</b></h3>
                        <p>Evaluate candidates <br/>and determine whether <br/>they  have values <br/>similar to your team.</p>
                    </div>
                    <div class="col-sm-4 text-center">
                        <h3><b>Hire</b></h3>
                        <p>Seamlessly connect with <br/> your  candidate of choice<br/> and hire right away.<br/>No third party required</p>
                    </div>
                </div>


                <div className="col-md-12 text-center">
                    <a href="/developers" className="partner-link">HIRE NOW</a>
                </div>

            </div>

            {/* How it works ends here */}

            {/* join premium club starts here */}
            <div className="container-fluid">
            <div className="row bg-light">
                <div className="col-md-12 mt-4 text-right premium">
                    <h2 className="premium-club-header">Join Our Premium Club</h2>
                    <h3 className="premium-club-intro">Spend less time screening</h3>
                </div>
            </div>

            <div className="row bg-light">
                <div className="col-sm-6">
                    <h2 className="premium-club-header2">Looking for <br/>the right job?</h2>
                    <p className="premium-club-content">Negotiating the right terms of <br/>employment can be difficult, 
                        let us <br/>save you the hassle of finding the <br/>right employer fit for your needs.
                    <br/>
                    </p>
                    <a href="/signup" className="premium-club-link">Join the premium club now</a>
                </div>
                <div className="col-sm-6">
                    <img src={JobSearch} alt="Are Looking for a job?" className="img-fluid"/>
                </div>
            </div>

            <div className="row bg-light">
                
                <div className="col-sm-6">
                    <img src={JobInterview} alt="Hire fully-screened developers" className="img-fluid"/>
                </div>
                <div className="col-sm-6">
                    <h2 className="premium-club-header2">Hire fully-screened <br/>candidates.</h2>
                    <p className="premium-club-content">Let us make a difference in your hiring by granting you access to our premium pool of talent making it more meaningful and personal.

                    </p>
                    <a href="/signup" className="premium-club-link">Learn more</a>
                </div>
            </div>

            </div>
            
            {/* join premium club ends here */}

            {/* Partners section starts here */}
            <div className="container-fluid bg-white">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-center partner-header mt-4">
                            Trusted by <a href="/employers" className="partner-link">startups</a> and the world's 
                            <a href="/employers" className="partner-link"> largest companies</a>
                        </h2>
                    
                    </div>
                    <div className="col-sm-4">
                        <img src={VisaLogo} alt="Partner" className="partner-logos img-fluid"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={SearsLogo} alt="Partner" className="partner-logos img-fluid"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={SonyLogo} alt="Partner" className="partner-logos img-fluid"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={ReutersLogo} alt="Partner" className="partner-logos img-fluid"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={YamahaLogo} alt="Partner" className="partner-logos img-fluid"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={VisaLogo} alt="Partner" className="partner-logos img-fluid"/>
                    </div>
                </div>
            </div>

            </div>

           
   
        </Container>
    );
}
export default Homepage;
