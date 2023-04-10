import React from 'react'
import logo from "./image/logo.svg"
import "./Home.css"
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <>
            <div className='container home_container'>
                <div className='home_innerdiv'>
                    <div className='left_div'>
                        <h2>Wellcome to </h2>
                        <h1 style={{ color: "#6c63ff" }} >Rohit Kumar Shrivastava</h1>
                        <h3>Backend Developer</h3>
                        
                        <div className='btn_div mt-4'>
                            <a href='https://github.com/rohitshri8224' >
                                <i class="fa-brands fa-square-github fa-bounce fa-2xl" style= {{marginRight: "5px"}} ></i>
                            </a>
                            <a href='https://www.linkedin.com/in/rohit-shrivastava-62ba031b2' >
                                <i class="fa-brands fa-linkedin fa-bounce fa-2xl"></i>
                            </a>
                        </div>

                    </div>
                    <div className='right_div'>
                        <img src={logo} alt="logo" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
