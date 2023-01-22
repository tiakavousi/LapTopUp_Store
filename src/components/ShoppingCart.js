import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Forms from "./Forms";


const ShoppingCart = ({shoppingCartIsEmpty,selectedLaptop, totalPrice, userDetails, handleChangeDetails, handleSubmit, handleUserDetails}) => {
    if(!shoppingCartIsEmpty){
        return (
            <Container className="text-center">
                <Row>
                    <Col>
                        <Card id={selectedLaptop.id}  style={{ width: '18rem' }} >
                            <Card.Header>
                                <Card.Img variant="top" src={`./photos/${selectedLaptop.imgUrl}`}/>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title> {selectedLaptop.model} </Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" type="submit">
                                    <Link to={"/checkout"} style={{color:"black", textDecoration:"none"}}>Checkout</Link>
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '30rem' }} >
                            <Forms
                                selectedLaptop={selectedLaptop}
                                handleChangeDetails={handleChangeDetails}
                                handleSubmit={handleSubmit}
                                totalPrice={totalPrice}
                                handleUserDetails={handleUserDetails}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" type="submit" >
                            <Link to={"/home"} style={{color:"black" , textDecoration:"none"}}>Continue Shopping</Link>
                        </Button>
                    </Col>
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