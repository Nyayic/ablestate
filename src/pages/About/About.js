import React from 'react';
import BNavbar from '../../components/Navbar/Navbar';

import BusinessPartner from '../../images/business-partner-bg.png';


function About() {
    return (
        <div>
            {/* How it works starts here */}
            <div className="container-fluid bg-light">
                <BNavbar />
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
        </div>
    );
}

export default About;
