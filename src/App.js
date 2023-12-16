import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer'

import { GiHoodie } from "react-icons/gi";
import { PiPantsBold } from "react-icons/pi";
import { RiTShirtLine } from "react-icons/ri";
import { GiSkirt } from "react-icons/gi";
import { GiHighHeel } from "react-icons/gi";
import { GiUnderwearShorts } from "react-icons/gi";
import { GiFemaleLegs } from "react-icons/gi";
import { GiWinterHat } from "react-icons/gi";
import { GiPirateCoat } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import ProductCard from './Components/ProductCard';
import PopularThisWeek from './Components/PopularThisWeek';


function App() {
  return (
    <div className="App">
      <NavBar />
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
          <ProductCard name="Box Pant" image="./images/BrownBoxPant.jpg" price={9.57} />
          <ProductCard name="Green Pnat" image="./images/LightGreenBoxPants.jpg" price={10.57} />
          <ProductCard name="Blue Jeans" image="./images/LkightBluejeans.jpg" price={6.57} />
          <ProductCard name="Red one" image="./images/RedOne.jpg" price={10.57} />
          <ProductCard name="Sweaters" image="./images/WhiteSweaters.jpg" price={9.57} />
          <ProductCard name="Black one " image="./images/BlackOne.jpg" price={10.57} />
          <ProductCard name="Jeans " image="./images/Jeans.jpg" price={10.57} />
          <ProductCard name="Shirt " image="./images/Shirt.jpeg" price={5.57} />
          <ProductCard name="Long coat " image="./images/LongCoat.jpg" price={7.57} />
          <ProductCard name="Jacket " image="./images/Jacket.jpg" price={10.57} />
          <ProductCard name="Woolen sweater " image="./images/HalfChain.jpg" price={10.57} />
          <ProductCard name="Sneakers " image="./images/Sneakers.jpg" price={10.57} />
          <ProductCard name="Black boots " image="./images/Boots.jpg" price={10.57} />
          <ProductCard name="Heels " image="./images/Heels.jpg" price={10.57} />
        </div>
      </div>
      <div className='p-3'>
        <h4>Popular this week</h4>
        <div className='d-flex flex-wrap gap-4 p-3'>
          <PopularThisWeek name="Light Brown" image="./images/PopularOne.jpg" price={11.12} rating={3} />
          <PopularThisWeek name="Brown longone" image="./images/Popular2.jpg" price={12.12} rating={3} />
          <PopularThisWeek name="Brown longone" image="./images/Popular3.jpg" price={12.12} rating={4} />
          <PopularThisWeek name="Brown longone" image="./images/Popular4.jpg" price={12.12} rating={5} />
          <PopularThisWeek name="Brown longone" image="./images/Popular5.jpg" price={12.12} rating={2} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
