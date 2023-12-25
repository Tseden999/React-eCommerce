import React from 'react'
import { Navbar } from 'react-bootstrap'
import NavBar from '../Navbar'
import Footer from '../Footer'

const AboutUs = () => {
    return (

        <div>
            <NavBar />
            <div className="bg-dark text-light d-flex justify-content-center align-items-center bannerImage" style={{ backgroundImage: 'url("/images/Brown and Beige Minimalist fashion Banner.jpg")' }}>
                <h1 className='AboutUs'>About us</h1>

            </div>
            <div className='d-flex mt-5'>
                <div className='w-50 p-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam unde saepe accusamus expedita deleniti tempore sapiente beatae nam incidunt modi, quod in.
                        Eum ad distinctio dignissimos asperiores, rem fugiat totam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam unde saepe accusamus expedita deleniti tempore sapiente beatae nam incidunt modi, quod in.
                        Eum ad distinctio dignissimos asperiores, rem fugiat totam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam unde saepe accusamus expedita deleniti tempore sapiente beatae nam incidunt modi, quod in.
                        Eum ad distinctio dignissimos asperiores, rem fugiat totam.</p>

                </div>
                <div className='w-50'>
                    <img src='/images/aboutus.jpeg' ></img>
                </div>
            </div>
            <div className='d-flex p-5' >
                <div className='w-50'>
                    <img src='/images/aboutus2.jpeg' ></img>
                </div>
                <div className='w-50'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam temporibus ullam et recusandae, eius tenetur, cum accusamus minima eveniet excepturi
                        possimus libero nobis, exercitationem sequi soluta commodi ab ipsa quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam unde saepe accusamus expedita deleniti tempore sapiente beatae nam incidunt modi, quod in.
                        Eum ad distinctio dignissimos asperiores, rem fugiat totam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam unde saepe accusamus expedita deleniti tempore sapiente beatae nam incidunt modi, quod in.
                        Eum ad distinctio dignissimos asperiores, rem fugiat totam.</p>

                </div>
            </div>
            <Footer />
        </div>

    )
}

export default AboutUs
