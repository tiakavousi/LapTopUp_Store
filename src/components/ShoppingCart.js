import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const ShoppingCart = ({shoppingCartIsEmpty,selectedLaptop, totalPrice, userDetails}) => {
    if(!shoppingCartIsEmpty){
        return (
            <>
                <h3>You have added 1 laptop to your shopping cart</h3>
                <p>please note you can only checkout 1 laptop at a time! </p>
                <h5>{selectedLaptop.brand}, {selectedLaptop.model}</h5>
                <h5>delivery address:{userDetails.address}</h5>
                <h5> Total price: {totalPrice}</h5>
                <Button variant="primary" type="submit">
                    <Link to={"/forms"} style={{color:"black"}}>Checkout</Link>
                </Button>
                <Button variant="primary" type="submit">
                    <Link to={"/home"} style={{color:"black"}}>Continue Shopping</Link>
                </Button>
            </>
        );
    }
    else{return(
        <>
            <h1>Shopping Cart is empty</h1>
            <Button variant="primary" type="submit">
                <Link to={"/home"} >Continue Shopping</Link>
            </Button>
        </>
    );}
}

export default ShoppingCart;