
import React, {useRef,useEffect,useContext}from 'react';
import { Container,Row,Button} from 'reactstrap'
import { NavLink,Link,useNavigate} from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import '../header/header.css';
import {AuthContext} from './../../context/AuthContext' 

const nav_links =[
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

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const {user, dispatch} = useContext(AuthContext)

  const logout = ()=>{
    dispatch({type:'LOGOUT'})
    navigate('/')
  }

  const stickyheaderfunc = ()=>{
    window.addEventListener('scroll',()=>{
    if(document.body.scrolltop >80 || document.documentElement.scrollTop >80){
      headerRef.current.classList.add('sticky_header')
    }else{
      headerRef.current.classList.remove('sticky_header')
    }
    })
  }

  useEffect (() =>{
    stickyheaderfunc()

    return window.removeEventListener('scroll',stickyheaderfunc)
  })

  const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')

  return <header className='header' ref={headerRef}>
    <Container>
      <Row>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">

          {/* ================ logo ========== */}
           <div className="logo">
            <img src={logo} alt="" />
           </div>
           {/* ================ logo end ========== */}
          
   
          
        {/* ================ menu start ========== */}
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <ul className="menu d-flex align-items-center gap-5">
            {
              nav_links.map((item,index)=>(
                <li className="nav_item" key={index}>
                  <NavLink to={item.path} className={ navClass=> navClass.isActive ? "active_link" : ""}>{item.display}</NavLink>
                </li>
              ))
              }
          </ul>
        </div>
        {/* ================ menu end ========== */}
       <div className="nav_right d-flex align-items-center gap-4">
        <div className="nav_btns d-flex align-items-center gap-4">

           {
            user? <>
              <h5 className='mb-0'>{user.username}</h5>
              <Button className='btn btn-dark' onClick={logout}>Logout</Button>
            </> : <>
            <Button className="btn secondary_btn rounded-pill" style={{ backgroundColor: 'black' }}>
          <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>
            <span style={{ fontSize: '1.2rem' }}>Login</span>
          </Link>
        </Button>
        <Button className="btn primary_btn rounded-pill" style={{ backgroundColor: 'Orange' }}>
          <Link to='/register' style={{ textDecoration: 'none', color: 'white' }}>
            <span style={{ fontSize: '1.2rem' }}>Register</span>
          </Link>
        </Button>
            </>
           }   

        
        </div>

      <span className="mobile_menu" onClick={toggleMenu}>
      <i class="ri-menu-3-line"></i>
      </span>
        </div>
      </div>
      </Row> 
    </Container>
  </header>
  
}

export default Header;
