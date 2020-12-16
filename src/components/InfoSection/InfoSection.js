import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import colleages from '../../images/new-employee-removebg.png';
import DevImage from '../../images/woman-1.jpg';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import './InfoSection.css';

function Infosection() {
    return(
        <Container fluid >
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
                        <Card className="col-sm-4 ">
                            <img variant="top" src={DevImage} alt="Developer" className="dev-image" />
                            <Card.Body>
                                <Card.Title>Nyayic Fanny</Card.Title>
                                <Card.Text>Frontend Developer
                                <button className="view-profile-btn">VIEW PROFILE</button> 

                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card className="col-sm-4">
                            <img variant="top" src={DevImage} alt="Developer" className="dev-image" />                            
                            <Card.Body>
                                <Card.Title>Mark Ssebuliba</Card.Title>
                                <Card.Text>Project Manager
                                <button className="view-profile-btn">VIEW PROFILE</button> 

                                </Card.Text>
                                
                            </Card.Body>
                        </Card>

                        <Card className="col-sm-4">
                            <img variant="top" src={DevImage} alt="Developer" className="dev-image" />                            <Card.Body>
                            <Card.Title>David Wampamba</Card.Title>
                            <Card.Text>Fullstack Developer
                            <button className="view-profile-btn">VIEW PROFILE</button> 

                            </Card.Text>
                            </Card.Body> 
                        </Card>
                    </CardDeck>
                </div>
            </div>
                
        </div>
   
    </Container>
    );
}
export default Infosection;
