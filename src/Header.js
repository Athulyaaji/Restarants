import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="">
            <div>

              <i class="fa-solid fa-utensils fa-beat"></i>
              <a style={{ textDecoration: 'none',color:'white' }} className='ms-4' >REASTAURANT</a>

            </div>

          </Navbar.Brand>

        </Container>
      </Navbar>
    </div>
  )
}

export default Header