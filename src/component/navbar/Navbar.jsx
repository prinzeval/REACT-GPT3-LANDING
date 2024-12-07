import React, { useState } from 'react'
import "./navbar.css"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features"></a>Case Studies</p>
    <p><a href="#blog"></a>Library</p>
  </>
)



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine colour='#fff' size='2rem' onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line colour='#fff' size='2rem' onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar;
