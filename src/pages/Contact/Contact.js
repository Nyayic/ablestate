import React from 'react';
import './Contact.css';

 function Contact (){
     return(
        <div className="container-fluid bg-light">
            <div className="row bg-light">
                <div className="container mt-4 mb-4 jumbotron bg-white">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="top-header"> CONTACT FORM</h1>
                            <p>Our talent advisors will
                            be in touch to discuss your tech recruiting needs.</p>
                        </div>
                        <div className="col-md-12 contact-form">
                            <div className="row">
                                <input type="email" placeholder="Enter your email" required className="form-control"/><br/><br/><br/>
                                <input type="text" placeholder="Subject" required className="form-control"/><br/><br/><br/>
                                <input type="textarea" placeholder="Type your message" required className="form-control textarea"/>
                                <input type="button" value="Send" className="send-btn form-control"/><br/><br/><br/>
                                
                            </div>
                        </div>
                       
                    </div>

                </div>
        
            </div>
        </div>
    );
}

export default Contact;