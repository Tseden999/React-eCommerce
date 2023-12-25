import React from 'react'
import NavBar from '../Navbar'
import { IoCall } from "react-icons/io5";
import Footer from '../Footer';

function ContactUS() {
    return (
        <div>
            <NavBar />
            <div className='d-flex p-5'>
                <div>
                    <h2>Get in touch</h2>
                </div>

                <img src='/images/contactus.jpeg' className="px-5" height={400}></img>

            </div>
            <div>
                <div>
                    <IoCall />
                    <p>Talk to Sales</p>

                </div>
                <div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUS
