import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footerMain">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3">
              <p className="comAbout">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard Lorem
                Ipsum has been the industry's dummy text ever since the 1500s
                centuries....
              </p>
              <div className="social-bottom">
                <span className="icons facebook">
                  <a href="">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </span>
                <span className="icons twitter">
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                </span>
                <span className="icons instagram">
                  <a href="">
                    <i className="fa fa-instagram"></i>
                  </a>
                </span>
                <span className="icons linkedin">
                  <a href="">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </span>
                <span className="icons pinterest">
                  <a href="">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </span>
              </div>
            </div>

            <div className="col-md-4 col-lg-2 col-xl-3">
              <h6 className="text-uppercase fw-bold">ONLINE SHOPPING</h6>

              <p>
                <a href="" className="">
                  Men’s T-Shirts
                </a>
              </p>
              <p>
                <a href="" className="">
                  Women’s Wear
                </a>
              </p>
              <p>
                <a href="" className="">
                  Winter Collections
                </a>
              </p>
              <p>
                <a href="!" className="">
                  Hooded T-Shirts
                </a>
              </p>
              <p>
                <a href="" className="">
                  Streetwear Collections
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-2 col-xl-3">
              <h6 className="text-uppercase fw-bold">CUSTOMER POLICIES</h6>

              <p>
                <a href="" className="">
                  About Us
                </a>
              </p>
              <p>
                <a href="" className="">
                  Terms & Conditions
                </a>
              </p>
              <p>
                <a href="" className="">
                  Shipping & Returns Policy
                </a>
              </p>
              <p>
                <a href="" className="">
                  Cancellation & Refund Policy
                </a>
              </p>
              <p>
                <a href="!" className="">
                  Contact Us
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3">
              <h6 className="text-uppercase fw-bold">STORE INFORMATION</h6>

              <p>
                <i className="fa fa-map-marker mr-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fa fa-phone mr-3"></i> Call Us: 1234567890
              </p>
              <p>
                <i className="fa fa-envelope mr-3"></i> Email Us:
                info@yourmail.com
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">©2022-23 Powered By dummy team</div>
    </>
  );
};

export default Footer;
