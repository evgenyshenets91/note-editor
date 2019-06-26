import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss'

const Header = ({id}) => {
  return (
    <header className='header'>
      {id && 
        <Link to='/'>
          <i className="fas fa-arrow-circle-left back"></i>
        </Link>
      }
      <h1>Note list</h1>
    </header>
  )
}

export default Header
