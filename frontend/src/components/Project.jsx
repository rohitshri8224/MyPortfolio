import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Data from './Data';
import "./Project.css"
//import img from './image/caard_pic.jpg'

const Project = () => {

    const [spin, setSpin] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setSpin(false)
        }, 1500)
    },[])


    return (
        <>
            {
                spin ? <div className='d-flex justify-content-center align-items-center' style={{height:"90vh"}}>
                    <Spinner animation="border" variant="primary" /> &nbsp;&nbsp; Loading...
                </div> : <div className='container'>
                    <h2 className='text-center mt-2'>Projects</h2>
                    <div className='card_div'>
                        <div className='row d-flex justify-content-around align-items-center'>
                            {
                                Data.map((el, index) => {
                                    return (
                                        <>
                                            <Card style={{ width: '20rem', height: '18rem' }} className='mt-4 mb-4' id="card">
                                                <Card.Img variant="top" style={{ width: '20rem', marginLeft: -13 }} src={el.imgSrc} />
                                                <Card.Body className='d-flex justify-content-center flex-column'>
                                                    <Card.Title className='text-center'>{el.projectName}</Card.Title>

                                                    <Button variant="primary"> <a href={el.demo} className='text-decoration-none text-light' target="_blank">Live demo</a>
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            }


        </>
    )
}

export default Project
