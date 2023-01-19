import {Component} from "react";
import {Container, Row} from "react-bootstrap";
import Nav from "./Nav";
import {laptopsData} from "./data/laptops";
import LaptopCard from "./LaptopCard";
import Forms from "./Forms";

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
                    <Row id="forms" className="d-flex justify-content-center">
                        <Forms
                            selectedLaptop={this.state.selectedLaptop}
                            handleChangeDetails={this.handleChangeDetails}
                            handleSubmit={this.handleSubmit}
                            totalPrice={this.state.totalPrice}
                            handleUserDetails={this.handleUserDetails}
                        />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
