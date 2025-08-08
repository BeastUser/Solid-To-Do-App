import type { Component } from 'solid-js';
import '../styles/navbar.scss';

const Navbar: Component = () => {
  return (
    <nav class="navbar">
      <div class="navbar__logo">TodoApp</div>
      <ul class="navbar__links">
        <li class="navbar__item"><a href="#" class="navbar__link">Home</a></li>
        <li class="navbar__item"><a href="#" class="navbar__link">About</a></li>
        <li class="navbar__item"><a href="#" class="navbar__link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
