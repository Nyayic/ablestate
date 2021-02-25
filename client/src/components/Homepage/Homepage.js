import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// images
import Recruit from '../../images/recruit-bg.png';
import JobInterview from '../../images/job-interview-bg.png';
import JobSearch from '../../images/job-search-bg.png';
import Screening from '../../images/screening.jpg';
import BlogImage1 from '../../images/blog-img1.jpg';
import BlogImage2 from '../../images/blog-img2.jpg';
import DevImage from '../../images/woman-1.jpg';


import VisaLogo from '../../images/visa-logo.png';
import SearsLogo from '../../images/sears-logo.png';
import YamahaLogo from '../../images/yamaha-logo.png';
import ReutersLogo from '../../images/reuters-logo.png';
import BusinessPartner from '../../images/business-partner-bg.png';
import SonyLogo from '../../images/sony-logo.png';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BNavbar from '../Navbar/Navbar';

import CardDeck from 'react-bootstrap/CardDeck';
import Badge from 'react-bootstrap/Badge';
import './Homepage.css';

function Homepage() {
    return(
   
        
        <Container fluid>
        <BNavbar />
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
                    <img src={Recruit} className="info-image img-fluid"  alt="Are you hiring?"/>
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
            
            <div className="row bg-dark mb-4">
                <div className="container">
                    <h2 className="featured-devs-header">Featured Developers</h2>
                    <h3 className="featured-devs-intro">Source active engineers fit for your Team</h3>
                </div>
                {/* Featured developers start here */}
                <div className="container-fluid slanted bg-white">
                <div className="container mt-4 mb-4 ">
                    <div className="row mt-4 slanted-items">
                        <CardDeck className="col-md-12">
                            <Card className="col-sm-4 bg-dark ">
                                <img variant="top" src={DevImage} alt="Developer" className="dev-image" />
                                <Badge className="fa fa-star featured-dev-icon">featured</Badge>
                                

                                <Card.Body>
                                    <Card.Title className="text-center text-light">
                                        <b>Nyayic Fanny</b>
                                    </Card.Title>
                                    <Card.Text className="text-center text-light">Frontend Developer <br/><br/>
                                    <a className="view-profile-btn" href="/my-profile">VIEW PROFILE</a> 

                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                            <Card className="col-sm-4 bg-dark card-items">
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

                            <Card className="col-sm-4 bg-dark card-items">
                                <img variant="top" src={DevImage} alt="Developer" className="dev-image" />                            <Card.Body>
                                <Card.Title className="text-center text-light"><b>David Wampamba</b></Card.Title>
                                <Card.Text className="text-center text-light">Fullstack Developer <br/><br/>
                                <button className="view-profile-btn">VIEW PROFILE</button> 

                                </Card.Text>
                                </Card.Body> 
                            </Card>
                        </CardDeck>
                    {/* <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="0,0 100,0 200,200" style="fill:grey;stroke:lightgrey; stroke-width: 2; stroke-dasharray: 0,200,250" />
                    </svg>  */}
                </div>
                
                {/* Featured developers end here */}
          
                
                 </div> 
                   
                </div>


                {/* All developers start here */}
                <div className="container-fluid bg-light">
                    <div className="row mt-4">
                        <div className="container mt-4 mb-4">
                            <div className="row">
                            <div className="col-md-12 text-center">
                                <button className="all-premium">SEE ALL PREMIUM</button>
                            </div>

                            <CardDeck className="col-md-12 mt-4">
                            <Card className="col-sm-4 bg-dark card-items">
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
                        <Card className="col-sm-4 bg-dark card-items">
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

                        <Card className="col-sm-4 bg-dark card-items">
                            <img variant="top" src={DevImage} alt="Developer" className="dev-image" />                            <Card.Body>
                            <Card.Title className="text-center text-light"><b>David Wampamba</b></Card.Title>
                            <Card.Text className="text-center text-light">Fullstack Developer <br/><br/>
                            <button className="view-profile-btn">VIEW PROFILE</button> 

                            </Card.Text>
                            </Card.Body> 
                        </Card>
                    </CardDeck>
                                
                    </div>
                </div>
                    
                </div>
                {/* All developers end here */}

                <div className="col-md-12 text-center">
                    <button className="all-premium">SEE ALL MEMBERS</button>
                </div>

            </div>

            {/* </div> */}

            
            
            {/* How it works starts here */}
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="container mt-4 mb-4">
                        <div className="row">
                            <div className="col-md-12 bg-light">
                            <p className="work-intro text-center">How it works</p>
                            <h1 className="work-header text-center">Go beyond Traditional Hiring</h1>
                            <img src={BusinessPartner} className="how-it-works-img img-fluid" alt="How it works"/>
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
            </div>
                

            </div>

            {/* How it works ends here */}

            {/* join premium club starts here */}
            <div className="container-fluid">
            <div className="row bg-light">
                <div className="container mt-4 mb-4">
                    <div className="row">
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

            </div>
            </div>
                
            
            {/* join premium club ends here */}

            {/* Partners section starts here */}
            <div className="container-fluid bg-white">
                <div className="row mt-4 mb-4">
                    <div className="container">
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
                 {/* partners end here */}

                <hr className="hr-line"></hr>

                {/* Blog section starts */}
                <div className="row mt-4 mb-4">
                    <div className="container">
                        <h1 className="blog-header">WHAT'S NEW IN TECH</h1>
                        <CardDeck className="col-md-12">
                        <Card className="col-sm-4">
                            <img variant="top" src={BlogImage1} alt="Developer" className="img-fluid" />
                            <Card.Body>
                                <Card.Title className="text-dark">
                                    <b>The guide to making it in tech</b>
                                </Card.Title>
                                <Card.Text className="text-dark">Posted by David Wampamba<br/><br/>
                                <button className="view-profile-btn">Read more</button> 

                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card className="col-sm-4">
                            <img variant="top" src={BlogImage2} alt="Developer" className="img-fluid" />                            
                            <Card.Body>
                                <Card.Title className="text-dark">
                                    <b>The guide to making it in tech</b>
                                </Card.Title>
                                <Card.Text className="text-dark"> Posted by Admin<br/><br/>
                                    <button className="view-profile-btn">Read more</button> 

                                </Card.Text>
                                
                            </Card.Body>
                        </Card>

                        <Card className="col-sm-4">
                            <img variant="top" src={BlogImage1} alt="Developer" className="img-fluid" />                            <Card.Body>
                            <Card.Title className="text-dark">
                                <b>The guide to making it in tech</b>
                                </Card.Title>
                            <Card.Text className="text-dark">Posted By David<br/><br/>
                                <button className="view-profile-btn">Read more</button> 

                            </Card.Text>
                            </Card.Body> 
                        </Card>
                    </CardDeck>
                    </div>
                    
                </div>
                {/* Blog section ends */}

                {/* Get hired fast section starts here */}

                <div className="row mt-4 mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2 className="get-hired-header">Get Hired Fast</h2>
                                <p className="get-hired-content">With thousands of employers hiring from our platform, 
                                your ablestate profile is the assured way to set your  tech career in motion. 
                                </p>
                                <button href="/signup" className="get-hired-btn">SIGN UP FOR FREE</button>
                            </div>
                            <div className="col-sm-6 mt-4 mb-4">
                                <img src={Screening} alt="Get hired fast" className="img-fluid"/>
                            </div>

                        </div>
                        
                    </div>
                
                </div>


                {/* Get hired fast ends here */}


            </div>
           

           

            </div>

           
   
        </Container>
    
    );
}
export default Homepage;
