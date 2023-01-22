import {Container, Navbar} from "react-bootstrap";
import logo from "./logo.png"
import {Link} from "react-router-dom";
import {FaShoppingCart, FaUser} from "react-icons/fa";
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
                    <Navbar.Text>
                        <Link to={"./Home"}>Home</Link>
                        <Link to={"./Profile"}><FaUser size='2em'/>Profile</Link>
                        <Link to={"./ShoppingCart"}><FaShoppingCart size='2em'/>Shopping Cart</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Nav;