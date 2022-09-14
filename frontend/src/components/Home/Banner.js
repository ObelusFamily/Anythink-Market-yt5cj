import React from "react";
import logo from "../../imgs/logo.png";
import './../../custom.scss'

const Banner = (props) => {

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part" >A Place to get</span>
          <input id="search-box" type="search" placeholder="What is it that you truly desire?" onChange={props.onSearch}/>
          <i className="bi bi-search"></i>
          <span>the cool stuff</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
