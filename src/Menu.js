import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';

const Menu = () => {
  const history = useHistory();

  const goToHome = () => {
    history('/');
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
