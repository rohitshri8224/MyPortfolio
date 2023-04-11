import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import Axios from "axios";
import FileDownload from "js-file-download"

// import resume from "../resume/My_resume_rohit.pdf"

const Header = () => {

    const downloadFile = (e) => {
        e.preventDefault();
        Axios({ 
            url: "http://localhost:6002/download",
            method: "GET",
            responseType: "blob"
        }).then((res) => {
            console.log(res)
            FileDownload(res.data, "downloaded.pdf")
        })
    }

  

    const common = {
        marginRight: 15,
        fontSize: 17,
        letterSpace: ".5px",
       
       
    }
    return (
        <>
            <Navbar bg="light" variant="light"  style={{ color: "#6c63ff", position : "sticky",top:"0" }}>
                <Container>
                    <div>
                        <h2 className='mt-2 h2_right'>
                            <Nav.Link href="#home">Rohit Kumar Shrivastava</Nav.Link>
                        </h2>
                    </div>

                    <Nav className="mt-2">
                        <div>
                            <NavLink to="/" className="text-decoration-none scale" style={common}>Home</NavLink>
                            <NavLink to="/About" className="text-decoration-none scale" style={common}>About</NavLink>
                            <NavLink to="/Project" className="text-decoration-none scale" style={common}>Project</NavLink>
                            <NavLink to="/Contact" className="text-decoration-none scale" style={common}>Contact</NavLink>
                        </div>
                        <div>

                            <Button variant="danger" onClick={downloadFile}>Resume</Button>

                        </div>

                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default Header
