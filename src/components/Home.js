import LaptopCard from "./LaptopCard";
import {Container, Row} from "react-bootstrap";

const Home = ({laptops,handleSelectLaptop,  }) =>{
    return(
        <div className="App">
            <Container fluid>
                <Row>
                    <LaptopCard laptops={laptops} handleSelectLaptop={handleSelectLaptop}/>
                </Row>
            </Container>
        </div>
    )
}
export default Home;