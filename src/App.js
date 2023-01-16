import {Component} from "react";
import {Button, Card, Container, Form, Navbar} from "react-bootstrap";


/*
Your company tasks you with developing an order form for computer components.
Develop a web page using HTML, CSS, and JavaScript to demonstrate how the solution
might function and appear visually. Please develop the web page as a “one pager.”
External links to available frameworks are allowed.
* */
const Nav = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login"> Tia</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            laptops : [
                {
                    id:1,
                    model: "macbook air",
                    price:"$2000",
                    description:
                        "same size as a pad of paper! MacBook Air comes with built-in Bluetooth " +
                        "wireless technology for connecting and synching " +
                        "the laptop to a PDA, cell phone or wireless headset."
                },
                {
                    id:2,
                    model: "macbook Pro",
                    price:"$3200",
                    description:
                        "a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels " +
                        "It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook " +
                        "Pro packs 512GB of SSD storage."
                },
                {
                    id:3,
                    model: "Lenovo Legion",
                    price:"$2200",
                    description:
                        "The world's most captivating 16\" display"
                },
                {
                    id:4,
                    model: "Lenovo ThinkPad",
                    price:"$1600",
                    description:
                        "Lenovo ThinkPad is a Windows 10 laptop with a 14.00-inch display " +
                        "that has a resolution of 1920x1080 pixels"
                },
                {
                    id:5,
                    model: "Dell Vostro",
                    price:"$3100",
                    description:
                        "a Dell Vostro laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels"
                },
                {
                    id:6,
                    model: "Dell Latitude",
                    price:"$2800",
                    description:
                        "a Dell Latitude laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels"
                },
            ],
            searchField :""
        }
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLowerCase();
        this.setState(() => {
            return { searchField }
        });
    };

    render() {
        const {laptops, searchField} = this.state;
        const {onSearchChange} = this;
        const filteredLaptops = laptops.filter( (laptop) => {
            return(laptop.model.toLowerCase().includes(searchField));
        });

        return (
            <div className="App">
                <Nav />
                <h3>Laptop Deals</h3>
                <input
                    className="search-box"
                    type="search"
                    placeholder="Search laptops"
                    onChange={onSearchChange}
                />
                <Container fluid>
                    {filteredLaptops.map( (laptop) => {
                        return (
                            <Card key={laptop.id} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="../photos/laptop01.jpeg" />
                                        <Card.Body>
                                        <Card.Title> {laptop.model} </Card.Title>
                                    <Card.Text>
                                        {laptop.description}
                                    </Card.Text>
                                            <Card.Text>price: {laptop.price}</Card.Text>
                                    <Button variant="primary"> Add to cart </Button>
                                </Card.Body>
                            </Card>
                        );
                    })}
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}
export default App;
