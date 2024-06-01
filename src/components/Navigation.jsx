import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/carousel">Carousel</Link></li>
        {/* Otros enlaces */}
      </ul>
    </nav>
  );
}

export default Navigation;