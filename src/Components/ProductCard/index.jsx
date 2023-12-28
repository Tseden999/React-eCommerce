import "./product.css"
const ProductCard = ({ name, image, price }) => {
    function addToCart() {
        alert("Added to the cart successfully!")
    }
    return (
        <div className="Products">
            <div className="Image">
                <img src={image} height={"200px"} width={"100%"} />
            </div>
            <div className="text-part">
                <h6>{name} </h6>
                <span >NPR {price}</span>
                <button onClick={addToCart} className="btn btn-dark">Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard