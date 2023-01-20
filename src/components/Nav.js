import {Container, Navbar} from "react-bootstrap";
import logo from "./logo.png"
const Nav = () => {
    return (
        <Navbar bg="light"  variant="light" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="150"
                        height="150"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="src/components/Nav#login"> Tia</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Nav;