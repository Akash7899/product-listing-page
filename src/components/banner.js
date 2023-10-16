import React from "react";
// import bannerImg from "../assets/images/banner-img.png";

const Banner = (props) => {
  return (
    <>
      <div className="home-banner">
        <a href="">
          <div className="">
            <img src={props.bannerscr} alt="img" className="img-fluid w-100"/>
          </div>
        </a>
      </div>
    </>
  );
};

export default Banner;
