import {Button, Card, Col, Container, Row, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import LaptopCustomise from "./LaptopCustomise";


const ShoppingCart = ({shoppingCartIsEmpty,selectedLaptop, totalPrice}) => {
    if(!shoppingCartIsEmpty){
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
    } else {return(
        <>
            <h1>Shopping Cart is empty</h1>
            <Button variant="primary" type="submit">
                <Link to={"/home"} >Continue Shopping</Link>
            </Button>
        </>
    );}
}

export default ShoppingCart;