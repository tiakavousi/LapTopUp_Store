import {Button, Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
// LaptopCards is a functional component that takes in two props, laptops and handleSelectLaptop
const LaptopCards =({ laptops, handleSelectLaptop }) => {
    // It returns a JSX element that renders a Bootstrap Row component
        return(
            <Row>
                {/* Iterates over the laptops prop and maps each laptop to a JSX element */}
                {laptops.map( (laptop) => { return (
                // Inside the map function, it returns a Col component with sm, md and lg props
                <Col sm={12} md={6} lg={4} >
                <Card id={laptop.id} className="w-100 w-md-50" style={{height: "100%", overflow:"auto"}} >
                    <Card.Header>
                    {/*Inside the Card.Header component, it renders a Card.Img component with a variant and src props*/}
                    <Card.Img variant="top" src={`./photos/${laptop.imgUrl}`}/>
                    </Card.Header>
                    <Card.Body>
                     {/*Inside the Card.Body component, it renders a Card.Title component with the laptop model
                      and a Card.Text component with the laptop description*/}
                    <Card.Title> {laptop.model} </Card.Title>
                    <Card.Text>
                        {laptop.description}
                    </Card.Text>
                    </Card.Body>
                    {/* Inside the Card.Footer component, it renders a Card.Text component with
                     the laptop price, and a Button component with a variant and onClick props*/}
                    <Card.Footer>
                    <Card.Text>price: {laptop.price}</Card.Text>
                        {/* Inside the Button component, it renders a Link component to /laptop path
                         to render the laptop*/}
                        <Button variant={"primary"} onClick={() => handleSelectLaptop(laptop)}>
                            <Link to={"/laptop"} style={{color: "black", textDecoration:"none"}}> Details </Link>
                        </Button>
                    </Card.Footer>
                </Card>
                </Col>
                );})}
            </Row>
        );
}
export default LaptopCards;