import LaptopCards from "./LaptopCards";
import {Container, Row} from "react-bootstrap";
import ScrollButton from "./ScrollButton";
// This component is a functional component which renders a LaptopCard component and
// pass the props laptops, handleSelectLaptop, shoppingCartIsEmpty to it.
// It also renders the ScrollButton component which will be used to take the user to the top of the page when clicked.
// It returns a div with class App and inside it, a Container and Row component from the "react-bootstrap" library are rendered.
// The LaptopCard component is rendered inside the Row component and the ScrollButton component is rendered after that.

    const Home = ({laptops,handleSelectLaptop, shoppingCartIsEmpty }) =>{
    return(
        <div className="App">
            <Container fluid>
                {/* LaptopCards component is rendered here, and the props laptops,
                handleSelectLaptop, and shoppingCartIsEmpty are passed to it.*/}
                <Row>
                    <LaptopCards
                        laptops={laptops}
                        handleSelectLaptop={handleSelectLaptop}
                        shoppingCartIsEmpty={shoppingCartIsEmpty}
                    />
                </Row>
                {/* ScrollButton component is rendered here, it will be used to take
                 the user to the top of the page when clicked.*/}
                <ScrollButton />
            </Container>
        </div>
    )
}
export default Home;