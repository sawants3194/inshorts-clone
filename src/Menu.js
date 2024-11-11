import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const Menu = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            News
          </Link>
        </li>
        <li className="nav-item">
          <button className="nav-link btn" onClick={goToHome}>
            Go to Home
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
