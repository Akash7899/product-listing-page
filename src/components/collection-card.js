import React from "react";

const CollectionCard = (props) => {
  return (
    <>
      <div className="col-6 col-sm-6 col-md-4 col-lg-2">
        <a href="">
          <span className={props.customClass}>
            <img src={props.imgscr} alt="Category image" />
          </span>
        </a>
        <span className="collection-name">
          <a href="#">{props.name}</a>
        </span>
      </div>
    </>
  );
};

export default CollectionCard;
