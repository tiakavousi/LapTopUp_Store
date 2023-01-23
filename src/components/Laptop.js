import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import LaptopCustomise from "./LaptopCustomise";

const Laptop = ({selectedLaptop, totalPrice, handleChangeDetails, handleSubmit, handleUserDetails}) =>{
    return (
        <Container className="text-center" fluid style={{border:"black solid 1px"}}>
            <Row>
                <Col>
                    <span>Please note you can buy only one laptop in every order! </span>
                    <Link to={"/home"} style={{textDecoration:"none"}}>Continue Shopping</Link>
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={4} lg={4}>
                    <Card id={selectedLaptop.id}>
                        <Card.Header>
                            <Card.Img variant="top" src={`./photos/${selectedLaptop.imgUrl}`}/>
                        </Card.Header>
                        <Card.Body>
                            {selectedLaptop.description}
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={8} lg={8}>
                    <LaptopCustomise
                        selectedLaptop={selectedLaptop}
                        handleChangeDetails={handleChangeDetails}
                        handleSubmit={handleSubmit}
                        totalPrice={totalPrice}
                        handleUserDetails={handleUserDetails}
                    />
                    <Button variant="primary" type="submit">
                        <Link to={"/shoppingcart"} style={{color:"black", textDecoration:"none"}}>Add to cart</Link>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
export default Laptop;