import React from "react";
import CollectionCard from "./collection-card";
import collectionImg1 from "../assets/images/img1.png";
import collectionImg2 from "../assets/images/img2.png";
import collectionImg3 from "../assets/images/img3.png";
import collectionImg4 from "../assets/images/img4.png";
import collectionImg5 from "../assets/images/img5.png";
import collectionImg6 from "../assets/images/img6.png";

const CaollectionCardGrid = () => {
  return (
    <>
      <section className=" collection-card">
        <div className="container">
          <div className="row">
            <CollectionCard
              imgscr={collectionImg1}
              name="Man's T-shirts"
              customClass="collection-img collection-bg1"
            ></CollectionCard>
            <CollectionCard
              imgscr={collectionImg2}
              name="woman's Wear"
              customClass="collection-img collection-bg2"
            ></CollectionCard>
            <CollectionCard
              imgscr={collectionImg3}
              name="Winter collections"
              customClass="collection-img collection-bg3"
            ></CollectionCard>
            <CollectionCard
              imgscr={collectionImg4}
              name="Hooded T-Shirts"
              customClass="collection-img collection-bg4"
            ></CollectionCard>
            <CollectionCard
              imgscr={collectionImg5}
              name="Polo Neck T-Shirts"
              customClass="collection-img collection-bg5"
            ></CollectionCard>
            <CollectionCard
              imgscr={collectionImg6}
              name="Full Sleeves T-Shirts"
              customClass="collection-img collection-bg6"
            ></CollectionCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaollectionCardGrid;
