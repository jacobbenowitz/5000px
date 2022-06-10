import React from 'react'
import {NavLink} from 'react-router-dom' 

const DiscoverNav = props => (
  <div className='discover-nav'>
    <div className='disc-tab'>
      <NavLink className='disc-link' to={'/discover/popular'}>
        <span>Popular</span>
      </NavLink>
    </div>
    <div className='disc-tab'>
      <NavLink className='disc-link' to={'/discover/upcoming'}>
        <span>Upcoming</span>
      </NavLink>
    </div>
    <div className='disc-tab'>
      <NavLink className='disc-link' to={'/discover/fresh'}>
        <span>Fresh</span>
      </NavLink>
    </div>
    <div className='disc-tab'>
      <NavLink className='disc-link' to={'/discover/editors'}>
        <span>Editors' Choice</span>
      </NavLink>
    </div>
    
  </div>
)

export default DiscoverNav