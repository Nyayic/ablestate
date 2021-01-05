import React from 'react';
import Screening from '../../images/job-interview-bg.png';

function Developers(){
    return(
        <div className="container-fluid bg-light">
            <div className="row bg-light">
                <div className="container mt-4 mb-4 jumbotron bg-white">
                    <div className="row">
                        <div className="col-md-4">
                            <h1>GET DISCOVERED WITH YOUR ABLESTATE RESUME</h1>
                            <p>Get hired right away for the job you deserve</p>
                        </div>
                        <div className="col-md-8">
                            <img src={Screening} className="img-fluid" alt="Interview"/>
                        </div>
                    </div>

                </div>
                <div className="container mt-4 mb-4  bg-white">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Please complete your profile</h1>
                            <div className="form col">
                                <label for="name">Your Name</label>
                                <input type="text" className="form-control"/>
                                <label for="role">Prefered Role</label>
                                <input type="text" className="form-control"/>
                                <label for="phone">Phone Number</label>
                                <input type="text" className="form-control"/>
                                <label for="location">Location</label>
                                <input type="text" className="form-control"/>
                                <label for="name">Prefered Photo</label>
                                <input type="text" className="form-control"/>
                                <label for="name">URL</label>
                                <input type="link" className="form-control"/>
                                <label for="skill">Skills</label>
                                <input type="text" className="form-control"/>
                                <label for="pitch">Your Pitch</label>
                                <input type="text" className="form-control"/>
                                <label for="name">Profile Content</label>
                                <input type="textarea" className="form-control"/>
                                <input type="button" className="btn btn-primary mt-4 form-control" value="Create profile"/>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Developers;