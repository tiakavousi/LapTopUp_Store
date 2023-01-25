import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

// ShoppingCart is a functional component that takes in three props,
// shoppingCartIsEmpty, selectedLaptop, and totalPrice
const ShoppingCart = ({shoppingCartIsEmpty,selectedLaptop, totalPrice}) => {
    // It checks if the shopping cart is not empty
    if(!shoppingCartIsEmpty){
        // If the shopping cart is not empty, it returns a JSX element
        // that renders some elements displaying selected laptop
        return (
            <div >
                <h5>Shopping cart</h5>
                    <Table hover responsive bordered className= "d-flex align-items-center justify-content-center">
                        <tbody >
                        <tr>
                            <td><img src={`./photos/${selectedLaptop.imgUrl}`} width={"200px"} alt={"laptop picture"}/></td>
                            <td><span>{selectedLaptop.brand} {selectedLaptop.model}  ${totalPrice}</span></td>
                            <td><Button variant="primary" type="submit">
                                <Link to={"/checkout"} style={{color:"black", textDecoration:"none"}}>Proceed to checkout</Link>
                            </Button></td>
                        </tr>
                        </tbody>
                    </Table>
            </div>
        );
    //If the shopping cart is empty, it returns a JSX element that renders a
    // a message which says shopping cart is empty and provides a button to go back to home page
    } else {return(
        <>
            <h1>Shopping Cart is empty</h1>
            <Button variant="primary" type="submit" >
                <Link to={"/home"} style={{color:"black", textDecoration:"none"}} >Continue Shopping</Link>
            </Button>
        </>
    );}
}

export default ShoppingCart;