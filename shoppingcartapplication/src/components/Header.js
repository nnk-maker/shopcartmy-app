import React, { useEffect } from 'react'
import {Navbar, Container, FormControl, Dropdown, Nav, Badge, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';

//Newly added
//const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]'); //Newly added
//New code from here
const Header = () => {
    
    const {
        state: { cart }, 
        dispatch           
    } = CartState();
    

    console.log("In Function Header");

    useEffect(() => {
        localStorage.setItem('productstemp', JSON.stringify(cart))
      },[cart]); 
    
   /* useEffect(()=> {
       console.log("In Function Header- useEffect");
        localStorage.setItem('my-tier-list', JSON.stringify(cart));
    });   */

  return (  
    
       <Navbar expand="lg" bg="dark" variant="dark" style={{ height: 80 }}>
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
                <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: 370 }}>
                    {
                        cart.length > 0 ? 
                        (
                            //Mapping the cart
                            <>
                                {
                                    cart.map((prod) => (
                                            <span className="cartitem" key={prod.id}>
                                            <img
                                                src={prod.image}
                                                className="cartItemImg"
                                                alt={prod.name}
                                            />
                                            <div className="cartItemDetail">
                                                <span>{prod.name}</span>
                                                <span>kr {prod.price.split(".")[0]}</span>
                                            </div>
                                            <AiFillDelete
                                                fontSize="20px"
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: prod,
                                                })
                                                }
                                            /> 
                                            </span>
                                    ))}
                                    <Link to="/cart">
                                        <Button style={{ width: "95%", margin: "0 10px" }}>
                                        Go To Cart
                                        </Button>
                                    </Link>
                            </>
                        ) 
                        : 
                        (
                            <span style={{ padding: 10 }}>
                                Cart is Empty!
                            </span>
                        )
                    }
                    
                
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
        </Container>      

       </Navbar>
      
    
  )
}

export default Header