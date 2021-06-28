import { Nav, Navbar, Form, Button } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top" className="nav-bar" bg="dark" variant="dark">
                <Navbar.Brand className="logo">MooBee</Navbar.Brand>
                <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/login-page">Login</Nav.Link>
                    <Nav.Link href="/movie-page">Movies</Nav.Link>
                    <Nav.Link href="/profile-page">Profile</Nav.Link>
                    {/* <Button variant="outline-danger" size="sm" onClick={() => onLoggedOut()}>Logout</Button> */}
                </Nav>
                <Form inline>
                    <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </>
    )
}

export default NavBar;
