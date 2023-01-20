
import {FaFacebook, FaInstagram, FaPhone} from "react-icons/fa";
import {BsFillArrowUpSquareFill} from "react-icons/bs";
import { Container } from "react-bootstrap";

function ScrollToTop () {
    return (
        <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <BsFillArrowUpSquareFill size='2em'/>
            <p><i>Back to top</i></p>
        </div>
    );
}

export default function Footer(){
    return (
        <Container className="text-center" fluid>
            <hr/>
            <p>Follow us on social media to get info about promotions and sales</p>
            <a href="#" className="me-4">
                <FaInstagram size='2em'/>
            </a>
            <a href="#" className="me-4">
                <FaFacebook size='2em'/>
            </a>
            <p>Need support? give us a call </p>
            <a href="#" className="me-4">
                <FaPhone size='2em'/>
            </a>
            <hr/>
            <p> © 2022 Copyright: <a className="me-4" href="/home"> Tia Kavousi</a></p>
            <ScrollToTop/>
        </Container>
    );
}
