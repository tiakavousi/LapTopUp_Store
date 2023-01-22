import LaptopCard from "./LaptopCard";
import {Container, Row} from "react-bootstrap";

const Home = ({laptops,handleSelectLaptop, shoppingCartIsEmpty }) =>{
    return(
        <div className="App">
            <Container fluid>
                <Row>
                    <LaptopCard
                        laptops={laptops}
                        handleSelectLaptop={handleSelectLaptop}
                        shoppingCartIsEmpty={shoppingCartIsEmpty}
                    />
                </Row>
            </Container>
        </div>
    )
}
export default Home;