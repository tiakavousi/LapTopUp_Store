import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import LaptopDetails from "./LaptopDetails";


const ShoppingCart = ({shoppingCartIsEmpty,selectedLaptop, totalPrice, handleChangeDetails, handleSubmit, handleUserDetails}) => {
    if(!shoppingCartIsEmpty){
        return (
            <Container className="text-center">
                <Row>
                    <Col>
                        <span>Please note you can buy only one laptop in every order! </span>
                        <Link to={"/home"} style={{textDecoration:"none"}}>Continue Shopping</Link>
                    </Col>
                </Row>
                <Row>
                        <Card id={selectedLaptop.id}  style={{ width: '18rem' }} >
                            <Card.Header>
                                <Card.Img variant="top" src={`./photos/${selectedLaptop.imgUrl}`}/>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                {selectedLaptop.brand} {selectedLaptop.model}
                                </Card.Text>
                                <Card.Text>
                                   price: {totalPrice}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Button variant="primary" type="submit">
                            <Link to={"/checkout"} style={{color:"black", textDecoration:"none"}}>Proceed to checkout</Link>
                        </Button>
                </Row>
            </Container>
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