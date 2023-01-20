import {Container, Navbar} from "react-bootstrap";

const Nav = () => {
    return (
        <Navbar bg="light"  variant="light" sticky="top">
            <Container>
                <Navbar.Brand href="#home">LapTop Shop!!!</Navbar.Brand>
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