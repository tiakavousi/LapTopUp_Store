import {Container, Navbar} from "react-bootstrap";
import logo from "./logo.png"
import {Link} from "react-router-dom";
import {FaHome, FaShoppingCart, FaUser} from "react-icons/fa";
const Nav = ({shoppingCartIsEmpty}) => {
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
                        <Link to={"./Home"}><FaHome size='2em'/></Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to={"./Profile"}><FaUser size='2em'/></Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to={"./ShoppingCart"}><FaShoppingCart size='2em'/>{(shoppingCartIsEmpty)?"(0 item)":"(1 item)"}</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Nav;