import {Button, Card, Col, Row} from "react-bootstrap";

const LaptopCard =({ laptops, handleSelectLaptop, shoppingCartIsEmpty }) => {
        return(
            <Row>
                {laptops.map( (laptop) => { return (
                <Col sm={12} md={6} lg={4} >
                <Card id={laptop.id} className="w-100 w-md-50" style={{height: "100%", overflow:"auto"}} >
                    <Card.Header>
                    <Card.Img variant="top" src={`./photos/${laptop.imgUrl}`}/>
                    </Card.Header>
                    <Card.Body>
                    <Card.Title> {laptop.model} </Card.Title>
                    <Card.Text>
                        {laptop.description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Card.Text>price: {laptop.price}</Card.Text>
                    <Button
                        id="addToCart"
                        onClick={() =>handleSelectLaptop(laptop)}>{(shoppingCartIsEmpty)?"Add to Cart": "Added to Cart"}
                    </Button>
                    </Card.Footer>
                </Card>
                </Col>
                );})}
            </Row>
        );
}
export default LaptopCard;