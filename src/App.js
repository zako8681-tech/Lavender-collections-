import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1 className="brand-title">💜 Lavender Collections</h1>
          <nav className="nav-menu">
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#cart" className="cart-link">🛒 Cart</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Welcome to Lavender Collections</h2>
            <p>Discover premium, handpicked clothing for every occasion</p>
            <button className="cta-button">Shop Now</button>
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>✨ Quality</h3>
            <p>Premium fabrics and expert craftsmanship</p>
          </div>
          <div className="feature-card">
            <h3>🚚 Fast Shipping</h3>
            <p>Quick and reliable delivery to your doorstep</p>
          </div>
          <div className="feature-card">
            <h3>💯 Satisfaction</h3>
            <p>100% satisfaction guarantee on all items</p>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Lavender Collections. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
