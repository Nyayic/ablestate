import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Button  from 'react-bootstrap/Button';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './Premium.css';
// import Pagination from "react-js-pagination";

import Badge from 'react-bootstrap/Badge';
import DevImage from '../../images/woman-1.jpg';
             


function Premium (){
    // constructor(props){
    //     super(props);
    //     this.state = {
    //       activePage: 15
    //     };
    //   }
     
    //   handlePageChange(pageNumber) {
    //     console.log(`active page is ${pageNumber}`);
    //     this.setState({activePage: pageNumber});
    //   }

    return(
        <div className="container-fluid">
            <div  className="container  mt-4">
                <Form >
                    <Form.Row className="row-items">
                        <Col className="col-sm-4">
                            <label>What?</label>
                        <Form.Control placeholder="Job, Skill, Developer" />
                        </Col>
                        <Col className="col-sm-4">
                            <label>Where?</label>
                        <Form.Control placeholder="Location" />
                        </Col>
                        <Col className="col-sm-2 mt-2">
                            <br/>
                        <Button type="submit" className="btn btn-dark form-control">Find Talent</Button>
                        </Col>
                        <Col className="col-sm-2 mt-2">
                            <br/>
                        <p>Popular Searches</p>
                        </Col>
                    </Form.Row>
                </Form>

                <Form >
                    <Form.Row className="row-items">
                        <Col className="col-sm-4">
                            <DropdownMultiselect placeholder="Title"
                            options={["Fullstack Developer", "Frontend Developer", "Junior Software Developer", 
                            "Senior Software Engineer", "IT Specialist", "Data Scientist"]}
                            name="title"/>
                        </Col>
                        <Col className="col-sm-4">
                        <DropdownMultiselect placeholder="Skills"
                            options={["HTML", "CSS", "Python", "Javascript", "Go", "Vue JS",
                            "React JS", "Git & Github", "Swift"]}
                            name="skills" /> 
                            
                        </Col>
                        <Col className="col-sm-4 ">
                        <DropdownMultiselect placeholder="Category"
                            options={["Web Development", "Android Development", "iOs Development",  "Other"]}
                            name="countries" />                        
                        </Col>
                        
                    </Form.Row>
                    
                </Form>
               
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-5 mt-4">
                        <CardDeck className="dev-card">
                            <Card>
                                <div className="row">
                                    <div className="col">
                                        <img variant="top" src={DevImage} alt="Developer" className="premium-dev-image" /> 
                                    </div>
                                    <div className="col">
                                        <Card.Body className="premium-dev-cardbody">
                                            <h4 className=" text-dark"><b>Nyayic Fanny</b></h4>
                                            <p className="text-dark">Frontend Developer <br/> </p>
                                        </Card.Body>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <Badge className="fa fa-star featured-dev-icon">Featured</Badge>
                                        <p className="bio">So far our company has grown fast and stayed lean to secure its place as a leader in the space</p>
                                    </div>
                                </div> 
                            </Card>
                        </CardDeck>
                    </div>

                    <div className="col-md-7">
                    <CardDeck className=" mt-4">
                            <Card className="bg-light fluid">
                               Display here
                            </Card>
                        </CardDeck>
                    </div>
                    
                    <div className="col-md-5 mt-4 mb-4">
                        <CardDeck>
                            <Card>
                            <div className="row">
                                    <div className="col">
                                        <img variant="top" src={DevImage} alt="Developer" className="premium-dev-image" /> 
                                    </div>
                                    <div className="col">
                                        <Card.Body className="premium-dev-cardbody">
                                            <h4 className=" text-dark"><b>Nyayic Fanny</b></h4>
                                            <p className="text-dark">Frontend Developer <br/> </p>
                                        </Card.Body>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <Badge className="fa fa-star featured-dev-icon">Featured</Badge>
                                        <p className="bio">So far our company has grown fast and stayed lean to secure its place as a leader in the space</p>
                                    </div>
                                </div> 
                            </Card>
                        </CardDeck>
                    </div>
                    

                </div>

            </div>
{/*             
            <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        /> */}
        </div>
                
    );
};

export default Premium;