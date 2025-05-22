import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#f8f8f8',
      borderBottom: '1px solid #ccc',
    }}>
      <h2 style={{ margin: 0 }}>📚 Online Library</h2>
      <div style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
      }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
        <Link to="/add-book" style={{ textDecoration: 'none', color: '#333' }}>Add a Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;
