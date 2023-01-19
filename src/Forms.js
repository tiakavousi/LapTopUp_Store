import React from "react";
import { Col, Card, Form, Button} from 'react-bootstrap'

const Forms = (props) => {
    const {selectedLaptop, handleChangeDetails, handleSubmit, totalPrice, handleUserDetails} = props;
    return (
            <Col xs={12} md={10}>
                <Card>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBrand">
                                <Form.Label>Brand</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="brand"
                                    defaultValue={selectedLaptop.brand}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="formModel">
                                <Form.Label>Model</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="model"
                                    defaultValue={selectedLaptop.model}
                                    placeholder="Enter model name"
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="formCPU">
                                <Form.Label>CPU</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cpu"
                                    defaultValue={selectedLaptop.cpu}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="formMemory">
                                <Form.Label>Memory (GB)</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="memory"
                                    min="8"
                                    defaultValue="8"
                                    onChange={handleChangeDetails}
                                    placeholder="Enter memory size"
                                >
                                    <option value="8">8</option>
                                    <option value="16">16</option>
                                    <option value="24">24</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formStorage">
                                <Form.Label>Storage (GB)</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="storage"
                                    min="256"
                                    defaultValue="256"
                                    onChange={handleChangeDetails}
                                    placeholder="Enter storage size"
                                >
                                    <option value="256">256Gb SSD</option>
                                    <option value="512">512Gb SSD</option>
                                    <option value="1024">1TB SSD</option>
                                </Form.Control>
                            </Form.Group>
                            <hr />
                            <h5 className="text-center">Total Price: ${totalPrice}</h5>
                            <hr />
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
                                Place order
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
    );
}
export default Forms;