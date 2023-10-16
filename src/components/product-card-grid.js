import React from "react";
import ProductCard from "./products-card";
import productImg1 from "../assets/images/product-img/product-img-1.png";
import productImg2 from "../assets/images/product-img/product-img-2.png";
import productImg3 from "../assets/images/product-img/product-img-3.png";
import productImg4 from "../assets/images/product-img/product-img-4.png";

const ProductCardGrid = () => {
  return (
    <>
      <section className="productcard">
        <div className="container">
          <div className="section-heading mb-1 mb-md-3 ">
            <h2>Trending T-Shirts</h2>
          </div>
          <div className="row justify-content-center">
            <ProductCard productImgSrc={productImg1}></ProductCard>
            <ProductCard productImgSrc={productImg2}></ProductCard>
            <ProductCard productImgSrc={productImg3}></ProductCard>
            <ProductCard productImgSrc={productImg4}></ProductCard>
            <ProductCard productImgSrc={productImg1}></ProductCard>
            <ProductCard productImgSrc={productImg2}></ProductCard>
            <ProductCard productImgSrc={productImg3}></ProductCard>
            <ProductCard productImgSrc={productImg4}></ProductCard>
          </div>
          <div className="text-center mt-1 mt-mb-4 ">
            <a href="#" title="view all" className="fillbtn">
              VIEW all
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCardGrid;
