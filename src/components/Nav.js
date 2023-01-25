//importing the container, nav, navbar components from the react-bootstrap library
import {Container, Nav, Navbar} from "react-bootstrap";
//importing the logo from the logo.png file
import logo from "./logo.png";
import {Link} from "react-router-dom";
import {FaHome, FaShoppingCart, FaUser} from "react-icons/fa";

////defining a constant function called MyNav that takes in a prop of shoppingCartIsEmpty
const MyNav = ({shoppingCartIsEmpty}) => {
    return (
        // creating a navbar element with background color of light
        // and variant of light, and making it expand on larger screens
        // and sticky at the top of the page
        <Navbar bg="light" variant="light" expand="lg" sticky="top">
            <Container id="navbar"  style={{ background: "lightgrey"}}>
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
                {/* creates a toggle button for the navbar, that when clicked will
                 trigger the opening and closing of the navbar.
                 this will display on small screens */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                {/* creates a collapse element that holds the navigation items, and
                it is associated with the toggle button by the aria-controls attribute,
                this makes the navbar to be responsive and open/close based on the screen size,
                when the screen size is less than the breakpoint the toggle button will appear
                and the navbar will be collapsed and the user can open it by clicking the toggle
                button, and when the screen size is more than the breakpoint the toggle button
                will disappear and the navbar will be expanded and always visible. */}
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="justify-content-end">
                    <Navbar.Text className='nav-menu-items me-3'>
                        {/*Creating a Link element that redirects to the home page*/}
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