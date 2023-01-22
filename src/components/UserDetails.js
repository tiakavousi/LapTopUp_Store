import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const UserDetails = ({ userDetails, handleSubmit, handleUserDetails})=>{
    return(
        <Container>
            <Row id="forms" className="d-flex justify-content-center">
                <Col xs={12} md={10}>
                    <Card>
                        <Card.Header>
                            <h5>Please add your personal information </h5>
                        </Card.Header>
                        <Card.Body>
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
                    <Link to={"/orderInvoice"} style={{color:"black"}}>Place Order</Link>
                </Button>
            </Row>
        </Container>
    );
}
export default UserDetails;