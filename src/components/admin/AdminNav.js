import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom'

function AdminNav() {
  let navigate = useNavigate()
  return <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">FoodApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/dashboard')}>Dashboard</Nav.Link>
            <Nav.Link onClick={()=>navigate('/food-management')}>Food Management</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </>
}

export default AdminNav
