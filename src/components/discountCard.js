import React from "react";

const DiscountCard = (props) => {
  return (
    <>
      <div className="col-12 col-md-12 col-lg-6 mb-3">
        <div className={props.couponClass}>
          <div className="content">
            <div className="cuponlogo text-right">
              <img src={props.couponsrc} width="80" />
            </div>

            <div className="text-center off">
              <span>Hurry Up!</span>
              <h1 className="mt-0">{props.Offvalue}</h1>
            </div>

            

            <div className="sale">
              <h3 className="m-0">Sale</h3>
            </div>

            <div className="px-5 mb-3">
              <div className="code text-center mt-4">
                <span className="borderBtn">shop Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountCard;
