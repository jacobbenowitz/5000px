import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found-container'>
      <h1 className='not-found-header'>
        Sorry, page not found 😟
      </h1>
      <Link className='link-button' to={'/'}>Home</Link>
      <Link className='link-button' to={'/login'}>Login</Link>
    </div>
  )
}

export default NotFound