import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row mx-0 mx-0">
            <div className="col-lg-9">
              <div className="row mx-0 mx-0">
                <div className="col-lg-5">
                  <h2 className="footer-heading mb-4">About Us</h2>
                  <p className="lorem ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
                </div>
                <div className="col-lg-3 ml-auto">
                  <h2 className="footer-heading mb-4">Quick Links</h2>
                  <ul className="list-unstyled">
                    <li className="smoothscroll">About Us</li>
                    <li  className="smoothscroll">Services</li>
                    <li  className="smoothscroll">Testimonials</li>
                    <li className="smoothscroll">Contact Us</li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <h2 className="footer-heading mb-4 mx-5">Follow Us</h2>
                  <ul className='d-flex icons'>
                        <li className='mx-3'><i class="fa-brands fa-facebook-f"></i></li>
                        <li className='mx-4'><i class="fa-brands fa-twitter"></i></li>
                        <li className='mx-4'><i class="fa-brands fa-instagram"></i></li>
                        <li className='mx-2'><i class="fa-brands fa-linkedin-in"></i></li>
                    </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h2 className="footer-heading mb-4 mx-5">Subscribe Newsletter</h2>
              <form action="#" method="post" className="footer-subscribe">
                <div className="input-group mb-3 mx-5">
                  <input type="text" className="form-control border-secondary text-white bg-transparent rounded-pill" placeholder="Enter Email    " aria-label="Enter Email" aria-describedby="button-addon2"/>
                  <div className="input-group-append">
                    <button className="btn btn-primary text-black me-2" type="button" id="button-addon2">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row mx-0 mx-0 pt-5 mt-5 text-center">
            <div className="col-lg-12">
              <div className="border-top pt-5">
                <p className='fs-5'>
                Copyright ©2024 All rights reserved | This template is made with ❤ by <span className='fs-5 text-white'>Colorlib</span>
              </p>
          
              </div>
            </div>
            
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
