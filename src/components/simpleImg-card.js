import React from "react";

const SimpleImgCard = (props) => {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-4 mb-3 mt-3">
        <div className={props.customItemclass1}>
          <a href=""></a>
          <img src={props.simpleImgSrc} alt="" />
          <div className="item__overlay">
            <h3 id="person1" aria-hidden="true">
              {props.CollectionName}
            </h3>
            <div className="item__body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleImgCard;
