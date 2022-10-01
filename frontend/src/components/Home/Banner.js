import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import "./../../custom.scss";
import agent from "../../agent";

const Banner = (props) => {
  const [showPlaceHolder, setShowPlaceHolder] = useState(false);

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
          <span id="get-part">A Place to </span>
          {showPlaceHolder && (
            <input
              id="search-box"
              type="text"
              name="title"
              placeholder="What is it that you truly desire?"
              onChange={handleSearch}
            />
          )}
          <i
            className="bi bi-search"
            onClick={() => setShowPlaceHolder(true)}
          ></i>

          <span>the cool stuff</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
