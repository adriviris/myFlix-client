import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut, onUnregister }) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/">
                My Flix App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signup">{storedUser? '' : 'Sign up'}</Nav.Link>
            <Nav.Link href="/login">{storedUser? '' : 'Log in'}</Nav.Link>
           
            {storedUser ? <NavDropdown title="Dropdown" className= "nav-link" id="basic-nav-dropdown">
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Log out</Nav.Link>
                <Nav.Link onClick={onUnregister}>Unregister</Nav.Link>
            </NavDropdown>
            : <></>}
            
                    </Navbar.Collapse>
                    </Container>
                    </Navbar>
                    );
                };