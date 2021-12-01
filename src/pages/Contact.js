import React from "react";
import Header from "../components/Header";
function Contact() {
  return (
    <div>
      <Header/>
      <div className="container contact mt-5">
        <div className="row pt-5">
          <div className="col-md-6 p-5">
              <img src="./contactus.svg" alt="" />
          </div>
          <div className="col-md-6">
              <div className='contact-form m-2 p-5 n-box2'>
                  <h3 className='font-bold'>Contact Me</h3>

                  <hr />

                  <form action="https://formspree.io/f/xwkyeakz" method="POST" role="form" id="my-form">
            

                      <input type="text" name="name" id="name" className='form-control' placeholder='Name' required />
                      <input type="email"  name="email" id="email" className='form-control' placeholder='Email' required/>  
                      <input type="text"  name="subject" id="subject" className='form-control' placeholder='Subject' required/>
                      <textarea name="message" id="message" className="form-control" rows={3} defaultValue={""}  placeholder='Message' required/>

                
                      <button type = "submit" className='primary-button mt-3'>SUMBIT</button>
                     
                    </form>

                  
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
