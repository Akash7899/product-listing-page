import React from "react";
import Banner from "./banner";
import bannerImg from "../assets/images/banner-img.png";
import bannerImg2 from "../assets/images/banner1 2.png";
import bannerImg3 from "../assets/images/banner1 3.png";
import SubscribeSection from "./subscribe-section";
import DiscountCard from "./discountCard";
import couponImg1 from "../assets/images/discount-1.png";
import couponImg2 from "../assets/images/discount-2.png";
import CaollectionCardGrid from "./collection-card-grid";
import BannerCardGrid from "./banner-card-grid";
import ProductCardGrid from "./product-card-grid";
import ProductCardGrid2 from "./product-card-grid2";
import SimleImgCardGrid from "./simpleImg-card-grid";
import ServiceArea from "./awordarea";

const Home = () => {
  return (
    <>
      <Banner bannerscr={bannerImg}></Banner>
      {/* collection section */}      
      <CaollectionCardGrid></CaollectionCardGrid>
      {/* banner-card */}      
      <BannerCardGrid></BannerCardGrid>

      {/* Product-Section 4*2*/}
      <ProductCardGrid></ProductCardGrid>

      {/* Product-Section4*1 */}
      <ProductCardGrid2 customGrid="productcard pt-0" gridTitle="Featured Products"></ProductCardGrid2>

      <Banner bannerscr={bannerImg2}></Banner>
      {/* Product-Section4*1 */}

      <ProductCardGrid2 customGrid="productcard" gridTitle="New Products"></ProductCardGrid2>
      {/* Product-Section4*1 */}

      <ProductCardGrid2 customGrid="productcard pt-0" gridTitle="Best Selling Products"></ProductCardGrid2>
      
      {/* SimpleImgeCardGrid */}
      <SimleImgCardGrid></SimleImgCardGrid>
      <Banner bannerscr={bannerImg3}></Banner>
      <section className="disountSection pt-3 pb-3">
        <div className="container">
          <div className="row">
            <DiscountCard
              couponsrc={couponImg1}
              couponClass="discountcard"
              Offvalue="85% OFF"
            ></DiscountCard>
            <DiscountCard
              couponsrc={couponImg2}
              couponClass="discountcard newBg"
              Offvalue="75% OFF"
            ></DiscountCard>
          </div>
        </div>
      </section>
      <ServiceArea></ServiceArea>

      <SubscribeSection></SubscribeSection>
    </>
  );
};

export default Home;
