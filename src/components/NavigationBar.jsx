import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png"; 


function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container fluid className="px-4">
          <Navbar.Brand href="#about">
            <img
              src={logo}
              alt="Stock Alert Logo"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />
            About
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#watchlist">Watch list</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
