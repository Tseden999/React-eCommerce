import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ImageSliders() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className=' position-relative' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className='bannerImage' style={{ backgroundImage: 'url("/images/Banner3.jpg")' }}></div>
                {/* <Carousel.Caption></Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <div className='bannerImage' style={{ backgroundImage: 'url("/images/Banner2.jpg")' }}></div>
                {/* <Carousel.Caption></Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <div className='bannerImage' style={{ backgroundImage: 'url("/images/Banner1.jpg")' }}></div>
                {/* <Carousel.Caption></Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageSliders;