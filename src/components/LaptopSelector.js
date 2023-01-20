import React, {useState} from "react";
import {Button, Card, Col, Form, Row} from "react-bootstrap";

function LaptopSelector() {
    const [selectedLaptop, setSelectedLaptop] = useState({
        brand: 'MacBook',
        model: 'Pro',
        cpu: 'i5',
        memory: 8,
        storage: 256
    });
    const [totalPrice, setTotalPrice] = useState(1000);
    const [userDetails, setUserDetails] = useState({
        name: '',
        address: '',
        payment: ''
    });

    const handleLaptopSelection = (event) => {
        const { name, value } = event.target;
        setSelectedLaptop({ ...selectedLaptop, [name]: value });
        setTotalPrice(calculatePrice(selectedLaptop));
    }

    const handleUserDetails = (event) => {
        const { name, value } = event.target;
        setUserDetails({ ...userDetails, [name]: value });
    }

    const calculatePrice = (laptop) => {
        let basePrice = 0;
        switch (laptop.brand) {
            case 'MacBook':
                basePrice = 1500;
                break;
            case 'Dell':
                basePrice = 1200;
                break;
            case 'Lenovo':
                basePrice = 900;
                break;
            default:
                basePrice = 1000;
        }

        if (laptop.cpu === 'i7') basePrice += 200;
        if (laptop.memory > 8) basePrice += (laptop.memory - 8) * 50;
        if (laptop.storage > 256) basePrice += (laptop.storage - 256) * 20;

        return basePrice;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Thank you ${userDetails.name} for your purchase! Your ${selectedLaptop.brand} ${selectedLaptop.model} has been ordered and will be delivered to ${userDetails.address}. Payment Method: ${userDetails.payment} Total Price: ${totalPrice}`);
    }

    return (
        <>
            <Row className="d-flex justify-content-center">
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formBrand">
                                    <Form.Label>Brand</Form.Label>
                                    <Form.Control as="select" name="brand" onChange={handleLaptopSelection}>
                                        <option value="MacBook">MacBook</option>
                                        <option value="Dell">Dell</option>
                                        <option value="Lenovo">Lenovo</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formModel">
                                    <Form.Label>Model</Form.Label>
                                    <Form.Control type="text" name="model" onChange={handleLaptopSelection} placeholder="Enter model name" />
                                </Form.Group>
                                <Form.Group controlId="formCPU">
                                    <Form.Label>CPU</Form.Label>
                                    <Form.Control as="select" name="cpu" onChange={handleLaptopSelection}>
                                        <option value="i5">i5</option>
                                        <option value="i7">i7</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formMemory">
                                    <Form.Label>Memory (GB)</Form.Label>
                                    <Form.Control type="number" name="memory" min="8" onChange={handleLaptopSelection} placeholder="Enter memory size" />
                                </Form.Group>
                                <Form.Group controlId="formStorage">
                                    <Form.Label>Storage (GB)</Form.Label>
                                    <Form.Control type="number" name="storage" min="256" onChange={handleLaptopSelection} placeholder="Enter storage size" />
                                </Form.Group>
                                <hr />
                                <h5 className="text-center">Total Price: ${totalPrice}</h5>
                                <hr />
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" onChange={handleUserDetails} placeholder="Enter your name" />
                                </Form.Group>
                                <Form.Group controlId="formAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" name="address" onChange={handleUserDetails} placeholder="Enter your address" />
                                </Form.Group>
                                <Form.Group controlId="formPayment">
                                    <Form.Label>Payment</Form.Label>
                                    <Form.Control as="select" name="payment" onChange={handleUserDetails}>
                                        <option value="Cash on Delivery">Cash on Delivery</option>
                                        <option value="Credit Card">Credit Card</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
export default LaptopSelector;
