import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer'

import { GiHoodie } from "react-icons/gi";
import { PiPantsBold } from "react-icons/pi";
import { RiTShirtLine } from "react-icons/ri";
import { GiSkirt } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import ProductCard from './Components/ProductCard';
import PopularThisWeek from './Components/PopularThisWeek';
import ImageSliders from './Components/Carousels';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ImageSliders />
      <div className='category'>
        <h4> Categories</h4>
        <div className='category-parent mt-4 px-3'>
          <div className='category-card'>
            <GiHoodie className='clothes_size' />
            <p>Hoodie</p>
          </div>
          <div className='category-card'>
            <PiPantsBold className='clothes_size' />
            <p>Pants</p>
          </div>
          <div className='category-card'>
            <RiTShirtLine className='clothes_size' />
            <p>Tshirts</p>
          </div>
          <div className='category-card'>
            <GiSkirt className='clothes_size' />
            <p>Skirts</p>
          </div>
          <div className='category-card'>
            <GiRunningShoe className='clothes_size' />
            <p>Shoe</p>
          </div>
        </div>
      </div>
      <div className='p-2'>
        <h4>New Arrivals</h4>
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
      <div className='p-3'>
        <h4>Popular this week</h4>
        <div className='d-flex flex-wrap gap-4 p-3'>
          <PopularThisWeek name="Sneakers" image="/images/TEDDY SNEAKER.jpeg" price={11.12} rating={3} />
          <PopularThisWeek name="Versace" image="/images/VERSACE.jpeg" price={12.12} rating={3} />
          <PopularThisWeek name="Leather sandal" image="/images/LEATHER SANDAL.jpeg" price={12.12} rating={2} />
          <PopularThisWeek name="Jeans" image="/images/Traveller Jeans.jpeg" price={12.12} rating={4} />
          <PopularThisWeek name="Boots" image="/images/Biker Boots.jpeg" price={12.12} rating={4} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
