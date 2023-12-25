import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

import React from 'react'

const Footer = () => {
    return (
        <div className="d-flex justify-content-around bg-dark text-light p-5" >
            <div>
                <h4>LOGO</h4>
                <p>Unleash your Beauty Here!!!</p>
            </div>
            <div>
                <h4>Products Link</h4>
                <div className="d-flex flex-column ">
                    <a className="text-decoration-none" href=''>Categories</a>
                    <a className="text-decoration-none" href=''>New Arrivals</a>
                </div>
            </div>
            <div>
                <h4>About Us </h4>
                <div className="d-flex flex-column ">
                    <a className="text-decoration-none" href='' >Contact </a>
                    <a className="text-decoration-none" href='' >Services</a>
                </div>
            </div>
            <div>
                <h4>Get in touch</h4>
                <div className="d-flex gap-3 justify-content-center">
                    <FaFacebookSquare />
                    <FaYoutube />
                    <FaInstagram />
                    <FaTwitterSquare />
                </div>
            </div>

        </div>
    )
}

export default Footer
