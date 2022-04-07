import React from 'react'
import {Navbar, Container, FormControl, Dropdown, Nav, Badge } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    
       <Navbar expand="lg" bg="dark" variant="dark" style={{ heoght: 80 }}>
        <Container>
            <Navbar.Brand href="#home">
                <Link to="/">Shopping Cart</Link>
            </Navbar.Brand>  
            <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              
            />
          </Navbar.Text>  
          <Nav>
            <Dropdown alignRight>
                <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{10}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: 370 }}>
                
                    <span style={{ padding: 10 }}>Cart is Empty!</span>
                
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
        </Container>      

       </Navbar>
      
    
  )
}

export default Header