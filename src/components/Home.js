import LaptopCard from "./LaptopCard";
import {Container, Row} from "react-bootstrap";
import { Button } from './Styles';
import {useState} from "react";
import {FaArrowCircleUp} from "react-icons/fa";

const ScrollButton = () =>{

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button>
            <FaArrowCircleUp onClick={scrollToTop}
                             style={{display: visible ? 'inline' : 'none'}} />
        </Button>
    );
}

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
                <ScrollButton />
            </Container>
        </div>
    )
}
export default Home;