import React from "react";
import BannerCard from "./banner-card";
import offerimg1 from "../assets/images/offer-img/image 2.png";
import offerimg2 from "../assets/images/offer-img/image 3.png";
import offerimg3 from "../assets/images/offer-img/image 4.png";
import offerimg4 from "../assets/images/offer-img/image 5.png";
import offerimg5 from "../assets/images/offer-img/image 6.png";

const BannerCardGrid = () => {
  return (
    <>
      <section className=" offer ">
        <div className="container">
          <div className="row">
            <BannerCard
              imgscr={offerimg1}
              customClass="col-md-6 mb-4"
              customClass1="offerimg"
            ></BannerCard>
            <BannerCard
              imgscr={offerimg2}
              customClass="col-md-6 mb-4"
              customClass1="offerimg"
            ></BannerCard>
            <BannerCard
              imgscr={offerimg3}
              customClass="col-md-4 mb-4"
              customClass1="offerimg"
            ></BannerCard>
            <BannerCard
              imgscr={offerimg5}
              customClass="col-md-4 mb-4"
              customClass1="offerimg"
            ></BannerCard>
            <BannerCard
              imgscr={offerimg4}
              customClass="col-md-4 mb-4"
              customClass1="offerimg"
            ></BannerCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerCardGrid;
