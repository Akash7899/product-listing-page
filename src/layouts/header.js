import React from "react";
import humburgerIcon from "../assets/images/humburger.png";

const Header = () => {
  return (
    <>
      <div className="HeadereMain">
        <div className="top-bar">
          <div className="container">
            <div className="hraderTop">
              <div className="content-left">
                <div className="email">
                  <a href="">welcome to our Stor website</a>
                </div>
              </div>
              <div className="contact-info">
                <div className="mobile">
                  <a href="tel:+473337890">
                    <i className="fa fa-phone"></i> call us: 1234567890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="customHeader navbar navbar-expand-lg navbar-dark bg-light text-dark">
          <nav className="container">
            <a className="navbar-brand d-lg-none" href="">
              Logo Here
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="navbarToggle"
              aria-controls="navbarToggle"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img src={humburgerIcon} alt="" />
            </button>

            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarToggle"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="humburgerIcon" href="">
                    <img src={humburgerIcon} alt="" />
                  </a>
                </li>
              </ul>

              <a className="navbar-brand d-none d-lg-block" href="">
                Logo Here
              </a>

              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="" href="">
                    <i className="fa fa-search"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="">
                    <i className="fa fa-heart-o"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="">
                    <i className="fa fa-user-circle-o"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
