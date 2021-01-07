import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Badge from 'react-bootstrap/Badge';
import DevImage from '../../images/woman-1.jpg';


function Premium (){
    return(
        <div className="container-fluid">
            <div className="row bg-dark mb-4">
                <div className="container">
                    <h2 className="featured-devs-header">Featured Developers</h2>
                    <h3 className="featured-devs-intro">Source active engineers fit for your Team</h3>
                </div>

                <div className="container mt-4 mb-4">
                    <div className="row mt-4">
                        <CardDeck className="col-md-12">
                            <Card className="col-sm-4 bg-dark card-items">
                                <img variant="top" src={DevImage} alt="Developer" className="dev-image" />
                                <Badge className="fa fa-star featured-dev-icon">featured</Badge>
                                

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
                                <img variant="top" src={DevImage} alt="Developer" className="dev-image" />                            
                                <Card.Body>
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
           
        </div>
    );
};

export default Premium;