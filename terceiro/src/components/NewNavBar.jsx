import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/Button"

const NewNavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary"bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href='/Home   '>
            <img src="https://i.scdn.co/image/ab67616d0000b27395c9ed79b39281af89504f9e" alt="" width={30} height={30}/> WRLD
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/Cadastro'>Cadastro</Nav.Link>
            <Nav.Link href='/Contato'>Contato</Nav.Link>
            <Nav.Link href='/Login'>Login</Nav.Link>
            <Nav.Link href="/Sobre">Sobre</Nav.Link>

            <NavDropdown title="Albums" id="album-dropdown">
              <NavDropdown.Item href="#">The Party Never Ends</NavDropdown.Item>
              <NavDropdown.Item href="#">Fighting Demons</NavDropdown.Item>
              <NavDropdown.Item href="#">Legends Never Die</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Condone it</NavDropdown.Item>
              <NavDropdown.Item href="#">Sometimes</NavDropdown.Item>
              <NavDropdown.Item href="#">Can't Die</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Navbar.Text className='p-2'>
                Signed in as: <a href="#login">Juice WRLD</a>
            </Navbar.Text>
            <Button variant='danger'>Sair</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NewNavBar