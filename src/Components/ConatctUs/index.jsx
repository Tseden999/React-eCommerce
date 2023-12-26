import React from 'react'
import NavBar from '../Navbar'
import { IoCall } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import Footer from '../Footer';

function ContactUS() {
    return (
        <div>
            <NavBar />
            <div className='d-flex p-5'>
                <div>
                    <h2>Get in touch</h2>
                    <p>Want to get in touch? We would love to hear from you. Here`s how you can reach to us....</p>
                </div>

                <img src='/images/contactus.jpeg' className="px-5" height={400}></img>

            </div>
            <div className='d-flex p-5 justify-content-center  '>
                <div className='px-5'>
                    <IoCall />
                    <h4>Talk to Sales</h4>
                    <p>Interested in our DolmuZone? Just pick up the phone
                        to chat with a member of our sales...
                    </p>
                    <h5>+977-9823890097</h5>

                </div>
                <div className='px-5'>
                    <LuMessagesSquare />
                    <h4>Conatct Customer Service</h4>
                    <p>Sometimes you need a little help from our firends. Or a DolmuZone support. Don`t worry...We are here for you. </p>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUS
