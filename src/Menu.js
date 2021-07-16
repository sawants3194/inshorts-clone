import React, {  } from "react";
import { Link, withRouter } from "react-router-dom";
import './style.css'

 
const Menu = () => {
  return (
    <div>
      <ul className="nav nav-tabs ">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            News
          </Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/weather">
            Weather
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Menu);
