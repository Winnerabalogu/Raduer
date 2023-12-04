import React from 'react';
import Radeur from '/src/images/radeur logo.png';

function Header() {
  return (
    <div className='Header'>
      <img src={Radeur} alt="Radeur Logo" />
      <div className='Head-Search'>
        <div className='Search'>
        <ul className='topnav'>
          <li>Home</li>
          <li>Reviews</li>
          <li className='profile-dropdown'>
            <a href="/profile">
              <i className="far fa-user" style={{ color: '#52cb8d' }}></i>
            </a>
          </li>
        </ul>

        <div className='search-box'>
          <i className="fas fa-search search-icon"></i>
          <input type="text" id="searchInput" name="q" className='box' required />
        </div>
        <button type="submit" className='box-search'>Search</button>
        </div>
        {/* Hamburger icon input */}
        <input type="checkbox" id="menuToggle" className="hamburger-icon" />
        <label htmlFor="menuToggle" className='hamburger'>&#9776;</label>
      </div>
    </div>
  );
}

export default Header;
