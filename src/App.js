import {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Nav from "./Nav";
import {laptopsData} from "./data/laptops";
import LaptopCard from "./LaptopCard";
import LaptopSelector from "./LaptopSelector";

class App extends Component {

    // state of the app is constructed here
    constructor(props) {
        super(props);
        this.state = {
            laptops: []
        }
    }

    // when component mounted the laptops from data assigns to state
    componentDidMount() {
        this.setState({laptops: laptopsData} , () => console.log(this.state.laptops));
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
                    <Row>
                        <Col>
                            <LaptopSelector/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
