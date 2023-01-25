// importing the required components from react-bootstrap and react-router-dom library.
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
// destructuring props to make it easier to use further
// Checkout component displays 2 rows and first row includes 2 cards
// to create the component I have used React-Bootstrap such as Container, Row, Col, and Card
// classes to style the component also belong to React-Bootstrap

// This code defines a functional component called Checkout which takes in 3 props.
const Checkout = ({ userDetails, handleSubmit, handleUserDetails})=>{
    return(
        <Container>
            <Row className="d-flex justify-content-center">
                <Col xs={12} md={10}>
                    <Card>
                        <Card.Header>
                            <h5> Please add your personal information </h5>
                        </Card.Header>
                        <Card.Body>
                            {/* creating a form so that user should enter the info asked in the form */}
                            <Form>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="name"
                                        defaultValue={userDetails.name}
                                        onChange={handleUserDetails}
                                        placeholder="Enter your name"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPhoneNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        required
                                        type="phone"
                                        name="phoneNumber"
                                        defaultValue={userDetails.phoneNumber}
                                        onChange={handleUserDetails}
                                        placeholder="Enter your phone number"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="address"
                                        defaultValue={userDetails.address}
                                        onChange={handleUserDetails}
                                        placeholder="Enter your address"
                                    />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Card.Footer>
                            <Form>
                                <Form.Group controlId="formPayment">
                                    <Form.Label><h5>Please add your payment method: </h5></Form.Label>
                                    {/* creating an input with radio button options */}
                                    <Form.Control
                                        required
                                        as="select"
                                        name="payment"
                                        onChange={handleUserDetails}
                                    >
                                        <option value="Cash on Delivery">Cash on Delivery</option>
                                        <option value="Credit Card">Credit Card</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                     {/* redirects to the component OrderInvoice */}
                    <Link to={"/orderInvoice"} style={{color:"black"}}>Place Order</Link>
                </Button>
            </Row>
        </Container>
    );
}
export default Checkout;