import React from 'react';
import "./footer.css"

import {Container,Row,Col, ListGroup, ListGroupItem} from "reactstrap"
import {Link} from "react-router-dom"
import logo from "../../assets/images/logo.png";

const Quick_links =[
  {
    path:'/home',
    display:'Home'
  },
   
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tour',
    display:'Tours'
  }
]
const Quick_links2 =[
  {
    path:'/gallery',
    display:'Gallery'
  },
   
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  }
]

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              
              <div className='social_links d-flex align-items-center gap-4'>
                <span>
                  <Link to='#'>
                  <i class="ri-youtube-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                  <i class="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                  <i class="ri-facebook-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                  <i class="ri-instagram-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                  <i class="ri-twitter-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className='footer_link-title'> Discover </h5>
            <ListGroup className='footer_quick-links'>
              {Quick_links.map((item,index)=> (
                <ListGroupItem key ={index} className='ps-0 border-0'>
                <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer_link-title'>Quick Links </h5>
            <ListGroup className='footer_quick-links'>
                {Quick_links2.map((item,index)=> (
                  <ListGroupItem key ={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                  ))}
                  </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer_link-title'>Contact </h5>
            <ListGroup className='footer_quick-links'>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                      <i class="ri-map-pin-fill"></i>
                      </span>
                      Address:
                    </h6>

                    <p className='mb-0'>Thane, Bharat</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                      <i class="ri-mail-fill"></i>
                      </span>
                      Email:
                    </h6>

                    <p className='mb-0'>harry2023@gmail.com</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                      <i class="ri-phone-fill"></i>                      </span>
                      Phone:
                    </h6>

                    <p className='mb-0'>+0987654321</p>
                  </ListGroupItem>             
                </ListGroup>
              </Col>
              <Col lg="12" className='text-center pt-5 '>
                <p className='copyright'>
                  Copyright {year} ,design and develop by us.
                All rights reserved.</p>
              </Col>
            </Row>
          </Container>
        </footer>
  );
}

export default Footer;
