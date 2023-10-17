import React from 'react';
import payment from '../Assets/payment.png';

function Footer() {
  return (
   <div>
        <div className='bg-light mt-5 pt-3'>
        {/* get in touch mail id */}
        <div className='container'>
            <div className='row gap-2'>
                <div className='col-lg'>
                    <div className='card border border-0 bg-light'>
                        <h4>Get In Touch</h4>
                        <p>Be the first to know when new products drop and stay tuned</p>
                    </div>
                </div>

                <div className='col-lg'>
                    <div className='card border border-0 bg-light'>
                        <label>Enter your email address:</label>
                        <section class="input-group mb-3">
                        <span class="input-group-text"><i className="fa-solid fa-user"></i></span>
                        <input type="text" class="form-control" placeholder='user@email.com' aria-label="Amount" />
                        <span class="input-group-text bg-primary"><i class="fa-solid fa-paper-plane text-light"></i></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        {/* Followus and Payment pic details*/}
        
        <div className='container mt-4 bg-light'>
        <hr />
        <div className='row gap-2 mt-4'>
            <div className='col-lg'>
                <div className='card border border-0 bg-light'>
                    <h6>Follow Us:
                    
                    <i class="fa-brands fa-facebook-f ms-3 text-primary"></i>
                    <i class="fa-brands fa-twitter ms-3 text-primary"></i>
                    <i class="fa-brands fa-linkedin ms-3 text-primary"></i>
                    <i class="fa-brands fa-instagram ms-3 text-primary"></i>
                    <i class="fa-brands fa-whatsapp ms-3 text-primary"></i>
                    </h6>
                </div>
            </div>
            
            <div className='col-lg bg-light'>
            <h6>We Accept:
                <img src={payment} placeholder='payment image'/>
            </h6>
        </div>
        <hr />
        </div>
    </div>
    {/* Categories List */}
            <div className='container bg-light'>
                <footer className='row gap-3'>
                    <div className='col'>
                        <h4>Categories</h4>
                        <ul class = "list-unstyled">
                            <li>Outfit</li>
                            <li>Sunglasses</li>
                            <li>Watches</li>
                            <li>Bags</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Information</h4>
                        <ul class = "list-unstyled">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Sitemap</li>
                            <li>FAQs Page</li>
                            <li>Comming Soon</li>
                            <li>404 Page</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>My Account</h4>
                        <ul class = "list-unstyled">
                            <li>Orders</li>
                            <li>Downloads</li>
                            <li>Addresses</li>
                            <li>Account details</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Community</h4>
                        <ul class = "list-unstyled">
                            <li>VR for Good</li>
                            <li>Launch Pad</li>
                            <li>Creators Lab</li>
                            <li>Forums</li>
                            <li>Support</li>
                        </ul>
                    </div>
                </footer>
            </div><br/>
                <div className='text-center'><span>All rights & Developed by charanpratap</span></div>

        </div>   
   </div>
  )
}

export default Footer;