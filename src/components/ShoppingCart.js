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
                    <Col>
                        <Card id={selectedLaptop.id}  style={{ width: '18rem' }} >
                            <Card.Header>
                                <Card.Img variant="top" src={`./photos/${selectedLaptop.imgUrl}`}/>
                            </Card.Header>
                            <Card.Body>
                                {selectedLaptop.description}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <LaptopDetails
                            selectedLaptop={selectedLaptop}
                            handleChangeDetails={handleChangeDetails}
                            handleSubmit={handleSubmit}
                            totalPrice={totalPrice}
                            handleUserDetails={handleUserDetails}
                        />
                        <Button variant="primary" type="submit">
                            <Link to={"/checkout"} style={{color:"black", textDecoration:"none"}}>Proceed to checkout</Link>
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