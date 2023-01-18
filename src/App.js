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
                brand: '',
                model: '',
                cpu: '',
                memory: 8,
                storage: 256
            },
            totalPrice : 1000
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // when component mounted the laptops from data assigns to state
    componentDidMount() {
        this.setState({laptops: laptopsData} , () => console.log(this.state.laptops));
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
        const {handleLaptopSelection} = this;
        return (
            <div className="App">
                <Container fluid>
                    <Nav />
                    <Row>
                    {laptops.map( (laptop) => {
                        return (
                            <LaptopCard laptop={laptop} key={laptop.id} handleSelectLaptop={this.handleSelectLaptop}/>
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
                                            <Form.Control
                                                type="text"
                                                name="brand"
                                                defaultValue={selectedLaptop.brand}
                                                onChange={handleLaptopSelection}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formModel">
                                            <Form.Label>Model</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="model"
                                                defaultValue={selectedLaptop.model}
                                                onChange={handleLaptopSelection}
                                                placeholder="Enter model name"
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formCPU">
                                            <Form.Label>CPU</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="cpu"
                                                defaultValue={selectedLaptop.cpu}
                                                onChange={handleLaptopSelection}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formMemory">
                                            <Form.Label>Memory (GB)</Form.Label>
                                            <Form.Control
                                                as="select"
                                                name="memory"
                                                min="8"
                                                defaultValue="8"
                                                onChange={handleLaptopSelection}
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
                                                onChange={handleLaptopSelection}
                                                placeholder="Enter storage size"
                                            >
                                                <option value="256">256Gb SSD</option>
                                                <option value="512">512Gb SSD</option>
                                                <option value="1000">1TB SSD</option>
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
