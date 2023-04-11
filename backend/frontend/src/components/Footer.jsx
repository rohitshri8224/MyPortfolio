import React, { useState } from 'react';
import "./Footer.css"

const Footer = () => {


  const year = new Date().getFullYear()

  return (
    <>
      <div className='footer'>
        <div className='container footer_container d-flex justify-content-around flex-wrap'>
          <div className='first mt-5'>
            <h4>Rohit Kumar Shrivastava</h4>
            <p>© {year} Rohit Kumar Shrivastava All rights reserved</p>
            <p className='d-flex'>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            </p>
          </div>
          <div className='seconnd mt-5'>
            <h4>Get in touch</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, adipisci.</p>
            <p>rohitshrivastava8224@gmail.com</p>
            <p>+91 9039716238</p>
          </div>
          <div className='third mt-5'>
            <h4>About</h4>
            <p>Resume</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
