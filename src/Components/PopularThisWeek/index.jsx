import "./popular.css"
import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";

const PopularThisWeek = ({ name, image, price, rating }) => {
    const remainingRating = 5 - rating
    return (
        <div className="Products">
            <div className="Image">
                <img src={image} height={"200px"} width={"100%"} />
            </div>
            <div className="text-part">
                <h6>{name} </h6>
                <span >${price}</span>
                <div className="d-flex ">
                    {
                        Array(rating).fill(0).map((rates) => <IoStar />)
                    }
                    {
                        Array(remainingRating).fill(0).map((rates) => <IoIosStarOutline />)
                    }
                </div>

            </div>
        </div>
    )
}

export default PopularThisWeek