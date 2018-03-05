import React, { Component } from 'react';
// importando css del componenete
import './Header.css';

// Notas:
// no permite comentarios dentro del componente
// las etiquetas deben cerrarse incluso hr

class Header extends Component {
  render() {
    return (
     	
      <header className='title'>
      <h1>Grace Murray Hopper</h1>
      <hr></hr>
      </header>
  );
 }
}
export default Header;
