import {Container, Nav, Navbar} from "react-bootstrap";
import logo from "../logo.png"
import {Link} from "react-router-dom";
import {FaHome, FaShoppingCart, FaUser} from "react-icons/fa";
const MyNav = ({shoppingCartIsEmpty}) => {
    return (
        <Navbar bg="light" variant="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand className="me-5" href="#home">
                    <Link to={"./Home"}>
                        <img
                            src={logo}
                            width="150"
                            height="35"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Brand>
                    <h4 style={{color:"lightslategray"}}>Buy your laptop at store</h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="justify-content-end">
                    <Navbar.Text className='nav-menu-items me-3'>
                        <Link to={"./Home"}> <FaHome size='1em'/></Link>
                    </Navbar.Text>
                    <Navbar.Text className='nav-menu-items me-3'>
                        <Link to={"./Profile"}><FaUser size='1em'/></Link>
                    </Navbar.Text>
                    <Navbar.Text className='nav-menu-items me-3'>
                        <Link to={"./ShoppingCart"} style={{textDecoration:"none"}}><FaShoppingCart size='1em'/>{(shoppingCartIsEmpty)?" 0 item":" 1 item"}</Link>
                    </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default MyNav;