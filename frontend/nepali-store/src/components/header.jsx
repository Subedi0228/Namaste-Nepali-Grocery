// Header.jsx

import React from 'react';
import '../App.css';

const Header = () => {
  const storeAddressURL = "https://www.google.com/maps/dir//3314+Indianola+Ave,+Des+Moines,+IA+50315/@41.5539652,-93.6805272,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87ee980d96ecfc8d:0xdba33e77c2f6f6cc!2m2!1d-93.5981264!2d41.5539946?entry=ttu";
  const fullAddress = "3314 Indianola Ave, Des Moines, IA 50315";
  const hoursTooltip = "Mon-Sat: 9:00 AM - 10:00 PM Sunday: 10:00 AM - 10:00 PM";
  const logoPath = "/images/Namaste.png";

  return (
    <header>
      <nav>
        <ul>
          <li className='storeAddress'>
            <a
              href={storeAddressURL}
              target="_blank"
              rel="noopener noreferrer"
              title={fullAddress}
            >
              3314 Indianola Ave...
            </a>
          </li>
          <li className="tooltip-container">
            <span className="tooltip-trigger">Hours</span>
            <div className="tooltip-content">{hoursTooltip}</div>
          </li>
          <li className='storeImg'>
              <img src={logoPath} alt="Logo" />
          </li>
          <li className='productsPage'>
            <a href="#groceryList">Products</a>
          </li>
          <li>
            <a href="#homeID">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
