import React from "react";
import LeftImg1 from '../assets/images/leftImg.png'
import RightImg1 from '../assets/images/rightImg.png'

const SubscribeSection = () => {
  return (
    <>
      <section className="SubscribeSection pt-2 pb-4 pt-md-5">
        <div className="container">
          <div className="subScribe">
            <div className="leftImg">
                <img src={LeftImg1} alt="" />
            </div>
            <div className="rightImg">
                <img src={RightImg1} alt="" />
            </div>
            <h2>Subscribe to get updates on exciting offers <br /> & deals</h2>
            <form className="form-subscribe" action="#">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control input-lg"
                  placeholder="Your eamil address"
                />
                <span className="input-group-btn">
                  <button className="btn btn-success btn-lg" type="submit">
                    Subscribe
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubscribeSection;
