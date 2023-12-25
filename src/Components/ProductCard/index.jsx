import "./product.css"
const ProductCard = ({ name, image, price }) => {
    return (
        <div className="Products">
            <div className="Image">
                <img src={image} height={"200px"} width={"100%"} />
            </div>
            <div className="text-part">
                <h6>{name} </h6>
                <span >NPR {price}</span>
                <button type="button" className="btn btn-dark">Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard