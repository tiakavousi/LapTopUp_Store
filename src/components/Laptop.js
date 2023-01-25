import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import LaptopCustomise from "./LaptopCustomise";

// This component is a functional component which receives multiple props.
// It returns a Container component from the "react-bootstrap" library with a class
// text-center which centers the content and adds a border around it. Inside the container,
// a Row component is rendered and inside it, a Col component is rendered.
// It contains a span element which displays a message to the user and a Link component which
// redirects the user to the home page.
// Then, another Row component is rendered, inside it, 2 Col components are rendered, the
// first one contains a Card component from the "react-bootstrap" library with an image of
// the selected laptop and the description of it. The second one contains a LaptopCustomise
// component and a Button component. The LaptopCustomise component receives multiple props,
// and it renders the details of the selected laptop and enables the user to change memory and storage.
// The Button component redirects the user to the shopping cart page.

const Laptop = ({selectedLaptop, totalPrice, handleChangeDetails, handleSubmit, handleUserDetails}) =>{
    return (
        // Container component is used to center the content and add a border around it
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
                    {/*// LaptopCustomise component is rendered here, and the props selectedLaptop,
                    handleChangeDetails, handleSubmit, totalPrice and handleUserDetails are passed to it.*/}
                    <LaptopCustomise
                        selectedLaptop={selectedLaptop}
                        handleChangeDetails={handleChangeDetails}
                        handleSubmit={handleSubmit}
                        totalPrice={totalPrice}
                        handleUserDetails={handleUserDetails}
                    />
                    {/*Button component redirects the user to the shopping cart page*/}
                    <Button variant="primary" type="submit">
                        <Link to={"/shoppingcart"} style={{color:"black", textDecoration:"none"}}>Add to cart</Link>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
export default Laptop;