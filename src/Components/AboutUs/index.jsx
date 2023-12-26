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
                    <p>"DolmuZone Clothing is our one-stop destination for
                        stylish and trendy fashion. Our online platform offers a curated collection of high-quality clothing
                        items, ranging from casual wear to elegant ensembles, ensuring that you can find the
                        perfect outfit for any occasion. Explore our user-friendly website, featuring a seamless and intuitive
                        design that enhances your shopping experience. DolmuZone prioritizes customer satisfaction, providing
                        detailed product descriptions, sizing guides, and a secure checkout process. With regular updates to
                        our inventory, we stay ahead of the latest fashion trends, offering customers a diverse and ever-evolving
                        selection. Enjoy the convenience of shopping forthe latest styles from the comfort of your home with DolmuZone E-commerce Clothing Webpage."</p>

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
                    <p>
                        "At DolmuZone Clothing, we redefine fashion with a fusion of comfort, style,
                        and individuality. Our clothing line caters to diverse tastes, presenting a blend of
                        timeless classics and cutting-edge designs. Embracing quality craftsmanship and attention
                        to detail, each garment is crafted to inspire confidence and self-expression. From
                        everyday essentials to statement pieces, DolmuZone empowers you to curate a wardrobe
                        that reflects your unique personality. Navigate our website effortlessly, discovering a
                        curated selection that evolves with the latest fashion trends. Experience the joy of seamless
                        online shopping, where fashion meets convenience. DolmuZone Clothing is not just a brand;
                        it's a lifestyle, inviting you to embrace your fashion journey with us."
                    </p>

                </div>
            </div>
            <Footer />
        </div>

    )
}

export default AboutUs
