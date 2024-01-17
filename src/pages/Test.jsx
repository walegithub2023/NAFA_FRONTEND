// Import necessary libraries and components
import React from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';



// Create your functional component
const Test = () => {

    const dropdownStyle = {
        backgroundColor: 'black', // Background color of the dropdown
      };
    
      const dropdownItemStyle = {
        color: 'black', // Text color of dropdown items
      };
    
      const dropdownItemHoverStyle = {
        backgroundColor: '#555', // Background color on hover
        color: 'black', // Text color on hover
      }; 

    return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={NavLink} to="#home">
            Your Logo
          </Navbar.Brand>
          <Nav className="mr-auto">
            {/* Parent Nav Link */}
            <Nav.Link as={NavLink} to="#home">
              Home
            </Nav.Link>
    
            {/* Parent Nav Link with child Nav Links */}
            <Nav.Link as={NavLink} to="#features">
              Features
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={dropdownStyle}>
              {/* Child Nav Links */}
              <NavDropdown.Item as={NavLink} to="#action/1" style={dropdownItemStyle} activeStyle={dropdownItemHoverStyle}>
                Action 1
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="#action/2" style={dropdownItemStyle} activeStyle={dropdownItemHoverStyle}>
                Action 2
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="#action/3" style={dropdownItemStyle} activeStyle={dropdownItemHoverStyle}>
                Action 3
              </NavDropdown.Item>
            </NavDropdown>
    
            {/* Another Parent Nav Link */}
            <Nav.Link as={NavLink} to="#pricing">
              Pricing
            </Nav.Link>
          </Nav>
        </Navbar>
      );
}

// Export your component
export default Test;