import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className={"header"}>
      <img
        className={"header__logo"}
        src={"https://pngimg.com/uploads/amazon/amazon_PNG1.png"}
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineOne">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineOne">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineOne">Prime</span>
        </div>
      </div>
    </div>
  );
};
