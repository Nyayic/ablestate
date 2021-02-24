import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import BlogImage1 from '../../images/blog-img1.jpg';
import BlogImage2 from '../../images/blog-img2.jpg';

 function News (){
     return(
         <div>
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

                <div className="row mt-4 mb-4">
                    <div className="container">
                        {/* <h1 className="blog-header">WHAT'S NEW IN TECH</h1> */}
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
         </div>
     );
 }

 export default News;