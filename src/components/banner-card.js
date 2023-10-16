import React from "react";
const BannerCard = (props) => {
  return (
    <>
      <div className={props.customClass}>
        <a href="">
          <img src={props.imgscr} alt="" className={props.customClass1} />
        </a>
      </div>
    </>
  );
};

export default BannerCard;
