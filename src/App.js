import {Component} from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Nav from "./Nav";
import {laptopsData} from "./data/laptops";
import LaptopCard from "./LaptopCard";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            laptops: [],

            userDetails: {
                name: '',
                address: '',
                payment: ''
            },

            selectedLaptop: {
                brand: '',
                model: '',
                cpu: '',
                memory: 8,
                storage: 256,
                price : ''
            },

            totalPrice : 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectLaptop = this.handleSelectLaptop.bind(this);
    }

    // when component mounted the laptops from data assigns to state
    componentDidMount() {
        this.setState({laptops: laptopsData});
    }

    handleUserDetails = (event) => {
        if(this.state.userDetails){
            this.setState({
                userDetails: {
                    ...this.state.userDetails,
                    [event.target.name]: event.target.value
                }
            });
        }
    }

    handleSelectLaptop = (laptop) => {
        let totalPrice = this.calculatePrice(laptop);
        this.setState({
            selectedLaptop: laptop,
            totalPrice: totalPrice
        });
    }


    handleChangeDetails = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => {
            const updatedLaptop = {
                ...prevState.selectedLaptop,
                [name]: value
            }
            const totalPrice = this.calculatePrice(updatedLaptop);
            return {
                selectedLaptop: updatedLaptop,
                totalPrice: totalPrice
            }
        });
    }

    calculatePrice(laptop) {
        return parseInt(laptop.price, 10) +
            ((parseInt(laptop.memory, 10) / 8 - 1 ) * 500) +
            ((parseInt(laptop.storage, 10) / 256 - 1) * 500);

    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.userDetails && this.state.selectedLaptop) {
            let orderNumber = Math.floor(Math.random() * 100000);
            alert(`Thank you ${this.state.userDetails.name} for your purchase! Your 
        ${this.state.selectedLaptop.brand} ${this.state.selectedLaptop.model} 
        has been ordered and will be delivered to ${this.state.userDetails.address}. 
        Payment Method: ${this.state.userDetails.payment} Total Price: ${this.state.totalPrice}
        Your Order Number is ${orderNumber}`);
        }
    }

    render() {
        // destructuring the state to make it easy to use without using this.state before the state fields.
        const {laptops, selectedLaptop} = this.state;
        const {handleSelectLaptop} = this;
        return (
            <div className="App">
                <Container fluid>
                    <Nav />
                    <Row>
                    {laptops.map( (laptop) => {
                        return (
                            <LaptopCard laptop={laptop} key={laptop.id} handleSelectLaptop={handleSelectLaptop}/>
                        );
                    })}
                    </Row>
                    <Row className="d-flex justify-content-center">
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
                                                onChange={this.handleChangeDetails}
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
                                                onChange={this.handleChangeDetails}
                                                placeholder="Enter storage size"
                                            >
                                                <option value="256">256Gb SSD</option>
                                                <option value="512">512Gb SSD</option>
                                                <option value="1024">1TB SSD</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <hr />
                                        <h5 className="text-center">Total Price: ${this.state.totalPrice}</h5>
                                        <hr />
                                        <Form.Group controlId="formName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                onChange={this.handleUserDetails}
                                                placeholder="Enter your name"
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formAddress">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="address"
                                                onChange={this.handleUserDetails}
                                                placeholder="Enter your address"
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formPayment">
                                            <Form.Label>Payment</Form.Label>
                                            <Form.Control
                                                as="select"
                                                name="payment"
                                                onChange={this.handleUserDetails}
                                            >
                                                <option value="Cash on Delivery">Cash on Delivery</option>
                                                <option value="Credit Card">Credit Card</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                                            Submit
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
