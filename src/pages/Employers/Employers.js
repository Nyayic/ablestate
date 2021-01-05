import React from 'react';
import Screening from '../../images/job-interview-bg.png';

function Employers(){
    return(
        <div className="container-fluid bg-light">
            <div className="row bg-light">
                <div className="container mt-4 mb-4 jumbotron bg-white">
                    <div className="row">
                        <div className="col-md-4">
                            <h1>WELCOME ABLESTATE'S CUSTOM POOL</h1>
                            <p>VOur talent advisors will
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
                            <h1>Please complete this short form</h1>
                            <div className="form col">
                                <label for="name">Your company Name</label>
                                <input type="text" className="form-control"/>
                                <label for="role">choose your next hire(s)</label>
                                <input type="text" className="form-control"/>
                                <label for="name">Your Name</label>
                                <input type="text" className="form-control"/>
                                <label for="phone">Phone Number</label>
                                <input type="text" className="form-control"/>
                                <label for="location">Location</label>
                                <input type="text" className="form-control"/>
                                <label for="name">email address</label>
                                <input type="text" className="form-control"/>
                                <label for="name">description</label>
                                <input type="textarea" className="form-control"/>
                                <input type="button" className="btn btn-primary mt-4 form-control" value="submit"/>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Employers;