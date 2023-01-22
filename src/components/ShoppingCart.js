import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const ShoppingCart = ({shoppingCartIsEmpty,selectedLaptop}) => {
    if(!shoppingCartIsEmpty){
        return (
            <>
                <h3>You have selected 1 laptop</h3>
                <p>{selectedLaptop.brand}, {selectedLaptop.model}</p>
            </>
        );
    }
    else{return(
        <>
            <h1>Shopping Cart is empty</h1>
            <Button variant="primary" type="submit"><Link to={"./Home"}> Continue Shopping</Link></Button>
        </>
    );}
}

export default ShoppingCart;