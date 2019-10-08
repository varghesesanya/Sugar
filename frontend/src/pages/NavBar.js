import React, { Component } from 'react';

import {Navbar, Nav, Button, FormControl, Form} from 'react-bootstrap';

export default class NavBar extends Component {
    render(){
        return(
            <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar
            <img src=""/>
            </Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#features">Brands</Nav.Link>
            <Nav.Link href="#pricing">Savings</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
</div>
            
        );
    } 
}
