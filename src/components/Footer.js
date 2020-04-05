import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { FaLinkedin, FaGithub } from "react-icons/fa"


const Footer = props => {
    return (
        <div className="bottom">
            
                <Navbar expand="lg" fixed="bottom" variant="dark" bg="dark">
                    <Navbar.Brand target="_blank" href="https://www.linkedin.com/in/anna-dybas/">Anna Dybas < FaLinkedin /> </Navbar.Brand>
                    <Navbar.Brand className="mx-auto order-0" target="_blank" href="">Github Repo <FaGithub /> </Navbar.Brand>
                </Navbar>
            
        </div>
    )
 } 

 export default Footer 