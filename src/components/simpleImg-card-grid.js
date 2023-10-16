import React from "react";
import SimpleImgCard from "./simpleImg-card";
import simpleImgSrc from "../assets/images/simpleImg/simpleImg.png";
import simpleImgSrc2 from "../assets/images/simpleImg/simpleImg2.png";
import simpleImgSrc3 from "../assets/images/simpleImg/simpleImg3.png";
import simpleImgSrc4 from "../assets/images/simpleImg/simpleImg4.png";
import simpleImgSrc5 from "../assets/images/simpleImg/simpleImg5.png";
import simpleImgSrc6 from "../assets/images/simpleImg/simpleImg6.png";

const SimleImgCardGrid = () => {
  return (
    <>
      <section className="productcard pt-0">
        <div className="container">
          <div className="row">
            <SimpleImgCard
              simpleImgSrc={simpleImgSrc}
              CollectionName="Streetwear Collections"
              customItemclass1="item itemCard1"
            ></SimpleImgCard>
            <SimpleImgCard
              simpleImgSrc={simpleImgSrc2}
              CollectionName="Striped T-Shirts"
              customItemclass1="item itemCard2"
            ></SimpleImgCard>
            <SimpleImgCard
              simpleImgSrc={simpleImgSrc3}
              CollectionName="Round Neck T-Shirts"
              customItemclass1="item itemCard3"
            ></SimpleImgCard>
            <SimpleImgCard
              simpleImgSrc={simpleImgSrc4}
              CollectionName="Printed T-Shirts"
              customItemclass1="item itemCard4"
            ></SimpleImgCard>
            <SimpleImgCard
              simpleImgSrc={simpleImgSrc5}
              CollectionName="Oversized T-Shirts"
              customItemclass1="item itemCard5"
            ></SimpleImgCard>
            <SimpleImgCard
              simpleImgSrc={simpleImgSrc6}
              CollectionName="Half Sleeves T-Shirts"
              customItemclass1="item itemCard6"
            ></SimpleImgCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default SimleImgCardGrid;
