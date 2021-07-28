import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

export default () => {
  return (
    <header>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-10 col-lg-11 mx-auto'>
            <Navbar collapseOnSelect expand='lg' variant='dark'>
              <Navbar.Brand href='#home'>
                {' '}
                <img src='/images/logo.png' alt='' className='img-fluid' />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse
                className='justify-content-end'
                id='responsive-navbar-nav '
              >
                <Nav className='me-auto nav-cstm'>
                  <Nav.Link href='#Home'>
                    {' '}
                    <Link
                      activeclass='active'
                      to='home'
                      spy={true}
                      smooth={true}
                      duration={250}
                    >
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link href='#Features'>
                    <Link
                      activeclass='active'
                      to='Features'
                      spy={true}
                      smooth={true}
                      duration={250}
                    >
                      Features{' '}
                    </Link>
                  </Nav.Link>
                  <Nav.Link href='#pricing'>
                    {' '}
                    <Link
                      activeclass='active'
                      to='pricing'
                      spy={true}
                      smooth={true}
                      duration={250}
                    >
                      Pricing
                    </Link>
                  </Nav.Link>
                  <Nav.Link href='#faq'>
                    <Link
                      activeclass='active'
                      to='faq'
                      spy={true}
                      smooth={true}
                      duration={250}
                    >
                      FAQ
                    </Link>
                  </Nav.Link>
                  <Nav.Link
                    className='nav-btn d-flex login-btn'
                    eventKey={2}
                    href='#memes'
                  >
                    Login
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </header>
  );
};
