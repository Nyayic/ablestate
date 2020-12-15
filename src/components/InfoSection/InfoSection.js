import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import colleages from '../../images/colleages.jpg';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './InfoSection.css';

function Infosection() {
    return(
        <Container fluid className="bg-dark">
            <Row>
                <Col>
                    <h1 className="header">Get acess to <br/> World-class <br/> Technical Talent </h1>
                    <p className="content"> Ablestate connects you to a <br/>
                        whole world of talent and <br/>
                        helps you conduct <br/>
                        assessments on your behalf.
                    </p>
                    <a href="#signup" className="hiring"> Are you hiring?</a>
                </Col>
                <Col>
                    <img src={colleages} className="info-image" fluid alt="Are you hiring?"/>
                </Col>
            </Row>

            <h2 className="join">Join Thousands of companies hiring through the Ablestate Platform</h2>
            
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

            <div className="container">
                <h2 className="featured-devs-header">Featured Developers</h2>
                <h3 className="featured-devs-intro">Source active engineers fit for your Team</h3>
            </div>
            
        </Container>
    );
}
export default Infosection;
