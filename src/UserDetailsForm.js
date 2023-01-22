import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const UserDetailsForm = ({ handleSubmit, handleUserDetails}) => {
    return(
        <Container>
            <Row id="forms" className="d-flex justify-content-center">
                <Col xs={12} md={10}>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        onChange={handleUserDetails}
                                        placeholder="Enter your name"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        onChange={handleUserDetails}
                                        placeholder="Enter your address"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPayment">
                                    <Form.Label>Payment</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="payment"
                                        onChange={handleUserDetails}
                                    >
                                        <option value="Cash on Delivery">Cash on Delivery</option>
                                        <option value="Credit Card">Credit Card</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={handleSubmit}>
                                    <Link to={"/orderInvoice"} style={{color:"black"}}>Place Order</Link>
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>);
    };

    export default UserDetailsForm;