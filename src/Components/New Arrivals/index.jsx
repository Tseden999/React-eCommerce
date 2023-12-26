import React from 'react'
import NavBar from '../Navbar'
import ProductCard from '../ProductCard'
import Footer from '../Footer'

function NewArrival() {
    return (
        <div>
            <NavBar />
            <div className='p-2' >
                <h4>New Arrivals</h4>
                <div className='p-3'>
                    <img src='/images/NewArrivals.jpeg' height={500}></img>
                </div>
                <div className='d-flex flex-wrap gap-4 p-3'>
                    <ProductCard name="Long Wool top" image="/images/LONG WOOL TOP.jpeg" price={10.57} />
                    <ProductCard name="BALMAIN" image="/images/BALMAIN.jpeg" price={9.57} />
                    <ProductCard name="Cady suit" image="/images/CADY SUIT..jpeg" price={10.57} />
                    <ProductCard name="Max Mara" image="/images/MAX MARA.jpeg" price={6.57} />
                    <ProductCard name="Knit skirt" image="/images/Knit Skirt.jpeg" price={10.57} />
                    <ProductCard name="CANADA GOOSE" image="/images/CANADA GOOSE.jpeg" price={9.57} />
                    <ProductCard name="Sandle" image="/images/SANDAL WITH CRYSTALS.jpeg" price={10.57} />
                    <ProductCard name="Jeans" image="/images/V-waisted jeans.jpeg" price={9.57} />
                    <ProductCard name="T-shirt" image="/images/T-SHIRT WITH LOGO-1.jpeg" price={9.57} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NewArrival

