import {Component} from "react";
import {Button, Card, Col} from "react-bootstrap";

class LaptopCard extends Component{
    render(){
        const {laptop} = this.props;
        return(
            <Col sm={12} md={6} lg={4} >
                <Card className="w-100 w-md-50" style={{height: "100%", overflow:"auto"}} >
                <Card.Header>
                    <Card.Img variant="top" src="../photos/laptop01.jpeg" />
                </Card.Header>
                <Card.Body>
                    <Card.Title> {laptop.model} </Card.Title>
                    <Card.Text>
                        {laptop.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Text>price: {laptop.price}</Card.Text>
                    <Button variant="primary"> Select to see the price </Button>
                </Card.Footer>
                </Card>
            </Col>
        );
    }
}
export default LaptopCard;