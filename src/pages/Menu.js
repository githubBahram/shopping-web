import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

const Menu = () => {
    return(
    <Navbar bg="dark" variant="dark" className="rtl">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/">خانه</Nav.Link>
            <Nav.Link href="/brands">برند</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
            <Button variant="outline-info">Search</Button>
        </Form>
    </Navbar>
    )
}
export default Menu
