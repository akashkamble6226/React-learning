import React from "react";
import mealsHeaderImage from "../../assets/meals.jpg";
import cssClasses from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButtom";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={cssClasses.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onTapOfButton}/>
      </header>
      
      <div className={cssClasses["main-image"]}>
        <img src={mealsHeaderImage} alt="The beautifule food"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
