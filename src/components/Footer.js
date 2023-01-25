// Importing icons from the "react-icons/fa" library to be used in the component.
import {FaFacebook, FaInstagram, FaPhone} from "react-icons/fa";
// Importing components from the "react-bootstrap" library to be used in the component.
import {Col, Container, Row} from "react-bootstrap";
// Importing a js file to apply styles to the component.
import {FooterStyled} from "./Styles";


// creating Footer component
export default function Footer(){
    return (
        <Container expand="lg">
            <FooterStyled>
            <Row >
                <Col className=" d-flex  align-items-center justify-content-start">
                    {/*Links to social media and support phone number*/}
                    <a href="#" className="me-4"><FaInstagram size='1.5em' color="black"/></a>
                    <a href="#" className="me-4"><FaFacebook size='1.5em' color="black"/></a>
                    <a href="#" className="me-4"><FaPhone size='1.5em' color="black"/></a>
                </Col>
                <Col className="d-flex align-items-center justify-content-end">
                    <p style={{fontSize:"small"}}> © 2022 Copyright: Tayebe Kavousi</p>
                </Col>
            </Row>
            </FooterStyled>
        </Container>
    );
}

