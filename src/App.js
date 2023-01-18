import {Component} from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Nav from "./Nav";
import {laptopsData} from "./data/laptops";
import LaptopCard from "./LaptopCard";

class App extends Component {

    // state of the app is constructed here
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
                brand: 'MacBook',
                model: 'Pro',
                cpu: 'i5',
                memory: 8,
                storage: 256
            },
            totalPrice : 1000
        }
    }

    // when component mounted the laptops from data assigns to state
    componentDidMount() {
        this.setState({laptops: laptopsData} , () => console.log(this.state.laptops));
    }

     handleLaptopSelection(event) {
        const { name, value } = event.target;
        this.setState({...this.state.selectedLaptop, [name]: value});
        this.setState(this.calculatePrice(this.state.selectedLaptop));
    }

     handleUserDetails(event) {
        const { name, value } = event.target;
        this.setState({ ...this.state.userDetails, [name]: value });
    }

     calculatePrice(laptop) {
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

     handleSubmit(event){
        event.preventDefault();
        alert(`Thank you ${this.state.userDetails.name} for your purchase! Your 
        ${this.state.selectedLaptop.brand} ${this.state.selectedLaptop.model} 
        has been ordered and will be delivered to ${this.state.userDetails.address}. 
        Payment Method: ${this.state.userDetails.payment} Total Price: ${this.state.totalPrice}`);
    }
    render() {
        // destructuring the state to make it easy to use without using this.state before the state fields.
        const {laptops} = this.state;
        return (
            <div className="App">
                <Container fluid>
                    <Nav />
                    <Row>
                    {laptops.map( (laptop) => {
                        return (
                            <LaptopCard laptop={laptop} key={laptop.id} />
                        );
                    })}
                    </Row>
                            <Row className="d-flex justify-content-center">
                                <Col xs={12} md={4}>
                                    <Card>
                                        <Card.Body>
                                            <Form>
                                                <Form.Group controlId="formBrand">
                                                    <Form.Label>Brand</Form.Label>
                                                    <Form.Control as="select" name="brand" onChange={this.handleLaptopSelection}>
                                                        <option value="MacBook">MacBook</option>
                                                        <option value="Dell">Dell</option>
                                                        <option value="Lenovo">Lenovo</option>
                                                    </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId="formModel">
                                                    <Form.Label>Model</Form.Label>
                                                    <Form.Control type="text" name="model" onChange={this.handleLaptopSelection} placeholder="Enter model name" />
                                                </Form.Group>
                                                <Form.Group controlId="formCPU">
                                                    <Form.Label>CPU</Form.Label>
                                                    <Form.Control as="select" name="cpu" onChange={this.handleLaptopSelection}>
                                                        <option value="i5">i5</option>
                                                        <option value="i7">i7</option>
                                                    </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId="formMemory">
                                                    <Form.Label>Memory (GB)</Form.Label>
                                                    <Form.Control type="number" name="memory" min="8" onChange={this.handleLaptopSelection} placeholder="Enter memory size" />
                                                </Form.Group>
                                                <Form.Group controlId="formStorage">
                                                    <Form.Label>Storage (GB)</Form.Label>
                                                    <Form.Control type="number" name="storage" min="256" onChange={this.handleLaptopSelection} placeholder="Enter storage size" />
                                                </Form.Group>
                                                <hr />
                                                <h5 className="text-center">Total Price: ${this.state.totalPrice}</h5>
                                                <hr />
                                                <Form.Group controlId="formName">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" name="name" onChange={this.handleUserDetails} placeholder="Enter your name" />
                                                </Form.Group>
                                                <Form.Group controlId="formAddress">
                                                    <Form.Label>Address</Form.Label>
                                                    <Form.Control type="text" name="address" onChange={this.handleUserDetails} placeholder="Enter your address" />
                                                </Form.Group>
                                                <Form.Group controlId="formPayment">
                                                    <Form.Label>Payment</Form.Label>
                                                    <Form.Control as="select" name="payment" onChange={this.handleUserDetails}>
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
