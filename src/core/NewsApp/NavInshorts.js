import React from "react";
import './Style.css'
import TemporaryDrawer from "./HamburgerDrawer";

const NavInshorts = () => {
  return (
    <div className="nav">
      {/* <div className="icon">
        <TemporaryDrawer setCategory={setCategory} />
      </div> */}
     
        <img
          src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
          alt="logo"
          // width='25%'
          height="50%"
        />
      
    </div>
  );
};

export default NavInshorts;
