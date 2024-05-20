import React from 'react'
import { Link } from 'react-router-dom';
import Imagenes4 from './Imagenes4';
import Imagenes1 from './Imagenes1';


const Navigation = () => {
  return (
    <div>

      <Link to="/imagenes1">
        <figure>
        <Imagenes1/>
          <figcaption>Hola mundo segunda foto</figcaption>
        </figure>
      </Link>

      <Link to="/imagenes4">
        <figure>
          <Imagenes4/>
          <figcaption>Hola mundo tercera foto</figcaption>
        </figure>
      </Link>

    </div>
  );
}

export default Navigation;
