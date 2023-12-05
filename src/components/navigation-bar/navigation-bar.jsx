import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut }) => {
    return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/">
                My Flix App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar">{/* Add Links here */}</Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signup">Sign up</Nav.Link>
            <Nav.Link href="/login">Log in</Nav.Link>
            <NavDropdown title="Dropdown" className= "nav-link" id="basic-nav-dropdown">
                <Nav.Link onClick={onLoggedOut}>Log out</Nav.Link>
            </NavDropdown>
                    </Navbar.Collapse>
                    </Container>
                    </Navbar>
                    );
                };