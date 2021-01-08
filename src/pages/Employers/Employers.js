import React from 'react';
import Screening from '../../images/job-interview-bg.png';

function Employers(){
    return(
        <div className="container-fluid bg-light">
            <div className="row bg-light">
                <div className="container mt-4 mb-4 jumbotron bg-white">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className="top-header">WELCOME ABLESTATE'S CUSTOM POOL</h1>
                            <p className="top-text">Our talent advisors will
                            be in touch to discuss
                            your tech recruiting
                            needs.Our talent advisors will
                            be in touch to discuss
                            your tech recruiting
                            needs.Our talent advisors will
                            be in touch to discuss
                            your tech recruiting
                            needs.</p>
                        </div>
                        <div className="col-md-8">
                            <img src={Screening} className="img-fluid" alt="Interview"/>
                        </div>
                    </div>

                </div>
                <div className="container mt-4 mb-4  bg-white">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="header-text">Please complete this short form</h1>
                            <div className="form col">
                                <label for="name">Your company Name</label>
                                <input type="text" className="form-control"/><br/>
                                <label for="role">Choose your next Hire(s)</label>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label for>Number of developers</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="col-sm-4">
                                        <label for>Job Type(s)</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="col-sm-4">
                                        <label for>Required Skill(s)</label>
                                        <input type="text" className="form-control"/><br/>
                                        <input type="button" value="Add" className="create-profile-btn  btn mr-4"/>
                                    </div>
                                </div>
                                <label for="name">Your Name</label>
                                <input type="text" className="form-control"/>
                                <label for="phone">Phone Number</label>
                                <input type="text" className="form-control"/>
                                <label for="location">Location</label>
                                <input type="text" className="form-control"/>
                                <label for="name">Email address</label>
                                <input type="text" className="form-control"/>
                                <label for="name">Description</label>
                                <input type="textarea" className="form-control"/>
                                <input type="button" className="create-profile-btn mt-4 form-control" value="submit"/>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Employers;