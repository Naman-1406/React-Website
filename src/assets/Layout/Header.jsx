import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [headerColor, setHeaderColor] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const changeHeaderColorOnScroll = () => {
      setHeaderColor(window.scrollY > 50);
    };

    window.addEventListener('scroll', changeHeaderColorOnScroll);
    return () => {
      window.removeEventListener('scroll', changeHeaderColorOnScroll);
    };
  }, []);

  return (
    <header >
      <div className='fixed-top'>
      <nav className={`navbar navbar-expand-lg navbar-light ${headerColor ? 'header-scrolled' : ''}`} >
        <div className="container-fluid ">
          <h4 className="navbar-brand fs-2 mx-5 text-white" href="#">ONEDER</h4>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white fs-5" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown mx-4">
                <a className="nav-link dropdown-toggle fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About us
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item text-dark" href="#">Team</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Pricing</a></li>
                  <li><a className="dropdown-item text-dark" href="#">FAQ</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-4 fs-5" aria-current="page" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-5 mx-4" aria-current="page" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-5 mx-4" aria-current="page" href="#">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-5 mx-4" aria-current="page" href="#">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-5 mx-4" aria-current="page" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      <div className="container page">
        <div className="row mx-0 mx-0">
          <div className="col-lg-12 my-5 text-center">
            <h3>I'm Creative One Page <br /> Template by Colorlib</h3>
            <button className='btn btn-primary'>Get In Touch</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
