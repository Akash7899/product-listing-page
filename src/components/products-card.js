import React from "react";
import productImg1 from "../assets/images/product-img/product-img-1.png";

const ProductCard = (props) => {
  return (
    <>
      <div className="col-6 col-md-6 col-lg-3 mb-4 mt-3">
        <div className="product product-2">
          <div className="product-media">
            <img
              src={props.productImgSrc}
              alt="Product image"
              className="product-image"
            />

            <div className="product-action-vertical product-grid">
              <a
                href=""
                className="btn-product-icon btn-wishlist"
                title="Add to wishlist"
              >
                <i className="fa fa-shopping-cart"></i>
              </a>
              <a
                href=""
                className="btn-product-icon btn-wishlist"
                title="Add to wishlist"
              >
                <i className="fa fa-heart"></i>
              </a>
              <a
                href=""
                className="btn-product-icon btn-wishlist"
                title="Add to wishlist"
              >
                <i className="fa fa-share-alt"></i>
              </a>
            </div>
          </div>

          <div className="product-body">
            <div className="product-cat">
              <a href="">
                Men Henley Neck <br />
                Full Sleeve Red Wine
              </a>
            </div>
            <div className="product-price">
              <span className="dress-card-price">$60.00</span>
              <span className="dress-card-crossed">$150.25</span>
            </div>
            <div className="product-size-nav">
              <a href="">S</a>
              <a href="">M</a>
              <a href="">L</a>
              <a href="">XL</a>
              <a href="">XXL</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
