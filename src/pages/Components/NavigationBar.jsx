import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Images/CGT.png";
import query from "../Images/query.png";
import "./Assest/Style.css";

function NavBar() {
  return (
    <>
      <Navbar className="navBar" expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} alt="CGT-Logo" style={{ width: "90%" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar">
            <Nav.Link href="#home" className="item">
              Home
            </Nav.Link>{" "}
            &nbsp;&nbsp;&nbsp;
            <Nav.Link href="#aboutus" className="item1">
              About Us
            </Nav.Link>{" "}
            &nbsp;&nbsp;&nbsp;
            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="item3">
                Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="item3">
                Testing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="item3">
                Aptitiute
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className="item3">
                Communication
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link href="#forenquiry" className="item2 ms-auto me-4">
            For Enquiry{" "}
            <img src={query} alt="questionmark" className="query"></img>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
