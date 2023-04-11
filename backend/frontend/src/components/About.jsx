import React from 'react';
import profile from "./image/profile_img.jpeg";
import "./About.css"

const About = () => {
    return (
        <>
            <div className='container mb3 about_container' style={{ minHeight: "100%" }}>
                <div className='container main_container d-flex justify-content-around flex-wrap'>
                    <div className='left_container mt-5;' style={{ width: 500,marginTop:"5%", marginLeft:"-10%"}}>
                        <h2>Meet Rohit Kumar Shrivastava</h2>
                        <p style={{color:"#666",letterSpacing:".5px",marginTop:2}}>Hello, I am Rohit Kumar Shrivastava from Jabalpur Madhya Pradesh, I am a backend developer I have completed my graduation from St.Aloysius College Jabalpur in Bsc (Biology), I am a trainee at FunctionUp. My technical Skills is Javascript, Node.js, MongoDb, React, Git, Postman </p>
                    </div>
                    <div className='right_container mt-3'>
                    <img src= {profile} alt='profile'/>
                       </div>
                </div>
            </div>
        </>
    )
}

export default About;
