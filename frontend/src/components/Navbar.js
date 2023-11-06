import React from 'react';
import NavbarStyles from '../styles/NavbarStyles';



const Navbar = () => {
  return (
    <NavbarStyles>
      <nav>
        <div className="links">
          {['projects', 'skills', 'contact'].map((item) => (
            <div className="link" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </div>
          ))}
        </div>
      </nav>
    </NavbarStyles>

  );
};

export default Navbar