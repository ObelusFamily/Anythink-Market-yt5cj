import React from "react";
import logo from "../../imgs/logo.png";
import "./../../custom.scss";
import agent from "../../agent";

const Banner = (props) => {
  const handleSearch = (e) => {
    const title = e.target.value;
    if (title.length < 3) {
      return;
    }

    props.onSearch(
      title,
      (page) => agent.Items.byTitle(title, page),
      agent.Items.byTitle(title)
    );
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A Place to get</span>
          <input
            id="search-box"
            type="search"
            name="title"
            placeholder="What is it that you truly desire?"
            onChange={handleSearch}
          />
          <i className="bi bi-search"></i>
          <span>the cool stuff</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
